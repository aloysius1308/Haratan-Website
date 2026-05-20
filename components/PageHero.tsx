type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-px grid-bg mx-auto max-w-7xl py-20 text-center sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-600">
            {eyebrow}
          </p>
          <h1 className="mt-7 text-5xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">{text}</p>
        </div>
      </div>
    </section>
  );
}
