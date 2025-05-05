import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Van Bruggen Automotive | Dé Audi specialist van Nederland",
  description:
    "Van Bruggen Automotive is al sinds 2014 dé Audi Specialist van Nederland en een echt familiebedrijf. Bij ons draait alles om passie voor auto's en persoonlijke service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body suppressHydrationWarning className="antialiased overflow-x-hidden bg-light">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[120px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
