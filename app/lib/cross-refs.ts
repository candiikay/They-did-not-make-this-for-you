/**
 * Cross-reference system — numbered entries for non-linear navigation.
 * Prototype: used on /prototype/cross-ref-demo to test before rollout.
 *
 * Inspired by Cyberfeminism Index (Mindy Seu): encircled/parenthesized
 * numbers link entries across the catalog.
 */

export type EntrySlug =
  | "ch1-entry01-body-as-dataset"
  | "ch1-entry02-mind-as-dataset"
  | "ch1-entry03-behavior-as-dataset"
  | "ch1-entry04-identity-as-dataset"
  | "ch2-entry04-location-tracking"
  | "ch1-reader-as-artifact";

/** Maps entry slugs to display numbers. Used for (1), (2), etc. */
export const ENTRY_NUMBERS: Record<EntrySlug, number> = {
  "ch1-entry01-body-as-dataset": 1,
  "ch1-entry02-mind-as-dataset": 2,
  "ch1-entry03-behavior-as-dataset": 3,
  "ch1-entry04-identity-as-dataset": 4,
  "ch2-entry04-location-tracking": 5,
  "ch1-reader-as-artifact": 6,
};

/** Maps entry slugs to their paths. */
export const ENTRY_PATHS: Record<EntrySlug, string> = {
  "ch1-entry01-body-as-dataset": "/chapter-01/ch1-entry01-body-as-dataset",
  "ch1-entry02-mind-as-dataset": "/chapter-01/ch1-entry02-mind-as-dataset",
  "ch1-entry03-behavior-as-dataset": "/chapter-01/ch1-entry03-behavior-as-dataset",
  "ch1-entry04-identity-as-dataset": "/chapter-01/ch1-entry04-identity-as-dataset",
  "ch2-entry04-location-tracking": "/chapter-02/ch2-entry04-location-tracking",
  "ch1-reader-as-artifact": "/chapter-01/ch1-reader-as-artifact",
};

/** Human-readable labels for each entry. */
export const ENTRY_LABELS: Record<EntrySlug, string> = {
  "ch1-entry01-body-as-dataset": "Body as Dataset",
  "ch1-entry02-mind-as-dataset": "Mind as Dataset",
  "ch1-entry03-behavior-as-dataset": "Behavior as Dataset",
  "ch1-entry04-identity-as-dataset": "Identity as Dataset",
  "ch2-entry04-location-tracking": "Location Tracking",
  "ch1-reader-as-artifact": "Digression",
};

export function getEntryNumber(slug: EntrySlug): number {
  return ENTRY_NUMBERS[slug];
}

export function getEntryPath(slug: EntrySlug): string {
  return ENTRY_PATHS[slug];
}

export function getEntryLabel(slug: EntrySlug): string {
  return ENTRY_LABELS[slug];
}
