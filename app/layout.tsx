import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./index.css";

export const metadata: Metadata = {
  title: "FinoTravels | Flight Options and Travel Support",
  description:
    "Explore flight options and get travel booking support from FinoTravels, operated by TravelFirst LLC.",
  icons: { icon: "/favicon.svg" },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
