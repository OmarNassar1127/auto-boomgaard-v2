import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Auto Boomgaard | Dé Audi specialist van Nederland",
  description:
    "Auto Boomgaard is al sinds 2014 dé Audi Specialist van Nederland en een echt familiebedrijf. Bij ons draait alles om passie voor auto's en persoonlijke service.",
  icons: {
    icon: [
      {
        url: "/images/logo-wit.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased overflow-x-hidden bg-light"
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[30px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
