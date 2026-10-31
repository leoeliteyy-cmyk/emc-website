import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "EMC — A language for what comes next",
    template: "%s · EMC",
  },
  description:
    "Explore EMC: an early-stage programming language project focused on practical performance, strong memory safety, and adaptability.",
  openGraph: {
    title: "EMC — A language for what comes next",
    description: "Performance, safety, and adaptability—designed together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
