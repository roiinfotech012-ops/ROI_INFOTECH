import React from "react";
import type { Metadata } from "next";
import { getPageByPath } from "@/lib/content";
import { siteConfig } from "@/data/navigation";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageByPath("/contact");
  return {
    title: page?.title || "Contact – ROI InfoTech :: A Total Web Solution",
    description:
      page?.meta_description ||
      "Get in touch with ROI Fast Track InfoTech Solutions in Rajajinagar, Bangalore for web design, custom software, mobile apps, and digital marketing.",
    alternates: {
      canonical: "https://roiinfotech.com/contact/",
    },
  };
}

export default function ContactPage() {
  const page = getPageByPath("/contact");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Logo-Matched Royal Cobalt & Crest Indigo Hero */}
      <section className="bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white py-20 lg:py-24 border-b-4 border-[#008AD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <span className="text-[#38BDF8] font-semibold">Contact</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mt-4 max-w-2xl">
            {siteConfig.name} — We would be delighted to discuss your project in
            person or online.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D55A5] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#0F172A]">
                    Company Name
                  </h2>
                  <p className="text-sm text-[#5A5F65] mt-1">
                    {siteConfig.name} ({siteConfig.shortName})
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D55A5] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Head office address:
                  </h3>
                  <p className="text-sm text-[#5A5F65] mt-1 leading-relaxed">
                    No.438, Krupa Arcade,
                    <br />
                    17th Cross, 6th Main,
                    <br />
                    Rajajinagar 2nd Stage,
                    <br />
                    Near Orion Mall,
                    <br />
                    Opp Cafe Coffee Day,
                    <br />
                    Bangalore 560 055, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D55A5] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Call for help:
                  </h3>
                  <p className="text-sm text-[#5A5F65] mt-1">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-[#0D55A5] font-semibold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D55A5] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Mail for information:
                  </h3>
                  <div className="text-sm text-[#5A5F65] mt-1 space-y-1">
                    <p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[#0D55A5] font-semibold hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${siteConfig.salesEmail}`}
                        className="text-[#5A5F65] hover:underline"
                      >
                        {siteConfig.salesEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {page && page.paragraphs.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-[#5A5F65]">
                  {page.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm overflow-hidden">
              <iframe
                title="ROI Fast Track InfoTech Solutions Location Map"
                src="https://www.google.com/maps?q=Krupa+Arcade+Rajajinagar+2nd+Stage+Bangalore+560055&output=embed"
                className="w-full h-72 rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              title="Get In Touch"
              subtitle="Consult today"
              defaultSubject="StartUp business"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
