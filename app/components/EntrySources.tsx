import Link from "next/link";

export type EntrySource = {
  title: string;
  author: string;
  year: string;
  note?: string;
};

export function EntrySources({ sources }: { sources: EntrySource[] }) {
  if (!sources?.length) return null;

  return (
    <section className="sources-block" aria-label="Sources">
      <div className="sources-label">SOURCES</div>
      <ul className="sources-list">
        {sources.map((s) => (
          <li key={`${s.title}-${s.author}`} className="sources-item">
            <Link href="/backmatter/recommended-reading" className="sources-link">
              {s.author}, <em>{s.title}</em> ({s.year})
            </Link>
            {s.note && <span className="sources-note"> — {s.note}</span>}
          </li>
        ))}
      </ul>
      <Link href="/backmatter/recommended-reading" className="sources-more">
        Full citations → Recommended Reading
      </Link>
    </section>
  );
}
