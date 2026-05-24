import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { CartProvider } from "@/lib/cart";
import HomePage from "@/routes/index";
import ProductsPage from "@/routes/products";
import GalleryPage from "@/routes/gallery";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-6xl font-bebas text-[#8a1a14]">404</h1>
        <p className="mt-4 text-lg text-[#3b2415]/80">We couldn't find that page.</p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#8a1a14] px-6 py-3 text-sm font-semibold text-[#fff2cc] hover:bg-[#5b0f0a] transition"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}
