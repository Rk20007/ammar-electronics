import React, { useState } from 'react';
import { Phone, MessageSquare, ShoppingBag, Menu, X, MapPin, CheckCircle2, Copy, Check } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedGst, setCopiedGst] = useState(false);

  const copyGstin = () => {
    navigator.clipboard.writeText(STORE_DETAILS.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  return (
    <>
      {/* Top Trust Notice Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-rose-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              Govt. Verified GSTIN:
            </span>
            <button
              onClick={copyGstin}
              title="Click to copy GSTIN"
              className="inline-flex items-center gap-1 font-mono font-medium text-white hover:text-rose-400 bg-slate-800 px-2 py-0.5 rounded cursor-pointer transition-colors"
            >
              <span>{STORE_DETAILS.gstin}</span>
              {copiedGst ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-slate-400" />
              )}
            </button>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">
              Ward No-08, G.M. Hospital Nuh, Haryana
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-rose-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-500" />
              <span>{STORE_DETAILS.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/91${STORE_DETAILS.phone}?text=Hello%20Ammar%20Electronics%2C%20I%20am%20visiting%20your%20website%20and%20want%20to%20inquire%20about%20electronics.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation conforming to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single Brand Monogram & Logo Wordmark */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/assets/aistudio/Ammar_Electronics_Red_Swoosh_Logo_6281d294.png"
                alt="Ammar Electronics Official Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Zone 2: 4-5 concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a
                href="#products"
                className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
              >
                Showroom Products
              </a>
              <a
                href="#inverter-calculator"
                className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
              >
                Inverter Load Calculator
              </a>
              <a
                href="#gst-emi"
                className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
              >
                GST &amp; 0% EMI
              </a>
              <a
                href="#visiting-card"
                className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
              >
                Official Visiting Card
              </a>
              <a
                href="#store-location"
                className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
              >
                Store Location
              </a>
            </nav>

            {/* Zone 3: 1 primary action & Cart toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenCart}
                className="relative inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                aria-label="View Quotation Cart"
              >
                <ShoppingBag className="w-4 h-4 text-slate-800" />
                <span className="hidden sm:inline">Quotation</span>
                {cartCount > 0 && (
                  <span className="w-5 h-5 bg-rose-600 text-white text-xs font-bold rounded-full flex items-center justify-center -ml-1">
                    {cartCount}
                  </span>
                )}
              </button>

              <a
                href={`tel:${STORE_DETAILS.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800">
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Showroom Products
              </a>
              <a
                href="#inverter-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Inverter Load Calculator
              </a>
              <a
                href="#gst-emi"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                GST Billing &amp; 0% EMI
              </a>
              <a
                href="#visiting-card"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Digital Visiting Card
              </a>
              <a
                href="#store-location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Store Location &amp; Directions
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${STORE_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-rose-600 text-white rounded-lg font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom: {STORE_DETAILS.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${STORE_DETAILS.phone}?text=Hello%20Ammar%20Electronics%2C%20I%20am%20visiting%20your%20website%20and%20want%20to%20inquire%20about%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 text-white rounded-lg font-medium text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
