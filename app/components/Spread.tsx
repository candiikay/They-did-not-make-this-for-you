import { ReactNode } from "react";

export function Spread({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? `spread ${className}` : "spread"}>
      {children}
    </div>
  );
}

export function PageLeft({ children }: { children: ReactNode }) {
  return <div className="page-left">{children}</div>;
}

export function PageRight({ children }: { children: ReactNode }) {
  return <div className="page-right">{children}</div>;
}

export function TopStrip({
  left,
  right
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="top-strip">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

export function PageFooter({
  left,
  right
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="page-footer">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

export function NavFooter({
  left,
  center,
  right
}: {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}) {
  return (
    <nav className="nav-footer" aria-label="Page navigation">
      <span>{left}</span>
      <span className="tags">{center}</span>
      <span>{right}</span>
    </nav>
  );
}

