// TODO: replace with the real HappySlim WhatsApp number (country code, no "+" or spaces).
export const WHATSAPP_NUMBER = "6280000000000";

export function waLink(message = "Halo HappySlim, saya ingin konsultasi.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/katalog", label: "Katalog" },
  { href: "/testimoni-faq", label: "Testimoni dan FAQ" },
] as const;

export const footerLinks = [
  { href: "/katalog", label: "Produk" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/testimoni-faq#faq", label: "FAQ" },
] as const;

export const stores = [
  { label: "Shopee", handle: "HAPPYSLIM.id_OFFICIAL" },
  { label: "Tokopedia", handle: "HAPPYSLIM.id" },
] as const;

// TODO: replace "#" with the real social profile URLs.
export const socials = [
  { name: "facebook", href: "#" },
  { name: "x", href: "#" },
  { name: "instagram", href: "#" },
  { name: "linkedin", href: "#" },
] as const;

export const tagline =
  "Pilihan yang Terinspirasi dari Alam, untuk Perjalanan Hidup yang Lebih Sehat";

export const storeStats = [
  { value: "4.9/5", label: "Rating toko" },
  { value: "535", label: "Penilaian" },
  { value: "99%", label: "Respons chat" },
] as const;
