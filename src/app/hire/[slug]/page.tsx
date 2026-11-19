import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllHirePages,
  getPageBySlugAndCategory,
} from "@/lib/content";
import DynamicPageTemplate from "@/components/shared/DynamicPageTemplate";

export async function generateStaticParams() {
  const hirePages = getAllHirePages();
  return hirePages.map((h) => ({
    slug: h.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "hire");
  if (!page) {
    return { title: "Hire Developers | ROI InfoTech" };
  }
  return {
    title: page.title || `${page.h3[0] || slug} – ROI InfoTech`,
    description:
      page.meta_description ||
      page.paragraphs[0] ||
      "Hire dedicated developers from ROI Fast Track InfoTech Solutions.",
    alternates: {
      canonical: page.url,
    },
  };
}

export default async function HireDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "hire");

  if (!page) {
    notFound();
  }

  const related = getAllHirePages().filter((h) => h.slug !== slug);

  return (
    <DynamicPageTemplate
      page={page}
      categoryLabel="Hire Developers"
      categoryHref="/hire"
      relatedPages={related}
    />
  );
}
