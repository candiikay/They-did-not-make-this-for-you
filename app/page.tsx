import Link from "next/link";

export default function HomePage() {
  return (
    <div className="cover-container">
      <div className="cover">
        <div className="cover-grid" aria-hidden="true" />
        <div className="cover-content">
          <div className="cover-title">
            <h1 className="title-main">
              They Did Not
              <br />
              Make This
              <br />
              For You
            </h1>
            <p className="title-subtitle">
              A Catalog of Systems We Live Inside
            </p>
          </div>
          <div className="cover-author">Candace Stewart</div>
          <div className="cover-entry">
            <Link href="/frontmatter/preface" className="cover-link">
              Begin Reading →
            </Link>
            <Link
              href="/frontmatter/how-to-read"
              className="cover-link cover-link--secondary"
            >
              How to Read This Catalog
            </Link>
          </div>
        </div>
        <div className="cover-meta">
          <span className="meta-item">2026</span>
          <span className="meta-item">6 Chapters</span>
          <span className="meta-item">19 Entries · First Edition</span>
        </div>
      </div>
    </div>
  );
}
