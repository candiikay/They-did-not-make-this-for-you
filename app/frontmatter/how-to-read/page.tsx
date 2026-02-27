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
    <Spread className="spread--continuous">
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
                Start here. The left page is your orientation station — it tells
                you <em>what</em> you&apos;re looking at before diving into{" "}
                <em>why</em> it matters.
              </p>
              <p>
                You&apos;ll find: the origin story (where this system came from),
                the title and subtitle, a big image that shows the system in
                action, an artifact card (like a museum label), a timeline of key
                moments, and a context section that explains why this belongs in
                the catalog.
              </p>
              <p>
                <strong>How to navigate:</strong> Skim this first to get your
                bearings. The image and artifact card give you the quick facts;
                the timeline shows you it&apos;s not static; the context sets up
                the questions the entry will explore.
              </p>
            </div>
          </div>

          <div className="zine-card zine-card-tilt-right">
            <div className="label">Right Column</div>
            <div className="content">
              <p>
                This is where the story unfolds. The main column on the right
                page does the heavy lifting — it&apos;s the essay part, but
                broken into digestible pieces.
              </p>
              <p>
                You&apos;ll find: <em>The Rule</em> (one sentence that captures
                the core pattern), a personal reflection (what it feels like to
                move through this system), body paragraphs (how it works, who has
                power, who&apos;s visible or invisible), a <em>Key Idea</em> (the
                takeaway), <em>What Would a Better Version Look Like?</em> (a
                provocation, not a blueprint), and a <em>Forward Thread</em> (where
                this connects to other entries).
              </p>
              <p>
                <strong>How to navigate:</strong> Read <em>The Rule</em> and the
                reflection first — they give you the emotional and conceptual
                anchor. Then move through the body text at your own pace. The{" "}
                <em>Key Idea</em> is your souvenir; the <em>Forward Thread</em>{" "}
                is your next destination.
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
                You&apos;ll find: catalog tags (themes like &quot;surveillance&quot;
                or &quot;friction&quot; that appear across entries), pull quotes
                (sentences worth pausing on), and index tags (links to related
                entries, chapters, or digressions).
              </p>
              <p>
                <strong>Visit the glossary as you read.</strong> Each entry has a
                &quot;Visit the glossary&quot; link in the margin. The keywords
                that appear there link to the glossary — use it to trace how the
                same pattern appears across body, mind, labor, and identity.
              </p>
              <p>
                <strong>How to navigate:</strong> Use the tags to jump between
                related entries. Read pull quotes when you want to slow down.
                Follow index tags when you&apos;re curious about connections.
                The margin is your permission to read non-linearly — hop around,
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
            <p>
              <strong>Length:</strong> 60–80 pages
            </p>
            <p>
              <strong>Structure:</strong> 6 chapters + digressions
            </p>
            <p>
              <strong>Entries:</strong> 3–5 per chapter. This first edition
              includes 18 entries — enough for one semester of work, with room
              to grow in future versions.
            </p>
            <p>
              <strong>Visual style</strong> inspired by catalog publications:
            </p>
            <ul className="list">
              <li>Annotated images</li>
              <li>Side notes and references</li>
              <li>Index-style layout</li>
              <li>Cross-referencing between entries</li>
              <li>
                <Link href="/backmatter/glossary">Glossary</Link> — visit as you
                read to trace the pattern
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
            <p>Across every chapter, the catalog looks at:</p>
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
              path is: skim the left page first — origin, image, artifact card,
              timeline — to get your bearings; then read <em>The Rule</em>, the
              personal reflection, and the <em>Key Idea</em> on the right page;
              then move through the body text wherever your attention catches,
              using the margin tags and forward threads to jump to related
              entries.
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
