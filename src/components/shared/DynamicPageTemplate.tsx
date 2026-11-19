import React from "react";
import Link from "next/link";
import type { PageContent } from "@/lib/content";
import ContactForm from "@/components/forms/ContactForm";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/data/navigation";

interface DynamicPageTemplateProps {
  page: PageContent;
  categoryLabel: string;
  categoryHref: string;
  relatedPages?: PageContent[];
}

export default function DynamicPageTemplate({
  page,
  categoryLabel,
  categoryHref,
  relatedPages = [],
}: DynamicPageTemplateProps) {
  const primaryHeading =
    page.h1[0] ||
    page.h2[0] ||
    page.h3[0] ||
    page.title.split("–")[0].split("::")[0].trim();

  const blocks = page.blocks || [];
  const sections: {
    heading?: string;
    level?: string;
    paragraphs: string[];
    lists: string[][];
  }[] = [];

  let currentSection: {
    heading?: string;
    level?: string;
    paragraphs: string[];
    lists: string[][];
  } = {
    paragraphs: [],
    lists: [],
  };

  for (const b of blocks) {
    if (b.type === "heading" && b.text) {
      if (
        b.text === "Contact Us" ||
        b.text === "Archives" ||
        b.text === "Categories"
      ) {
        continue;
      }
      if (
        currentSection.heading ||
        currentSection.paragraphs.length > 0 ||
        currentSection.lists.length > 0
      ) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: b.text,
        level: b.level,
        paragraphs: [],
        lists: [],
      };
    } else if (b.type === "paragraph" && b.text) {
      currentSection.paragraphs.push(b.text);
    } else if (b.type === "list" && b.items && b.items.length > 0) {
      currentSection.lists.push(b.items);
    }
  }
  if (
    currentSection.heading ||
    currentSection.paragraphs.length > 0 ||
    currentSection.lists.length > 0
  ) {
    sections.push(currentSection);
  }

  if (sections.length === 0 && page.paragraphs.length > 0) {
    sections.push({
      heading: primaryHeading,
      paragraphs: page.paragraphs,
      lists: page.lists,
    });
  }

  const introSection = sections[0];
  const bodySections = sections.slice(1);

  const contentImages = (page.images || []).filter(
    (img) =>
      img.src &&
      !img.src.includes("logo") &&
      !img.src.includes("spinner") &&
      !img.src.includes("avatar")
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://roiinfotech.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryLabel,
        item: `https://roiinfotech.com${categoryHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: primaryHeading,
        item: page.url,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Premium Logo-Matched Royal Cobalt & Crest Indigo Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white py-20 lg:py-28 overflow-hidden border-b-4 border-[#008AD8]">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#008AD8]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#0D55A5]/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center space-x-2 text-xs text-blue-200 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <Link
              href={categoryHref}
              className="hover:text-white transition-colors"
            >
              {categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <span className="text-[#38BDF8] font-semibold truncate max-w-xs sm:max-w-md">
              {primaryHeading}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/30 text-[#38BDF8] text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{categoryLabel}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {primaryHeading}
              </h1>

              {introSection && introSection.paragraphs.length > 0 && (
                <div className="space-y-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                  {introSection.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-[#0A1638] bg-white hover:bg-sky-50 shadow-lg shadow-blue-950/25 transition-all"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#0D55A5]" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#38BDF8]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {contentImages[0] && (
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md p-3 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={contentImages[0].src}
                    alt={contentImages[0].alt || primaryHeading}
                    className="w-full h-auto rounded-xl object-cover max-h-80 bg-white"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Primary Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {introSection && introSection.lists.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm space-y-4">
                {introSection.lists.map((lst, lIdx) => (
                  <ul
                    key={lIdx}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {lst.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="flex items-start space-x-2.5 text-sm text-[#0F172A]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0D55A5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}

            {bodySections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:border-[#0D55A5]/40 hover:shadow-md transition-all space-y-4"
              >
                {sec.heading && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4 text-[#0D55A5]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                      {sec.heading}
                    </h2>
                  </div>
                )}

                {sec.paragraphs.length > 0 && (
                  <div className="space-y-3 text-[#5A5F65] text-sm sm:text-base leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {sec.lists.length > 0 && (
                  <div className="pt-2 space-y-4">
                    {sec.lists.map((lst, lIdx) => (
                      <ul
                        key={lIdx}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {lst.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start space-x-2.5 text-sm text-[#0F172A] bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/70"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0D55A5] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {contentImages.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contentImages.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt || `${primaryHeading} visual ${idx + 2}`}
                      className="max-h-64 w-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Sidebar with Consultation Form & Direct Contact Info */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <ContactForm
              title="Contact Us"
              subtitle="Consult today"
              defaultSubject="StartUp business"
              compact
            />

            {/* Direct Enterprise Support Card */}
            <div className="bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white rounded-2xl p-6 sm:p-8 border border-blue-800 space-y-5 shadow-xl">
              <div className="inline-block px-3 py-1 rounded-md bg-white/10 border border-white/20 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
                REQUEST A QUOTE
              </div>
              <h3 className="text-xl font-bold leading-snug">
                HOW CAN WE ASSIST YOU?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                We would be delighted to discuss your project in person.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/15 text-xs text-blue-100">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}, {siteConfig.address.city}{" "}
                    {siteConfig.address.postalCode},{" "}
                    {siteConfig.address.country}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0A1638] bg-white hover:bg-sky-50 transition-colors"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#0D55A5]" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Pages Section */}
      {relatedPages.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
                  Explore More in {categoryLabel}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
                  Related {categoryLabel}
                </h2>
              </div>
              <Link
                href={categoryHref}
                className="text-sm font-bold text-[#0D55A5] hover:text-[#171D68] inline-flex items-center mt-2 sm:mt-0"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.slice(0, 6).map((rel) => {
                const relHeading =
                  rel.h1[0] ||
                  rel.h2[0] ||
                  rel.h3[0] ||
                  rel.title.split("–")[0].split("::")[0].trim();
                const relExcerpt = rel.paragraphs[0] || rel.meta_description;
                return (
                  <Link
                    key={rel.url}
                    href={rel.path}
                    className="group bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#0D55A5] hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0D55A5] transition-colors line-clamp-2">
                        {relHeading}
                      </h3>
                      {relExcerpt && (
                        <p className="text-xs text-[#5A5F65] mt-2.5 line-clamp-3 leading-relaxed">
                          {relExcerpt}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#0D55A5]">
                      <span>Read more</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
