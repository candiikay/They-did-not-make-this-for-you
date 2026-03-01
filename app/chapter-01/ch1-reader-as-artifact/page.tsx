import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Digression — Reader as Artifact — They Did Not Make This For You",
  description: "They Did Not Make This For You — Reader as Artifact"
};

export default function ReaderAsArtifactPage() {
  return (
    <Spread className="spread--continuous">
      <PageLeft>
        <div className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">You are already in the archive.</div>
        </div>

        <div className="entry-header">
          <div className="entry-eyebrow">You</div>
          <div className="entry-title">
            Reader
            <br />
            as Artifact
          </div>
          <div className="entry-subtitle">
            The subject of every previous entry is the person holding this one
          </div>
        </div>

        <div className="img-wrap-empty">
          <span className="empty-label">
            [ no image available — subject is present ]
          </span>
        </div>

        <div className="artifact-card-full">
          <div className="acf-row">
            <span className="ac-key">Artifact</span>
            <span className="ac-val bold">You</span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Date</span>
            <span className="ac-val">
              ongoing — no expiration, no opt-out
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Medium</span>
            <span className="ac-val">
              body, behavior, attention, identity — recorded across platforms
              you chose and ones you didn&apos;t
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Classified by</span>
            <span className="ac-val">
              face (Entry 01) — your body measured, sorted, compared against a
              norm you did not set
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Shaped by</span>
            <span className="ac-val">
              feed (Entry 02) — your attention captured by variable reward, your
              habits engineered without disclosure
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Tracked by</span>
            <span className="ac-val">
              output (Entry 03) — your labor monitored in keystrokes, idle
              time, pace — the body as efficiency variable
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Scored by</span>
            <span className="ac-val">
              profile (Entry 04) — your past collapsed into a number that
              decides your future before you arrive
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Used for</span>
            <span className="ac-val blank">— see above. see all of it.</span>
          </div>
          <div className="acf-row">
            <span className="ac-key">Claim</span>
            <span className="ac-val italic">
              personalization. convenience. safety. objectivity. progress.
            </span>
          </div>
          <div className="acf-row">
            <span className="ac-key">
              Reality /
              <br />
              Who pays
            </span>
            <span className="ac-val heavy">
              you do. You already have. You are paying right now, and the
              receipt is in a system you cannot access.
            </span>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">born</span>
            <div className="tl-dot" />
            <span className="tl-label">name entered into a database</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">~13</span>
            <div className="tl-dot" />
            <span className="tl-label">
              first account created — tracking begins
            </span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">~18</span>
            <div className="tl-dot" />
            <span className="tl-label">
              credit file opened — scoring begins
            </span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">reading this</span>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="right-body-full">
          <div className="the-rule">
            <div className="rule-label">The Rule</div>
            <div className="rule-text">
              You were not asked. You were not
              <br />
              informed. You were not the customer.
              <br />
              Now you know.
            </div>
          </div>

          <div className="reflection">
            <p>This is not the part where I tell you what to do.</p>

            <p>
              I could tell you to delete your accounts. To use a VPN. To pay
              with cash, opt out of data sharing, read the terms of service,
              switch to Linux, cover your webcam. Some of that is useful. None
              of it is the point.
            </p>

            <p>
              The point is that{" "}
              <strong>
                every system described in this chapter was built by someone, for
                someone, and you were not in the room
              </strong>
              . Your body was measured without your knowledge. Your attention
              was engineered without your consent. Your labor was optimized
              without your input. Your identity was scored without your
              participation. These are not four separate problems. They are one
              habit, applied four times.
            </p>

            <p>
              The habit is this:{" "}
              <em>reduce a person to data, and the person becomes manageable.</em>
            </p>

            <p>
              I wrote this because I kept thumbing up everything. Liking posts I
              didn&apos;t read. Accepting terms I didn&apos;t understand.
              Scanning my face to unlock a phone I&apos;d already picked up
              eleven times that hour. I wasn&apos;t making choices. I was
              performing compliance inside a system that had learned exactly how
              to ask.
            </p>

            <p>
              The word <em>discretion</em> means two things. It means the
              freedom to decide. And it means the quality of being careful about
              what you reveal. Both definitions matter here. Both have been
              taken from you so gradually that the loss felt like convenience.
            </p>

            <p>
              This chapter asked: <em>who was this built for?</em>
            </p>

            <p>
              You now have enough information to answer that question. What you
              do with the answer is the first decision in this book that is
              entirely yours.
            </p>
          </div>

          <div className="forward-thread">
            <div className="ft-label">What comes next</div>
            <div className="ft-text">
              Chapter 2 asks how these systems talk to each other — how the data
              from your body, your mind, your labor, and your identity flows
              between institutions, and what happens when it merges.
            </div>
          </div>

          <EntrySources sources={ENTRY_SOURCES["ch1-reader-as-artifact"]} />
        </div>

        <NavFooter
          left={
            <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
              ← Previous Entry 04 — Identity as Dataset
            </Link>
          }
          center={
            <>
              Ch. 1 / Reader as Artifact ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </>
          }
          right={
            <Link href="/chapter-01/recommended-reading">
              Next → Recommended Reading — Chapter 1
            </Link>
          }
        />
      </PageRight>
    </Spread>
  );
}

