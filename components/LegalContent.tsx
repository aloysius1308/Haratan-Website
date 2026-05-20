import PageHero from "@/components/PageHero";

type LegalSection = {
  title: string;
  body: string;
};

type LegalContentProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalContent({
  eyebrow,
  title,
  intro,
  sections
}: LegalContentProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-slate-700">
            This page provides general website information and should be reviewed
            with professional advisers where legal or regulatory interpretation
            is required.
          </p>
        </div>
      </section>
    </>
  );
}
