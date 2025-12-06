'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import { theme } from '@/theme/colors';
/*MINHA INCLUSAO*/
import { getScheduleLink } from "@/utils/whatsapp";

const faqs = [
  {
    question: 'O que é um implante dentário?',
    answer: 'Um implante dentário é uma raiz artificial de titânio que é fixada no osso da mandíbula ou maxilar para substituir a raiz de um dente natural perdido. Sobre esta raiz artificial, é instalada uma coroa que imita perfeitamente a aparência de um dente natural.',
  },
  {
    question: 'O procedimento é confortável?',
    answer: 'Sim! O procedimento é realizado com anestesia local e técnicas minimamente invasivas. Durante a cirurgia, você não sentirá dor. Nossa equipe garante seu máximo conforto durante todo o processo.',
  },
  {
    question: 'Os implantes são duráveis?',
    answer: 'Sim, os implantes são uma solução definitiva. Com os cuidados adequados de higiene bucal e visitas regulares ao dentista, seu implante pode durar por toda a vida.',
  },
  {
    question: 'Posso voltar às atividades normais logo após o procedimento?',
    answer: 'Sim! A maioria dos pacientes retorna às suas atividades normais imediatamente. O procedimento é minimamente invasivo e permite uma recuperação rápida e tranquila.',
  },
  {
    question: 'Qualquer pessoa pode fazer implante?',
    answer: 'A maioria das pessoas pode receber implantes. Realizamos uma avaliação completa para garantir o melhor resultado para cada caso. Nossos especialistas utilizam tecnologia avançada para planejar seu tratamento.',
  },
  {
    question: 'Como é a manutenção dos implantes?',
    answer: 'A manutenção é simples, igual à dos dentes naturais: escovação regular, uso de fio dental e visitas periódicas ao dentista. Não são necessários cuidados especiais além de uma boa higiene bucal.',
  },
  {
    question: 'Os implantes parecem naturais?',
    answer: 'Absolutamente! Nossos implantes são indistinguíveis dos dentes naturais. Utilizamos materiais de alta qualidade e tecnologia avançada para garantir um resultado estético perfeito.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Oferecemos diversas opções de pagamento para facilitar seu acesso ao tratamento, incluindo parcelamento em até 24x e principais cartões de crédito. Entre em contato para conhecer nossas condições especiais.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ background: theme.colors.background.light }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: theme.colors.secondary.main }}>
            Dúvidas Frequentes sobre Implantes
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Tire suas dúvidas sobre implantes dentários
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 rounded-lg transition-all"
                style={{
                  backgroundColor: theme.colors.white,
                  boxShadow: theme.shadows.light,
                  borderLeft: `4px solid ${openIndex === index ? theme.colors.primary.main : 'transparent'}`,
                }}
                whileHover={{
                  backgroundColor: theme.colors.background.accent,
                  scale: 1.01,
                }}
              >
                <span className="text-left font-semibold" style={{ color: theme.colors.secondary.main }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconChevronDown
                    className="w-5 h-5"
                    style={{ color: theme.colors.primary.main }}
                    stroke={1.5}
                  />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100" style={{ color: theme.colors.text.secondary }}>
                      <p className="leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-6" style={{ color: theme.colors.text.secondary }}>
            Ainda tem dúvidas? Fale com nossos especialistas!
          </p>
          <motion.a
                href={getScheduleLink("hero")}
                target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold"
            style={{
              background: theme.gradients.primary,
              color: theme.colors.white,
              boxShadow: theme.shadows.primary,
            }}
          >
            Agende sua Avaliação Gratuita
          </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
