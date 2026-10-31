import type { Metadata } from "next";
import { PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Development status",
  description:
    "A transparent snapshot of EMC's early development stage and unimplemented compiler capabilities.",
};
const items = [
  [
    "Project maturity",
    "Early development",
    "This is an early-stage language project.",
  ],
  [
    "Bootstrap infrastructure",
    "Reported in place",
    "Initial infrastructure exists; it is not the full compiler.",
  ],
  [
    "Source-validation tooling",
    "Reported in place",
    "Validation tooling exists; this does not establish a working language implementation.",
  ],
  [
    "Lexer and parser",
    "Not implemented",
    "No working lexer or parser is claimed.",
  ],
  [
    "Semantic analysis and type system",
    "Planned",
    "No completed semantic or type-checking implementation is claimed.",
  ],
  [
    "Native code generation",
    "Not implemented",
    "No native code generation is available.",
  ],
  [
    "Runtime and standard library",
    "Planned",
    "No production-ready runtime or library is claimed.",
  ],
  [
    "GPU execution",
    "Not implemented",
    "No GPU backend or execution support is claimed.",
  ],
  [
    "Self-hosting compiler",
    "Long-term goal",
    "The compiler does not compile itself.",
  ],
  [
    "Official release",
    "Unavailable",
    "EMC has not been officially released; downloads are unavailable.",
  ],
];
export default function StatusPage() {
  return (
    <>
      <PageIntro
        label="Project status / 05"
        title="Early stage. Clearly stated."
        description="EMC is in early development. Initial bootstrap infrastructure and source-validation tooling exist, but the full compiler is not yet implemented. Here is what that means in practical terms."
      />
      <section className="wrap page-content">
        <div className="status-panel">
          <div className="status-panel-head">
            <h2>Capability snapshot</h2>
            <StatusTag tone="development">Early development</StatusTag>
          </div>
          {items.map(([name, state, detail]) => (
            <div className="status-row" key={name}>
              <strong>{name}</strong>
              <StatusTag
                tone={
                  state.includes("Reported")
                    ? "verified"
                    : state === "Early development"
                      ? "development"
                      : "planned"
                }
              >
                {state}
              </StatusTag>
              <p>{detail}</p>
            </div>
          ))}
        </div>
        <div className="callout">
          <span className="callout-mark" aria-hidden="true">
            ◇
          </span>
          <span>
            <strong>Evidence over implication:</strong> “Reported in place” is
            limited to the project information available for this site; it does
            not imply independent verification of a complete compiler feature.
          </span>
        </div>
      </section>
    </>
  );
}
