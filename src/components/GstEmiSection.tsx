import React, { useState } from 'react';
import { Receipt, CreditCard, CheckCircle2, Copy, Check, Calculator, Building2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const GstEmiSection: React.FC = () => {
  const [amount, setAmount] = useState<number>(45000);
  const [gstRate, setGstRate] = useState<18 | 28>(18);
  const [tenure, setTenure] = useState<number>(6);
  const [copiedGst, setCopiedGst] = useState<boolean>(false);

  // Tax calculations
  // If price includes GST: Base = Amount / (1 + Rate)
  const basePrice = Math.round(amount / (1 + gstRate / 100));
  const gstCredit = amount - basePrice;
  const monthlyEmi = Math.round(amount / tenure);

  const copyGstin = () => {
    navigator.clipboard.writeText(STORE_DETAILS.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  return (
    <section id="gst-emi" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-3">
            <Receipt className="w-3.5 h-3.5" />
            <span>Official Tax Compliance &amp; Finance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            GST Tax Invoicing &amp; 0% Down-Payment EMI
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Ammar Electronics provides 100% authentic GST-compliant invoices for personal buyers, clinics, institutions, and businesses across Haryana.
          </p>
        </div>

        {/* GST Registration Verification Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-rose-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Government of India · Goods &amp; Services Tax Registration
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                AMMAR ELECTRONICS
              </h3>
              <p className="text-xs text-slate-500">
                Principal Place of Business: Ward No-08, Near G.M. Hospital, Nuh, Haryana - 122107
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Registered GSTIN:
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-slate-900">
                  {STORE_DETAILS.gstin}
                </span>
              </div>
              <button
                onClick={copyGstin}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedGst ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy GSTIN</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">State Code 06 (Haryana):</strong> Valid for all Haryana &amp; Interstate GST Input Tax Credit (ITC) claims.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">B2B Tax Invoicing:</strong> Get instant computerized invoices for your shop, clinic, farm, or firm.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Zero Hidden Charges:</strong> All prices clearly state SGST + CGST with complete breakdown.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Dual Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box 1: B2B GST Credit Estimator */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-rose-600" />
                GST Input Tax Credit (ITC) Estimator
              </span>
              <span className="text-xs text-slate-500">For Business Buyers</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label className="font-semibold text-slate-700">Enter Purchase Amount (₹)</label>
                <span className="font-mono font-bold text-slate-900">
                  ₹{amount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="250000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹10,000</span>
                <span>₹1,00,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Applicable GST Slab:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setGstRate(18)}
                  className={`px-3 py-1 rounded-md text-xs font-bold cursor-pointer transition-colors ${
                    gstRate === 18
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  18% GST (TVs, Refrigerators, Inverters)
                </button>
                <button
                  type="button"
                  onClick={() => setGstRate(28)}
                  className={`px-3 py-1 rounded-md text-xs font-bold cursor-pointer transition-colors ${
                    gstRate === 28
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  28% GST (Air Conditioners)
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Base Equipment Value:</span>
                <span className="font-mono font-bold text-slate-900">₹{basePrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-700 font-semibold">
                <span>Estimated Input Tax Credit (ITC):</span>
                <span className="font-mono font-bold">₹{gstCredit.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                Claim this ₹{gstCredit.toLocaleString('en-IN')} against your business GST return using Ammar Electronics invoice.
              </div>
            </div>
          </div>

          {/* Box 2: 0% Easy EMI Breakdown */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-rose-600" />
                Zero Down-Payment EMI Estimator
              </span>
              <span className="text-xs text-slate-500">Finance Available in Store</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-700 mb-2">Select Preferred Tenure:</p>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenure(m)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-colors cursor-pointer ${
                      tenure === m
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-rose-50/70 border border-rose-100 rounded-xl space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-600 font-medium">Monthly Installment:</span>
                <span className="text-2xl font-extrabold text-rose-600 font-mono">
                  ₹{monthlyEmi.toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-slate-500">/mo</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Calculated on ₹{amount.toLocaleString('en-IN')} purchase value across {tenure} equal monthly installments.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-500 pt-1">
              <p className="font-semibold text-slate-700">Supported In-Store Finance Partners:</p>
              <p className="text-slate-600">
                Bajaj Finserv EMI Card · HDFC Bank EasyEMI · ICICI Bank · SBI Card · IDFC First Bank · Kotak Mahindra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
