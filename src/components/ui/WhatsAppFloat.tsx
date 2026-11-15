const WHATSAPP_URL = "https://wa.me/919518657342?text=" + encodeURIComponent("Hi Naveen, I found your portfolio and would like to discuss a project.");

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Naveen on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.27.6 4.48 1.75 6.44L3 29l6.86-1.78a13.1 13.1 0 0 0 6.15 1.52h.01c7.15 0 12.97-5.79 12.97-12.9A12.8 12.8 0 0 0 16.02 3Zm0 23.56h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-4.07 1.06 1.09-3.94-.26-.41a10.7 10.7 0 0 1-1.65-5.62c0-5.95 4.88-10.8 10.86-10.8 2.9 0 5.62 1.12 7.67 3.16a10.7 10.7 0 0 1 3.18 7.64c0 5.95-4.88 10.8-10.86 10.8Zm5.96-8.08c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.21-.38.24-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.34c.16.21 2.3 3.5 5.57 4.9.78.34 1.39.54 1.87.69.79.25 1.5.21 2.06.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z" />
      </svg>
    </a>
  );
}
