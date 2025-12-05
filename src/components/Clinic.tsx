'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

const clinicFeatures = [
  {
    title: "Recepção Acolhedora",
    description: "Ambiente climatizado e confortável com café e água à disposição",
    image: "/clinic/reception.jpeg",
    details: [
      "Recepcionistas capacitadas",
      "Sistema digital de agendamento",
      "Ambiente familiar e acolhedor",
      "Revistas e TV"
    ]
  },
  {
    title: "Espaço Café & Conforto",
    description: "Área de convivência exclusiva com frigobar, cafeteira gourmet e variedade de snacks para seu bem-estar",
    image: "/clinic/comfort-space.jpeg",
    details: [
      "Café premium e água mineral",
      "Snacks variados",
      "Bebidas refrescantes",
      "Ambiente climatizado"
    ]
  },
  {
    title: "Consultório Moderno",
    description: "Equipamentos de última geração para um atendimento preciso e seguro",
    image: "/clinic/consultation-room.jpeg",
    details: [
      "Tecnologia digital avançada",
      "Equipamentos modernos",
      "Ambiente esterilizado",
      "Monitoramento em tempo real"
    ]
  }
];

const amenities = [
  // { icon: "🅿️", text: "Estacionamento privado" },
  { icon: "❄️", text: "Ambiente climatizado" },
  { icon: "☕", text: "Café e água" },
  { icon: "📶", text: "Wi-Fi grátis" },
  { icon: "🦽", text: "Acessibilidade" },
  { icon: "🖥️", text: "TV no consultório" },
];

export default function Clinic() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 relative overflow-hidden" style={{ background: theme.colors.background.light }}>
        <div className="container mx-auto px-4">
          {/* Cabeçalho */}
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
              Estrutura Moderna e Acolhedora
            </h2>
            <p 
              className="text-xl"
              style={{ color: theme.colors.text.secondary }}
            >
              Conheça nossa clínica equipada com a mais alta tecnologia para seu conforto e segurança
            </p>
          </motion.div>

          {/* Grid de imagens da clínica com detalhes expandidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {clinicFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg"
                style={{ boxShadow: theme.shadows.light }}
              >
                <div 
                  className="relative h-[450px] overflow-hidden bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedImage(feature.image)}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    quality={90}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 
                      className="text-xl font-semibold text-white mb-2"
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-white/90 text-sm"
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <svg 
                          className="w-5 h-5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ color: theme.colors.primary.main }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span style={{ color: theme.colors.text.secondary }}>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vídeo Tour da Clínica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qy8BZIT-usk?si=eJ6K5LI5tQBVNoDg"
                title="Tour Virtual da Clínica"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Comodidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-16"
            style={{ boxShadow: theme.shadows.light }}
          >
            <h3 
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: theme.colors.secondary.main }}
            >
              Comodidades para seu Conforto
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {amenities.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span style={{ color: theme.colors.text.secondary }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p 
              className="text-xl mb-6"
              style={{ color: theme.colors.text.secondary }}
            >
              Venha conhecer nossa estrutura
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-semibold"
              style={{
                background: theme.gradients.primary,
                color: theme.colors.white,
                boxShadow: theme.shadows.primary,
              }}
            >
              Agende uma Visita
            </motion.button>
          </motion.div>

          {/* Decorações de fundo animadas */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full -z-10"
            style={{ background: theme.colors.primary.lighter }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-1/4 h-1/4 rounded-full -z-10"
            style={{ background: theme.colors.secondary.lighter }}
          />
        </div>
      </section>

      {/* Modal de Imagem */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full h-[90vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                sizes="100vw"
                quality={100}
                priority={true}
                className="object-contain w-full h-full"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <IconX className="w-6 h-6" stroke={1.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
