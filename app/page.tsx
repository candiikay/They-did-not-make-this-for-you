export default function HomePage() {
  return (
    <main className="spread">
      <div className="page-left">
        <div className="top-strip">
          <span>They Did Not Make This For You</span>
          <span>Digital Edition</span>
        </div>
        <div className="origin-header">
          <div className="origin-label">Start</div>
          <div className="origin-text">
            Begin with Chapter 1 — Who Was This Built For?
          </div>
        </div>
        <div className="entry-header">
          <div className="entry-eyebrow">Enter</div>
          <div className="entry-title">They Did Not Make This For You</div>
          <div className="entry-subtitle">
            A digital book about systems that were not built with you in mind.
          </div>
        </div>
        <div className="page-footer">
          <span>They Did Not Make This For You — Candace Stewart, 2026</span>
          <span>continued →</span>
        </div>
      </div>
      <div className="page-right">
        <div className="top-strip">
          <span>Navigate</span>
          <span>Next</span>
        </div>
        <div className="right-body-full">
          <div className="the-rule">
            <div className="rule-label">How to read</div>
            <div className="rule-text">
              Choose any entry, but know that every system here connects to the
              others.
            </div>
          </div>
          <div className="forward-thread">
            <div className="ft-label">First stop</div>
            <div className="ft-text">
              Start with Chapter 1 — Reader as Artifact to see yourself as part
              of the archive.
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <span>
            <a href="/chapter-01/ch1-reader-as-artifact">→ Reader as Artifact</a>
          </span>
          <span className="tags">
            Home ·{" "}
            <a href="/pages/frontmatter/table-of-contents.html" className="contents-link">
              Contents
            </a>
          </span>
          <span />
        </div>
      </div>
    </main>
  );
}

