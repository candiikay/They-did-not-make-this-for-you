/**
 * Maps entry keywords to glossary term slugs for linking.
 * Only curated terms that appear in the glossary are linked.
 * Other keywords remain as plain text in the margin.
 */

export const GLOSSARY_HREF = "/backmatter/glossary";

export const KEYWORD_TO_GLOSSARY: Record<string, string> = {
  "algorithmic management": "algorithmic-management",
  "attention economy": "attention-economy",
  "classification": "classification",
  "credit scoring": "credit-scoring",
  "data flows": "data-flows",
  "default user": "default-user",
  "error rate": "error-rate",
  "labor": "labor",
  "legible": "legible",
  "mechanism": "mechanism",
  "optimization": "optimization",
  "risk assessment": "risk-assessment",
  "surveillance": "surveillance",
  "the profile": "the-profile",
  "variable reward": "variable-reward"
};

export function glossaryLink(keyword: string): string {
  const slug = KEYWORD_TO_GLOSSARY[keyword.toLowerCase()];
  return slug ? `${GLOSSARY_HREF}#${slug}` : GLOSSARY_HREF;
}

export function hasGlossaryEntry(keyword: string): boolean {
  return keyword.toLowerCase() in KEYWORD_TO_GLOSSARY;
}
