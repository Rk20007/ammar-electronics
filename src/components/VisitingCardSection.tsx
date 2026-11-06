import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, Download, ExternalLink, Image as ImageIcon, ShieldCheck } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const VisitingCardSection: React.FC = () => {
  const [copiedGst, setCopiedGst] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showOriginalScan, setShowOriginalScan] = useState(false);

  const copyGst = () => {
    navigator.clipboard.writeText(STORE_DETAILS.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(STORE_DETAILS.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Generate and download a real vCard (.vcf)
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ammar Electronics
ORG:Ammar Electronics
TITLE:Electronics & Home Appliances Retailer
TEL;TYPE=CELL,VOICE:${STORE_DETAILS.phone}
EMAIL;TYPE=INTERNET:${STORE_DETAILS.email}
ADR;TYPE=WORK:;;Ward No-08 Near G.M. Hospital;Nuh;Haryana;122107;India
NOTE:GSTIN: ${STORE_DETAILS.gstin} - Authorized Retailer for Smart TVs, ACs, Refrigerators & Inverters
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ammar_Electronics_Nuh.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="visiting-card" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Identity &amp; Digital Card</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Official Business Card of Ammar Electronics
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Save our contact details directly to your phone or copy our verified GSTIN for business inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Digital Twin Business Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl aspect-[1.8/1] min-h-[290px] bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Chevrons matching reference image */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-20 sm:opacity-25">
                <svg viewBox="0 0 200 300" className="w-full h-full object-cover">
                  <path
                    d="M 200 0 L 100 120 L 200 240"
                    fill="none"
                    stroke="#E11D48"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 200 40 L 120 140 L 200 240"
                    fill="none"
                    stroke="#E11D48"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-black text-rose-600 tracking-tight">
                    AMMAR ELECTRONICS
                  </h3>
                  <img
                    src="/assets/aistudio/Ammar_Electronics_Red_Swoosh_Logo_6281d294.png"
                    alt="Logo"
                    className="h-9 w-auto object-contain hidden sm:block"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wider">
                    GSTIN:
                  </span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    {STORE_DETAILS.gstin}
                  </span>
                </div>
              </div>

              {/* Card Contact Details (Replicating exact reference layout) */}
              <div className="relative z-10 pt-4 flex items-center">
                {/* Red accent vertical indicator bar as seen on reference card */}
                <div className="w-1.5 self-stretch bg-rose-600 rounded-full mr-4 shrink-0" />

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-rose-50 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <a
                      href={`tel:${STORE_DETAILS.phone}`}
                      className="font-bold text-slate-900 hover:text-rose-600 transition-colors"
                    >
                      {STORE_DETAILS.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-rose-50 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <a
                      href={`mailto:${STORE_DETAILS.email}`}
                      className="text-slate-800 hover:text-rose-600 uppercase transition-colors"
                    >
                      {STORE_DETAILS.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-rose-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <span className="text-slate-800">
                      Ward No-08 G.M. HOSPITAL Nuh
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Trust */}
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Authorized Electronics &amp; Appliances Store</span>
                <span className="font-mono">Nuh, Haryana</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Direct Contact &amp; Business Actions
              </h4>

              <div className="space-y-2.5">
                <button
                  onClick={downloadVCard}
                  className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-rose-600" />
                    <span>Download vCard (Save to Phone)</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">.VCF</span>
                </button>

                <button
                  onClick={copyGst}
                  className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {copiedGst ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-rose-600" />
                    )}
                    <span>Copy Verified GSTIN</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {copiedGst ? 'Copied!' : STORE_DETAILS.gstin}
                  </span>
                </button>

                <button
                  onClick={copyPhone}
                  className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-rose-600" />
                    )}
                    <span>Copy Phone Number</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {copiedPhone ? 'Copied!' : STORE_DETAILS.phone}
                  </span>
                </button>

                <button
                  onClick={() => setShowOriginalScan(!showOriginalScan)}
                  className="w-full flex items-center justify-between p-3.5 bg-rose-50/70 hover:bg-rose-100/70 border border-rose-200/80 rounded-xl text-rose-900 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-rose-600" />
                    <span>{showOriginalScan ? 'Hide Original Reference Scan' : 'View Original Reference Scan'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
                </button>
              </div>
            </div>

            {/* Original Card Preview Toggle */}
            {showOriginalScan && (
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Reference Business Card Scan:</span>
                  <button
                    onClick={() => setShowOriginalScan(false)}
                    className="text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-06_at_3.06.07_PM_a433441b.jpeg"
                  alt="Original Reference Business Card"
                  className="w-full rounded-lg border border-slate-700 shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
