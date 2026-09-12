"use client";

import type { ReactNode } from "react";

export function ContactLink({ subject, className, children }: { subject: string; className?: string; children: ReactNode }) {
  function chooseSubject() {
    window.dispatchEvent(new CustomEvent("contact-subject", { detail: subject }));
  }
  return <a href="#iletisim" className={className} onClick={chooseSubject}>{children}</a>;
}
