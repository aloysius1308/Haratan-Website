import { MessageCircle } from "lucide-react";
import { company } from "@/data/site-content";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappUrl}
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1fb45a] text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#15984a]"
      aria-label="Contact Haratan on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
