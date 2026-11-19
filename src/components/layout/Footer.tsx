import React from "react";
import Link from "next/link";
import { siteConfig, navigationData } from "@/data/navigation";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const services = navigationData.find((n) => n.title === "Services")?.categories;
  const hire = navigationData.find((n) => n.title === "Hire Us")?.items;
  const solutions = navigationData.find((n) => n.title === "Solutions")?.items;

  return (
    <footer className="bg-gradient-to-b from-[#0A1638] to-[#060E24] text-slate-300 pt-16 pb-12 border-t-4 border-[#0D55A5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/50">
          {/* Brand Info with Official Uploaded Logo */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-blue-200/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/roi-logo.jpg"
                alt="ROI InfoTech Solutions Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed pr-6">
              {siteConfig.description}
            </p>
            <div className="pt-1 space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#008AD8] shrink-0 mt-1" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} - {siteConfig.address.postalCode},{" "}
                  {siteConfig.address.country}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#008AD8] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#008AD8] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-900/60 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services?.[0]?.items?.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              {services?.[1]?.items?.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              {services?.[3]?.items?.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service"
                  className="text-[#38BDF8] hover:underline flex items-center pt-1 font-bold"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies & Hiring */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-900/60 pb-2">
              Hire Developers
            </h4>
            <ul className="space-y-2 text-xs">
              {hire?.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-900/60 pb-2">
              Solutions &amp; Company
            </h4>
            <ul className="space-y-2 text-xs">
              {solutions?.slice(0, 5).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-blue-900/50">
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} ROI Fast Track InfoTech Solutions. All
            Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Support
            </Link>
            <Link href="/about" className="hover:text-white">
              Company Overview
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
