import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTopButton, ScrollToTopOnNav } from "./ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8ee] text-[#3b2415] font-sans selection:bg-[#8a1a14] selection:text-[#fff2cc]">
      <ScrollToTopOnNav />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
      <ScrollToTopButton />
      <Toaster richColors position="top-center" />
    </div>
  );
}