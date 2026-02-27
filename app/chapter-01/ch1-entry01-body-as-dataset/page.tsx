import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 01 — The Body as Dataset",
  description: "They Did Not Make This For You — Entry 01"
};

export default function Entry01Page() {
  return (
    <main className="spread spread--continuous" aria-label="Entry 01 — The Body as Dataset">
      <section className="page-left" aria-label="Historical artifact and context">
        <section className="entry-meta">
          <span className="entry-meta-line">ENTRY 01</span>
          <span className="entry-meta-line">DATE: 1879–1905</span>
          <span className="entry-meta-line">TYPE: Measurement system</span>
          <span className="entry-meta-line">USED FOR: Identification</span>
        </section>
        <section className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">
            When the state learned to make bodies legible, it made some bodies
            suspicious. Classification grew from policing, medicine, colonial
            census systems, and industrial efficiency — not from one place, but
            from the same habit.
          </div>
        </section>
        <header className="entry-header">
          <div className="entry-eyebrow">Training Data</div>
          <div className="entry-title">
            The Body
            <br />
            as Dataset
          </div>
          <div className="entry-subtitle">
            How systems inherit the assumptions of their makers
          </div>
        </header>

        <figure className="img-wrap">
          <img
            src="/images/Bertrillon.jpg"
            alt="Bertillon anthropometric measurement system"
          />
          <figcaption className="img-wrap-caption">
            <span className="img-wrap-caption-main">
              BERTILLON ANTHROPOMETRIC SYSTEM — Paris Prefecture of Police, 1879
            </span>
            <span className="img-wrap-caption-sub">
              Eleven body parts measured to build a numeric identity profile
            </span>
          </figcaption>
        </figure>

        <div className="artifact-card">
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Artifact</span>
              <span className="ac-val bold">Bertillon Anthropometric System</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Date</span>
              <span className="ac-val">1879–1910s, Paris</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">What it does</span>
              <span className="ac-val">
                measures 11 body parts — head length, arm span, ear size, foot
                length — to build a numeric identity profile for each subject
              </span>
            </div>
          </div>
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Used for</span>
              <span className="ac-val">
                building a police database to identify repeat offenders —
                exported to forces across Europe and the US by 1903
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Claim</span>
              <span className="ac-val italic">
                scientific measurement removes bias from identification
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">
                Reality /
                <br />
                Who pays
              </span>
              <span className="ac-val heavy">
                measurement started with people already labeled suspicious —
                errors and surveillance fell disproportionately on poor,
                immigrant, and colonized populations
              </span>
            </div>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">1879</span>
            <div className="tl-dot" />
            <span className="tl-label">bodies measured for policing</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">1900s</span>
            <div className="tl-dot" />
            <span className="tl-label">standards become infrastructure</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">2018</span>
            <div className="tl-dot" />
            <span className="tl-label">audits reveal who models ignore</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">identity + access decided by scores</span>
          </div>
        </div>
      </section>

      <section className="page-right" aria-label="Contemporary classification systems">
        <div className="right-body">
          <div className="body-main">
            <div className="the-rule">
              <div className="rule-label">The Rule</div>
              <div className="rule-text">
                Many systems inherit a default body.
                <br />
                Everyone else becomes the error rate.
              </div>
            </div>

            <p className="personal">
              Nobody announced that certain bodies would be the template for how
              systems learn to see. It just happened — in the archives
              researchers drew from, in the labs that built the tools, in the
              datasets that trained the models. This catalog is about making
              that visible.
            </p>

            <figure className="right-img-wrap">
              <img
                src="/images/JoyBuolamwini.jpg"
                alt="Joy Buolamwini Gender Shades audit"
              />
              <div className="right-artifact-card">
                <div className="rac-col">
                  <div className="rac-row">
                    <span className="rac-key">Artifact</span>
                    <span className="rac-val bold">Gender Shades Audit</span>
                  </div>
                  <div className="rac-row">
                    <span className="rac-key">Date</span>
                    <span className="rac-val">2018, MIT Media Lab</span>
                  </div>
                  <div className="rac-row">
                    <span className="rac-key">What it does</span>
                    <span className="rac-val">
                      tests three commercial facial recognition APIs on 1,270
                      faces across gender and the Fitzpatrick skin tone scale
                    </span>
                  </div>
                </div>
                <div className="rac-col">
                  <div className="rac-row">
                    <span className="rac-key">Used for</span>
                    <span className="rac-val">
                      evaluating whether AI systems classify people equally
                      across groups
                    </span>
                  </div>
                  <div className="rac-row">
                    <span className="rac-key">Claim</span>
                    <span className="rac-val italic">
                      facial recognition works accurately across all users
                    </span>
                  </div>
                  <div className="rac-row">
                    <span className="rac-key">
                      Reality /
                      <br />
                      Who pays
                    </span>
                    <span className="rac-val heavy">
                      error rates up to 34% for darker-skinned women vs. under
                      1% for lighter-skinned men — in the same system
                    </span>
                  </div>
                </div>
              </div>
            </figure>

            <p>
              Joy Buolamwini put on a white mask and the camera found her face.
              Without it, the system looked right through her. That is not a
              metaphor.{" "}
              <em>
                That is the system working exactly as designed — for someone
                else.
              </em>{" "}
              One hundred and thirty-nine years after Bertillon, the same logic:
              one body as the norm, everyone else as deviation.
            </p>

            <div className="key-idea">
              <div className="key-idea-label">Key Idea</div>
              <p>
                Classification systems inherit the biases of the world that
                built them. You cannot audit your way out of a biased archive.
                You have to ask who was in it — and who decided that was enough.
              </p>
            </div>

            <div className="pull-quote">
              <span className="pq-quote">
                &quot;Datasets are not neutral. They are constructed. They
                reflect the values, priorities, and blind spots of their
                creators.&quot;
              </span>
              <span className="pq-attr">— Kate Crawford, Atlas of AI</span>
            </div>

            <div className="better-version">
              <div className="better-version-label">What Would a Better Version Look Like?</div>
              <p>
                What if biometric systems were built by and for the people they
                most often fail — and tested on them first? What if the default
                body was not assumed, but chosen by the communities the system
                would affect? What if identification required consent, and could
                be revoked?
              </p>
            </div>

            <div className="forward-thread">
              <div className="ft-label">What comes next</div>
              <div className="ft-text">
                The body was the first thing turned into a dataset. But it
                wasn&apos;t the last. If a system can map your face without
                asking, it can map your attention, your beliefs, your behavior.
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
                <li>{hasGlossaryEntry("classification") ? <Link href={glossaryLink("classification")} className="keyword-link">classification</Link> : "classification"}</li>
                <li>biometrics</li>
                <li>{hasGlossaryEntry("default user") ? <Link href={glossaryLink("default user")} className="keyword-link">default user</Link> : "default user"}</li>
                <li>measurement</li>
                <li>{hasGlossaryEntry("surveillance") ? <Link href={glossaryLink("surveillance")} className="keyword-link">surveillance</Link> : "surveillance"}</li>
              </ul>
            </section>
            <EntrySources sources={ENTRY_SOURCES["ch1-entry01-body-as-dataset"]} />
            <section className="see-also-block">
              <div className="see-also-label">SEE ALSO →</div>
              <div className="see-also-links">
                <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
                  Mind as Dataset (Entry 02)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                  Behavior as Dataset (Entry 03)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                  Identity as Dataset (Entry 04)
                </Link>
              </div>
            </section>
          </aside>
        </div>

        <nav className="nav-footer" aria-label="Entry navigation">
          <span>
            <Link href="/frontmatter/how-to-read">
              ← Previous How to Read This Catalog
            </Link>
          </span>
          <span className="tags">
            Ch. 1 / Entry 01 of 04 ·{" "}
            <Link href="/frontmatter/table-of-contents" className="contents-link">
              Contents
            </Link>
          </span>
          <span>
            <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
              Next → Entry 02 — Mind as Dataset
            </Link>
          </span>
        </nav>
      </section>
    </main>
  );
}
