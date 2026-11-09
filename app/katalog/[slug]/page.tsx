import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { ProductGallery, ProductOrder } from "@/components/product-order";
import { ReviewsSection } from "@/components/reviews-section";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/katalog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }: PageProps<"/katalog/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const d = product.detail;

  return (
    <>
      <section className="container-page grid gap-10 pt-8 pb-16 md:grid-cols-2 md:gap-8 md:pt-12 md:pb-24">
        <ProductGallery images={d.gallery} />

        <div>
          <p className="flex flex-wrap gap-x-4 text-sm text-muted">
            <span>{d.rating}</span>
            <span>{d.ratingCount}</span>
          </p>
          <h1 className="mt-4 text-xl leading-snug font-medium uppercase md:text-2xl">{d.title}</h1>
          <p className="mt-5 text-3xl font-medium tracking-wide uppercase md:text-4xl">{d.priceRange}</p>

          <div className="mt-6">
            <ProductOrder name={product.name} variants={d.variants} />
          </div>

          {d.specs.length > 0 && (
            <dl className="mt-8 divide-y divide-line border-y border-line text-xs">
              {d.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-4 py-5">
                  <dt className="font-medium">{s.label}</dt>
                  <dd className="text-muted">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {d.composition && (
            <div className="mt-5 text-xs">
              <h2 className="font-medium">Komposisi</h2>
              <p className="mt-2 leading-relaxed text-muted">{d.composition}</p>
            </div>
          )}

          {!d.about && <p className="mt-8 text-sm leading-relaxed text-muted">{product.summary}</p>}
        </div>
      </section>

      {d.about && (
        <section aria-labelledby="about-product" className="container-page pb-8">
          <h2 id="about-product" className="text-3xl font-light md:text-4xl">Tentang Produk Ini</h2>
          <p className="mt-4 max-w-5xl text-lg leading-snug text-ink/80 md:text-xl">{d.about.lead}</p>
          <div className="mt-6 space-y-6 border-y border-line py-6 text-xs leading-relaxed">
            {d.about.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="font-semibold">{s.heading}</h3>
                {s.lines.map((l) => (
                  <p key={l} className="text-ink/80">{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs font-medium">
            {d.about.closing.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </section>
      )}

      <ReviewsSection />
    </>
  );
}
