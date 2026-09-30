import type { Metadata } from "next";

const siteName = "FinoTravels";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const brandedTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1774,
          height: 887,
          alt: "FinoTravels travel logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: ["/logo.png"],
    },
  };
}