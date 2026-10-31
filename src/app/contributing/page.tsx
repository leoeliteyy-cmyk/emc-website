import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Contributing",
  description:
    "Follow the EMC programming language project and learn about future contribution opportunities.",
};
export default function ContributingPage() {
  return (
    <>
      <PageIntro
        label="Community / 07"
        title="Curious about EMC? Stay close."
        description="EMC is at an early stage. We want to make the project's direction and maturity easy to follow as the foundations take shape."
      />
      <section className="wrap page-content">
        <div className="content-grid">
          <article className="surface-card">
            <span className="card-index">01 / FOLLOW</span>
            <h3>Follow the project repository</h3>
            <p>
              Watch the official EMC website repository for verified project
              updates and the future contribution guidance published there.
            </p>
            <Link
              className="repo-link"
              href="https://github.com/leoeliteyy-cmyk/emc-website"
              target="_blank"
              rel="noreferrer"
            >
              Open the EMC website repository <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article className="surface-card">
            <span className="card-index">02 / CONTRIBUTE</span>
            <h3>Contribution paths are evolving</h3>
            <p>
              The compiler is not yet fully implemented and this site does not
              define a contribution process. Check the repository&apos;s current
              guidance before opening a change; please don&apos;t assume an API,
              syntax, or workflow that isn&apos;t documented there.
            </p>
            <StatusTag>Early development</StatusTag>
          </article>
          <article className="surface-card wide-card">
            <span className="card-index">03 / UNDERSTAND</span>
            <h3>Start with the current facts</h3>
            <p>
              Read the project&apos;s introductory{" "}
              <Link className="text-link" href="/docs">
                documentation
              </Link>
              , review the{" "}
              <Link className="text-link" href="/roadmap">
                planned development stages
              </Link>
              , and check the{" "}
              <Link className="text-link" href="/status">
                capability snapshot
              </Link>
              . Planned work is labeled as such; there are no release dates or
              completed compiler features implied.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
