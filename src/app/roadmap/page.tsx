import type { Metadata } from "next";
import { PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Planned development stages for the EMC programming language. No release dates are promised.",
};
const stages = [
  "Foundation and infrastructure",
  "Lexer and parser",
  "Semantic analysis and type system",
  "Intermediate representation",
  "Optimization",
  "Native code generation",
  "Runtime and standard library",
  "Self-hosting compiler",
  "CPU and GPU expansion",
];
export default function RoadmapPage() {
  return (
    <>
      <PageIntro
        label="Roadmap / 04"
        title="A long journey, in clear stages."
        description="The sequence below is a high-level development outline, not a schedule or promise. No release dates are set, and planned milestones should not be read as completed features."
      />
      <section className="wrap page-content">
        <div className="roadmap-list">
          {stages.map((stage, i) => (
            <article className="roadmap-item" key={stage}>
              <div className="roadmap-title">
                <h3>
                  {String(i + 1).padStart(2, "0")}. {stage}
                </h3>
                <StatusTag tone={i === 0 ? "development" : "planned"}>
                  {i === 0 ? "Foundation work" : "Planned"}
                </StatusTag>
              </div>
              <p>
                {i === 0
                  ? "Initial bootstrap infrastructure and source-validation tooling are reported to exist; the full compiler is not implemented."
                  : i === 7
                    ? "A long-term aspiration that depends on a complete and capable compiler foundation."
                    : i === 8
                      ? "Future exploration after core compiler and runtime foundations mature."
                      : "A future milestone. Implementation and verification remain ahead."}
              </p>
            </article>
          ))}
        </div>
        <div className="callout">
          <span className="callout-mark" aria-hidden="true">
            ◇
          </span>
          <span>
            <strong>No dates or versions:</strong> stages are intentionally
            presented without deadlines or release promises.
          </span>
        </div>
      </section>
    </>
  );
}
