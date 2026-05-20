import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center"
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>}
    </div>
  );
}
