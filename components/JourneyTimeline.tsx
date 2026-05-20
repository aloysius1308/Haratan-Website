import { Rocket } from "lucide-react";
import { journey } from "@/data/site-content";

export default function JourneyTimeline() {
  return (
    <div className="mt-14 overflow-x-auto pb-4">
      <div className="relative min-w-[1040px]">
        <div className="absolute left-8 right-8 top-[78px] h-0.5 bg-blue-200" />
        <div className="grid grid-cols-6 gap-6">
          {journey.map((item) => (
            <div key={item.year} className="relative text-center">
              <p className="text-lg font-semibold text-blue-600">{item.year}</p>
              <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-blue-600 text-white shadow-card">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-lg font-semibold leading-snug text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
