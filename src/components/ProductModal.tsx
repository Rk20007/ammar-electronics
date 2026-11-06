import React from 'react';
import { X, Check, ShieldCheck, Zap, Receipt, MessageSquare, ShoppingBag, Phone } from 'lucide-react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart,
}) => {
  if (!product) return null;

  const estimatedEmi = Math.round(product.price / 12);
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Ammar Electronics, I am interested in purchasing:\n\n*Product:* ${product.name}\n*Model:* ${product.modelNumber}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n\nPlease confirm availability and best discount.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Media Box */}
          <div className="bg-slate-50 p-6 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-slate-200">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[300px] w-auto object-contain rounded-lg"
              loading="lazy"
            />
            {product.badge && (
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
            <div className="mt-4 text-center">
              <span className="text-xs text-slate-500 font-mono">Model Code: {product.modelNumber}</span>
            </div>
          </div>

          {/* Product Details & Purchase Module */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
                <span>{product.brand}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">Official Brand Genuine</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h2>

              {/* Price section */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums font-mono">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-400 line-through tabular-nums font-mono">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Save {discountPercent}%
                </span>
              </div>

              {/* EMI Callout */}
              <div className="mt-2 text-xs text-slate-600 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>No-Cost EMI starting from <strong className="text-slate-900">₹{estimatedEmi.toLocaleString('en-IN')}/month</strong></span>
              </div>

              {/* Key Specs */}
              <div className="mt-5 space-y-2">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Technical Specifications:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty & GST */}
              <div className="mt-4 p-3 bg-slate-50 rounded-lg space-y-1 text-xs text-slate-600 border border-slate-150">
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>{product.warranty}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Receipt className="w-3.5 h-3.5 text-slate-400" />
                  <span>Official GST Tax Invoice with GSTIN: {STORE_DETAILS.gstin}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer ${
                    isInCart
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isInCart ? 'In Quotation' : 'Add to Quotation'}</span>
                </button>

                <a
                  href={`https://wa.me/91${STORE_DETAILS.phone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              <a
                href={`tel:${STORE_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 py-2 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>Call Ammar Electronics Store: {STORE_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
