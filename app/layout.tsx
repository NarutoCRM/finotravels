import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://finotravels.com"),
  title: {
    default: "FinoTravels",
    template: "%s | FinoTravels",
  },
  description:
    "Explore flight options and get travel booking support from FinoTravels, operated by TravelFirst LLC.",
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
