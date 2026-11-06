import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MessageSquare, ShoppingBag, Eye, Star, Zap, Check } from 'lucide-react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/products';

interface CatalogSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: Set<string>;
}

type CategoryFilter = 'all' | 'smart-tv' | 'air-conditioner' | 'refrigerator' | 'inverter-battery' | 'washing-machine' | 'appliances';

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  cartProductIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'smart-tv', label: 'Smart 4K TVs' },
    { id: 'air-conditioner', label: 'Inverter ACs' },
    { id: 'refrigerator', label: 'Refrigerators' },
    { id: 'inverter-battery', label: 'Inverter & Power' },
    { id: 'washing-machine', label: 'Washing Machines' },
    { id: 'appliances', label: 'Home Appliances' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          query === '' ||
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.modelNumber.toLowerCase().includes(query) ||
          p.specs.some((s) => s.toLowerCase().includes(query));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
              <span>Ammar Electronics Showroom Catalog</span>
              <span className="text-slate-400">·</span>
              <span>Nuh Store Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Home Electronics &amp; Appliances
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            All models are brand-new, covered under manufacturer warranty with GST invoice input credit available.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search TVs, Inverter ACs, Luminous battery, Samsung, LG..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-600 focus:bg-white text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <label htmlFor="sort-select" className="text-xs font-medium text-slate-600 sr-only">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-rose-600 cursor-pointer"
              >
                <option value="featured">Sort by: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-100">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-base font-semibold text-slate-700">No electronics matching your search</p>
            <p className="text-xs text-slate-500 mt-1">Try another brand name or keyword, or reset the filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const inCart = cartProductIds.has(product.id);
              const monthlyEmi = Math.round(product.price / 12);
              const whatsappLink = `https://wa.me/91${STORE_DETAILS.phone}?text=${encodeURIComponent(
                `Hello Ammar Electronics, I am interested in:\n\n*Product:* ${product.name}\n*Model:* ${product.modelNumber}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n\nKindly share discount and delivery details for Nuh.`
              )}`;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image area */}
                  <div className="relative bg-slate-50/60 p-6 flex items-center justify-center h-60 overflow-hidden border-b border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
                        {product.badge}
                      </div>
                    )}

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 rounded-lg shadow-xs opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="Quick View Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quiet Metadata with typographic separator */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <span className="font-semibold text-rose-600 tracking-wide uppercase text-[11px]">
                          {product.brand}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px]">{product.modelNumber}</span>
                        {product.starRating && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-0.5 text-amber-500 font-semibold text-[11px]">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              {product.starRating} Star
                            </span>
                          </>
                        )}
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      {/* Top Spec Bullet List */}
                      <ul className="mt-3 space-y-1 text-xs text-slate-600">
                        {product.specs.slice(0, 3).map((spec, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                            <span className="truncate">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Action Section */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-extrabold text-slate-900 tabular-nums font-mono">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400 line-through tabular-nums font-mono">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          GST Bill Inc.
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-500 flex items-center gap-1 mb-4">
                        <Zap className="w-3 h-3 text-amber-500" />
                        <span>EMI from <strong>₹{monthlyEmi.toLocaleString('en-IN')}/mo</strong></span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToCart(product)}
                          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors cursor-pointer ${
                            inCart
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Quotation</span>
                            </>
                          )}
                        </button>

                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
