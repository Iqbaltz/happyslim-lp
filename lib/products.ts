export type ProductCategory = "happyslimax" | "standar-hijau" | "perawatan-wajah";

export type ProductDetail = {
  title: string;
  rating: string;
  ratingCount: string;
  priceRange: string;
  variants: string[];
  specs: { label: string; value: string }[];
  composition?: string;
  gallery: { src: string; alt: string }[];
  about?: {
    lead: string;
    sections: { heading: string; lines: string[] }[];
    closing: string[];
  };
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  startFrom: string;
  summary: string;
  unit: string;
  image: string;
  imageAlt: string;
  detail: ProductDetail;
};

export const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "happyslimax", label: "HappySlimax" },
  { value: "standar-hijau", label: "Standar Hijau" },
  { value: "perawatan-wajah", label: "Perawatan Wajah" },
];

const HAPPYSLIMAX_COMPOSITION =
  "Crataegus Pinnatifida Fructus 100 mg, Glycyrrhyza Glabra Radix Ekstrak 150 mg, Guazuma Ulmifolia Folium Ekstrak 150 mg, Parameriae Barbatae Cortex Ekstrak 50 mg, Punica Granatum Cortex Ekstrak 50 mg";

const HAPPYSLIMAX_ABOUT: ProductDetail["about"] = {
  lead: "HAPPYSLIMAX adalah suplemen booster kesehatan yang berfungsi untuk memperlancar metabolisme, serta membantu menjaga nafsu makan, sehingga dapat membantu menurunkan berat badan.",
  sections: [
    {
      heading: "Fungsi utama HAPPYSLIMAX:",
      lines: ["Membantu mengurangi lemak tubuh dengan cara mengurangi nafsu makan"],
    },
    {
      heading: "CARA MINUM:",
      lines: [
        "Happyslimax diminum 2 kali sehari, 30 menit sebelum sarapan dan sebelum makan siang.",
        "Bagi penderita Maag diminum 30 menit sesudah sarapan.",
        "*untuk hasil lebih optimal, penggunaan produk ini perlu disertai Olahraga teratur, Diet rendah kalori & Rendah lemak.",
        "-Extra Whitening",
        "-Bisa untuk program hamil",
        "-Bisa untuk ibu menyusui",
      ],
    },
    {
      heading: "Kenapa harus Happyslimax?",
      lines: [
        "Happyslimax membantu memaksimalkan program turun berat badan dengan efektif.",
        "Selain bantu menurunkan berat badan, juga bermanfaat untuk kesehatan tubuh secara menyeluruh.",
        "Aman dikonsumsi jangka panjang.",
        "Tersertifikasi BPOM",
      ],
    },
  ],
  closing: [
    "Konsultasikan dengan kami untuk program diet yang tepat buat kamu.",
    "Sudah termasuk packing bubble wrap dan kotak, pengiriman 100% rapi dan aman. 100% Herbal Alami",
  ],
};

