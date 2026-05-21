import { WHATSAPP } from "@/lib/products";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi RedByte Pickles, I'd like to place an order."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.9)] animate-float"
    >
      {/* Ping Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"></span>

      {/* WhatsApp Icon */}
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.372 0 0 5.372 0 12c0 2.126.56 4.112 1.532 5.84L0 24l6.34-1.664A11.93 11.93 0 0 0 12 24c6.628 0 12-5.372 12-12 0-3.206-1.25-6.208-3.48-8.52Zm-8.52 18.186c-1.934 0-3.82-.52-5.46-1.5l-.39-.222-3.76.988 1.01-3.66-.255-.382A9.91 9.91 0 0 1 2.04 12 9.96 9.96 0 0 1 12 2.04c5.514 0 9.96 4.446 9.96 9.96S17.514 21.66 12 21.66Zm5.4-7.316c-.214-.106-1.268-.62-1.466-.69-.198-.074-.342-.106-.486.106-.146.214-.56.69-.69.83-.13.14-.26.157-.48.052-.214-.106-.9-.33-1.717-.98-.634-.56-1.06-1.254-1.186-1.47-.13-.214-.014-.33.098-.436.1-.097.214-.247.32-.37.106-.126.14-.214.214-.348.074-.132.037-.256-.018-.362-.054-.106-.486-1.174-.666-1.61-.18-.44-.364-.38-.5-.39l-.44-.01c-.132 0-.344.04-.522.195-.178.157-.674.663-.674 1.616 0 .954.692 1.874.788 2.002.094.13 1.384 2.134 3.353 2.99.47.203.88.312 1.256.4.528.167 1.012.143 1.394.087.425-.064 1.307-.517 1.49-1.14.182-.624.182-1.162.128-1.28-.057-.118-.207-.19-.434-.296Z"
            fill="white"
          />
        </svg>
      </span>

      {/* Text */}
      <span className="relative hidden sm:block font-semibold tracking-wide">
        Chat With Us
      </span>
    </a>
  );
}