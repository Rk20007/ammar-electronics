import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Receipt } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Ammar_Electronics_Red_Swoosh_Logo_6281d294.png"
                alt="Ammar Electronics Logo"
                className="h-12 w-auto object-contain bg-white/5 p-1 rounded-lg"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Ammar Electronics is Nuh’s authorized retail destination for global brand appliances, LED televisions, inverter split ACs, frost-free refrigerators, and industrial-grade home inverter power backup systems.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Receipt className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>GSTIN: <strong className="text-white font-mono">{STORE_DETAILS.gstin}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Government Registered Retailer (State 06 - Haryana)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom Catalog
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">
                  Smart 4K &amp; OLED TVs
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">
                  5-Star Inverter Air Conditioners
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">
                  Double Door &amp; French Door Refrigerators
                </a>
              </li>
              <li>
                <a href="#inverter-calculator" className="hover:text-rose-400 transition-colors">
                  Luminous &amp; Microtek Tubular Inverters
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">
                  Fully Automatic Washing Machines
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-rose-400 transition-colors">
                  BLDC Energy Saving Fans &amp; Coolers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details from Reference Screenshot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom Contact &amp; Visit
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Address:</strong> Ward No-08 G.M. HOSPITAL Nuh, Haryana - 122107
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span>
                  <strong className="text-slate-200">Phone:</strong>{' '}
                  <a href={`tel:${STORE_DETAILS.phone}`} className="hover:text-rose-400 font-mono text-slate-300">
                    {STORE_DETAILS.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>
                  <strong className="text-slate-200">Email:</strong>{' '}
                  <a href={`mailto:${STORE_DETAILS.email}`} className="hover:text-rose-400 text-slate-300 uppercase">
                    {STORE_DETAILS.email}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`https://wa.me/91${STORE_DETAILS.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  Direct WhatsApp Support (8053972786)
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block">
                Store Hours: Monday – Sunday: 9:00 AM – 9:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AMMAR ELECTRONICS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono">GSTIN: {STORE_DETAILS.gstin}</span>
            <span>·</span>
            <span>Ward No-08, Nuh, Haryana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
