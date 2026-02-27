import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Table of Contents — They Did Not Make This For You",
  description: "Table of Contents — They Did Not Make This For You"
};

export default function TableOfContentsPage() {
  return (
    <Spread className="spread--continuous">
      <PageLeft>
        <div className="page-content">
          <div className="toc-title">Table of Contents</div>

          <div className="toc-frontmatter">
            <Link href="/frontmatter/preface">Preface</Link>
          </div>
          <div className="toc-frontmatter">
            <Link href="/frontmatter/introduction">Introduction</Link>
          </div>
          <div className="toc-frontmatter">
            <Link href="/frontmatter/how-to-read">How to Read This Catalog</Link>
          </div>

          <div className="toc-divider" />

          <div className="toc-section">
            <div className="toc-chapter">Chapter 1 — Who Was This Built For?</div>
            <div className="toc-entry">
              <Link href="/chapter-01/ch1-entry01-body-as-dataset">
                Entry 01 — The Body as Dataset
              </Link>
            </div>
            <div className="toc-entry">
              <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
                Entry 02 — The Mind as Dataset
              </Link>
            </div>
            <div className="toc-entry">
              <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                Entry 03 — Behavior as Dataset
              </Link>
            </div>
            <div className="toc-entry">
              <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                Entry 04 — Identity as Dataset
              </Link>
            </div>
            <div className="toc-digression">
              <Link href="/chapter-01/ch1-reader-as-artifact">
                Digression — Reader as Artifact
              </Link>
            </div>
            <div className="toc-entry">
              <Link href="/chapter-01/recommended-reading">
                Recommended Reading — Chapter 1
              </Link>
            </div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 2 — What Does It Know About You?</div>
            <div className="toc-entry">
              <Link href="/chapter-02/ch2-entry04-location-tracking">
                Entry 05 — Location Tracking
              </Link>
            </div>
            <div className="toc-entry">Entry 06 — Smart Home Cameras</div>
            <div className="toc-entry">Entry 07 — Biometric ID</div>
            <div className="toc-digression">Digression — Living Inside a Dataset</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 3 — What Does It Decide?</div>
            <div className="toc-entry">Entry 07 — Recommendation Systems</div>
            <div className="toc-entry">Entry 08 — Search Rankings</div>
            <div className="toc-entry">Entry 09 — Predictive Scoring</div>
            <div className="toc-digression">Digression — When Algorithms Learn Taste</div>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="toc-section">
            <div className="toc-chapter">Chapter 4 — How Did We Get Here?</div>
            <div className="toc-entry">Entry 10 — Large Language Models</div>
            <div className="toc-entry">Entry 11 — AI Robotics</div>
            <div className="toc-entry">Entry 12 — AR/VR Systems</div>
            <div className="toc-digression">Digression — Every Technology Has a Past</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">
              Chapter 5 — What Does It Cost To Stay Inside The System?
            </div>
            <div className="toc-entry">Entry 13 — Constant Updates</div>
            <div className="toc-entry">Entry 14 — Subscription Creep</div>
            <div className="toc-entry">Entry 15 — Repair Restrictions</div>
            <div className="toc-digression">Digression — The Cost of Staying Compatible</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 6 — What Could It Become?</div>
            <div className="toc-entry">Entry 16 — Cooperative Platforms</div>
            <div className="toc-entry">Entry 17 — Humane Tech Design</div>
            <div className="toc-entry">Entry 18 — Community Infrastructure</div>
            <div className="toc-digression">Digression — Designing With Care</div>
          </div>

          <div className="toc-divider" />

          <div className="toc-frontmatter">Postscript — Still Unfinished</div>
          <div className="toc-frontmatter">
            <Link href="/backmatter/glossary">Glossary</Link>
          </div>
          <div className="toc-frontmatter">
            <Link href="/backmatter/index-of-systems">Index of Systems</Link>
          </div>
          <div className="toc-frontmatter">
            <Link href="/backmatter/access-to-tools">Access to Tools (Now)</Link>
          </div>
          <div className="toc-frontmatter">
            <Link href="/backmatter/recommended-reading">Recommended Reading</Link>
          </div>
        </div>

        <NavFooter
          left={<Link href="/frontmatter/preface">← Previous Preface</Link>}
          center={
            <>
              <Link href="/">Home</Link> ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </>
          }
          right={<Link href="/frontmatter/introduction">Next → Introduction</Link>}
        />
      </PageRight>
    </Spread>
  );
}
