import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllTechnologies,
  getPageBySlugAndCategory,
} from "@/lib/content";
import DynamicPageTemplate from "@/components/shared/DynamicPageTemplate";

export async function generateStaticParams() {
  const techs = getAllTechnologies();
  return techs.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "technology");
  if (!page) {
    return { title: "Technology Not Found | ROI InfoTech" };
  }
  return {
    title: page.title || `${page.h3[0] || slug} – ROI InfoTech`,
    description:
      page.meta_description ||
      page.paragraphs[0] ||
      "ROI Fast Track InfoTech Solutions technology capabilities.",
    alternates: {
      canonical: page.url,
    },
  };
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "technology");

  if (!page) {
    notFound();
  }

  const related = getAllTechnologies().filter((t) => t.slug !== slug);

  return (
    <DynamicPageTemplate
      page={page}
      categoryLabel="Technologies"
      categoryHref="/technology"
      relatedPages={related}
    />
  );
}
