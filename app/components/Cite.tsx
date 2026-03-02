/**
 * Cite — tiny superscript source reference (Mindy Seu index-style).
 * Links to the numbered Sources list in the rail.
 */
import Link from "next/link";

type CiteProps = {
  /** Source number (1-based, matches SOURCES list) */
  num: number;
  /** Optional: use bracketed [1] instead of superscript */
  bracketed?: boolean;
};

export function Cite({ num, bracketed = false }: CiteProps) {
  const content = bracketed ? `[${num}]` : num;
  return (
    <sup className="cite-ref" aria-label={`Source ${num}`}>
      <Link href={`#source-${num}`} className="cite-ref__link">
        {content}
      </Link>
    </sup>
  );
}
