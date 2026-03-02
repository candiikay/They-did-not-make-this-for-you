import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "How to Read This Catalog — They Did Not Make This For You",
  description: "How to Read This Catalog — They Did Not Make This For You"
};

export default function HowToReadPage() {
  return (
    <Spread className="spread--continuous spread--entry-style how-to-read">
      <PageLeft>
        <div className="page-content">
          <div className="section-title">
            How to Read
            <br />
            This Catalog
          </div>

          <div className="body-text">
            <p>This is not a traditional academic thesis.</p>
            <p>It is a visual reference book.</p>
            <p>
              Each chapter is made of short entries instead of long essays.
              Entries include images, diagrams, screenshots, archival material,
              and annotations in the margins.
            </p>
          </div>

          <div className="zine-card">
            <div className="label">Left Column</div>
            <div className="content">
              <p>
                Start here. The left column is your orientation station — it
                tells you <em>what</em> you&apos;re looking at before diving into{" "}
                <em>why</em> it matters.
              </p>
              <p>
                You&apos;ll find: the origin (where this system came from), the
                entry title and subtitle, and artifact cards — each with an
                image, a museum-style label (what it does, used for), and a
                claim vs. reality (what the system promises vs. what actually
                happens).
              </p>
              <p>
                <strong>How to navigate:</strong> Skim the origin and artifact
                cards first to get your bearings. The images and labels give you
                the quick facts; claim vs. reality sets up the questions the
                entry will explore.
              </p>
            </div>
          </div>

          <div className="zine-card zine-card-tilt-right">
            <div className="label">Right Column</div>
            <div className="content">
              <p>
                This is where the story unfolds. The right column does the heavy
                lifting — it&apos;s the essay part, but broken into digestible
                pieces.
              </p>
              <p>
                You&apos;ll find: a blueprint diagram (the same architecture
                across time), a lead paragraph, <em>The Rule</em> (one sentence
                that captures the core pattern), body text (how it works, who has
                power, who&apos;s visible or invisible), and <em>The Pattern</em>{" "}
                (the takeaway, broken into chunks).
              </p>
              <p>
                <strong>How to navigate:</strong> Read <em>The Rule</em> and the
                lead first — they give you the conceptual anchor. Then move
                through the body text at your own pace. <em>The Pattern</em> is
                your souvenir.
              </p>
            </div>
          </div>

          <div className="zine-card zine-card-tilt-left">
            <div className="label">Margin</div>
            <div className="content">
              <p>
                Think of the margin as your sidekick — it&apos;s always there,
                offering context, connections, and shortcuts.
              </p>
              <p>
                You&apos;ll find: <strong>Keywords</strong> (themes like
                &quot;surveillance&quot; or &quot;classification&quot; — some
                link to the glossary), <strong>Key Idea</strong> (the takeaway in
                one sentence), a <strong>Quote</strong> (a voice worth pausing
                on), <strong>Sources</strong> (citations to recommended reading),
                and <strong>See also</strong> (links to related entries).
              </p>
              <p>
                <strong>How to navigate:</strong> The margin is your shortcut
                lane. Use keywords to trace patterns across entries. Follow See
                also when you&apos;re curious about connections — hop around,
                follow threads, make your own path.
              </p>
            </div>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="section-label">What This Book Looks Like</div>
          <div className="body-text">
            <ul className="list">
              <li>
                <strong>Length:</strong> 60–80 pages
              </li>
              <li>
                <strong>Structure:</strong> 6 chapters + digressions
              </li>
              <li>
                <strong>Entries:</strong> 3–5 per chapter. This first edition
                includes 18 entries — enough for one semester of work, with room
                to grow in future versions.
              </li>
            </ul>
            <p>
              <strong>Visual style</strong> inspired by catalog publications:
            </p>
            <ul className="list">
              <li>Annotated images</li>
              <li>Keywords and sources in the margin</li>
              <li>Index-style layout</li>
              <li>Cross-referencing between entries (See also)</li>
              <li>
                <Link href="/backmatter/glossary">Glossary</Link> — keywords link
                to definitions
              </li>
            </ul>
          </div>

          <div className="section-label" style={{ marginTop: 30 }}>
            Each Entry Asks
          </div>
          <div className="body-text">
            <ul className="list">
              <li>What is this system?</li>
              <li>Who was it built for?</li>
              <li>How does it affect people?</li>
              <li>What would a better version look like?</li>
            </ul>
          </div>

          <div className="section-label" style={{ marginTop: 30 }}>
            Three Layers
          </div>
          <div className="body-text">
            <p>
              As in the Introduction, the catalog looks at three layers:
            </p>
            <ul className="list">
              <li>
                <strong>Personal impact</strong> — how systems shape daily life,
                identity, and relationships
              </li>
              <li>
                <strong>Structural logic</strong> — how systems are designed,
                funded, and maintained
              </li>
              <li>
                <strong>Emerging futures</strong> — where these technologies are
                going next
              </li>
            </ul>
            <p>
              This is not only critique. It is a way of learning how systems work
              so we can imagine better ones.
            </p>
          </div>

          <div className="section-label" style={{ marginTop: 30 }}>
            How to Navigate
          </div>
          <div className="body-text">
            <p>
              Entries can be read in any order. Cross-references connect related
              systems. Digressions are short reflective essays that connect
              themes across chapters.
            </p>
            <p>
              You do not need to read every paragraph in sequence. One simple
              path is: skim the left column first — origin, artifact cards — to
              get your bearings; then read <em>The Rule</em> and the lead on the
              right column; then move through the body text wherever your
              attention catches, using the margin&apos;s Keywords and See also to
              jump to related entries.
            </p>
            <p>
              The goal is clarity and curiosity — a book that someone interested
              in technology can actually read.
            </p>
          </div>
        </div>

        <NavFooter
          left={
            <Link href="/frontmatter/introduction">
              ← Previous Introduction
            </Link>
          }
          center={
            <>
              <Link href="/">Home</Link> ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </>
          }
          right={
            <Link href="/chapter-01/ch1-entry01-body-as-dataset">
              Next → Entry 01 — Body as Dataset
            </Link>
          }
        />
      </PageRight>
    </Spread>
  );
}
