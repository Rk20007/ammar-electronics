import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Receipt, Truck } from 'lucide-react';
import { STORE_DETAILS, AUTHORIZED_BRANDS } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-rose-700 bg-rose-50 px-3 py-1.5 rounded-md border border-rose-100">
              <Zap className="w-3.5 h-3.5 text-rose-600" />
              <span>Nuh’s Premier Electronics &amp; Appliances Showroom</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Power Your Home with Genuine Electronics &amp; Smart Appliances
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Welcome to <strong className="text-slate-900 font-semibold">AMMAR ELECTRONICS</strong>, located at Ward No-08 near G.M. Hospital Nuh. Explore authorized 4K Smart TVs, energy-efficient Inverter ACs, refrigerators, and heavy-duty tubular inverter setups with GST invoice and easy EMI.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                <span>Browse Appliances Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/91${STORE_DETAILS.phone}?text=Hello%20Ammar%20Electronics%2C%20I%20want%20to%20get%20best%20price%20quote%20for%20appliances.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

            {/* Four Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm">
                  <Receipt className="w-4 h-4 text-rose-600" />
                  <span>GST Billing</span>
                </div>
                <p className="text-xs text-slate-500">100% Tax Invoice Credit</p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>Brand Warranty</span>
                </div>
                <p className="text-xs text-slate-500">Official On-Site Service</p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm">
                  <Zap className="w-4 h-4 text-rose-600" />
                  <span>0% Easy EMI</span>
                </div>
                <p className="text-xs text-slate-500">Bajaj &amp; Card Finance</p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm">
                  <Truck className="w-4 h-4 text-rose-600" />
                  <span>Fast Delivery</span>
                </div>
                <p className="text-xs text-slate-500">Safe Delivery in Nuh Area</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/hero_electronics_showroom_1793958159506.jpg"
                alt="Ammar Electronics Showroom in Nuh"
                className="w-full h-[380px] sm:h-[420px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                    Visit Our Showroom Today
                  </p>
                  <h3 className="text-xl font-bold">
                    Ward No-08, G.M. Hospital Nuh
                  </h3>
                  <p className="text-xs text-slate-300">
                    Open 7 days a week: 9:00 AM – 9:00 PM · Dedicated Customer Assistance
                  </p>
                </div>
              </div>
            </div>

            {/* Quick floating detail badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white rounded-xl shadow-lg border border-slate-200 p-3 sm:p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Registered Enterprise</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 font-mono">GSTIN: {STORE_DETAILS.gstin}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Authorized Brands Marquee / Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Authorized Retailer &amp; Sales Partner for Leading Electronics Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {AUTHORIZED_BRANDS.map((b) => (
              <div
                key={b.name}
                className="px-4 py-2 bg-white rounded-lg border border-slate-200/80 text-xs font-medium text-slate-700 shadow-sm flex items-center gap-2"
              >
                <span className="font-bold text-slate-900">{b.name}</span>
                <span className="text-slate-400 text-[10px]">·</span>
                <span className="text-slate-500 text-[11px]">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
