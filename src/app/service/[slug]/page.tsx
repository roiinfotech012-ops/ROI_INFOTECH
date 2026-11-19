import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllServices,
  getPageBySlugAndCategory,
} from "@/lib/content";
import DynamicPageTemplate from "@/components/shared/DynamicPageTemplate";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "service");
  if (!page) {
    return { title: "Service Not Found | ROI InfoTech" };
  }
  return {
    title: page.title || `${page.h3[0] || slug} – ROI InfoTech`,
    description:
      page.meta_description ||
      page.paragraphs[0] ||
      "ROI Fast Track InfoTech Solutions service page.",
    alternates: {
      canonical: page.url,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlugAndCategory(slug, "service");

  if (!page) {
    notFound();
  }

  const related = getAllServices().filter((s) => s.slug !== slug);

  // Add Service Schema JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1[0] || page.h2[0] || page.h3[0] || page.title,
    description: page.paragraphs[0] || page.meta_description,
    provider: {
      "@type": "Organization",
      name: "ROI Fast Track InfoTech Solutions",
      url: "https://roiinfotech.com",
    },
    url: page.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DynamicPageTemplate
        page={page}
        categoryLabel="Services"
        categoryHref="/service"
        relatedPages={related}
      />
    </>
  );
}