export const products: Product[] = [
  {
    slug: "happyslimax-extra-khusus",
    name: "HappySlimax - Extra / Khusus",
    category: "happyslimax",
    startFrom: "Rp670.000",
    summary:
      "Suplemen herbal untuk membantu menjaga nafsu makan dan mendukung program pengelolaan berat badan.",
    unit: "1 Botol + Extra",
    image: "/images/product-happyslimax-extra-khusus.webp",
    imageAlt: "Dua botol HappySlimax di atas kain satin merah",
    detail: {
      title: "1 Botol HappySlimax dan Extra Khusus Best Seller Bersertifikasi BPOM",
      rating: "4,9/5 Penilaian",
      ratingCount: "300+ Penilaian di marketplace",
      priceRange: "Rp 670.000 - Rp 1.100.000",
      variants: ["HappySlimax", "HappySlimax Extra", "HappySlimax Khusus"],
      specs: [
        { label: "Berat Produk", value: "200 Gram" },
        { label: "Masa Penyimpanan", value: "24 Bulan" },
        { label: "Jumlah Produk dalam kemasan", value: "30 Kapsul" },
        { label: "No. Izin Edar (BPOM, PIRT)", value: "POM TR 213372691" },
        { label: "Ukuran Per Produk", value: "200 Miligram" },
        { label: "Dikirim Dari", value: "KAB. BANDUNG BARAT" },
      ],
      composition: HAPPYSLIMAX_COMPOSITION,
      gallery: [
        { src: "/images/product-paket-happyslimax.webp", alt: "Botol HappySlimax di atas kain satin merah" },
        { src: "/images/product-happyslimax-extra-khusus.webp", alt: "Dua botol HappySlimax" },
        { src: "/images/happyslimax-in-hand.webp", alt: "Botol HappySlimax dipegang di tangan" },
        { src: "/images/gallery-model-happyslimax.webp", alt: "Model memegang botol HappySlimax" },
      ],
      about: HAPPYSLIMAX_ABOUT,
    },
  },
  {
    slug: "paket-happyslimax",
    name: "Paket HappySlimax",
    category: "happyslimax",
    startFrom: "Rp297.000",
    summary:
      "Kemasan praktis untuk kamu yang ingin mencoba rangkaian HappySlimax terlebih dahulu.",
    unit: "10–15 Kapsul",
    image: "/images/product-paket-happyslimax.webp",
    imageAlt: "Botol HappySlimax di atas kain satin merah",
    detail: {
      title: "Paket HappySlimax dan Extra Khusus 10 dan 15 Butir Kapsul",
      rating: "4,8/5 Penilaian",
      ratingCount: "121+ Penilaian di marketplace",
      priceRange: "Rp 297.000 - Rp 589.000",
      variants: ["10 Kapsul", "15 Kapsul"],
      specs: [
        { label: "Berat Produk", value: "50 Gram" },
        { label: "Masa Penyimpanan", value: "24 Bulan" },
        { label: "Jumlah Produk dalam kemasan", value: "10–15 Kapsul" },
        { label: "No. Izin Edar (BPOM, PIRT)", value: "POM TR 213372691" },
        { label: "Ukuran Per Produk", value: "200 Miligram" },
        { label: "Dikirim Dari", value: "KAB. BANDUNG BARAT" },
      ],
      composition: HAPPYSLIMAX_COMPOSITION,
      gallery: [
        { src: "/images/product-happyslimax-extra-khusus.webp", alt: "Dua botol HappySlimax" },
        { src: "/images/product-paket-happyslimax.webp", alt: "Botol HappySlimax di atas kain satin merah" },
        { src: "/images/happyslimax-in-hand.webp", alt: "Botol HappySlimax dipegang di tangan" },
        { src: "/images/happyslimax-bottle-capsules-cutout.webp", alt: "Botol HappySlimax terbuka dengan kapsul" },
      ],
      about: HAPPYSLIMAX_ABOUT,
    },
  },
  {
    slug: "happyslim-standar-hijau",
    name: "HappySlim Standar Hijau",
    category: "standar-hijau",
    startFrom: "Rp490.000",
    summary:
      "Suplemen herbal pilihan untuk pemula yang ingin memulai perjalanan menjaga berat badan.",
    unit: "1 Botol",
    image: "/images/product-standar-hijau.webp",
    imageAlt: "Botol HappySlim Standar Hijau di atas kain satin merah",
    detail: {
      title: "HappySlim Standar Hijau",
      rating: "4,9/5 Penilaian",
      ratingCount: "Penilaian di marketplace",
      priceRange: "Rp 490.000",
      variants: ["1 Botol"],
      specs: [{ label: "Jumlah Produk dalam kemasan", value: "30 Kapsul" }],
      gallery: [
        { src: "/images/product-standar-hijau.webp", alt: "Botol HappySlim Standar Hijau" },
        { src: "/images/standar-hijau-in-hand.webp", alt: "Model memegang botol HappySlim Standar Hijau" },
      ],
    },
  },
  {
    slug: "paket-starter-standar-hijau",
    name: "Paket Starter Standard Hijau",
    category: "standar-hijau",
    startFrom: "Rp189.000",
    summary: "Paket praktis 10 kapsul untuk kamu yang ingin mencoba HappySlim Standard Hijau.",
    unit: "10 Kapsul",
    image: "/images/product-paket-starter-standar-hijau.webp",
    imageAlt: "Botol HappySlim Standar Hijau dengan label 10 kapsul",
    detail: {
      title: "Paket Starter Standard Hijau 10 Kapsul",
      rating: "4,9/5 Penilaian",
      ratingCount: "Penilaian di marketplace",
      priceRange: "Rp 189.000",
      variants: ["10 Kapsul"],
      specs: [{ label: "Jumlah Produk dalam kemasan", value: "10 Kapsul" }],
      gallery: [
        { src: "/images/product-paket-starter-standar-hijau.webp", alt: "Paket Starter Standard Hijau" },
        { src: "/images/standar-hijau-in-hand.webp", alt: "Model memegang botol HappySlim Standar Hijau" },
      ],
    },
  },
  {
    slug: "chromosome-dna-booster-serum",
    name: "Chromosome DNA + Booster Serum",
    category: "perawatan-wajah",
    startFrom: "Rp299.000",
    summary: "Serum perawatan wajah untuk membantu menjaga kulit tetap terawat dan bercahaya.",
    unit: "1 Botol",
    image: "/images/product-chromosome-dna-serum.webp",
    imageAlt: "Booster serum dan Chromosome DNA di atas kain satin merah",
    detail: {
      title: "Chromosome DNA + Booster Serum",
      rating: "4,9/5 Penilaian",
      ratingCount: "Penilaian di marketplace",
      priceRange: "Rp 299.000",
      variants: ["1 Botol"],
      specs: [],
      gallery: [
        { src: "/images/product-chromosome-dna-serum.webp", alt: "Booster serum dan Chromosome DNA" },
        { src: "/images/serum-chromosome-podium.webp", alt: "Booster serum dan Chromosome DNA di atas podium" },
        { src: "/images/serum-model-holding.webp", alt: "Model memegang booster serum" },
        { src: "/images/serum-in-hand-water.webp", alt: "Booster serum di tangan" },
      ],
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const comparison = [
  { product: "HappySlimax & Extra Khusus", isi: "30 Kapsul", harga: "Rp670 rb–1,1 jt" },
  { product: "Paket HappySlimax", isi: "10–15 Kapsul", harga: "Rp297–589 rb" },
  { product: "Standard Hijau", isi: "30 Kapsul", harga: "Rp490 rb" },
  { product: "Paket Standard", isi: "10 Kapsul", harga: "Rp189 rb" },
];
