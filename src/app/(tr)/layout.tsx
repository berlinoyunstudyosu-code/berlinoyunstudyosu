import { SiteDocument } from "@/components/SiteDocument";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("tr");
export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="tr">{children}</SiteDocument>;
}
