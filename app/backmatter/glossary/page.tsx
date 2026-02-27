import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Glossary — They Did Not Make This For You",
  description: "Glossary — They Did Not Make This For You"
};

const ENTRY_LINKS: Record<string, { href: string; label: string }> = {
  "01": { href: "/chapter-01/ch1-entry01-body-as-dataset", label: "Entry 01" },
  "02": { href: "/chapter-01/ch1-entry02-mind-as-dataset", label: "Entry 02" },
  "03": { href: "/chapter-01/ch1-entry03-behavior-as-dataset", label: "Entry 03" },
  "04": { href: "/chapter-01/ch1-entry04-identity-as-dataset", label: "Entry 04" },
  "05": { href: "/chapter-02/ch2-entry04-location-tracking", label: "Entry 05" }
};

const GLOSSARY_GROUPS = [
  {
    title: "How systems see you",
    terms: [
      {
        term: "Default User",
        slug: "default-user",
        definition: "The imagined body, mind, or identity a system is built around. Everyone else becomes the error rate.",
        whenYouSee: "When a system fails for some people and works for others, ask: who was the template?",
        whoPays: "The people outside the frame — often poor, immigrant, disabled, darker-skinned, colonized.",
        connectsTo: ["classification", "error rate", "legible"],
        entryRefs: ["01"]
      },
      {
        term: "Classification",
        slug: "classification",
        definition: "Sorting people into categories — with the claim that measurement removes bias.",
        whenYouSee: "When a system claims to be objective, ask: whose categories? whose archive?",
        whoPays: "Those whose bodies or behaviors don't fit the norm. The categories inherit the assumptions of their makers.",
        connectsTo: ["default user", "error rate", "the profile"],
        entryRefs: ["01"]
      },
      {
        term: "Legible",
        slug: "legible",
        definition: "Made readable or measurable by a system. When something becomes legible, it becomes manageable.",
        whenYouSee: "When a system measures you, ask: what does it ignore? Fatigue, care, recovery — who absorbs that cost?",
        whoPays: "The worker whose body is optimized. The person whose complexity is flattened to a score.",
        connectsTo: ["optimization", "algorithmic management"],
        entryRefs: ["03"]
      },
      {
        term: "Error Rate",
        slug: "error-rate",
        definition: "How often a system fails — often unevenly. Everyone outside the default user becomes the error rate.",
        whenYouSee: "When a system reports \"accuracy,\" ask: for whom? The average hides who pays.",
        whoPays: "Gender Shades found 34% error for darker-skinned women vs. under 1% for lighter-skinned men.",
        connectsTo: ["default user", "classification"],
        entryRefs: ["01"]
      }
    ]
  },
  {
    title: "How systems shape you",
    terms: [
      {
        term: "Variable Reward",
        slug: "variable-reward",
        definition: "Unpredictable rewards — the most powerful way to produce compulsive behavior. Skinner identified it. The feed implements it.",
        whenYouSee: "When something feels hard to put down, look for unpredictable rewards. The slot machine. The notification.",
        whoPays: "The mind becomes the resource being extracted. The most compulsive users are the most valuable.",
        connectsTo: ["mechanism", "attention economy", "engagement"],
        entryRefs: ["02"]
      },
      {
        term: "Mechanism",
        slug: "mechanism",
        definition: "The underlying structure that produces a behavior — often hidden behind claims of personalization or choice.",
        whenYouSee: "When a system says it's giving you what you want, ask: what mechanism is shaping what you want?",
        whoPays: "Nobody agreed to be inside the experiment. The experiment was designed to feel like a choice.",
        connectsTo: ["variable reward", "attention economy"],
        entryRefs: ["02"]
      },
      {
        term: "Attention Economy",
        slug: "attention-economy",
        definition: "Human attention as a scarce resource that platforms compete to capture and sell.",
        whenYouSee: "When the product is free, you are the product. Your attention is packaged and sold.",
        whoPays: "The user whose time is extracted. The platform optimizes for engagement, not wellbeing.",
        connectsTo: ["variable reward", "engagement", "data flows"],
        entryRefs: ["02"]
      }
    ]
  },
  {
    title: "How systems manage you",
    terms: [
      {
        term: "Labor",
        slug: "labor",
        definition: "Work that produces value — and the systems that measure, optimize, and extract from it without counting the cost to the body.",
        whenYouSee: "When labor is measured, ask: what gets left out? Fatigue, recovery, the work that doesn't show up in the dashboard.",
        whoPays: "The worker. The system tracks what it can measure. The cost absorbed by the body is externalized.",
        connectsTo: ["optimization", "algorithmic management", "legible"],
        entryRefs: ["03"]
      },
      {
        term: "Optimization",
        slug: "optimization",
        definition: "Making something as efficient as possible according to a metric — at the expense of what the metric doesn't capture.",
        whenYouSee: "When a system optimizes, ask: what is outside the frame? The worker's fatigue was never on the chart.",
        whoPays: "The body pushed past its limit. The person optimized against, not for.",
        connectsTo: ["labor", "legible", "algorithmic management"],
        entryRefs: ["03"]
      },
      {
        term: "Algorithmic Management",
        slug: "algorithmic-management",
        definition: "Software that assigns work, monitors performance, and disciplines workers — often without a human supervisor.",
        whenYouSee: "When the algorithm fires, warns, or rates automatically, ask: who can you appeal to?",
        whoPays: "The worker with no human to argue with. The body that cannot be measured — pain, fatigue — is invisible.",
        connectsTo: ["labor", "optimization", "the profile"],
        entryRefs: ["03"]
      }
    ]
  },
  {
    title: "How systems score you",
    terms: [
      {
        term: "The Profile",
        slug: "the-profile",
        definition: "The compiled record of you — behavior, location, transactions — reduced to a score or dossier that decides what you're allowed to do.",
        whenYouSee: "When a number decides your access, ask: who designed it? The score does not describe you. It decides you.",
        whoPays: "Those who have been inside the system longest are trusted most. The marginalized are scored out.",
        connectsTo: ["credit scoring", "risk assessment", "data flows"],
        entryRefs: ["04"]
      },
      {
        term: "Credit Scoring",
        slug: "credit-scoring",
        definition: "A numeric rating that predicts whether you'll repay — used to grant or deny credit, housing, employment.",
        whenYouSee: "When three digits open or close doors, ask: what inputs? Who lives where, who owes what — the formula made discrimination invisible.",
        whoPays: "Those redlined by zip code, by history, by who was never in the archive to begin with.",
        connectsTo: ["the profile", "risk assessment", "redlining"],
        entryRefs: ["04"]
      },
      {
        term: "Risk Assessment",
        slug: "risk-assessment",
        definition: "Algorithms that predict future behavior — recidivism, fraud, default — and make high-stakes decisions.",
        whenYouSee: "When an algorithm decides who goes free and who stays in jail, ask: who defines fairness? The conflict is political.",
        whoPays: "ProPublica found Black defendants scored high risk at nearly twice the rate of white defendants. The score cannot be appealed.",
        connectsTo: ["the profile", "credit scoring"],
        entryRefs: ["04"]
      }
    ]
  },
  {
    title: "How systems connect",
    terms: [
      {
        term: "Data Flows",
        slug: "data-flows",
        definition: "How your data moves between systems — apps, advertisers, brokers, employers, governments — often without your knowledge.",
        whenYouSee: "When one system knows something about you, ask: who else bought it? The systems were built separately. The data merges anyway.",
        whoPays: "You cannot consent to what you cannot see. The question is not whether you use the app — it is who else the app uses you for.",
        connectsTo: ["surveillance", "the profile"],
        entryRefs: ["01", "02", "05"]
      },
      {
        term: "Surveillance",
        slug: "surveillance",
        definition: "The systematic monitoring of people — by states, employers, platforms, devices — often without consent or transparency.",
        whenYouSee: "When something watches, ask: who watches? Who benefits? Who pays?",
        whoPays: "The catalog asks this in every entry. The answer is never neutral.",
        connectsTo: ["data flows", "legible", "the profile"],
        entryRefs: ["01", "03", "05"]
      }
    ]
  }
];

