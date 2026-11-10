import Image from "next/image";
import Link from "next/link";
import { footerLinks, socials, stores, tagline, waLink } from "@/lib/site";
import { CoBrandLogo, Logo } from "./logo";
import { SocialIcon } from "./icons";

const gallery = [
  { src: "/images/gallery-model-happyslimax.webp", alt: "Model memegang botol HappySlimax" },
  { src: "/images/gallery-model-face.webp", alt: "Wajah model dengan kulit bercahaya" },
  { src: "/images/gallery-model-shoulder.webp", alt: "Bahu dan leher model dengan kulit terawat" },
];

export function SiteFooter() {
  return (
    <footer className="container-page pb-6">
      <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_2fr] md:items-center md:pt-12">
        <div>
          <Logo className="w-44 md:w-56" />
          <p className="mt-4 max-w-64 text-sm text-muted">{tagline}</p>
        </div>
        <ul className="grid grid-cols-3 gap-2 md:gap-4">
          {gallery.map((g) => (
            <li key={g.src} className="relative aspect-square overflow-hidden">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 22vw, 33vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-8 bg-sand px-6 py-10 text-sm sm:grid-cols-[auto_1fr_auto] sm:gap-14 md:px-10">
        <nav aria-label="Navigasi footer">
          <h2 className="font-medium">Navigation</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-ink">{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Hubungi Kami</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="font-medium">Toko Resmi</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {stores.map((s) => (
              <li key={s.label}>
                {s.label}: <span className="font-semibold text-ink">{s.handle}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Follow us:</h2>
          <ul className="mt-4 grid w-fit grid-cols-2 gap-x-6 gap-y-4">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name} className="block transition-opacity hover:opacity-70">
                  <SocialIcon name={s.name} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 text-center text-xs text-muted">
        <p>Copyright ©HappySlim.id | Designed by House of Kliph</p>
        <CoBrandLogo className="w-40 md:w-44" />
      </div>
    </footer>
  );
}
