/**
 * Artifact — repeatable component for paired artifacts.
 * Fixed skeleton: kicker, title, image viewport, unified row system.
 */
import Link from "next/link";
import type { ReactNode } from "react";

const ARTIFACT_ROW_KEYS = [
  "What it does",
  "Used for",
  "Claim",
  "Reality / who pays"
] as const;

export type ArtifactProps = {
  title: string;
  /** Image source — omit when using mediaContent */
  imageSrc?: string;
  imageAlt?: string;
  /** Custom media (e.g. inline SVG) — when provided, used instead of img */
  mediaContent?: ReactNode;
  caption: string;
  /** Add "is-window" for fixed aspect-ratio image (crop allowed) */
  imageClass?: string;
  /** Cross-reference number for index-style linking, e.g. (1), (2) or ① ② */
  crossRefNum?: number;
  /** Style for cross-ref: "parens" = (1), "circled" = ① */
  crossRefStyle?: "parens" | "circled";
  /** Optional micro-label for issue-layout feel, e.g. "01 / BODY" */
  microLabel?: string;
  dataRows: Array<{ term: string; definition: string; sourceRef?: number }>;
  claim: string;
  reality: string;
  /** Optional source ref for claim row */
  claimSourceRef?: number;
  /** Optional source ref for reality row */
  realitySourceRef?: number;
};

export function Artifact({
  title,
  imageSrc,
  imageAlt = "",
  mediaContent,
  caption,
  imageClass,
  crossRefNum,
  crossRefStyle = "parens",
  microLabel,
  dataRows,
  claim,
  reality,
  claimSourceRef,
  realitySourceRef
}: ArtifactProps) {
  const getRow = (term: string) => dataRows.find((r) => r.term === term);
  const rowValues: Record<string, { definition: string; sourceRef?: number }> = {
    "What it does": {
      definition: getRow("What it does")?.definition ?? "—",
      sourceRef: getRow("What it does")?.sourceRef
    },
    "Used for": {
      definition: getRow("Used for")?.definition ?? "—",
      sourceRef: getRow("Used for")?.sourceRef
    },
    Claim: { definition: claim, sourceRef: claimSourceRef },
    "Reality / who pays": { definition: reality, sourceRef: realitySourceRef }
  };

  return (
    <article className="artifact" aria-label={`Artifact: ${title}`}>
      <div className="artifact__inner">
      <header className="artifact__head">
        {microLabel && (
          <div className="artifact__micro-label" aria-hidden="true">
            {microLabel}
          </div>
        )}
        <div className="artifact__kicker">
          {crossRefNum != null
            ? `${crossRefStyle === "circled" ? String.fromCodePoint(0x2460 + crossRefNum - 1) : `(${crossRefNum})`} Artifact`
            : "Artifact"}
        </div>
        <h3 className="artifact__title">{title}</h3>
      </header>

      <figure className={`artifact__media${imageClass ? ` ${imageClass}` : ""}`}>
        {mediaContent ?? (imageSrc && (
          <span className="artifact__media-inner" aria-hidden="true">
            <img src={imageSrc} alt={imageAlt} />
          </span>
        ))}
        <figcaption>{caption}</figcaption>
      </figure>

      <dl className="artifact__rows">
        {ARTIFACT_ROW_KEYS.map((key) => (
          <div
            key={key}
            className={`artifact__row${key === "Reality / who pays" ? " artifact__row--reality" : ""}`}
          >
            <dt>{key}</dt>
            <dd>
              {rowValues[key].definition}
              {rowValues[key].sourceRef != null && (
                <sup className="cite-ref">
                  <Link href={`#source-${rowValues[key].sourceRef}`} className="cite-ref__link">
                    {rowValues[key].sourceRef}
                  </Link>
                </sup>
              )}
            </dd>
          </div>
        ))}
      </dl>
      </div>
    </article>
  );
}
