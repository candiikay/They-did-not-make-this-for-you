import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 03 — Behavior as Dataset",
  description: "They Did Not Make This For You — Entry 03"
};

export default function Entry03Page() {
  return (
    <main className="spread spread--continuous entry-03" aria-label="Entry 03 — Behavior as Dataset">
      <section className="page-left" aria-label="Historical artifact and context">
        <section className="entry-meta">
          <span className="entry-meta-line">ENTRY 03</span>
          <span className="entry-meta-line">DATE: 1911–present</span>
          <span className="entry-meta-line">TYPE: Labor measurement system</span>
          <span className="entry-meta-line">USED FOR: Productivity control</span>
        </section>
        <section className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">
            When labor became measurable, the worker became the inefficiency.
          </div>
        </section>
        <header className="entry-header">
          <div className="entry-eyebrow">Labor Data</div>
          <div className="entry-title">
            Behavior
            <br />
            as Dataset
          </div>
          <div className="entry-subtitle">
            Where the habit of optimizing human labor began — and who pays
          </div>
        </header>

        <figure className="img-wrap img-wrap--dark img-wrap--small">
          <img
            src="/images/motion study.jpg"
            alt="Long-exposure photograph of a motion study, showing light trails tracing a worker's movements."
          />
          <figcaption className="img-wrap-caption">
            <span className="img-wrap-caption-main">
              CHRONOCYCLEGRAPH — Frank &amp; Lillian Gilbreth, c. 1914–1917
            </span>
            <span className="img-wrap-caption-sub">
              Light rings on worker&apos;s hands. Long exposure. Every motion
              made legible, measurable, correctable.
            </span>
          </figcaption>
        </figure>

        <div className="artifact-card">
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Artifact</span>
              <span className="ac-val bold">Chronocyclegraph — Motion Study</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Date</span>
              <span className="ac-val">1913–1917, Frank &amp; Lillian Gilbreth</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">What it does</span>
              <span className="ac-val">
                light rings on workers&apos; hands photographed in long exposure
                — traces every motion as a dotted arc, maps speed and direction
                of each gesture
              </span>
            </div>
          </div>
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Used for</span>
              <span className="ac-val">
                identifying and eliminating &quot;wasted&quot; motion — the
                shortest path becomes the mandated path for all workers
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Claim</span>
              <span className="ac-val italic">
                there is one best way — the camera finds it objectively
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">
                Reality /
                <br />
                Who pays
              </span>
              <span className="ac-val heavy">
                the worker&apos;s body is made legible so it can be made more
                efficient — fatigue, pain, and individuality are outside the
                frame
              </span>
            </div>
          </div>
        </div>

        <div className="context-section">
          <div className="cs-label">
            <span className="cs-label-text">Scientific Management</span>
          </div>
          <div className="cs-body">
            <p>
              Frederick Taylor used stopwatches to break every task into timed
              motions. Frank and Lillian Gilbreth used cameras to photograph
              light trails attached to workers&apos; hands — the chronocyclegraph
              — to find the shortest path between points. Together, their methods
              produced a framework that treated the working body as a problem to
              be solved: every gesture a variable, every deviation from the
              optimum a form of waste to be corrected.
            </p>
            <p>
              The Gilbreths&apos; principle was simple:{" "}
              <em>there is one best way to do any job.</em> The camera would find
              it objectively. Break every task into motions. Time each one. Cut
              the rest. Mandate the shortest path.
            </p>
            <p>
              What neither system could measure was the cost absorbed by the
              body itself: accumulated fatigue, repetitive strain, the long-term
              damage of a life spent performing optimized motions.{" "}
              <em>Those costs were never on the chart.</em> They still aren&apos;t.
            </p>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">1911</span>
            <div className="tl-dot" />
            <span className="tl-label">labor broken into data points</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">1950s</span>
            <div className="tl-dot" />
            <span className="tl-label">time-motion enters white collar work</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">2010s</span>
            <div className="tl-dot" />
            <span className="tl-label">gig economy algorithmic management</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">productivity scored in real time</span>
          </div>
        </div>
      </section>

      <section className="page-right" aria-label="Contemporary algorithmic management">
        <div className="right-body">
          <div className="body-main">
            <div className="the-rule">
              <div className="rule-label">The Rule</div>
              <div className="rule-text">
                If your labor can be measured,
                <br />
                it can be managed against you.
              </div>
            </div>

            <p className="personal">
              There is a metric somewhere that knows how long you took on the
              last task. Whether you moved fast enough, clicked enough,
              delivered enough. You may never see it. It sees you.
            </p>

            <figure
              className="right-artifact-wrap"
              aria-labelledby="alg-dashboard-title alg-dashboard-desc"
            >
              <svg
                viewBox="0 0 460 230"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="alg-dashboard-title alg-dashboard-desc"
              >
                <title id="alg-dashboard-title">
                  Algorithmic worker productivity dashboard
                </title>
                <desc id="alg-dashboard-desc">
                  Interface showing units per hour, idle time flagged, accuracy
                  and alerts such as idle over three minutes and bathroom break
                  duration, while body fatigue is not logged.
                </desc>
                <rect
                  x="10"
                  y="10"
                  width="440"
                  height="212"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1.5"
                />
                <rect
                  x="10"
                  y="10"
                  width="440"
                  height="26"
                  fill="#111"
                />
                <text
                  x="22"
                  y="27"
                  fontFamily="'Space Mono',monospace"
                  fontSize="9"
                  fill="white"
                  letterSpacing="1"
                >
                  WORKER PRODUCTIVITY DASHBOARD
                </text>
                <text
                  x="432"
                  y="27"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#555"
                  textAnchor="end"
                >
                  ● LIVE
                </text>
                <rect
                  x="10"
                  y="36"
                  width="109"
                  height="58"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y="50"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#999"
                  letterSpacing="0.5"
                >
                  UNITS / HR
                </text>
                <text
                  x="20"
                  y="78"
                  fontFamily="'Space Mono',monospace"
                  fontSize="26"
                  fill="#111"
                  fontWeight="700"
                >
                  287
                </text>
                <text
                  x="20"
                  y="89"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#888"
                >
                  target: 300
                </text>
                <rect
                  x="119"
                  y="36"
                  width="109"
                  height="58"
                  fill="white"
                  stroke="#111"
                  strokeWidth="2.5"
                />
                <text
                  x="129"
                  y="50"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#111"
                  letterSpacing="0.5"
                  fontWeight="700"
                >
                  ⚠ IDLE TIME
                </text>
                <text
                  x="129"
                  y="78"
                  fontFamily="'Space Mono',monospace"
                  fontSize="26"
                  fill="#111"
                  fontWeight="700"
                >
                  4.2m
                </text>
                <text
                  x="129"
                  y="89"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#111"
                  fontWeight="600"
                >
                  flagged
                </text>
                <rect
                  x="228"
                  y="36"
                  width="109"
                  height="58"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1"
                />
                <text
                  x="238"
                  y="50"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#999"
                  letterSpacing="0.5"
                >
                  ACCURACY
                </text>
                <text
                  x="238"
                  y="78"
                  fontFamily="'Space Mono',monospace"
                  fontSize="26"
                  fill="#111"
                  fontWeight="700"
                >
                  98%
                </text>
                <text
                  x="238"
                  y="89"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#888"
                >
                  target: 99%
                </text>
                <rect
                  x="337"
                  y="36"
                  width="113"
                  height="58"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1"
                />
                <text
                  x="347"
                  y="50"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#999"
                  letterSpacing="0.5"
                >
                  SCORE
                </text>
                <text
                  x="347"
                  y="78"
                  fontFamily="'Space Mono',monospace"
                  fontSize="26"
                  fill="#111"
                  fontWeight="700"
                >
                  B+
                </text>
                <text
                  x="347"
                  y="89"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#888"
                >
                  above floor
                </text>
                <rect
                  x="10"
                  y="94"
                  width="295"
                  height="100"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y="108"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#888"
                  letterSpacing="0.5"
                >
                  RATE OVER SHIFT
                </text>
                <line
                  x1="32"
                  y1="185"
                  x2="295"
                  y2="185"
                  stroke="#333"
                  strokeWidth="0.8"
                />
                <line
                  x1="32"
                  y1="112"
                  x2="32"
                  y2="185"
                  stroke="#333"
                  strokeWidth="0.8"
                />
                <line
                  x1="32"
                  y1="132"
                  x2="295"
                  y2="132"
                  stroke="#bbb"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                />
                <text
                  x="296"
                  y="135"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="7"
                  fill="#999"
                >
                  300
                </text>
                <polyline
                  points="35,124 60,122 85,126 110,130 135,136 160,142 185,146 210,141 235,143 260,140 290,138"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                />
                <polygon
                  points="35,124 60,122 85,126 110,130 135,136 160,142 185,146 210,141 235,143 260,140 290,138 290,185 35,185"
                  fill="#e8e8e8"
                  opacity="0.7"
                />
                <line
                  x1="160"
                  y1="142"
                  x2="160"
                  y2="163"
                  stroke="#555"
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                <text
                  x="88"
                  y="174"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="7.5"
                  fill="#555"
                  fontStyle="italic"
                >
                  body fatigue — not logged
                </text>
                <rect
                  x="305"
                  y="94"
                  width="145"
                  height="100"
                  fill="white"
                  stroke="#111"
                  strokeWidth="1"
                />
                <text
                  x="315"
                  y="108"
                  fontFamily="'Space Mono',monospace"
                  fontSize="7"
                  fill="#888"
                  letterSpacing="0.5"
                >
                  ALERTS
                </text>
                <line
                  x1="305"
                  y1="111"
                  x2="450"
                  y2="111"
                  stroke="#111"
                  strokeWidth="0.8"
                />
                <rect x="305" y="111" width="145" height="22" fill="#e8e8e8" />
                <text
                  x="314"
                  y="126"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="9"
                  fill="#111"
                  fontWeight="600"
                >
                  ⚠ idle &gt; 3 min
                </text>
                <rect x="305" y="133" width="145" height="18" fill="white" />
                <text
                  x="314"
                  y="145"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8.5"
                  fill="#555"
                >
                  rate below target
                </text>
                <rect x="305" y="151" width="145" height="18" fill="#e8e8e8" />
                <text
                  x="314"
                  y="163"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8.5"
                  fill="#555"
                >
                  bathroom: 6.1 min
                </text>
                <rect x="305" y="169" width="145" height="16" fill="white" />
                <text
                  x="314"
                  y="180"
                  fontFamily="'IBM Plex Mono',monospace"
                  fontSize="8"
                  fill="#999"
                >
                  shift end: 3h 14m
                </text>
                <text
                  x="230"
                  y="218"
                  fontFamily="'Space Mono',monospace"
                  fontSize="6.5"
                  fill="#aaa"
                  textAnchor="middle"
                  letterSpacing="0.5"
                >
                  ALGORITHMIC MANAGEMENT DASHBOARD — WAREHOUSE / GIG PLATFORM,
                  2020s
                </text>
              </svg>

              <div className="artifact-card">
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Artifact</span>
                    <span className="ac-val bold">
                      Algorithmic Management Dashboard
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Date</span>
                    <span className="ac-val">
                      2010s–present — Amazon, Uber, Deliveroo
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">What it does</span>
                    <span className="ac-val">
                      tracks every worker action in real time — pace, idle time,
                      bathroom breaks — and scores performance continuously
                      without a human manager
                    </span>
                  </div>
                </div>
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Used for</span>
                    <span className="ac-val">
                      maintaining output targets — the algorithm fires, warns, and
                      rates automatically
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Claim</span>
                    <span className="ac-val italic">
                      objective measurement — fairer than human judgment
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">
                      Reality /
                      <br />
                      Who pays
                    </span>
                    <span className="ac-val heavy">
                      the system cannot measure pain or a body pushed past its
                      limit — those costs are externalized to the worker
                    </span>
                  </div>
                </div>
              </div>
            </figure>

            <p>
              The Gilbreths photographed light trails. The algorithm logs
              keystrokes. <em>The frame is different. The logic is identical.</em>{" "}
              Your body is still the variable being optimized. It just
              doesn&apos;t clock out.
            </p>

            <div className="pattern-block">
              <div className="pattern-label">
                The Pattern — how behavior becomes a dataset
              </div>
              <div className="pattern-row">
                <div className="pattern-num">1</div>
                <div className="pattern-text">
                  <strong>Measure</strong>Turn work into quantifiable signals —
                  keystrokes, mouse movements, time-on-task, output per hour,
                  engagement metrics.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">2</div>
                <div className="pattern-text">
                  <strong>Standardize</strong>Package those signals into
                  performance scores. The system optimizes toward the metric, not
                  the person doing the work.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">3</div>
                <div className="pattern-text">
                  <strong>Scale</strong>Apply the measurement to everyone —
                  customized per role, identical in structure. Your behavior
                  becomes comparable data.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">4</div>
                <div className="pattern-text">
                  <strong>Manage</strong>Use the data to optimize, rank, and
                  discipline. If your labor can be measured, it can be managed
                  against you.
                </div>
              </div>
              <div className="pattern-conclusion">
                The system tracks what it can measure. The question is: what work
                gets left out?
              </div>
            </div>

            <div className="better-version">
              <div className="better-version-label">What Would a Better Version Look Like?</div>
              <p>
                What if labor metrics included fatigue, recovery, and the work
                that doesn&apos;t show up in the dashboard? What if workers
                designed the measurements — and could contest them? What if
                productivity was optimized for the body&apos;s limits, not against
                them?
              </p>
            </div>

            <div className="forward-thread">
              <div className="ft-label">What comes next</div>
              <div className="ft-text">
                Entry 04 asks what happens when behavior data hardens into a
                permanent record — when how you acted becomes who you are allowed
                to be.
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
                <li>{hasGlossaryEntry("labor") ? <Link href={glossaryLink("labor")} className="keyword-link">labor</Link> : "labor"}</li>
                <li>{hasGlossaryEntry("optimization") ? <Link href={glossaryLink("optimization")} className="keyword-link">optimization</Link> : "optimization"}</li>
                <li>gig economy</li>
                <li>time-motion study</li>
                <li>{hasGlossaryEntry("algorithmic management") ? <Link href={glossaryLink("algorithmic management")} className="keyword-link">algorithmic management</Link> : "algorithmic management"}</li>
              </ul>
            </section>
            <EntrySources sources={ENTRY_SOURCES["ch1-entry03-behavior-as-dataset"]} />
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
                <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                  Identity as Dataset (Entry 04)
                </Link>
              </div>
            </section>
          </aside>
        </div>

        <nav className="nav-footer" aria-label="Entry navigation">
          <span>
            <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
              ← Previous Entry 02 — Mind as Dataset
            </Link>
          </span>
          <span className="tags">
            Ch. 1 / Entry 03 of 04 ·{" "}
            <Link href="/frontmatter/table-of-contents" className="contents-link">
              Contents
            </Link>
          </span>
          <span>
            <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
              Next → Entry 04 — Identity as Dataset
            </Link>
          </span>
        </nav>
      </section>
    </main>
  );
}
