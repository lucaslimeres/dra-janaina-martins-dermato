// ============================================================================
// CONFIGURAÇÃO DO SITE — edite os valores abaixo para atualizar o site inteiro.
// Os campos marcados com "TODO" são placeholders e devem ser substituídos
// pelas informações reais da clínica antes de publicar em produção.
// ============================================================================

export const site = {
  doctorName: "Dra. Janaína Martins",
  crm: "CRM/UF 00000 · RQE 00000", // TODO: substituir pelo CRM/RQE real
  specialty: "Dermatologista",

  whatsapp: {
    // TODO: substituir pelo número real, apenas dígitos, com DDI+DDD (ex: 5511987654321)
    number: "5511999999999",
    defaultMessage:
      "Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Martins.",
  },

  instagram: {
    handle: "@dra.janainamartins", // TODO: confirmar @ real do Instagram
    url: "https://instagram.com/dra.janainamartins",
  },

  location: {
    // TODO: substituir pelo endereço real da clínica
    addressLine: "Av. Exemplo, 1000 — Sala 000",
    neighborhoodCity: "Bairro Exemplo, Sorocaba/SP",
    mapsUrl: "https://maps.google.com/?q=Sorocaba+SP",
  },

  hours: [
    { day: "Segunda a Sexta", time: "09h às 18h" },
    { day: "Sábado", time: "Sob consulta" },
  ],

  email: "contato@drajanainamartins.com.br", // TODO: confirmar e-mail real
} as const;

export function buildWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${message}`;
}
