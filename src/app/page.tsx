import Link from "next/link";
import { Eyebrow, StatusTag } from "@/components/site-shell";

const principles = [
  {
    number: "01",
    title: "Performance, in practice",
    text: "Pursue efficient execution as a first-class design goal, while measuring real results instead of promising benchmarks we do not yet have.",
  },
  {
    number: "02",
    title: "Safety, by design",
    text: "Make strong memory safety a central language goal—not a trade-off users have to remember to choose.",
  },
  {
    number: "03",
    title: "Adaptability, built in",
    text: "Explore how software can make considered use of the hardware and resources available to it.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <Eyebrow>A language project for what comes next</Eyebrow>
            <h1>
              Maximum Performance.
              <br />
              Maximum Safety.
              <br />
              <em>Maximum Adaptability.</em>
            </h1>
            <p className="hero-copy">
              EMC is an early-stage programming language project exploring how
              performance, memory safety, and adaptive execution can belong in
              the same design.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/language">
                Explore the language <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-outline" href="/docs">
                Read the docs <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hero-note">
              <span>Early development</span> · Full compiler not yet implemented
            </p>
          </div>
          <div
            className="hero-visual"
            role="img"
            aria-label="Abstract EMC mark with intersecting system orbits"
          >
            <div className="visual-orbit" />
            <div className="core-mark">
              E<span>.</span>
            </div>
            <div className="visual-chip chip-one">
              <span />
              SAFE BY DESIGN
            </div>
            <div className="visual-chip chip-two">
              <span />
              RESOURCE AWARE
            </div>
            <div className="visual-chip chip-three">
              <span />
              PERFORMANCE FOCUSED
            </div>
            <div className="visual-caption">
              <strong>Three priorities. One language.</strong>Exploring a
              different balance.
            </div>
            <div className="visual-index">EMC / 001</div>
          </div>
        </div>
      </section>
      <section className="section section-border">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>The design intent</Eyebrow>
              <h2>
                Three principles.
                <br />
                One direction.
              </h2>
            </div>
            <p>
              These are the ambitions guiding EMC—not claims about capabilities
              already delivered. Each is a hard problem worth approaching
              honestly.
            </p>
          </div>
          <div className="principle-grid">
            {principles.map((item) => (
              <article className="principle-card" key={item.number}>
                <span className="card-index">{item.number} / PRINCIPLE</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <StatusTag>Design goal</StatusTag>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-border">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>Explore EMC</Eyebrow>
              <h2>
                Built on clear intent.
                <br />
                Still being built.
              </h2>
            </div>
            <Link className="text-link" href="/status">
              See the project status <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="content-grid three">
            <Link className="surface-card" href="/technology">
              <span className="card-index">01 / ARCHITECTURE</span>
              <h3>Technology</h3>
              <p>
                A high-level view of the systems EMC hopes to explore, with
                planned work clearly marked.
              </p>
              <StatusTag>Planned</StatusTag>
            </Link>
            <Link className="surface-card" href="/roadmap">
              <span className="card-index">02 / DEVELOPMENT</span>
              <h3>Roadmap</h3>
              <p>
                From infrastructure to a long-term self-hosting goal—an outline,
                not a delivery schedule.
              </p>
              <StatusTag>Planned</StatusTag>
            </Link>
            <Link className="surface-card" href="/docs">
              <span className="card-index">03 / LEARN</span>
              <h3>Documentation</h3>
              <p>
                Understand the project&apos;s goals and current boundaries
                without relying on invented syntax.
              </p>
              <StatusTag>Introductory</StatusTag>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-border">
        <div className="wrap status-strip">
          <div className="status-strip-intro">Where EMC stands today</div>
          <div className="status-strip-item">
            <i />
            <b>Early development</b>
          </div>
          <div className="status-strip-item">
            <i />
            <span>Compiler not implemented</span>
          </div>
          <div className="status-strip-item">
            <i />
            <Link href="/status">
              Full status <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
