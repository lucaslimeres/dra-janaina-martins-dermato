// ============================================================================
// CONFIGURAÇÃO DO SITE — edite os valores abaixo para atualizar o site inteiro.
// Os campos marcados com "TODO" são placeholders e devem ser substituídos
// pelas informações reais da clínica antes de publicar em produção.
// ============================================================================

const fullAddress =
  "R. João Crespo Lopes, 671 - Jardim Eltonville, Sorocaba - SP, 18046-785";

const googleSearchTerm = `Dra. Janaína Martins Dermatologista ${fullAddress}`;

export const site = {
  doctorName: "Dra. Janaína Martins",
  crm: "CRM/SP 145.952",
  specialty: "Dermatologista",

  whatsapp: {
    number: "5515996765005",
    defaultMessage:
      "Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Martins.",
  },

  instagram: {
    handle: "@janainamartins_dermato",
    url: "https://www.instagram.com/janainamartins_dermato/",
  },

  location: {
    addressLine: "R. João Crespo Lopes, 671",
    neighborhoodCity: "Jardim Eltonville, Sorocaba - SP, 18046-785",
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
    mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  },

  googleReviewsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleSearchTerm)}`,

  hours: [
    { day: "Segunda a Sexta", time: "08h às 20h" },
    { day: "Sábado", time: "08h às 12h" },
    { day: "Domingo", time: "Fechado" },
  ],

  email: "contato@drajanainamartins.com.br", // TODO: confirmar e-mail real
} as const;

export function buildWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${message}`;
}
