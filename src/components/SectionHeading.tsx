type Props = { eyebrow?: string; title: string; intro?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, intro, light = false }: Props) {
  return (
    <header className={`section-heading reveal ${light ? "section-heading--light" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
