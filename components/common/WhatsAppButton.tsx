import { CONTACT } from '@/lib/constants';

export default function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;

  return (
    <a
      href={href}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      aria-label="Abrir WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M20 3.5A10 10 0 0 0 3 18.4l-1 3.6 3.7-1A10 10 0 1 0 20 3.5Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.5Zm4-5.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.3-.3c.1-.1.1-.2.2-.4s0-.3 0-.4l-.6-1.4c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.2-.6.4a2 2 0 0 0-.6 1.5 3.6 3.6 0 0 0 .8 2.1 8 8 0 0 0 3 2.7 5.1 5.1 0 0 0 2.4.6 2.1 2.1 0 0 0 1.4-.7 1.8 1.8 0 0 0 .4-1.1c0-.2 0-.3-.1-.4Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

