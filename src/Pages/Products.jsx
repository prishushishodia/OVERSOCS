import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FiX, FiSliders } from "react-icons/fi";
import { products, filterGroups } from "../data/products";
import ProductCard from "../Components/ProductCard";
import Reveal, { RevealItem } from "../Components/Reveal";

const tagLabels = { new: "New", limited: "Limited" };

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeTag = params.get("tag");

  // Build the active filter set from the URL.
  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      filterGroups.every((group) => {
        const val = params.get(group.key);
        return !val || p[group.key] === val;
      })
    );
    if (activeTag && tagLabels[activeTag]) {
      list = list.filter((p) => p.tag === tagLabels[activeTag]);
    }
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [params, activeTag, sort]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (next.get(key) === value) next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  const clearAll = () => setParams({});

  const activeCount = filterGroups.filter((g) => params.get(g.key)).length + (activeTag ? 1 : 0);

  const title = activeTag
    ? `${tagLabels[activeTag] ?? "New"} In`
    : params.get("category")
    ? `${params.get("category")} Socks`
    : "All Socks";

  const Sidebar = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-display text-2xl text-ink">Filters</h3>
        {activeCount > 0 && (
          <button onClick={clearAll} className="font-grotesk text-xs uppercase tracking-wide text-ember hover:underline">
            Clear ({activeCount})
          </button>
        )}
      </div>

      {filterGroups.map((group) => (
        <div key={group.key} className="border-t border-ink/10 pt-5">
          <h4 className="mb-3 font-grotesk text-xs uppercase tracking-[0.2em] text-ink-soft">
            {group.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.options.map(([value, label]) => {
              const active = params.get(group.key) === value;
              return (
                <button
                  key={value}
                  onClick={() => setFilter(group.key, value)}
                  className={`border px-3 py-1.5 font-grotesk text-xs uppercase tracking-wide transition-colors ${
                    active
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      {/* Page header */}
      <div className="container-x border-b border-ink/10 pb-8">
        <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">
          The Catalogue
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-display text-5xl capitalize text-ink md:text-7xl">{title}</h1>
          <div className="flex items-center gap-4">
            <span className="font-grotesk text-sm text-ink-soft">{filtered.length} pairs</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/20 bg-transparent px-3 py-2 font-grotesk text-xs uppercase tracking-wide text-ink focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container-x flex gap-10 py-10">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-32">{Sidebar}</div>
        </aside>

        {/* Grid */}
        <section className="flex-1">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="mb-6 flex items-center gap-2 border border-ink/20 px-4 py-2 font-grotesk text-xs uppercase tracking-wide text-ink lg:hidden"
          >
            <FiSliders /> Filters {activeCount > 0 && `(${activeCount})`}
          </button>

          {filtered.length === 0 ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
              <p className="text-display text-3xl text-ink">No pairs match.</p>
              <button onClick={clearAll} className="btn btn-outline mt-6">
                Reset filters
              </button>
            </div>
          ) : (
            <Reveal stagger key={params.toString() + sort} className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
              {filtered.map((product, i) => (
                <RevealItem key={product.id}>
                  <ProductCard product={product} index={i} />
                </RevealItem>
              ))}
            </Reveal>
          )}
        </section>
      </div>

      {/* Mobile filter sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-canvas p-6">
            <div className="mb-6 flex justify-end">
              <button onClick={() => setMobileFiltersOpen(false)} className="text-ink">
                <FiX className="text-2xl" />
              </button>
            </div>
            {Sidebar}
            <button onClick={() => setMobileFiltersOpen(false)} className="btn btn-solid mt-8 w-full">
              Show {filtered.length} pairs
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
