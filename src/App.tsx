import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { InverterCalculator } from './components/InverterCalculator';
import { GstEmiSection } from './components/GstEmiSection';
import { VisitingCardSection } from './components/VisitingCardSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS, STORE_DETAILS } from './data/products';
import { Product, CartItem } from './types';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ammar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ammar_cart', JSON.stringify(cartItems));
    } catch {
      // storage unavailable
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartProductIds = new Set(cartItems.map((item) => item.product.id));
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-rose-500 selection:text-white">
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <CatalogSection
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          cartProductIds={cartProductIds}
        />
        <InverterCalculator />
        <GstEmiSection />
        <VisitingCardSection />
        <StoreLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Widget for Mobile / Desktop */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={`https://wa.me/91${STORE_DETAILS.phone}?text=Hello%20Ammar%20Electronics%2C%20I%20have%20an%20inquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full shadow-lg hover:shadow-xl transition-transform active:scale-95 cursor-pointer"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Showroom</span>
        </a>

        <a
          href={`tel:${STORE_DETAILS.phone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-full shadow-lg hover:shadow-xl transition-transform active:scale-95 cursor-pointer"
          aria-label="Call Store"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{STORE_DETAILS.phone}</span>
        </a>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cartProductIds.has(selectedProduct.id) : false}
      />

      {/* Quotation / Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
