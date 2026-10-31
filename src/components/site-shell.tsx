import Link from "next/link";

const links = [
  { href: "/language", label: "Language" },
  { href: "/technology", label: "Technology" },
  { href: "/docs", label: "Docs" },
  { href: "/roadmap", label: "Roadmap" },
];

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="EMC home">
      <span className="wordmark-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        emc<span className="wordmark-period">.</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="nav-status" href="/status">
            <span className="status-dot" /> Early development
          </Link>
          <Link
            className="button button-small button-outline nav-cta"
            href="/language"
          >
            Explore EMC <span aria-hidden="true">↗</span>
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/status">Development status</Link>
              <Link href="/language">Explore EMC</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Wordmark />
          <p>Performance, safety, and adaptability—designed together.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/language">Language</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/roadmap">Roadmap</Link>
          </div>
          <div>
            <span className="footer-label">Resources</span>
            <Link href="/docs">Documentation</Link>
            <Link href="/status">Development status</Link>
            <Link href="/download">Downloads</Link>
          </div>
          <div>
            <span className="footer-label">Community</span>
            <Link href="/contributing">Contributing</Link>
            <a
              href="https://github.com/leoeliteyy-cmyk/emc-website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© EMC. An early-stage language project.</span>
        <span>Ambition, with an honest status.</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </p>
  );
}

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </section>
  );
}

export function StatusTag({
  children,
  tone = "planned",
}: {
  children: React.ReactNode;
  tone?: "planned" | "development" | "verified";
}) {
  return (
    <span className={`tag tag-${tone}`}>
      <span aria-hidden="true" />
      {children}
    </span>
  );
}
