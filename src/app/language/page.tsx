import type { Metadata } from "next";
import { PageIntro, StatusTag } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "The language",
  description:
    "The vision and design goals behind EMC, an early-stage programming language project.",
};
const goals = [
  [
    "Practical performance",
    "Efficiency is a design priority. EMC aims to make strong performance practical, but no compiler, benchmark suite, or comparative performance claim is presented here as complete.",
    "A goal",
  ],
  [
    "Strong memory safety",
    "Memory safety is central to the language's intended design. The concrete ownership model and its rules remain design work; there is no finished implementation to use today.",
    "In design",
  ],
  [
    "Adaptive execution",
    "EMC explores the idea of adapting work to available hardware and resources. The scope, policy, and mechanisms are still future research and implementation work.",
    "Planned",
  ],
  [
    "Modern programming",
    "The project seeks to support expressive, reliable software development. Specific language features and syntax are not finalized and should not be inferred from this vision statement.",
    "A goal",
  ],
];
export default function LanguagePage() {
  return (
    <>
      <PageIntro
        label="Language / 01"
        title="A different balance for systems software."
        description="EMC's vision is to bring practical performance, strong memory safety, and adaptive behavior into a modern programming language. These remain goals—not a list of finished compiler features."
      />
      <section className="wrap page-content">
        <div className="content-grid">
          {goals.map(([title, text, status], i) => (
            <article className="surface-card" key={title}>
              <span className="card-index">0{i + 1} / DESIGN GOAL</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <StatusTag>{status}</StatusTag>
            </article>
          ))}
          <article className="surface-card wide-card">
            <span className="card-index">LONG-TERM DIRECTION</span>
            <h3>An independent, self-hosting compiler</h3>
            <p>
              A future aspiration is for EMC to compile itself. That depends on
              many foundational milestones first; self-hosting is not an
              implemented capability or a near-term promise.
            </p>
            <StatusTag>Long-term goal</StatusTag>
          </article>
        </div>
      </section>
    </>
  );
}
