import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Recommended Reading — They Did Not Make This For You",
  description: "Recommended reading — They Did Not Make This For You"
};

const readings = [
  {
    title: "Atlas of AI",
    author: "Kate Crawford",
    year: "2021",
    type: "Book",
    description:
      "Tracks the material and political foundations of artificial intelligence — from lithium mines to data labor to the environmental cost of training models.",
    whyRead:
      "Crawford's framework — that datasets are constructed, not neutral — is central to this catalog. She traces how AI inherits the assumptions of its makers.",
    example:
      "Look for \"Datasets are not neutral. They are constructed. They reflect the values, priorities, and blind spots of their creators.\" — quoted in Entry 01. Follow her chapter on classification and the history of the \"default user.\"",
    connectsTo: ["Entry 01 — Body as Dataset", "Entry 04 — Identity as Dataset", "Digression"]
  },
  {
    title: "The Age of Surveillance Capitalism",
    author: "Shoshana Zuboff",
    year: "2019",
    type: "Book",
    description:
      "How behavioral surplus — the data extracted from your actions — is turned into prediction products that shape and control future behavior.",
    whyRead:
      "Zuboff names the logic: your behavior is the raw material. The product is prediction. The goal is certainty about what you will do next.",
    example:
      "Trace the concept of \"behavioral surplus\" — data that exceeds what is needed for the service you think you're using. See how it maps onto the four entries: body, mind, labor, identity.",
    connectsTo: ["Entry 02 — Mind as Dataset", "Entry 03 — Behavior as Dataset", "Digression"]
  },
  {
    title: "Dark Matters",
    author: "Simone Browne",
    year: "2015",
    type: "Book",
    description:
      "On surveillance and the racialized body — from the slave ship to the passport to the biometric border.",
    whyRead:
      "Browne shows that surveillance has always been about who counts as a person and who gets to be in the room. \"You were not in the room\" has a long history.",
    example:
      "Read the chapter on the passport and the \"book of Negroes.\" See how legibility and classification have always been tools of exclusion. Essential for understanding who systems are built for.",
    connectsTo: ["Entry 01 — Body as Dataset", "Entry 04 — Identity as Dataset", "Digression"]
  },
  {
    title: "Gender Shades",
    author: "Joy Buolamwini",
    year: "2018",
    type: "Research paper / audit",
    description:
      "Audit of three commercial facial recognition APIs (IBM, Microsoft, Face++) on 1,270 faces across gender and skin tone.",
    whyRead:
      "The study that proved facial recognition fails unevenly — and the methodology for auditing systems that claim to be neutral.",
    example:
      "Dig into the methodology: how they built the test set, the Fitzpatrick scale, the error rate breakdown. See how \"accuracy\" hides when the errors fall. Entry 01 uses this as the contemporary artifact.",
    connectsTo: ["Entry 01 — Body as Dataset", "Glossary: error rate"]
  },
  {
    title: "Machine Bias",
    author: "Julia Angwin, Jeff Larson, et al. (ProPublica)",
    year: "2016",
    type: "Investigative journalism",
    description:
      "Investigation of COMPAS recidivism algorithm — found Black defendants scored high risk at nearly twice the rate of white defendants for the same charge.",
    whyRead:
      "The landmark study that showed algorithmic \"objectivity\" can encode and amplify discrimination. Essential for understanding risk assessment systems.",
    example:
      "Read the full methodology and the rebuttals. Compare different definitions of \"fairness\" — the debate reveals why technical fixes alone cannot solve structural problems. See Entry 04.",
    connectsTo: ["Entry 04 — Identity as Dataset", "Index: COMPAS"]
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: "1988 (revised 2013)",
    type: "Book",
    description:
      "Foundational text on how design shapes behavior — affordances, feedback, mental models — and the responsibility of designers.",
    whyRead:
      "Understanding how design \"asks\" for behavior helps you see how systems engineer compliance. The phone was designed to be hard to put down.",
    example:
      "Apply Norman's \"visibility\" and \"feedback\" to the variable reward feed: the system gives feedback (likes, new content) but hides the mechanism (reinforcement schedule). See Entry 02.",
    connectsTo: ["Entry 02 — Mind as Dataset", "Entry 03 — Behavior as Dataset"]
  },
  {
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    year: "2016",
    type: "Book",
    description:
      "How algorithms that score people — for credit, jobs, education, sentencing — encode bias and scale harm.",
    whyRead:
      "O'Neil's \"WMD\" framework (opacity, scale, damage) maps directly onto the systems in this catalog. She names the pattern.",
    example:
      "Trace her examples: teacher value-added, credit scoring, hiring algorithms. See how each \"objective\" score hides the same logic as Retail Credit. See Entry 04.",
    connectsTo: ["Entry 04 — Identity as Dataset", "Entry 03 — Behavior as Dataset"]
  },
  {
    title: "Seeing Like a State",
    author: "James C. Scott",
    year: "1998",
    type: "Book",
    description:
      "How states make things \"legible\" — people, land, forests — to simplify and control them, and what gets lost in the process.",
    whyRead:
      "The concept of \"legibility\" explains why measurement systems flatten complexity. When your body becomes legible, it becomes manageable.",
    example:
      "Read the chapter on scientific forestry and standardized measurement. See how the same logic applies to Bertillon, Taylor, and the algorithmic dashboard. See Entries 01, 03.",
    connectsTo: ["Entry 01 — Body as Dataset", "Entry 03 — Behavior as Dataset", "Glossary: legible"]
  },
  {
    title: "The Cybernetic Hypothesis",
    author: "Tiqqun",
    year: "2001",
    type: "Essay",
    description:
      "How feedback loops, control, and the \"cybernetic hypothesis\" structure contemporary power — from the state to the platform.",
    whyRead:
      "A dense but essential framework for understanding how systems that \"learn\" and \"optimize\" are forms of control.",
    example:
      "Trace the feedback loop: your behavior feeds the algorithm, the algorithm shapes your feed, your feed shapes your behavior. The system doesn't need to know you — it just needs to control the loop. See Entry 02.",
    connectsTo: ["Entry 02 — Mind as Dataset", "Entry 05 — Location Tracking"]
  },
  {
    title: "The Whole Earth Catalog",
    author: "Stewart Brand",
    editor: "Stewart Brand",
    year: "1968–1972",
    type: "Publication",
    description:
      "A catalog of tools, books, and ideas for self-sufficiency — \"access to tools\" — that influenced how people imagine technology and community.",
    whyRead:
      "The introduction acknowledges this catalog's debt to Brand's format: a reference that invites comparison, annotation, and extension.",
    example:
      "Browse the structure: how entries are organized, how they cross-reference, how they treat \"tools\" as part of a system. Compare to how this catalog treats systems as places you inhabit.",
    connectsTo: ["Introduction", "How to Read This Catalog"]
  },
  {
    title: "Cyberfeminism Index",
    author: "Mindy Seu",
    year: "Ongoing",
    type: "Archive / collection",
    description:
      "Seu's Cyberfeminism Index and related collections gather critical, speculative, and collaborative work on technology and gender.",
    whyRead:
      "The introduction cites Seu as someone whose catalogs and libraries \"made space for critical, speculative, and collaborative futures.\"",
    example:
      "Explore the Cyberfeminism Index. See how catalog formats can center marginalized voices and create alternative canons. Compare to the \"four questions\" in this catalog.",
    connectsTo: ["Introduction", "What Would a Better Version Look Like?"]
  },
  {
    title: "I Gave a Bounty Hunter $300. He Located Our Phone.",
    author: "Joseph Cox (Motherboard/Vice)",
    year: "2020",
    type: "Investigative journalism",
    description:
      "Demonstrates how location data brokers sell real-time phone location to virtually anyone — no warrant required.",
    whyRead:
      "Concrete evidence that location data flows from apps to brokers to buyers. The same data that powers \"convenience\" is sold to bounty hunters, advertisers, and law enforcement.",
    example:
      "Trace the data path: app → data broker → buyer. See how little stands between your location and anyone willing to pay. Essential for Entry 05.",
    connectsTo: ["Entry 05 — Location Tracking"]
  },
  {
    title: "One Nation, Tracked",
    author: "Stuart A. Thompson, Charlie Warzel (New York Times)",
    year: "2019",
    type: "Investigative journalism",
    description:
      "Twelve million phones. Fifty billion location pings. A Times investigation into the scale and reach of commercial location tracking.",
    whyRead:
      "Shows the sheer scale of location data collection — and how it can be used to trace individuals across cities, workplaces, and homes.",
    example:
      "Follow the methodology: how anonymized data becomes identifiable. See how the same data flows to advertisers, researchers, and law enforcement. See Entry 05.",
    connectsTo: ["Entry 05 — Location Tracking"]
  },
  {
    title: "Algorithms of Oppression",
    author: "Safiya Umoja Noble",
    year: "2018",
    type: "Book",
    description:
      "How search engines reinforce discrimination — from \"black girls\" to \"Asian\" to \"Jews\" — and why \"neutral\" algorithms are a myth.",
    whyRead:
      "Noble traces how search rankings reflect and amplify structural bias. The same logic applies to recommendation systems, risk scores, and content moderation.",
    example:
      "Read the methodology for auditing search results. Apply it to any system that claims to \"rank\" or \"recommend\" — what is the default? Who is the error rate? See Entries 01, 04.",
    connectsTo: ["Entry 01 — Body as Dataset", "Entry 04 — Identity as Dataset"]
  }
];