export default function GlossaryPage() {
  return (
    <Spread className="spread--continuous glossary">
      <PageLeft>
        <div className="page-content">
          <div className="section-title">Glossary</div>

          <div className="glossary-framing">
            <p>
              The catalog argues that the same habit appears across every system:{" "}
              <em>reduce a person to data, and the person becomes manageable.</em>{" "}
              These terms name the parts of that pattern.
            </p>
          </div>

          <div className="glossary-how-to-use zine-card">
            <div className="label">How to Use the Glossary</div>
            <div className="content">
              <p>
                <strong>Visit the glossary as you read.</strong> When you see a
                term in the margin of an entry, click it — the glossary explains
                how the catalog uses that term and how it connects to the
                argument.
              </p>
              <p>
                Use it to trace the pattern: the same mechanisms appear across
                body, mind, labor, and identity. When you see one, you're often
                seeing the others.
              </p>
              <p>
                Each term includes: <em>When you see</em> (what to look for),{" "}
                <em>Who pays</em> (whose cost is externalized), and{" "}
                <em>Connects to</em> (related terms). Follow the links back to
                entries to see the pattern in context.
              </p>
            </div>
          </div>

          {GLOSSARY_GROUPS.slice(0, 3).map((group) => (
            <div key={group.title} className="glossary-group">
              <h3 className="glossary-group-title">{group.title}</h3>
              {group.terms.map((term) => (
                <div
                  key={term.slug}
                  id={term.slug}
                  className="glossary-entry"
                >
                  <dt className="glossary-term">{term.term}</dt>
                  <dd className="glossary-def">{term.definition}</dd>
                  <div className="glossary-when">
                    <span className="glossary-meta-label">When you see:</span>{" "}
                    {term.whenYouSee}
                  </div>
                  <div className="glossary-who">
                    <span className="glossary-meta-label">Who pays:</span>{" "}
                    {term.whoPays}
                  </div>
                  <div className="glossary-connects">
                    <span className="glossary-meta-label">Connects to:</span>{" "}
                    {term.connectsTo.join(", ")}
                  </div>
                  <div className="glossary-entry-links">
                    See{" "}
                    {term.entryRefs.map((num, i) => (
                      <span key={num}>
                        {i > 0 && ", "}
                        <Link
                          href={ENTRY_LINKS[num].href}
                          className="glossary-entry-link"
                        >
                          {ENTRY_LINKS[num].label}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          {GLOSSARY_GROUPS.slice(3).map((group) => (
            <div key={group.title} className="glossary-group">
              <h3 className="glossary-group-title">{group.title}</h3>
              {group.terms.map((term) => (
                <div
                  key={term.slug}
                  id={term.slug}
                  className="glossary-entry"
                >
                  <dt className="glossary-term">{term.term}</dt>
                  <dd className="glossary-def">{term.definition}</dd>
                  <div className="glossary-when">
                    <span className="glossary-meta-label">When you see:</span>{" "}
                    {term.whenYouSee}
                  </div>
                  <div className="glossary-who">
                    <span className="glossary-meta-label">Who pays:</span>{" "}
                    {term.whoPays}
                  </div>
                  <div className="glossary-connects">
                    <span className="glossary-meta-label">Connects to:</span>{" "}
                    {term.connectsTo.join(", ")}
                  </div>
                  <div className="glossary-entry-links">
                    See{" "}
                    {term.entryRefs.map((num, i) => (
                      <span key={num}>
                        {i > 0 && ", "}
                        <Link
                          href={ENTRY_LINKS[num].href}
                          className="glossary-entry-link"
                        >
                          {ENTRY_LINKS[num].label}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <NavFooter
            left={
              <Link href="/frontmatter/table-of-contents">
                ← Table of Contents
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
              <Link href="/backmatter/index-of-systems">
                Next → Index of Systems
              </Link>
            }
          />
        </div>
      </PageRight>
    </Spread>
  );
}
