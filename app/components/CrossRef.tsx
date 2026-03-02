"use client";

import Link from "next/link";
import type { EntrySlug } from "@/app/lib/cross-refs";
import {
  getEntryNumber,
  getEntryPath,
  getEntryLabel
} from "@/app/lib/cross-refs";

type CrossRefProps = {
  /** Entry slug to link to */
  to: EntrySlug;
  /** Display: "parens" = (1), "circled" = ① */
  display?: "parens" | "circled";
  /** Include label after number, e.g. "(2) Mind as Dataset" */
  showLabel?: boolean;
  /** Additional class names */
  className?: string;
};

export function CrossRef({
  to,
  display = "parens",
  showLabel = false,
  className = ""
}: CrossRefProps) {
  const num = getEntryNumber(to);
  const path = getEntryPath(to);
  const label = getEntryLabel(to);

  const displayNum =
    display === "circled"
      ? String.fromCodePoint(0x2460 + num - 1) // ①②③④⑤⑥
      : `(${num})`;

  return (
    <Link
      href={path}
      className={`cross-ref-link ${className}`.trim()}
      aria-label={`See entry ${num}: ${label}`}
    >
      <span className="cross-ref-num">{displayNum}</span>
      {showLabel && ` ${label}`}
    </Link>
  );
}
