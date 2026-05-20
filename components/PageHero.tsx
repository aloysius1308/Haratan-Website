type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#d8f5ff_0,#f7fbff_36%,#ffffff_76%)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-900 via-navy-700 to-cyanSoft" />
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-navy-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
        </div>
      </div>
    </section>
  );
}
