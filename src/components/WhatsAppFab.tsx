import { whatsappLink } from "@/lib/brand";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Midetoria Logistics on WhatsApp"
      className="animate-pulse-ring fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-glow transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none sm:right-6 sm:bottom-6 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.37 2.98 1.17 2.98.78 3.52.73.54-.05 1.76-.71 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.51 3.6 1.4 5.09L2 22l5.2-1.56a9.8 9.8 0 0 0 4.84 1.27c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.86c-1.62 0-3.13-.48-4.39-1.3l-.32-.2-3.06.92.94-3-.21-.33a7.98 7.98 0 0 1-1.24-4.28c0-4.43 3.6-8.03 8.04-8.03 4.43 0 8.03 3.6 8.03 8.03s-3.6 8.19-7.79 8.19Z" />
      </svg>
    </a>
  );
}