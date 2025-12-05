"use client";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMapPin,
  IconClock,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import { theme } from "@/theme/colors";

export default function Contact() {
  const contactInfo = [
    {
      icon: IconMapPin,
      title: "Endereço",
      content: [
        "Saúde Centro Clínico - QNM 17 conjunto H lote 4/6, 2º andar, salas 210 e 211",
        "Ceilândia, Brasília - DF, 72215-178",
      ],
    },
    {
      icon: IconPhone,
      title: "Telefones",
      content: ["(61) 3374-6583", "WhatsApp: (61) 9 8332-3300"],
    },
    {
      icon: IconClock,
      title: "Horário de Atendimento",
      content: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
    },
    {
      icon: IconCurrencyDollar,
      title: "Formas de Pagamento",
      content: ["Aceitamos todos os cartões", "Parcelamento em até 24x"],
    },
  ];

  return (
    <section
      className="py-20 overflow-x-hidden w-full"
      style={{ background: theme.colors.background.light }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: theme.colors.secondary.main }}
          >
            Entre em Contato
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Estamos aqui para transformar seu sorriso com tecnologia e cuidado
            de primeira
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start bg-white p-4 md:p-6 rounded-xl"
                style={{ boxShadow: theme.shadows.light }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: theme.colors.primary.lighter }}
                >
                  <info.icon
                    className="w-6 h-6"
                    style={{ color: theme.colors.primary.main }}
                    stroke={1.5}
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2 text-lg"
                    style={{ color: theme.colors.secondary.main }}
                  >
                    {info.title}
                  </h4>
                  {info.content.map((line, i) => (
                    <p
                      key={i}
                      className="text-base"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 md:p-6 rounded-2xl h-full w-full"
            style={{ boxShadow: theme.shadows.light }}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: theme.colors.secondary.main }}
            >
              Nossa Localização
            </h3>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.800130112947!2d-48.100494424869424!3d-15.814489484828606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccc171aaaaab%3A0x40c029a9c187703f!2sOdonto%20Risus!5e0!3m2!1spt-BR!2sbr!4v1740439925792!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
