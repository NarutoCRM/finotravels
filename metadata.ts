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
    },
    twitter: {
      card: "summary",
      title: brandedTitle,
      description,
    },
  };
}