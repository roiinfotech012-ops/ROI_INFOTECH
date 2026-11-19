import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllPages,
  getPageByPath,
  getAllSolutions,
} from "@/lib/content";
import DynamicPageTemplate from "@/components/shared/DynamicPageTemplate";

export async function generateStaticParams() {
  const all = getAllPages();
  // Exclude routes handled by explicit App Router folders
  const excludedPrefixes = [
    "/service/",
    "/technology/",
    "/hire/",
  ];
  const excludedExact = [
    "/",
    "/contact",
    "/service",
    "/technology",
    "/hire",
    "/solutions",
  ];

  const paramsList: { slug: string[] }[] = [];

  for (const p of all) {
    const cleanPath = p.path.replace(/\/$/, "") || "/";
    if (excludedExact.includes(cleanPath)) continue;
    if (excludedPrefixes.some((pref) => cleanPath.startsWith(pref))) continue;

    const segments = cleanPath.replace(/^\//, "").split("/").filter(Boolean);
    if (segments.length > 0) {
      paramsList.push({ slug: segments });
    }
  }

  return paramsList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = "/" + slug.join("/");
  const page = getPageByPath(fullPath);

  if (!page) {
    return { title: "Page Not Found | ROI InfoTech" };
  }

  return {
    title: page.title || `${page.h3[0] || slug.join(" ")} – ROI InfoTech`,
    description:
      page.meta_description ||
      page.paragraphs[0] ||
      "ROI Fast Track InfoTech Solutions.",
    alternates: {
      canonical: page.url,
    },
  };
}

export default async function CatchAllExtractedPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullPath = "/" + slug.join("/");
  const page = getPageByPath(fullPath);

  if (!page) {
    notFound();
  }

  const isSolution = page.category === "solution";
  const categoryLabel = isSolution
    ? "Solutions"
    : page.category === "legal"
    ? "Legal & Terms"
    : "Company";
  const categoryHref = isSolution ? "/solutions" : "/about";
  const related = isSolution
    ? getAllSolutions().filter((s) => s.path !== page.path)
    : [];

  return (
    <DynamicPageTemplate
      page={page}
      categoryLabel={categoryLabel}
      categoryHref={categoryHref}
      relatedPages={related}
    />
  );
}
