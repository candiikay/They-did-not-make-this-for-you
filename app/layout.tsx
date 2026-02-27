import type { Metadata } from "next";
import "../css/base.css";
import "../css/content.css";
import "../css/entry.css";
import "../css/entry-variant.css";
import "../css/frontmatter.css";
import "../css/navigation.css";
import "../css/cover.css";
import "../css/backmatter.css";
import "../css/index-of-systems.css";
import "../css/access-to-tools.css";

export const metadata: Metadata = {
  title: "They Did Not Make This For You",
  description: "They Did Not Make This For You — digital edition"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

