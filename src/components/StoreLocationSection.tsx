import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const StoreLocationSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productInterest: 'Smart 4K TV',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppAppointment = () => {
    const text = encodeURIComponent(
      `Hello Ammar Electronics, I would like to schedule a store visit / request consultation:\n\n*Name:* ${formData.name || 'Customer'}\n*Phone:* ${formData.phone || 'Provided in chat'}\n*Interested in:* ${formData.productInterest}\n*Preferred Timing:* ${formData.preferredTime}\n*Notes:* ${formData.message || 'Looking for best price.'}`
    );
    window.open(`https://wa.me/91${STORE_DETAILS.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="store-location" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Storefront &amp; In-Person Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Showroom in Nuh
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Conveniently situated at Ward No-08 near G.M. Hospital in Nuh, Haryana. Come experience live product demonstrations and in-store festive offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Store Information & Live Map Graphic */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                Ammar Electronics Showroom
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Store Address:</strong>
                    <span>Ward No-08, Near G.M. Hospital, Nuh, Mewat District, Haryana - 122107</span>
                    <span className="block text-xs text-slate-400 mt-0.5">Easily accessible from Sohna-Alwar Highway</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Showroom Hours:</strong>
                    <span>Open 7 Days a Week: 9:00 AM – 9:00 PM</span>
                    <span className="block text-xs text-emerald-600 font-medium mt-0.5">Open Today for In-Store Walk-ins</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Direct Phone:</strong>
                    <a href={`tel:${STORE_DETAILS.phone}`} className="text-slate-900 hover:text-rose-600 font-bold transition-colors">
                      +91 {STORE_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email:</strong>
                    <a href={`mailto:${STORE_DETAILS.email}`} className="text-slate-900 hover:text-rose-600 font-medium uppercase transition-colors">
                      {STORE_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Navigation & Call */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=G.M.+Hospital+Nuh+Haryana`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-400" />
                  <span>Open in Maps</span>
                </a>

                <a
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Local Delivery Coverage */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
              <span className="font-bold text-slate-800 block mb-1">
                Same-Day Local Delivery &amp; Safe Installation Available:
              </span>
              <span>
                Nuh City · Tauru · Sohna · Ferozepur Jhirka · Punhana · Nagina · Hathin · Pinangwan · Gurugram Suburbs
              </span>
            </div>
          </div>

          {/* Right: Store Visit / Callback Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="pb-4 mb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Request a Callback or Book a Store Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our showroom expert will connect with you with customized prices, model availability, and exchange offers.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Consultation Request Received!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1">
                      Thank you! Mr. Aftab Khan / Ammar Electronics team will call you shortly at <strong>{formData.phone || STORE_DETAILS.phone}</strong>.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={handleWhatsAppAppointment}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Imran Khan"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98123XXXXX"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Product of Interest</label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900 cursor-pointer"
                      >
                        <option>Smart 4K TV (Sony/Samsung/LG)</option>
                        <option>Inverter Air Conditioner (Daikin/Voltas)</option>
                        <option>Double Door Refrigerator</option>
                        <option>Inverter &amp; Tubular Battery Combo</option>
                        <option>Automatic Washing Machine</option>
                        <option>Water Purifier / BLDC Fans / Cooler</option>
                        <option>Bulk / Institutional Order with GST</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Preferred Time for Call</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900 cursor-pointer"
                      >
                        <option>Morning (10:00 AM – 1:00 PM)</option>
                        <option>Afternoon (1:00 PM – 4:00 PM)</option>
                        <option>Evening (4:00 PM – 8:00 PM)</option>
                        <option>Immediate Callback</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Specific Requirements or Old Appliance Exchange</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inquiring for 1.5 Ton 5-star AC with copper pipe installation in Nuh..."
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Free Store Consultation</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppAppointment}
                      className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
