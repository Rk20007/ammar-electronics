import React, { useState, useMemo } from 'react';
import { BatteryCharging, Zap, MessageSquare, Check, ShieldCheck, Sliders } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const InverterCalculator: React.FC = () => {
  const [fans, setFans] = useState<number>(3);
  const [lights, setLights] = useState<number>(5);
  const [hasTv, setHasTv] = useState<boolean>(true);
  const [hasFridge, setHasFridge] = useState<boolean>(false);
  const [hasCooler, setHasCooler] = useState<boolean>(false);

  // Load calculations
  const totalWatts = useMemo(() => {
    let watts = fans * 75 + lights * 15;
    if (hasTv) watts += 100;
    if (hasFridge) watts += 250;
    if (hasCooler) watts += 180;
    return watts;
  }, [fans, lights, hasTv, hasFridge, hasCooler]);

  // Recommended Inverter VA (with 25% safety power factor margin)
  const recommendedVA = useMemo(() => {
    const requiredVA = totalWatts / 0.8;
    if (requiredVA <= 700) return { va: "900 VA (12V)", model: "Luminous Zelio+ 900 / Microtek 1050" };
    if (requiredVA <= 950) return { va: "1100 VA (12V)", model: "Luminous Zelio+ 1100 / Exide GQP 1050" };
    if (requiredVA <= 1400) return { va: "1500 VA (24V)", model: "Luminous EcoVolt Neo 1550 / Microtek 1650" };
    return { va: "2000+ VA (24V Double Battery)", model: "Microtek Solar Hybrid 2050 / Luminous Cruze 2kVA" };
  }, [totalWatts]);

  // Battery Ah Recommendation & Estimated Backup Time
  const batteryRecommendation = useMemo(() => {
    if (totalWatts < 250) {
      return {
        ah: "150 Ah Tall Tubular",
        hours: "6 to 8 Hours",
        comboPrice: "₹18,500 - ₹21,000",
      };
    } else if (totalWatts < 450) {
      return {
        ah: "200 Ah / 220 Ah Heavy Duty Tall Tubular",
        hours: "4.5 to 6.5 Hours",
        comboPrice: "₹23,500 - ₹26,000",
      };
    } else {
      return {
        ah: "Dual 160 Ah / 200 Ah (24V Twin System)",
        hours: "5 to 8 Hours Heavy Load",
        comboPrice: "₹34,000 - ₹42,000",
      };
    }
  }, [totalWatts]);

  const whatsappInquiryMessage = encodeURIComponent(
    `Hello Ammar Electronics, I used your Inverter Calculator on the website:\n\n*Calculated Load:* ${totalWatts} Watts\n*Appliances:* ${fans} Fans, ${lights} LED Lights${hasTv ? ', 1 TV' : ''}${hasFridge ? ', 1 Refrigerator' : ''}${hasCooler ? ', 1 Cooler' : ''}\n*Recommended:* ${recommendedVA.va} with ${batteryRecommendation.ah}\n\nPlease share your best discounted combo deal and installation availability in Nuh.`
  );

  return (
    <section id="inverter-calculator" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Power Backup Engineering Specialist</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Inverter &amp; Tubular Battery Requirements
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Get exact sizing for your home in Nuh &amp; Mewat region. Prevent inverter tripping and ensure long-lasting battery life with our authorized Luminous &amp; Microtek setups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Input Controls */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-rose-600" />
                Select Appliances You Run During Power Cuts:
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">Live Calculation</span>
            </div>

            {/* Ceiling Fans Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-800">Ceiling Fans (approx. 75W each)</label>
                <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-100">
                  {fans} {fans === 1 ? 'Fan' : 'Fans'} ({fans * 75} W)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={fans}
                onChange={(e) => setFans(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8 Fans</span>
              </div>
            </div>

            {/* LED Lights Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-800">LED Lights &amp; Bulbs (approx. 15W each)</label>
                <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-100">
                  {lights} {lights === 1 ? 'Light' : 'Lights'} ({lights * 15} W)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={lights}
                onChange={(e) => setLights(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0</span>
                <span>5</span>
                <span>10</span>
                <span>15 Lights</span>
              </div>
            </div>

            {/* Appliances Toggle Buttons */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Additional Appliances:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setHasTv(!hasTv)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hasTv
                      ? 'bg-rose-50/80 border-rose-300 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Smart LED TV</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${hasTv ? 'bg-rose-600 text-white' : 'border border-slate-300'}`}>
                      {hasTv && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">+100 Watts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHasFridge(!hasFridge)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hasFridge
                      ? 'bg-rose-50/80 border-rose-300 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Inverter Fridge</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${hasFridge ? 'bg-rose-600 text-white' : 'border border-slate-300'}`}>
                      {hasFridge && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">+250 Watts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHasCooler(!hasCooler)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hasCooler
                      ? 'bg-rose-50/80 border-rose-300 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Room Cooler</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${hasCooler ? 'bg-rose-600 text-white' : 'border border-slate-300'}`}>
                      {hasCooler && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">+180 Watts</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Calculated Recommendation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs text-rose-400 font-semibold uppercase tracking-wider">Estimated Total Load</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold tabular-nums font-mono text-white">
                    {totalWatts}
                  </span>
                  <span className="text-base text-slate-400 font-medium">Watts (Peak)</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <BatteryCharging className="w-6 h-6 text-rose-500" />
              </div>
            </div>

            {/* Inverter Capacity */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Recommended Inverter Capacity:
              </span>
              <p className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{recommendedVA.va}</span>
              </p>
              <p className="text-xs text-slate-400">
                Suitable models: <span className="text-slate-300">{recommendedVA.model}</span>
              </p>
            </div>

            {/* Battery Size */}
            <div className="space-y-1 pt-2 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Recommended Tubular Battery:
              </span>
              <p className="text-lg font-bold text-rose-400">
                {batteryRecommendation.ah}
              </p>
              <p className="text-xs text-slate-300">
                Estimated Backup Time: <strong className="text-white">{batteryRecommendation.hours}</strong>
              </p>
            </div>

            {/* Estimated Price Range */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Complete Combo Estimate:</span>
                <span className="font-bold text-emerald-400 font-mono">{batteryRecommendation.comboPrice}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Includes Inverter + Battery + Heavy Trolley + In-Store Wiring Guidance
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/91${STORE_DETAILS.phone}?text=${whatsappInquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire This Setup on WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                <span>Official Warranty up to 60 Months · Same Day Delivery in Nuh</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