export default function RecommendedReadingPage() {
  return (
    <Spread className="spread--continuous spread--entry-style">
      <PageLeft>
        <div className="page-content">
          <div className="section-title">Recommended Reading</div>
          <div className="body-text">
            <p>
              Sources that deepen the themes in this catalog. Each entry includes
              why it matters, what to look for, and how it connects to specific
              entries — so you can dig deeper.
            </p>
            <p>
              <Link href="/chapter-01/recommended-reading">
                Chapter 1 — expanded sources with &quot;why read&quot; and examples →
              </Link>
            </p>
          </div>

          <div className="readings-list">
            {readings.slice(0, 5).map((r) => (
              <div key={r.title + r.author} className="reading-entry">
                <div className="reading-title">{r.title}</div>
                <div className="reading-meta">
                  {r.author} · {r.year} · {r.type}
                </div>
                <p className="reading-desc">{r.description}</p>
                <div className="reading-why">
                  <span className="reading-why-label">Why read:</span>{" "}
                  {r.whyRead}
                </div>
                <div className="reading-example">
                  <span className="reading-example-label">Example:</span>{" "}
                  {r.example}
                </div>
                <div className="reading-connects">
                  {r.connectsTo.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="readings-list">
            {readings.slice(5).map((r) => (
              <div key={r.title + r.author} className="reading-entry">
                <div className="reading-title">{r.title}</div>
                <div className="reading-meta">
                  {r.author} · {r.year} · {r.type}
                </div>
                <p className="reading-desc">{r.description}</p>
                <div className="reading-why">
                  <span className="reading-why-label">Why read:</span>{" "}
                  {r.whyRead}
                </div>
                <div className="reading-example">
                  <span className="reading-example-label">Example:</span>{" "}
                  {r.example}
                </div>
                <div className="reading-connects">
                  {r.connectsTo.join(" · ")}
                </div>
              </div>
            ))}
          </div>

          <div className="body-text" style={{ marginTop: 24 }}>
            <p>
              <strong>How to use this list:</strong> Start with the entry that
              matches your current chapter. Use the \"Example\" section to know
              what to look for — a specific passage, methodology, or concept.
              Follow \"Connects to\" to build a reading path across the catalog.
            </p>
          </div>

          <NavFooter
            left={
              <Link href="/backmatter/access-to-tools">
                ← Previous Access to Tools
              </Link>
            }
            center={
              <>
                <Link href="/" className="contents-link">
                  Home
                </Link>{" "}
                ·{" "}
                <Link
                  href="/frontmatter/table-of-contents"
                  className="contents-link"
                >
                  Contents
                </Link>
              </>
            }
            right={
              <Link href="/frontmatter/table-of-contents">
                Back to Contents
              </Link>
            }
          />
        </div>
      </PageRight>
    </Spread>
  );
}
