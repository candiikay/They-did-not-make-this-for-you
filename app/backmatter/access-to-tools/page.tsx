import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Access to Tools (Now) — They Did Not Make This For You",
  description:
    "A catalog of current technology — tools for understanding, community, identity, and labor"
};

type Tool = {
  name: string;
  category: string;
  section: string;
  description: string;
  access: string;
  url?: string;
};

const tools: Tool[] = [
  {
    name: "Data Export & Liberation",
    category: "Understanding",
    section: "UNDERSTANDING",
    description:
      "Google Takeout, Facebook archive, Apple data request — download what platforms hold about you. Incomplete, often delayed, but it exists.",
    access:
      "Shows you what they have. The first step to knowing what you're inside.",
    url: "https://takeout.google.com"
  },
  {
    name: "uBlock Origin",
    category: "Understanding",
    section: "UNDERSTANDING",
    description:
      "Open-source ad and tracker blocker. Blocks scripts, pixels, and third-party requests before they load.",
    access:
      "Lets you browse without feeding the ad network. No subscription, no paywall.",
    url: "https://ublockorigin.com"
  },
  {
    name: "Privacy Badger",
    category: "Understanding",
    section: "UNDERSTANDING",
    description:
      "EFF tool that learns which trackers follow you across sites and blocks them. Works alongside uBlock.",
    access:
      "Surfaces who is watching. Makes invisible tracking visible.",
    url: "https://privacybadger.org"
  },
  {
    name: "Signal",
    category: "Messaging",
    section: "COMMUNITY",
    description:
      "End-to-end encrypted messaging. No ads, no tracking, no server-side message storage.",
    access:
      "A place to talk that isn't built to sell your attention.",
    url: "https://signal.org"
  },
  {
    name: "Mastodon / ActivityPub",
    category: "Social",
    section: "COMMUNITY",
    description:
      "Federated social networks. You pick a server; you can move. No single company owns the feed.",
    access:
      "Social without the algorithm. Your timeline, your rules.",
    url: "https://joinmastodon.org"
  },
  {
    name: "Matrix / Element",
    category: "Messaging",
    section: "COMMUNITY",
    description:
      "Decentralized chat protocol. Self-host or join a server. Interoperates with other networks.",
    access:
      "Chat that doesn't lock you in. Own your history.",
    url: "https://element.io"
  },
  {
    name: "Bitwarden",
    category: "Identity",
    section: "IDENTITY",
    description:
      "Open-source password manager. Encrypted vault, cross-device sync. Can self-host.",
    access:
      "One strong secret instead of a hundred weak ones. You control the keys.",
    url: "https://bitwarden.com"
  },
  {
    name: "Firefox",
    category: "Browser",
    section: "IDENTITY",
    description:
      "Browser from a nonprofit. Enhanced Tracking Protection by default. No Chromium monoculture.",
    access:
      "A browser that doesn't sell your data to fund itself.",
    url: "https://www.mozilla.org/firefox"
  },
  {
    name: "Tor Browser",
    category: "Browser",
    section: "IDENTITY",
    description:
      "Routes traffic through volunteer relays. Hides your IP and browsing from your ISP and sites.",
    access:
      "When you need to browse without being watched.",
    url: "https://www.torproject.org"
  },
  {
    name: "Worker-Owned Platforms",
    category: "Labor",
    section: "LABOR",
    description:
      "Driver-owned ride cooperatives, worker-owned delivery apps. Platform coops put ownership in worker hands.",
    access:
      "The same service, different who profits. Proof it can be built another way.",
    url: "https://platform.coop"
  },
  {
    name: "Alternatives to Big Tech",
    category: "Infrastructure",
    section: "LABOR",
    description:
      "Proton Mail, Nextcloud, Jitsi, Peertube — open-source replacements for Gmail, Drive, Zoom, YouTube.",
    access:
      "Infrastructure you can run yourself. No vendor lock-in.",
    url: "https://switching.software"
  },
  {
    name: "Right to Repair Resources",
    category: "Infrastructure",
    section: "LABOR",
    description:
      "iFixit guides, repair manuals, parts suppliers. Fight planned obsolescence with knowledge.",
    access:
      "Your device, your right to fix it. Community knowledge, not corporate gatekeeping.",
    url: "https://www.ifixit.com"
  }
];

