import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 04 — Identity as Dataset",
  description: "They Did Not Make This For You — Entry 04"
};

export default function Entry04Page() {
  return (
    <main className="spread spread--continuous" aria-label="Entry 04 — Identity as Dataset">
      <section className="page-left" aria-label="Historical artifact and context">
        <section className="entry-meta">
          <span className="entry-meta-line">ENTRY 04</span>
          <span className="entry-meta-line">DATE: 1950s–present</span>
          <span className="entry-meta-line">TYPE: Credit / risk system</span>
          <span className="entry-meta-line">USED FOR: Life chances / access</span>
        </section>
        <section className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">
            When records became permanent, the person became the profile.
          </div>
        </section>
        <header className="entry-header">
          <div className="entry-eyebrow">Identity Data</div>
          <div className="entry-title">
            Identity
            <br />
            as Dataset
          </div>
          <div className="entry-subtitle">
            Where the habit of scoring people began — and what it locked in
          </div>
        </header>

        <figure className="img-wrap" style={{ background: "#0a0a0a" }}>
          <img
            src="/images/consumer file.png"
            alt="Retail Credit Company consumer file — pre-FCRA era"
          />
        </figure>

        <div className="artifact-card">
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Artifact</span>
              <span className="ac-val bold">Consumer Credit File</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Date</span>
              <span className="ac-val">1899–1970 — Retail Credit Co. (now Equifax)</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">What it does</span>
              <span className="ac-val">
                compiles financial transactions, employer records, and
                neighborhood gossip into a permanent dossier — graded by clerks
                who never meet the subject
              </span>
            </div>
          </div>
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Used for</span>
              <span className="ac-val">
                deciding who gets credit, insurance, housing, and employment —
                the file follows you, but you cannot see it
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Claim</span>
              <span className="ac-val italic">
                objective risk assessment — protecting lenders from bad borrowers
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">
                Reality /
                <br />
                Who pays
              </span>
              <span className="ac-val heavy">
                moral judgments disguised as financial ones — marital status,
                race, neighborhood, and character hearsay determined your score
                before your payment history did
              </span>
            </div>
          </div>
        </div>

        <div className="context-section">
          <div className="cs-label">
            <div className="cs-label-text">
              Context /
              <br />
              How it
              <br />
              worked
            </div>
          </div>
          <div className="cs-body">
            <p>
              Before the algorithm, there was the ledger. The Retail Credit
              Company, founded in 1899, sent agents door to door to compile
              files on consumers. They recorded debts, but they also recorded
              drinking habits, marital disputes, political affiliations, and
              whether a wife worked outside the home. By 1960, they held files
              on millions of Americans.{" "}
              <em>Nobody had consented. Nobody could see their own file.</em>
            </p>
            <p>
              The FICO score, introduced in 1989, replaced the gossip with a
              formula. Three digits. No human judgment — only inputs and
              outputs. But the inputs still encoded the old logic:{" "}
              <em>
                who lives where, who owes what, who has been inside the system
                long enough to be trusted.
              </em>{" "}
              The formula made the discrimination invisible. That was the point.
            </p>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">1841</span>
            <div className="tl-dot" />
            <span className="tl-label">first mercantile credit agency</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">1899</span>
            <div className="tl-dot" />
            <span className="tl-label">Retail Credit Co. begins door-to-door files</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">1989</span>
            <div className="tl-dot" />
            <span className="tl-label">FICO score replaces human judgment</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">algorithmic scoring in every sector</span>
          </div>
        </div>
      </section>

      <section className="page-right" aria-label="Contemporary identity systems">
        <div className="right-body">
          <div className="body-main">
            <div className="the-rule">
              <div className="rule-label">The Rule</div>
              <div className="rule-text">
                The score does not describe who you are. It decides what you are
                <br />
                allowed to do.
              </div>
            </div>

            <p className="personal">
              You checked your credit score once and it felt like reading someone
              else&apos;s opinion of you — someone who had been watching for
              years and had never introduced themselves. Three digits. No
              appeal. The number moved when you weren&apos;t looking, and when
              it dropped, doors closed before you reached them.
            </p>

            <p>
              In 1970, Congress passed the Fair Credit Reporting Act because
              Retail Credit&apos;s files had become so powerful — and so
              inaccurate — that people were losing jobs and homes over rumors
              filed by strangers. The law gave consumers the right to see their
              files. It did not give them the right to escape the system.{" "}
              <em>The file became a score. The score became infrastructure.</em>
            </p>

            <figure className="right-artifact-wrap">
              <div className="credit-img-wrap">
                <img
                  src="/images/credit.png"
                  alt="Algorithmic risk assessment — pretrial/sentencing"
                  className="credit-img"
                />
              </div>
              <div className="artifact-card">
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Artifact</span>
                    <span className="ac-val bold">
                      Algorithmic Risk Assessment (COMPAS)
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Date</span>
                    <span className="ac-val">2000s–present — Northpointe / Equivant</span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">What it does</span>
                    <span className="ac-val">
                      scores defendants on 137 variables to predict recidivism —
                      used by judges at sentencing and bail hearings
                    </span>
                  </div>
                </div>
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Used for</span>
                    <span className="ac-val">
                      deciding who goes free and who stays in jail before trial —
                      the score replaces human judgment
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Claim</span>
                    <span className="ac-val italic">
                      objective, race-neutral prediction of future behavior
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">
                      Reality /
                      <br />
                      Who pays
                    </span>
                    <span className="ac-val heavy">
                      ProPublica found Black defendants scored high risk at
                      nearly twice the rate of white defendants — for the same
                      charge. The algorithm cannot be audited. The score cannot
                      be appealed.
                    </span>
                  </div>
                </div>
              </div>
            </figure>

            <p>
              The credit file became the FICO score. The FICO score became the
              model for everything. Now there are scores for insurance risk,
              tenant reliability, employee trustworthiness, parole eligibility,
              and welfare fraud probability.{" "}
              <em>
                Each score claims to predict the future. Each one encodes the
                past.
              </em>
            </p>

            <p>
              The Retail Credit agent knocked on your neighbor&apos;s door. The
              algorithm reads your zip code.{" "}
              <em>The method changed. The question is the same:</em> can this
              person be trusted? And the answer is always decided by someone who
              never meets you, using criteria you are not allowed to see.
            </p>

            <div className="pattern-block">
              <div className="pattern-label">
                The Pattern — how identity becomes a dataset
              </div>
              <div className="pattern-row">
                <div className="pattern-num">1</div>
                <div className="pattern-text">
                  <strong>Record</strong>Collect data points from behavior,
                  location, associations, transactions — anything that can be
                  logged becomes part of your profile.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">2</div>
                <div className="pattern-text">
                  <strong>Score</strong>Package those data points into a number.
                  The score does not describe who you are — it decides what you
                  are allowed to do.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">3</div>
                <div className="pattern-text">
                  <strong>Lock</strong>Make the record permanent. Past behavior
                  becomes future constraint. The score follows you, and you
                  cannot appeal it.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">4</div>
                <div className="pattern-text">
                  <strong>Decide</strong>Use the score to grant or deny access —
                  to credit, housing, jobs, freedom. The system decides who gets
                  to participate.
                </div>
              </div>
              <div className="pattern-conclusion">
                The score becomes your identity. The question is: who designed
                the algorithm?
              </div>
            </div>

            <div className="better-version">
              <div className="better-version-label">What Would a Better Version Look Like?</div>
              <p>
                What if you could see your score, understand how it was built,
                and appeal it — and the burden of proof fell on the system? What
                if credit and risk assessment centered the most marginalized
                users first — the ones who have been excluded by design? What if
                scores were temporary, contextual, and designed to be replaced
                when they fail?
              </p>
            </div>

            <div className="forward-thread">
              <div className="ft-label">What comes next</div>
              <div className="ft-text">
                The digression asks what happens when you recognize yourself in
                every entry — when the subject of the catalog is the person
                holding it.
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
                <li>{hasGlossaryEntry("credit scoring") ? <Link href={glossaryLink("credit scoring")} className="keyword-link">credit scoring</Link> : "credit scoring"}</li>
                <li>{hasGlossaryEntry("risk assessment") ? <Link href={glossaryLink("risk assessment")} className="keyword-link">risk assessment</Link> : "risk assessment"}</li>
                <li>redlining</li>
                <li>algorithmic justice</li>
                <li>{hasGlossaryEntry("the profile") ? <Link href={glossaryLink("the profile")} className="keyword-link">the profile</Link> : "the profile"}</li>
              </ul>
            </section>
            <EntrySources sources={ENTRY_SOURCES["ch1-entry04-identity-as-dataset"]} />
            <section className="see-also-block">
              <div className="see-also-label">SEE ALSO →</div>
              <div className="see-also-links">
                <Link href="/chapter-01/ch1-entry01-body-as-dataset">
                  Body as Dataset (Entry 01)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
                  Mind as Dataset (Entry 02)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                  Behavior as Dataset (Entry 03)
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
            <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
              ← Previous Entry 03 — Behavior as Dataset
            </Link>
          </span>
          <span className="tags">
            Ch. 1 / Entry 04 of 04 ·{" "}
            <Link href="/frontmatter/table-of-contents" className="contents-link">
              Contents
            </Link>
          </span>
          <span>
            <Link href="/chapter-01/ch1-reader-as-artifact">
              Next → Digression — Reader as Artifact
            </Link>
          </span>
        </nav>
      </section>
    </main>
  );
}
