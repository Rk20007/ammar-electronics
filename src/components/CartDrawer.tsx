import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_DETAILS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Nuh City');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const approxGstCredit = Math.round(subtotal * 0.18 / 1.18);

  const handleSendWhatsAppOrder = () => {
    let orderText = `*Ammar Electronics - Showroom Quotation Request*\n`;
    orderText += `*Store Location:* Ward No-08 Near G.M. Hospital, Nuh\n`;
    orderText += `*GSTIN:* ${STORE_DETAILS.gstin}\n`;
    orderText += `--------------------------------------\n`;
    if (customerName) orderText += `*Customer:* ${customerName}\n`;
    orderText += `*Delivery Town:* ${deliveryLocation}\n\n`;
    orderText += `*Selected Electronics:*\n`;

    items.forEach((item, index) => {
      orderText += `${index + 1}. *${item.product.name}*\n   Model: ${item.product.modelNumber} | Qty: ${item.quantity}\n   Price: ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}\n\n`;
    });

    orderText += `--------------------------------------\n`;
    orderText += `*Total Estimate:* ₹${subtotal.toLocaleString('en-IN')}\n`;
    orderText += `(Approx. GST ITC credit for businesses: ₹${approxGstCredit.toLocaleString('en-IN')})\n\n`;
    orderText += `Please verify availability, latest festive discount, and home delivery schedule in ${deliveryLocation}.`;

    window.open(`https://wa.me/91${STORE_DETAILS.phone}?text=${encodeURIComponent(orderText)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-slate-900 text-base">Your Appliance Quotation</h3>
            <span className="text-xs bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Your quotation list is empty</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Browse our showroom collection and add TVs, ACs, Refrigerators, or Inverter combos for an instant WhatsApp estimate.
                </p>
              </div>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors cursor-pointer"
              >
                <span>Browse Appliances</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-white rounded-lg p-1 border border-slate-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {item.product.name}
                        </p>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer shrink-0 p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        Model: {item.product.modelNumber}
                      </p>

                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/60">
                        <span className="text-xs font-extrabold text-slate-900 font-mono tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>

                        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-1.5 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="text-slate-500 hover:text-slate-900 p-0.5 cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold font-mono px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="text-slate-500 hover:text-slate-900 p-0.5 cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Destination & Customer details */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2.5 pt-3">
                <span className="text-xs font-bold text-slate-700 block">
                  Delivery Details for WhatsApp Quote:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-rose-600 text-slate-900"
                  />
                  <select
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-rose-600 text-slate-900 cursor-pointer"
                  >
                    <option>Nuh City</option>
                    <option>Tauru</option>
                    <option>Sohna</option>
                    <option>Ferozepur Jhirka</option>
                    <option>Punhana</option>
                    <option>Nagina</option>
                    <option>Hathin</option>
                    <option>Store Pickup (Ward No-08)</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Subtotal (Inclusive of GST):</span>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-xs text-emerald-700 font-medium">
                <span>Approx. GST Input Credit:</span>
                <span className="font-mono tabular-nums">₹{approxGstCredit.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1.5 border-t border-slate-200">
                <span>Total Quotation:</span>
                <span className="text-lg font-mono text-rose-600 tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Quotation to WhatsApp (8053972786)</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                <span>GST Registered: {STORE_DETAILS.gstin}</span>
              </span>
              <button
                onClick={onClearCart}
                className="text-slate-400 hover:text-slate-700 cursor-pointer underline"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