function groupBySection(items: Tool[]): Record<string, Tool[]> {
  const out: Record<string, Tool[]> = {};
  for (const t of items) {
    if (!out[t.section]) out[t.section] = [];
    out[t.section].push(t);
  }
  return out;
}

function ToolEntry({ tool, catalogNum }: { tool: Tool; catalogNum: number }) {
  const content = (
    <>
      <span className="wec-catalog-num">{String(catalogNum).padStart(3, "0")}</span>
      <div className="wec-system-name">{tool.name}</div>
      <div className="wec-system-meta">{tool.category}</div>
      <p className="wec-system-desc">{tool.description}</p>
      <p className="wec-system-example">
        <span className="wec-system-example-label">Access: </span>
        {tool.access}
      </p>
      {tool.url && (
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="wec-system-link"
        >
          Learn more
        </a>
      )}
    </>
  );

  return (
    <div className="wec-system-entry wec-tool-entry">
      {content}
    </div>
  );
}

export default function AccessToToolsPage() {
  const grouped = groupBySection(tools);
  const sections = Object.keys(grouped);
  const leftSections = sections.slice(0, Math.ceil(sections.length / 2));
  const rightSections = sections.slice(Math.ceil(sections.length / 2));

  let catalogNum = 0;
  const getNextNum = () => ++catalogNum;

  return (
    <Spread className="spread--continuous spread--entry-style spread--access-to-tools">
      <PageLeft>
        <div className="page-content">
          <header className="wec-header">
            <div className="wec-title">ACCESS TO TOOLS (NOW)</div>
            <div className="wec-function">
              <div className="wec-label">Function</div>
              <p className="wec-text">
                A catalog of technology that exists today — tools for
                understanding, community, identity, and labor. Not theory. Not
                vapor. What you can use right now.
              </p>
            </div>
            <div className="wec-purpose">
              <div className="wec-label">Purpose</div>
              <p className="wec-text">
                The Index of Systems maps what was built without you. This
                catalog maps what you can reach for: tools that give you access
                to your own data, to encrypted conversation, to repair, to
                ownership. Access to tools — updated for the systems we live
                inside now.
              </p>
            </div>
          </header>

          <div className="at-image-placeholder" aria-hidden>
            <span className="at-image-placeholder-label">Image placeholder</span>
          </div>

          {leftSections.map((section) => (
            <div key={section} className="wec-section">
              <div className="wec-section-title">{section}</div>
              <div className="wec-systems-list">
                {grouped[section].map((t) => (
                  <ToolEntry key={t.name} tool={t} catalogNum={getNextNum()} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="at-image-placeholder at-image-placeholder--wide" aria-hidden>
            <span className="at-image-placeholder-label">Image placeholder</span>
          </div>
          {rightSections.map((section) => (
            <div key={section} className="wec-section">
              <div className="wec-section-title">{section}</div>
              <div className="wec-systems-list">
                {grouped[section].map((t) => (
                  <ToolEntry key={t.name} tool={t} catalogNum={getNextNum()} />
                ))}
              </div>
            </div>
          ))}

          <div className="at-image-placeholder at-image-placeholder--small" aria-hidden>
            <span className="at-image-placeholder-label">Image placeholder</span>
          </div>

          <div className="wec-how-to-use">
            <div className="wec-how-to-use-label">How to use this catalog</div>
            <p className="wec-how-to-use-text">
              These are starting points, not endorsements. Tools change; links
              break. Use this to find alternatives, to see what exists outside
              the default stack, and to remember that access is still possible.
            </p>
          </div>

          <NavFooter
            left={
              <Link href="/backmatter/index-of-systems">
                ← Previous Index of Systems
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
              <Link href="/backmatter/recommended-reading">
                Next → Recommended Reading
              </Link>
            }
          />
        </div>
      </PageRight>
    </Spread>
  );
}
