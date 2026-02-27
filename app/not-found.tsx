import Link from "next/link";

export default function NotFound() {
  return (
    <div className="cover-container">
      <div className="cover">
        <div className="cover-content" style={{ alignItems: "center", textAlign: "center" }}>
          <h1 className="title-main" style={{ fontSize: "32px" }}>
            Page not found
          </h1>
          <p className="title-subtitle" style={{ marginTop: "20px" }}>
            This page doesn&apos;t exist or has moved.
          </p>
          <div className="cover-entry">
            <Link href="/" className="cover-link">
              ← Back to cover
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
