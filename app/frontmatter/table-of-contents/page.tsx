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
    <Spread className="spread--continuous spread--entry-style">
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
            <div className="toc-digression toc-digression--grouped">
              <Link href="/chapter-01/ch1-reader-as-artifact">
                Digression — Reader as Artifact
              </Link>
            </div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 2 — What Does It Know About You?</div>
            <div className="toc-entry toc-entry--coming">
              Entry 05 — Location Tracking
            </div>
            <div className="toc-entry toc-entry--coming">Entry 06 — Smart Home Cameras</div>
            <div className="toc-entry toc-entry--coming">Entry 07 — Biometric ID</div>
            <div className="toc-digression toc-digression--grouped">Digression — Living Inside a Dataset</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 3 — What Does It Decide?</div>
            <div className="toc-entry toc-entry--coming">Entry 08 — Recommendation Systems</div>
            <div className="toc-entry toc-entry--coming">Entry 09 — Search Rankings</div>
            <div className="toc-entry toc-entry--coming">Entry 10 — Predictive Scoring</div>
            <div className="toc-digression toc-digression--grouped">Digression — When Algorithms Learn Taste</div>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="toc-section">
            <div className="toc-chapter">Chapter 4 — How Did We Get Here?</div>
            <div className="toc-entry toc-entry--coming">Entry 11 — Large Language Models</div>
            <div className="toc-entry toc-entry--coming">Entry 12 — AI Robotics</div>
            <div className="toc-entry toc-entry--coming">Entry 13 — AR/VR Systems</div>
            <div className="toc-digression toc-digression--grouped">Digression — Every Technology Has a Past</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">
              Chapter 5 — What Does It Cost To Stay Inside The System?
            </div>
            <div className="toc-entry toc-entry--coming">Entry 14 — Constant Updates</div>
            <div className="toc-entry toc-entry--coming">Entry 15 — Subscription Creep</div>
            <div className="toc-entry toc-entry--coming">Entry 16 — Repair Restrictions</div>
            <div className="toc-digression toc-digression--grouped">Digression — The Cost of Staying Compatible</div>
          </div>

          <div className="toc-section">
            <div className="toc-chapter">Chapter 6 — What Could It Become?</div>
            <div className="toc-entry toc-entry--coming">Entry 17 — Cooperative Platforms</div>
            <div className="toc-entry toc-entry--coming">Entry 18 — Humane Tech Design</div>
            <div className="toc-entry toc-entry--coming">Entry 19 — Community Infrastructure</div>
            <div className="toc-digression toc-digression--grouped">Digression — Designing With Care</div>
          </div>

          <div className="toc-divider" />

          <div className="toc-backmatter">
            <div className="toc-backmatter-item toc-backmatter-item--meta">Postscript — Still Unfinished</div>
            <div className="toc-backmatter-item">
              <Link href="/backmatter/glossary">Glossary</Link>
            </div>
            <div className="toc-backmatter-item">
              <Link href="/backmatter/index-of-systems">Index of Systems</Link>
            </div>
            <div className="toc-backmatter-item">
              <Link href="/backmatter/access-to-tools">Access to Tools (Now)</Link>
            </div>
            <div className="toc-backmatter-item">
              <Link href="/backmatter/recommended-reading">Recommended Reading</Link>
            </div>
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
