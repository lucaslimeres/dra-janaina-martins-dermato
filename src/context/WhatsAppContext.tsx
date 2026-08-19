import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { buildWhatsAppUrl } from "../config/site";

interface WhatsAppContextValue {
  requestWhatsApp: (message?: string) => void;
}

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | undefined>(undefined);

  const requestWhatsApp = useCallback((message?: string) => {
    setPendingMessage(message);
    setIsOpen(true);
  }, []);

  const close = () => setIsOpen(false);

  const confirm = () => {
    window.open(buildWhatsAppUrl(pendingMessage), "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <WhatsAppContext.Provider value={{ requestWhatsApp }}>
      {children}
      {isOpen && <WhatsAppConfirmModal onClose={close} onConfirm={confirm} />}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used within WhatsAppProvider");
  return ctx;
}

function WhatsAppConfirmModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-7 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-rose-600" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-2.9-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
          </svg>
        </div>
        <h3 id="whatsapp-modal-title" className="font-serif text-2xl text-ink text-center mb-3">
          Antes de conversarmos
        </h3>
        <p className="text-center text-ink/70 leading-relaxed mb-1">
          O atendimento da <strong>Dra. Janaína Martins</strong> é{" "}
          <strong className="text-rose-700">exclusivamente particular</strong>.
        </p>
        <p className="text-center text-ink/70 leading-relaxed mb-6">
          Não atendemos convênios ou planos de saúde. Podemos fornecer nota fiscal /
          recibo para reembolso, quando aplicável ao seu plano.
        </p>
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-rose-300 px-5 py-3 text-sm font-medium text-ink/70 transition hover:bg-rose-50"
          >
            Voltar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-full bg-rose-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-rose-700"
          >
            Entendi, continuar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
