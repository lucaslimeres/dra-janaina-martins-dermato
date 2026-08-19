import type { ReactNode } from "react";
import { useWhatsApp } from "../context/WhatsAppContext";

interface WhatsAppButtonProps {
  children: ReactNode;
  message?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

const variants = {
  solid:
    "bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-600/20",
  outline:
    "border-2 border-rose-500 text-rose-700 hover:bg-rose-50",
  ghost: "text-rose-700 hover:bg-rose-50",
};

export function WhatsAppButton({
  children,
  message,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const { requestWhatsApp } = useWhatsApp();

  return (
    <button
      onClick={() => requestWhatsApp(message)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition ${variants[variant]} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current shrink-0" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-2.9-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
      </svg>
      {children}
    </button>
  );
}
