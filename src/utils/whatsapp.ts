const WHATSAPP_NUMBER = "5561983323300";

interface WhatsAppOptions {
  source: string;
  intent?: string;
}

export const generateWhatsAppLink = (options: WhatsAppOptions): string => {
 console.log ('ESTOU AQUI 222...');
  console.log(options);
  // Mensagem fixa independente dos parâmetros
  const message = encodeURIComponent("Olá! Quero saber mais sobre implantes na Odonto Risus");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

// Função auxiliar para os botões de agendamento
export const getScheduleLink = (source: string): string => {
  console.log ('ESTOU AQUI...');
  return generateWhatsAppLink({
    source,
    intent: "agendar uma avaliação"
  });
};

// Função auxiliar para os botões de mais informações
export const getInfoLink = (source: string, subject?: string): string => {
  return generateWhatsAppLink({
    source,
    intent: subject ? `informações sobre ${subject}` : "mais informações"
  });
};
