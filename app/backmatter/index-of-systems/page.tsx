import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Index of Systems — They Did Not Make This For You",
  description: "Index of systems — They Did Not Make This For You"
};

type System = {
  name: string;
  type: string;
  section: string;
  origin: string;
  description: string;
  example: string;
  entry: string;
};

const systems: System[] = [
  // LABOR & MEASUREMENT
  {
    name: "Amazon Time Off Task (TOT)",
    type: "Labor measurement",
    section: "LABOR & MEASUREMENT",
    origin: "2000s–present — Amazon fulfillment centers",
    description:
      "Automated productivity tracking that measures every minute away from scanning. RF handheld scanners record when workers are not actively performing tracked tasks.",
    example:
      "Workers receive warnings at 30 minutes of TOT, termination at 120 minutes or three separate 30-minute violations. Bathroom breaks, equipment failures, and talking to coworkers are flagged. California passed legislation in 2021 prohibiting quotas that don't account for rest. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  {
    name: "Applicant Tracking Systems (ATS)",
    type: "Labor measurement",
    section: "LABOR & MEASUREMENT",
    origin: "1990s–present — Workday, Greenhouse, Lever, etc.",
    description:
      "Software that parses resumes, ranks candidates, and filters applications before human review. Format and parsing often matter as much as qualifications.",
    example:
      "Inconsistent fonts, tables, or PDF embedding can trigger rejection. 73% of ATS rejection decisions occur in the first 10 seconds during file validation. Nearly half of rejections stem from formatting errors, not qualification gaps. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  {
    name: "E-Verify",
    type: "Identity verification",
    section: "LABOR & MEASUREMENT",
    origin: "1996–present — DHS, SSA",
    description:
      "Federal web-based system that verifies employment eligibility by matching Form I-9 data against SSA and DHS records. Required for federal contractors and some state employers.",
    example:
      "Employers create an E-Verify case within three business days of hire. Tentative Nonconfirmation triggers a process the employee must resolve. Photo matching verifies documents. The system sorts who may work and who may not. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  {
    name: "HireVue",
    type: "Labor measurement",
    section: "LABOR & MEASUREMENT",
    origin: "2012–present — AI video interview assessment",
    description:
      "AI-powered video interview platform that assesses candidates through recorded responses. Facial analysis discontinued in 2021; still uses audio and NLP to rank applicants.",
    example:
      "Over 26 million video interviews hosted for 700+ customers. The AI assists recruiters who retain final authority. The system was audited for bias; critics questioned whether any algorithm can fairly judge a human in a box. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  {
    name: "Pharmacy Benefit Managers (PBMs)",
    type: "Labor / healthcare intermediary",
    section: "LABOR & MEASUREMENT",
    origin: "1960s–present — CVS Caremark, Optum Rx, Express Scripts",
    description:
      "Middlemen that manage prescription benefits for 200+ million Americans. Control formularies, negotiate rebates, and steer patients toward certain drugs. Operate largely invisible to consumers.",
    example:
      "The three largest PBMs control the market. Despite being hired to reduce costs, they often steer toward expensive drugs and charge hidden markups. You may never see their name — only that your prescription costs more or your preferred drug isn't covered. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  {
    name: "The Work Number (Equifax)",
    type: "Labor / identity system",
    section: "LABOR & MEASUREMENT",
    origin: "1990s–present — Equifax",
    description:
      "The largest commercial database of income and employment data. Over 4.88 million employers report payroll every cycle. Lenders, landlords, and government verify without asking you.",
    example:
      "813+ million employee records. Your employer reports every pay period. When you apply for a loan or apartment, the verifier pulls your data in seconds. Most people don't know the database exists until a decision is made. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Uber / Lyft Driver Rating & Deactivation",
    type: "Labor measurement",
    section: "LABOR & MEASUREMENT",
    origin: "2009–present — Uber, Lyft",
    description:
      "Algorithmic monitoring of ratings, cancellations, complaints, and route deviations. Uber's 'Driver Accountability AI' flags risk within 60 days. Deactivation below ~4.6★.",
    example:
      "A driver is deactivated. The reason may be a false complaint, a passenger seeking a refund, or traffic beyond their control. The algorithm does not explain. Appeal through the app; wait 7–14 days. The gig depends on a score you cannot see. See Entry 03.",
    entry: "/chapter-01/ch1-entry03-behavior-as-dataset"
  },
  // BODY & FACE
  {
    name: "Amazon One",
    type: "Biometric identity",
    section: "BODY & FACE",
    origin: "2020–present — Whole Foods, Panera, stadiums, airports",
    description:
      "Palm-scanning payment system. Scans surface details and vein patterns. Data stored in AWS. Used 3+ million times by mid-2023 across 500+ Whole Foods stores.",
    example:
      "Hover your palm at checkout. No wallet, no phone. Prime discounts apply automatically. Amazon says it will never share palm data. The hand becomes the key. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "Apple Face ID",
    type: "Biometric identity",
    section: "BODY & FACE",
    origin: "2017–present — iPhone X and later",
    description:
      "Facial authentication for device unlock and payments. TrueDepth camera creates mathematical representations. Data stays on-device in Secure Enclave; never sent to Apple or third parties.",
    example:
      "Look at your phone to pay. The match happens locally. Apps only learn whether authentication succeeded — not your face. The body is the password. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "CLEAR",
    type: "Biometric identity",
    section: "BODY & FACE",
    origin: "2010–present — 59 airports, 10 stadiums, Avis, LinkedIn",
    description:
      "Face-first biometric verification at security checkpoints. Members bypass ID checks at pods or eGates. $199/year; family add-ons $119. Optional — alternatives available.",
    example:
      "Walk to the pod. Your face verifies in seconds. No ID at the podium. You paid to be pre-sorted. The body is the credential. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "Clearview AI",
    type: "Biometric surveillance",
    section: "BODY & FACE",
    origin: "2017–present — law enforcement, government",
    description:
      "Facial recognition that scrapes billions of images from the web and social media. Law enforcement uploads a photo to search the database. Banned or restricted in several states and countries.",
    example:
      "A suspect's face is uploaded. The system returns matches from social media, news, and public records. Nobody consented to being in the database. Canada, UK, and EU have ruled against it. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "CBP Global Entry / NEXUS / SENTRI",
    type: "Biometric identity",
    section: "BODY & FACE",
    origin: "2008–present — U.S. Customs and Border Protection",
    description:
      "Trusted traveler kiosks with facial biometrics at borders. Paperless since 2022. Uses Traveler Verification Service (TVS). U.S. citizen photos retained no more than 12 hours.",
    example:
      "Arrive at the kiosk. Your face matches your pre-staged photo. No receipt, no agent. You are sorted as low-risk. The body is the passport. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "iBorderCtrl",
    type: "Biometric / behavioral system",
    section: "BODY & FACE",
    origin: "2016–2019 — EU H2020, Hungary, Greece, Latvia",
    description:
      "EU-funded automated border system. Pre-travel avatar interview with 'Automatic Deception Detection System' (ADDS) analyzing facial movements. Biometric screening at physical borders.",
    example:
      "A virtual border agent asks questions. ADDS watches your face for signs of deception. The system decides risk before you reach the border. Piloted; not fully deployed. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "Proctorio / ProctorU",
    type: "Biometric / behavioral surveillance",
    section: "BODY & FACE",
    origin: "2013–present — online exam proctoring",
    description:
      "AI proctoring that records face, room, and device activity during exams. Detects 'suspicious' behavior. Human Rights Watch called it 'invasive and unfair surveillance.'",
    example:
      "Students with darker skin report facial recognition failures. The system assumes uniform appearance and stress response. You are watched to prove you are not cheating. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  {
    name: "TSA CAT-2 / CBP Traveler Verification Service",
    type: "Biometric identity",
    section: "BODY & FACE",
    origin: "2021–present — JFK, LAX, Atlanta, Detroit, etc.",
    description:
      "Facial recognition at TSA checkpoints. Live face matched to ID photo. Participation optional; photos deleted after matching. Deployed at major U.S. airports.",
    example:
      "Place your ID in the reader. Look at the camera. The system verifies you in seconds. You can opt out. Most don't know they can. See Entry 01.",
    entry: "/chapter-01/ch1-entry01-body-as-dataset"
  },
  // RISK & PREDICTION
  {
    name: "iBorderCtrl ADDS (Deception Detection)",
    type: "Risk system",
    section: "RISK & PREDICTION",
    origin: "2016–2019 — iBorderCtrl project",
    description:
      "AI that analyzes facial movements during border interviews to flag 'deception.' Part of the iBorderCtrl avatar interview. No independent validation of accuracy.",
    example:
      "The virtual agent asks: Why are you traveling? The system watches micro-expressions. A flag is raised. You may never know why. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Optum PreCheck Prior Authorization",
    type: "Risk system",
    section: "RISK & PREDICTION",
    origin: "2010s–present — UnitedHealth / Optum",
    description:
      "Automated prior authorization for health insurance. Extracts clinical data from EMRs, issues instant approvals or denials. Reduces manual paperwork; also reduces human review.",
    example:
      "Your doctor orders a procedure. The system responds in seconds. Approved — or denied. The algorithm has decided. Appeal if you can. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Palantir Gotham",
    type: "Risk / prediction system",
    section: "RISK & PREDICTION",
    origin: "2004–present — NYPD, German states, UK Met",
    description:
      "Data platform that integrates police databases — criminal records, social media, devices. Predictive policing suggests where crime may occur. German court ruled Hesse's use unconstitutional.",
    example:
      "An officer queries a name. Gotham returns connections, addresses, associations. The system suggests patrol areas. Critics warn of dragnet surveillance and bias. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "PredPol",
    type: "Risk system",
    section: "RISK & PREDICTION",
    origin: "2011–present — UCLA, Santa Cruz, LAPD",
    description:
      "Predictive policing software using an 'aftershock' algorithm (adapted from earthquake prediction). Outputs 500'×500' risk boxes for directed patrol. Uses only crime type, place, time.",
    example:
      "A map shows hot spots. Police are sent there. The algorithm learns from where police go — and where they find crime. The loop reinforces itself. Santa Cruz banned it. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "ShotSpotter",
    type: "Risk system",
    section: "RISK & PREDICTION",
    origin: "1996–present — SoundThinking, 150+ cities",
    description:
      "Acoustic gunshot detection. 20–25 microphones per square mile. Algorithm flags sound; human analysts confirm; police dispatched in 60 seconds. Deployed overwhelmingly in communities of color.",
    example:
      "A 2024 NYC audit found only 13–20% of alerts were confirmed shootings. Car backfires, construction. Officers waste hundreds of hours. Chicago's mayor campaigned to eliminate it after a 13-year-old was killed by police responding to an alert. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Verisk ISO Risk Analyzer",
    type: "Risk system",
    section: "RISK & PREDICTION",
    origin: "1970s–present — Verisk / ISO",
    description:
      "Property insurance risk scoring by peril — fire, theft, wind, hail. Micro-segmentation by ZIP and census block. Hundreds of variables per property.",
    example:
      "Your home is scored. Roof age, square footage, lot size. Your neighbor pays different rates. The formula is proprietary. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  // IDENTITY & CREDIT
  {
    name: "ChexSystems",
    type: "Identity system",
    section: "IDENTITY & CREDIT",
    origin: "1970s–present — consumer reporting agency",
    description:
      "Banking blacklist. Tracks bounced checks, overdrafts, negative balances, account closures. Banks use it to deny new checking or savings accounts. Most people don't know it exists until denied.",
    example:
      "You apply for a checking account. Denied. ChexSystems has a record. You request your report — one free per year. The past follows you. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Credit-Based Insurance Scores",
    type: "Identity / risk system",
    section: "IDENTITY & CREDIT",
    origin: "1990s–present — FICO, LexisNexis, TransUnion",
    description:
      "Separate from credit scores. Insurers use them to set auto and home premiums. Weightings are proprietary. State Farm emphasizes credit more than Progressive; Florida more than Idaho.",
    example:
      "Your car insurance is higher. Not because of accidents — because of your credit. You didn't know insurers had a separate score. Even insurance employees often can't explain it. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Real-Time Bidding (RTB)",
    type: "Identity / data system",
    section: "IDENTITY & CREDIT",
    origin: "2009–present — ad tech industry",
    description:
      "When you load a webpage, your data — location, device, interests — is packaged into a bid request and sent to thousands of ad buyers in milliseconds. Data brokers like Mobilewalla sold visits to clinics, churches, protests.",
    example:
      "You visit a site. In under 100ms, your profile is auctioned. FTC restricted Mobilewalla for selling location data revealing healthcare visits. You never consented. You never saw it. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Riskified",
    type: "Identity / fraud system",
    section: "IDENTITY & CREDIT",
    origin: "2012–present — Booking.com, Prada, GoPro",
    description:
      "AI fraud prevention for e-commerce. 480+ data attributes, device and behavioral signals. Adaptive Checkout identifies 'good' customers to reduce false declines.",
    example:
      "Your order is declined. Or approved with extra steps. Riskified decided. The merchant doesn't explain. You are sorted as risk or not. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Sesame Credit (Zhima Credit)",
    type: "Credit system",
    section: "IDENTITY & CREDIT",
    origin: "2015–present — Ant Group / Alibaba",
    description:
      "Private credit score from Alipay and Alibaba activity. Purchase patterns, payment history. Higher scores unlock microloans and trust badges. Used by matchmaking services.",
    example:
      "Your diaper purchases suggest responsibility. Your score rises. You get a loan. Your score appears on your dating profile. The system judges you by what you buy. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "Stripe Radar",
    type: "Identity / fraud system",
    section: "IDENTITY & CREDIT",
    origin: "2015–present — Stripe",
    description:
      "AI fraud detection for payments. 1,000+ signals, decision in under 100ms. Trains on $1.4T in annual transactions. Blocks fraud; also blocks legitimate customers.",
    example:
      "Your payment fails. No explanation. Radar decided. The merchant doesn't know why. You try another card. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  {
    name: "TransUnion Resident Score",
    type: "Identity system",
    section: "IDENTITY & CREDIT",
    origin: "2010s–present — TransUnion TruVision",
    description:
      "Rental-specific score predicting eviction risk. Claims 15% better prediction than credit score in high-risk range. Landlords use it instead of or alongside credit.",
    example:
      "You apply for an apartment. Denied. The Resident Score, not your credit score, decided. You didn't know it existed. See Entry 04.",
    entry: "/chapter-01/ch1-entry04-identity-as-dataset"
  },
  // LOCATION & TRACKING
  {
    name: "Carrier Location Extraction",
    type: "Location system",
    section: "LOCATION & TRACKING",
    origin: "2G–5G — RRLP, LPP protocols",
    description:
      "Carriers can extract GPS from your phone via cellular protocols (RRLP, LPP) without app permissions. Runs in baseband modem firmware, below the OS. No notification to user.",
    example:
      "Your carrier sends a location request. The modem activates GPS, computes coordinates, returns them. You never saw a prompt. Law enforcement can request this data; carriers retain it for years. See Entry 05.",
    entry: "/chapter-02/ch2-entry04-location-tracking"
  },
  {
    name: "Ring Neighbors",
    type: "Location / surveillance system",
    section: "LOCATION & TRACKING",
    origin: "2018–present — Amazon Ring, 2,000+ police partnerships",
    description:
      "Doorbell cameras networked through Neighbors app. Police could request footage via 'Request for Assistance' (ended 2024); 'Community Requests' with Axon introduced 2025. Warrants still apply.",
    example:
      "A package is stolen. Neighbors shares the clip. Police have access. Critics warn of racial profiling — who gets reported as 'suspicious'? The neighborhood watches itself. See Entry 05.",
    entry: "/chapter-02/ch2-entry04-location-tracking"
  },
  {
    name: "Uber / Lyft GPS Tracking",
    type: "Location system",
    section: "LOCATION & TRACKING",
    origin: "2009–present — rideshare platforms",
    description:
      "Real-time location of drivers and riders. Used for routing, ETA, safety — and performance metrics. Feeds into driver accountability algorithms.",
    example:
      "The app knows where you are. So does the platform. Route deviations are flagged. The same data that finds your driver also judges them. See Entry 05.",
    entry: "/chapter-02/ch2-entry04-location-tracking"
  },
  // BEHAVIOR & ATTENTION
  {
    name: "Choice Architecture / Nudges",
    type: "Behavioral system",
    section: "BEHAVIOR & ATTENTION",
    origin: "2008–present — Thaler & Sunstein, behavioral economics",
    description:
      "Design of how choices are presented. Defaults, framing, option order. No neutral design — every layout influences decisions. Used by governments and corporations.",
    example:
      "The box is pre-checked. The 'recommended' option is highlighted. You think you chose. The architect chose for you. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  },
  {
    name: "Dark Patterns & A/B Testing",
    type: "Behavioral system",
    section: "BEHAVIOR & ATTENTION",
    origin: "2010–present — Harry Brignull, growth teams",
    description:
      "UI design that manipulates, coerces, or misleads. Urgency, hidden fees, obscured opt-out. Companies test variants; 'the data says it works' justifies manipulation.",
    example:
      "A food delivery app ran an A/B test delaying regular deliveries to make premium look better. Millions in revenue. You didn't know you were in the experiment. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  },
  {
    name: "Gaggle",
    type: "Behavioral surveillance",
    section: "BEHAVIOR & ATTENTION",
    origin: "1999–present — K-12 schools",
    description:
      "Monitors student activity on school devices — Google Workspace, Microsoft 365, Canvas. Flags keywords for self-harm, violence, bullying. AI detects 'subtle signs' beyond keywords. Human review before school notification.",
    example:
      "A student writes about a past suicide attempt and coping. Flagged. The school is notified. Families question whether the system distinguishes genuine risk from normal expression. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  },
  {
    name: "Netflix Recommendation Algorithm",
    type: "Behavioral system",
    section: "BEHAVIOR & ATTENTION",
    origin: "2006–present — Netflix",
    description:
      "Personalized ranking drives ~80% of viewing. Rows and titles ordered by engagement prediction. 90-second window to find something or you abandon. Demographics not used; behavior is.",
    example:
      "You scroll. The order is not random. The algorithm chose what you see first. You think you're browsing. You're being steered. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  },
  {
    name: "TikTok For You Page",
    type: "Behavioral system",
    section: "BEHAVIOR & ATTENTION",
    origin: "2018–present — ByteDance",
    description:
      "Recommendation algorithm for default homepage. Watch time, rewatch rate, shares. Content relevance over creator popularity. New creators can go viral with zero followers.",
    example:
      "You open the app. Every video is chosen for you. The algorithm learned what holds you. You scroll. The scroll is the data. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  },
  {
    name: "Uber Surge Pricing",
    type: "Behavioral / economic system",
    section: "BEHAVIOR & ATTENTION",
    origin: "2011–present — Uber",
    description:
      "Dynamic pricing adjusts fares by rider-to-driver ratio. Multiplier increases during demand spikes. Balances supply and demand; also extracts willingness to pay.",
    example:
      "Concert ends. Prices spike. You pay 2x or wait. The algorithm decided. You had no say in the multiplier. See Entry 02.",
    entry: "/chapter-01/ch1-entry02-mind-as-dataset"
  }
];

const SECTION_ORDER = [
  "LABOR & MEASUREMENT",
  "BODY & FACE",
  "RISK & PREDICTION",
  "IDENTITY & CREDIT",
  "LOCATION & TRACKING",
  "BEHAVIOR & ATTENTION"
];

function groupBySection(systems: System[]) {
  const groups: Record<string, System[]> = {};
  for (const sys of systems) {
    if (!groups[sys.section]) groups[sys.section] = [];
    groups[sys.section].push(sys);
  }
  const ordered: [string, System[]][] = [];
  for (const section of SECTION_ORDER) {
    if (groups[section]) ordered.push([section, groups[section]]);
  }
  return Object.fromEntries(ordered);
}

function SystemEntry({ sys }: { sys: System }) {
  return (
    <div className="idx-system-entry">
      <Link href={sys.entry} className="idx-system-name">
        {sys.name}
      </Link>
      <div className="idx-system-meta">
        {sys.type} · {sys.origin}
      </div>
      <p className="idx-system-desc">{sys.description}</p>
      <div className="idx-system-example">
        <span className="idx-system-example-label">Example:</span> {sys.example}
      </div>
    </div>
  );
}

export default function IndexOfSystemsPage() {
  const grouped = groupBySection(systems);
  const sections = Object.keys(grouped);
  const leftSections = sections.slice(0, Math.ceil(sections.length / 2));
  const rightSections = sections.slice(Math.ceil(sections.length / 2));

  return (
    <Spread className="spread--continuous spread--index-of-systems">
      <PageLeft>
        <div className="page-content">
          <header className="idx-header">
            <div className="idx-title">INDEX OF SYSTEMS</div>
            <p className="idx-intro">
              A rhizomatic map. Each entry names a system, traces its lineage,
              and shows a concrete instance — not theory, but what it looks like
              when it lands on a body, a screen, or a courtroom. Click through to
              follow the thread.
            </p>
            <p className="idx-note">
              These systems were built to measure, score, and sort — bodies,
              minds, behavior, identity. They were not made for you. This index
              makes them visible: the same logic that put light rings on workers'
              hands now puts sensors in the warehouse; the same reward schedule
              that ran the Skinner box runs the feed.
            </p>
          </header>

          <div className="idx-image-placeholder" aria-hidden>
            <span className="idx-image-placeholder-label">Image placeholder</span>
          </div>

          {leftSections.map((section) => (
            <div key={section} className="idx-section">
              <div className="idx-section-title">{section}</div>
              <div className="idx-systems-list">
                {grouped[section].map((sys) => (
                  <SystemEntry key={sys.name} sys={sys} />
                ))}
              </div>
            </div>
          ))}
          <div className="idx-image-placeholder idx-image-placeholder--small" aria-hidden>
            <span className="idx-image-placeholder-label">Image placeholder</span>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="idx-image-placeholder idx-image-placeholder--wide" aria-hidden>
            <span className="idx-image-placeholder-label">Image placeholder</span>
          </div>
          {rightSections.map((section) => (
            <div key={section} className="idx-section">
              <div className="idx-section-title">{section}</div>
              <div className="idx-systems-list">
                {grouped[section].map((sys) => (
                  <SystemEntry key={sys.name} sys={sys} />
                ))}
              </div>
            </div>
          ))}

          <div className="idx-image-placeholder idx-image-placeholder--small" aria-hidden>
            <span className="idx-image-placeholder-label">Image placeholder</span>
          </div>

          <div className="idx-how-to-use">
            <div className="idx-how-to-use-label">How to use this index</div>
            <p className="idx-how-to-use-text">
              Treat entries like hyperlinks — click a system name to jump to its
              chapter. Use the examples to connect systems across sections. A
              living index, meant to be annotated and extended.
            </p>
          </div>

          <NavFooter
            left={
              <Link href="/backmatter/glossary">← Previous Glossary</Link>
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
              <Link href="/backmatter/access-to-tools">
                Next → Access to Tools
              </Link>
            }
          />
        </div>
      </PageRight>
    </Spread>
  );
}
