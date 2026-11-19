import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSolutions,
  getPageBySlugAndCategory,
} from "@/lib/content";
import DynamicPageTemplate from "@/components/shared/DynamicPageTemplate";

export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "solution");
  if (!page) {
    return { title: "Solution Not Found | ROI InfoTech" };
  }
  return {
    title: page.title || `${page.h3[0] || slug} – ROI InfoTech`,
    description:
      page.meta_description ||
      page.paragraphs[0] ||
      "Enterprise business solution by ROI Fast Track InfoTech Solutions.",
    alternates: {
      canonical: page.url,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "solution");

  if (!page) {
    notFound();
  }

  const related = getAllSolutions().filter((s) => s.slug !== slug);

  return (
    <DynamicPageTemplate
      page={page}
      categoryLabel="Solutions"
      categoryHref="/solutions"
      relatedPages={related}
    />
  );
}
