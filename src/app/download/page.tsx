import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageIntro } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Download EMC",
  description:
    "EMC has not been officially released. Downloads are not available yet.",
};
export default function DownloadPage() {
  return (
    <>
      <PageIntro
        label="Downloads / 06"
        title="Not released. Not downloadable."
        description="EMC is still in early development. There are no official binaries or package releases to install today."
      />
      <section className="wrap page-content">
        <div className="download-panel">
          <div className="download-icon" aria-hidden="true">
            ↗
          </div>
          <Eyebrow>Availability / Not yet released</Eyebrow>
          <h2>There is nothing to download just yet.</h2>
          <p>
            The compiler is not yet implemented as a complete toolchain, so we
            are not offering downloads or installation instructions. We will
            update this page when an official release is available.
          </p>
          <Link className="repo-link" href="/status">
            Check development status <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
