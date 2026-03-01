import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 05 — Location Tracking",
  description: "They Did Not Make This For You — Entry 05"
};

export default function Ch2Entry04Page() {
  return (
    <main
      className="spread spread--continuous"
      aria-label="Entry 05 — Location Tracking"
    >
      <section className="page-left" aria-label="Historical artifact and context">
        <section className="entry-meta">
          <span className="entry-meta-line">ENTRY 05</span>
          <span className="entry-meta-line">DATE: 2000s–present</span>
          <span className="entry-meta-line">TYPE: Location data system</span>
          <span className="entry-meta-line">USED FOR: Advertising / surveillance</span>
        </section>
        <section className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">
            When your phone learned where you were, every app learned where you
            were. The data did not stay in one place.
          </div>
        </section>
        <header className="entry-header">
          <div className="entry-eyebrow">Data Flows</div>
          <div className="entry-title">
            Location
            <br />
            Tracking
          </div>
          <div className="entry-subtitle">
            How the data from your body, mind, labor, and identity flows between
            institutions — and what happens when it merges
          </div>
        </header>

        <figure className="img-wrap-empty">
          <span className="empty-label">
            [ image coming — location tracking systems ]
          </span>
        </figure>

        <div className="artifact-card">
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Artifact</span>
              <span className="ac-val bold">GPS + Cell Tower Triangulation</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Date</span>
              <span className="ac-val">2000s–present — smartphones, apps, ad networks</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">What it does</span>
              <span className="ac-val">
                records where you are, how long you stay, where you go next —
                shared with apps, advertisers, and data brokers
              </span>
            </div>
          </div>
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Used for</span>
              <span className="ac-val">
                targeted advertising, foot traffic analytics, risk scoring,
                law enforcement requests
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Claim</span>
              <span className="ac-val italic">
                convenience — better maps, local recommendations, safety features
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">
                Reality /
                <br />
                Who pays
              </span>
              <span className="ac-val heavy">
                location data is sold, shared, and subpoenaed — you cannot see
                who has it or what they infer from it
              </span>
            </div>
          </div>
        </div>

        <div className="context-section">
          <div className="cs-label">
            <span className="cs-label-text">
              How the
              <br />
              Pipes
              <br />
              Connect
            </span>
          </div>
          <div className="cs-body">
            <p>
              Chapter 1 asked who each system was built for. Chapter 2 asks how
              they talk to each other. Your body was measured (Entry 01). Your
              attention was shaped (Entry 02). Your labor was optimized (Entry
              03). Your identity was scored (Entry 04). Now add: your location is
              logged, and it flows between every system that has ever asked for
              it.
            </p>
            <p>
              The same phone that tracks your face tracks where you go. The same
              apps that shape your feed sell your location to data brokers. The
              same platforms that score your credit can infer where you live,
              work, and worship from the signals you leave behind.{" "}
              <em>The systems were built separately. The data merges anyway.</em>
            </p>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">2000s</span>
            <div className="tl-dot" />
            <span className="tl-label">GPS in consumer devices</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">2010s</span>
            <div className="tl-dot" />
            <span className="tl-label">apps request location by default</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">2020s</span>
            <div className="tl-dot" />
            <span className="tl-label">location sold to brokers, law enforcement</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">data flows between systems you never chose</span>
          </div>
        </div>
      </section>

      <section className="page-right" aria-label="Location tracking and data flows">
        <div className="right-body">
          <div className="body-main">
            <div className="the-rule">
              <div className="rule-label">The Rule</div>
              <div className="rule-text">
                If one system knows where you are,
                <br />
                every system that buys from it does too.
              </div>
            </div>

            <p className="personal">
              You turned on location for the map. For the weather. For the
              restaurant recommendations. You did not turn it on for the data
              broker, the advertiser, or the prosecutor. But the same toggle
              fed all of them. The systems were not built to ask.
            </p>

            <p>
              Location data is the connective tissue between the systems in this
              catalog. Your phone knows where you sleep, work, and worship. Ad
              networks use that to infer your income, your health, your
              politics. Credit scorers use it to redline. Employers use it to
              monitor. Law enforcement buys it from brokers who never had to ask
              your permission.{" "}
              <em>
                The data from Entry 01, 02, 03, and 04 flows through the same
                pipes. Location is the map.
              </em>
            </p>

            <div className="key-idea">
              <div className="key-idea-label">Key Idea</div>
              <p>
                Systems that were built separately now share your data without
                your knowledge. You cannot consent to what you cannot see. The
                question is not whether you use the app — it is who else the app
                uses you for.
              </p>
            </div>

            <div className="better-version">
              <div className="better-version-label">
                What Would a Better Version Look Like?
              </div>
              <p>
                What if location data stayed on your device unless you explicitly
                shared it — and you could see who had access and revoke it? What
                if data brokers could not buy or sell location without consent?
                What if the default was off, and every request had to justify
                itself? What if you could ask: who has my location right now?
              </p>
            </div>

            <div className="forward-thread">
              <div className="ft-label">What comes next</div>
              <div className="ft-text">
                Entry 06 asks what happens when the camera moves inside — when
                the home becomes a data collection site and the watcher is always
                on.
              </div>
            </div>
          </div>

          <aside className="margin-col" aria-label="Keywords and cross-references">
            <section className="keywords-block">
              <div className="keywords-glossary-prompt">
                <Link href="/backmatter/glossary" className="keywords-glossary-link">
                  Visit the glossary →
                </Link>
              </div>
              <h2 className="keywords-label">KEYWORDS</h2>
              <ul className="keywords-list">
                <li>location data</li>
                <li>data brokers</li>
                <li>{hasGlossaryEntry("surveillance") ? <Link href={glossaryLink("surveillance")} className="keyword-link">surveillance</Link> : "surveillance"}</li>
                <li>{hasGlossaryEntry("data flows") ? <Link href={glossaryLink("data flows")} className="keyword-link">data flows</Link> : "data flows"}</li>
                <li>ad targeting</li>
              </ul>
            </section>
            <EntrySources sources={ENTRY_SOURCES["ch2-entry04-location-tracking"]} />
            <section className="see-also-block">
              <div className="see-also-label">SEE ALSO →</div>
              <div className="see-also-links">
                <Link href="/chapter-01/ch1-entry01-body-as-dataset">
                  Body as Dataset (Entry 01)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                  Identity as Dataset (Entry 04)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-reader-as-artifact">
                  Reader as Artifact
                </Link>
              </div>
            </section>
          </aside>
        </div>

        <nav className="nav-footer" aria-label="Entry navigation">
          <span>
            <Link href="/chapter-01/recommended-reading">
              ← Previous Recommended Reading — Chapter 1
            </Link>
          </span>
          <span className="tags">
            Ch. 2 / Entry 01 of 03 ·{" "}
            <Link href="/frontmatter/table-of-contents" className="contents-link">
              Contents
            </Link>
          </span>
          <span>Next → (coming soon)</span>
        </nav>
      </section>
    </main>
  );
}
