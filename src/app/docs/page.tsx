import type { Metadata } from "next";
import { Eyebrow, PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Introductory documentation for EMC's language vision, design principles, and development direction.",
};
const toc = [
  ["what-is-emc", "What is EMC?"],
  ["principles", "Design principles"],
  ["memory-safety", "Memory safety"],
  ["compiler", "Compiler architecture"],
  ["cpu-gpu", "CPU & GPU direction"],
  ["getting-started", "Getting started"],
];
export default function DocsPage() {
  return (
    <>
      <PageIntro
        label="Documentation / 03"
        title="Start with the ideas."
        description="Introductory material for understanding EMC's design direction and current maturity. This is conceptual documentation—not a guide to a finished compiler."
      />
      <section className="wrap page-content docs-layout">
        <aside className="docs-sidebar" aria-label="On this page">
          <strong>ON THIS PAGE</strong>
          {toc.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </aside>
        <article className="docs-article">
          <section id="what-is-emc">
            <Eyebrow>01 / OVERVIEW</Eyebrow>
            <h2>What is EMC?</h2>
            <p>
              EMC is an early-stage programming language project. Its vision
              centers on three goals: high practical performance, strong memory
              safety, and adaptability to the hardware and resources available.
            </p>
            <p>
              The full compiler is not implemented. This site describes project
              intent and planned work, not a released toolchain.
            </p>
            <StatusTag tone="development">Early development</StatusTag>
          </section>
          <section id="principles">
            <Eyebrow>02 / DESIGN</Eyebrow>
            <h2>Language design principles</h2>
            <p>
              The project aims to treat performance and safety as complementary
              concerns, and to make resource-awareness part of the design
              conversation. Specific mechanisms, trade-offs, and language
              features still need to be established through implementation and
              evaluation.
            </p>
            <ul>
              <li>
                Prioritize practical performance without unsupported comparison
                claims.
              </li>
              <li>Make memory safety a central design objective.</li>
              <li>
                Explore adaptation while retaining predictable, understandable
                behavior.
              </li>
              <li>
                Validate design decisions against working implementations before
                calling them complete.
              </li>
            </ul>
          </section>
          <section id="memory-safety">
            <Eyebrow>03 / SAFETY</Eyebrow>
            <h2>Memory safety concepts</h2>
            <p>
              EMC intends to provide strong memory safety. The exact ownership,
              borrowing, lifetime, and allocation model has not been finalized
              or implemented. The terms here describe areas of design—not EMC
              language rules you can currently compile.
            </p>
            <p className="docs-note">
              No finalized syntax or compiler diagnostics are documented because
              they are not yet available.
            </p>
          </section>
          <section id="compiler">
            <Eyebrow>04 / IMPLEMENTATION</Eyebrow>
            <h2>Compiler architecture overview</h2>
            <p>
              A complete compiler commonly needs stages for source handling,
              lexical and syntactic analysis, semantic checks, intermediate
              representation, optimization, and target code generation. This is
              a high-level map of future work; it does not imply these stages
              currently exist in EMC.
            </p>
            <p>
              Bootstrap infrastructure and source-validation tooling are
              reported as existing. They should not be confused with a working
              lexer, parser, or native compiler.
            </p>
          </section>
          <section id="cpu-gpu">
            <Eyebrow>05 / HARDWARE</Eyebrow>
            <h2>CPU and GPU development direction</h2>
            <p>
              Native CPU code generation and optimization are future milestones.
              GPU execution is a longer-term area to investigate. No targets,
              operating-system support, hardware compatibility, or GPU backend
              are claimed here.
            </p>
            <StatusTag>Planned</StatusTag>
          </section>
          <section id="getting-started">
            <Eyebrow>06 / PARTICIPATE</Eyebrow>
            <h2>Getting started</h2>
            <p>
              There is no official EMC release to install yet. For now, read the{" "}
              <a className="text-link" href="/language">
                language vision
              </a>
              , review the{" "}
              <a className="text-link" href="/roadmap">
                roadmap
              </a>
              , and check the{" "}
              <a className="text-link" href="/status">
                current development status
              </a>
              . See{" "}
              <a className="text-link" href="/contributing">
                contributing
              </a>{" "}
              for ways to follow the project.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
