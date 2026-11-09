export type Review = { text: string; user: string; meta: string };

// TODO: the design only provides one real review; swap in more marketplace reviews here.
const sample: Review = {
  text: "Sangat rekomen untuk produk ini bener bener nahan nafsu makan,",
  user: "oktysty1007",
  meta: "2025-08-08 20:08 | Variasi: HAPPYSLIMAX EXTRA",
};

export const reviews: Review[] = Array.from({ length: 9 }, () => sample);

export type FaqCategory =
  | "tentang"
  | "produk"
  | "penggunaan"
  | "pemesanan"
  | "layanan";

export const faqCategories: { value: FaqCategory | "semua"; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "tentang", label: "Tentang HappySlim" },
  { value: "produk", label: "Produk & Varian" },
  { value: "penggunaan", label: "Penggunaan & Informasi Produk" },
  { value: "pemesanan", label: "Pemesanan & Pengiriman" },
  { value: "layanan", label: "Layanan Pelanggan" },
];

export type Faq = { q: string; a: string; category: FaqCategory; featured?: boolean };

export const faqs: Faq[] = [
  {
    q: "Bagaimana memilih varian yang sesuai?",
    a: "Baca label resmi pada kemasan dan lihat detail produk di halaman produk untuk mengetahui perbedaan setiap varian.",
    category: "produk",
    featured: true,
  },
  {
    q: "Bagaimana cara penggunaan produk?",
    a: "Happyslimax diminum 2 kali sehari, 30 menit sebelum sarapan dan sebelum makan siang. Bagi penderita maag, diminum 30 menit sesudah sarapan. Untuk hasil lebih optimal, sertai dengan olahraga teratur serta diet rendah kalori dan rendah lemak.",
    category: "penggunaan",
    featured: true,
  },
  {
    q: "Di mana saya bisa melihat detail produk?",
    a: "Detail setiap produk, mulai dari komposisi, isi kemasan, hingga nomor izin edar BPOM, tersedia di halaman Katalog. Pilih produk untuk melihat informasi lengkapnya.",
    category: "produk",
    featured: true,
  },
  {
    q: "Bagaimana cara berkonsultasi?",
    a: "Hubungi tim HappySlim melalui WhatsApp. Konsultasi kebutuhan diet kamu gratis, dan tim kami siap membantu memilih produk yang sesuai.",
    category: "layanan",
    featured: true,
  },
  {
    q: "Apa itu HappySlim?",
    a: "HappySlim.id adalah merek suplemen herbal untuk diet dan kontrol berat badan, serta menghadirkan produk perawatan wajah berupa serum.",
    category: "tentang",
  },
  {
    q: "Apakah produk HappySlim sudah bersertifikat BPOM?",
    a: "Ya. HappySlimax memiliki izin edar resmi dari BPOM dengan nomor POM TR 213372691.",
    category: "tentang",
  },
  {
    q: "Bagaimana cara memesan produk?",
    a: "Klik tombol \"Order via WhatsApp\" pada produk yang kamu pilih, atau belanja melalui toko resmi kami di Shopee (HAPPYSLIM.id_OFFICIAL) dan Tokopedia (HAPPYSLIM.id).",
    category: "pemesanan",
  },
  {
    q: "Bagaimana produk dikemas dan dikirim?",
    a: "Setiap pesanan dikemas dengan bubble wrap dan kotak agar tetap rapi dan aman selama pengiriman. Pesanan dikirim dari Kab. Bandung Barat.",
    category: "pemesanan",
  },
];
