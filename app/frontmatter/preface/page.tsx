import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Preface — They Did Not Make This For You",
  description: "Preface — They Did Not Make This For You"
};

export default function PrefacePage() {
  return (
    <Spread className="spread--continuous spread--entry-style">
      <PageLeft>
        <div className="page-content">
          <div className="book-title">
            They Did Not
            <br />
            Make This
            <br />
            For You
          </div>
          <div className="book-subtitle">A Catalog of Systems We Live Inside</div>
          <div className="author">Candace Stewart</div>

          <div className="section-label">Preface</div>
          <div className="body-text">
            <p>I used to think technology was neutral.</p>
            <p>
              Not because I thought it was perfect, but because I believed it was
              trying to help. Data and systems felt like tools to make better
              decisions, to make things fairer, to solve problems faster. When
              something went wrong, I assumed it was a bug that would eventually
              be fixed.
            </p>
            <p>Then I started noticing patterns.</p>
            <p>Facial recognition systems that could not recognize darker skin.</p>
            <p>Phones tracking location constantly without clear consent.</p>
            <p>
              Recommendation feeds narrowing what I saw and what I believed.
            </p>
            <p>Platforms shaping elections, culture, and identity.</p>
            <p>
              Devices becoming emotional companions that people mourn when they
              disappear.
            </p>
            <p>
              These were not random glitches. They were systems working exactly
              as they were designed — for certain users, with certain
              assumptions about what matters.
            </p>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="body-text">
            <p>And in 2026, this realization feels impossible to ignore.</p>
            <p>
              Artificial intelligence writes code, generates media, shapes
              conversation, and trains on our lives. Surveillance tools are
              embedded in homes, workplaces, and cities. Algorithms decide what
              we see, what we buy, and sometimes what we believe. New technologies
              arrive faster than we can question them, and we are told they are
              inevitable.
            </p>
            <p className="pull-quote">
              But systems are never inevitable. They are designed.
            </p>
            <p>And who designs them matters.</p>
            <p>
              This book is a catalog of the systems shaping our lives right now —
              an attempt to look closely at how they were imagined, what they
              optimize for, and what they might look like if they were built
              around care instead of efficiency alone.
            </p>
            <p>
              It is written for anyone who has wondered why a system feels wrong
              but cannot explain why. For anyone who wants to understand how
              technology carries assumptions inside it. For anyone who believes
              we can design better futures together.
            </p>
            <p>
              <em>They did not make this world for you.</em>
            </p>
            <p>But it is still being built.</p>
            <p>So this catalog is an invitation to look closely.</p>
          </div>
        </div>

        <NavFooter
          left={<Link href="/">← Cover</Link>}
          center={
            <Link href="/frontmatter/table-of-contents" className="contents-link">
              Contents
            </Link>
          }
          right={
            <Link href="/frontmatter/table-of-contents">
              Next → Table of Contents
            </Link>
          }
        />
      </PageRight>
    </Spread>
  );
}
