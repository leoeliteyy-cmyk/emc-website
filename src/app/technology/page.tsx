import type { Metadata } from "next";
import { PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Technology",
  description:
    "Planned architecture and research directions for the EMC programming language.",
};
const layers = [
  [
    "Compiler architecture",
    "A compiler pipeline could grow from source validation through lexing, parsing, semantic analysis, and later code generation. A working lexer, parser, or complete compiler is not available yet.",
    "Planned",
  ],
  [
    "Memory safety & ownership",
    "Memory safety is an EMC design goal. The ownership model, lifetime rules, diagnostics, and implementation strategy still need to be designed and built.",
    "Planned",
  ],
  [
    "Concurrency",
    "Safe and useful concurrency is an area for future language design. No concurrency model, scheduler, or runtime support is implemented.",
    "Planned",
  ],
  [
    "CPU optimization",
    "Native CPU code generation and optimization are future milestones. There are no verified targets, optimization passes, or performance results to report.",
    "Planned",
  ],
  [
    "GPU architecture",
    "GPU execution is a possible future expansion, not a current backend. Hardware interfaces, portability, and the programming model remain open design challenges.",
    "Long-term research",
  ],
  [
    "Adaptive resource intelligence",
    "The project aims to explore resource-aware execution. Any adaptive policy must be carefully measured and made predictable; none is implemented today.",
    "Research direction",
  ],
];
export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        label="Technology / 02"
        title="A considered architecture, not a promised shortcut."
        description="The outline below describes areas EMC may need to address over time. Every item is planned or exploratory: the full compiler, runtime, native backends, and GPU execution have not been implemented."
      />
      <section className="wrap page-content">
        <div className="content-grid">
          {layers.map(([title, text, status], i) => (
            <article className="surface-card" key={title}>
              <span className="card-index">0{i + 1} / SYSTEM LAYER</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <StatusTag>{status}</StatusTag>
            </article>
          ))}
        </div>
        <div className="callout">
          <span className="callout-mark" aria-hidden="true">
            ◇
          </span>
          <span>
            <strong>Current state:</strong> bootstrap infrastructure and
            source-validation tooling exist. They are not a working compiler
            pipeline. See{" "}
            <a className="text-link" href="/status">
              development status →
            </a>
          </span>
        </div>
      </section>
    </>
  );
}
