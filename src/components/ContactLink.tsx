import type { ReactNode } from "react";

export function ContactLink({ className, children }: { className?: string; children: ReactNode }) {
  return <a href="#iletisim" className={className}>{children}</a>;
}
