'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { 
  IconSparkles, 
  IconHeart, 
  IconShieldCheck,
  IconClock,
  IconCircleCheck
} from '@tabler/icons-react';
/*MINHA INCLUSAO*/
import { getScheduleLink } from "@/utils/whatsapp";

const benefits = [
  {
    title: 'Estética Perfeita',
    description: 'Implantes idênticos aos dentes naturais, devolvendo a beleza do seu sorriso',
    icon: IconSparkles,
    badge: 'Tecnologia Avançada',
  },
  {
    title: 'Mais Confiança',
    description: 'Recupere a autoestima e volte a sorrir sem preocupações',
    icon: IconHeart,
    badge: 'Bem-estar',
  },
  {
    title: 'Conforto Total',
    description: 'Mastigue com firmeza e fale sem desconforto, como um dente natural',
    icon: IconCircleCheck,
    badge: 'Conforto',
  },
  {
    title: 'Saúde Bucal',
    description: 'Mantém o osso saudável e protege a estrutura dos dentes vizinhos',
    icon: IconShieldCheck,
    badge: 'Proteção',
  },
  {
    title: 'Solução Definitiva',
    description: 'Implantes de titânio que podem durar por toda a vida',
    icon: IconClock,
    badge: 'Durabilidade',
  }
];

// Pontos técnicos que serão exibidos na imagem
const techPoints = [
  {
    x: 60,
    y: 25,
    label: 'Coroa em Porcelana',
    description: 'Material resistente com aparência natural',
  },
  {
    x: 50,
    y: 45,
    label: 'Conexão Protética',
    description: 'Sistema preciso de encaixe entre implante e coroa',
  },
  {
    x: 43,
    y: 75,
    label: 'Implante de Titânio',
    description: 'Base biocompatível que se integra ao osso',
  },
];

export default function ImplantBenefits() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: theme.colors.background.light }}>
      {/* Background Decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, ${theme.colors.primary.lighter}40 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, ${theme.colors.secondary.lighter}40 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: theme.colors.secondary.main }}>
            Por Que Escolher{' '}
            <span style={{ color: theme.colors.primary.main }}>
              Implantes?
            </span>
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Conheça as vantagens dessa solução moderna e definitiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna da Direita - Imagem Técnica */}
          <div className="relative lg:sticky lg:top-20 order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] bg-white rounded-2xl p-6"
              style={{ boxShadow: theme.shadows.light }}
            >
              <Image
                src="/implantes-dentarios_detalhes.jpg"
                alt="Estrutura do implante dentário"
                fill
                className="object-cover rounded-xl"
                priority
              />
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    ${theme.colors.white}20 30%,
                    ${theme.colors.white}60 60%,
                    ${theme.colors.white}95 100%
                  )`,
                }}
              />

              {/* Pontos Técnicos */}
              {techPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="absolute"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-3 h-3 rounded-full relative z-10"
                      style={{ backgroundColor: theme.colors.primary.main }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Círculo de fundo */}
                    <div 
                      className="absolute -inset-1 rounded-full opacity-30"
                      style={{ backgroundColor: theme.colors.primary.main }}
                    />
                    {/* Linha conectora */}
                    <div 
                      className="absolute h-px w-4 left-full top-1/2 -translate-y-1/2"
                      style={{ backgroundColor: theme.colors.primary.main }}
                    />
                  </div>
                  <div 
                    className="absolute left-4 bg-white rounded-lg p-3 w-48 shadow-lg"
                    style={{ 
                      borderLeft: `3px solid ${theme.colors.primary.main}`,
                    }}
                  >
                    <p 
                      className="font-semibold mb-1 text-sm"
                      style={{ color: theme.colors.secondary.main }}
                    >
                      {point.label}
                    </p>
                    <p 
                      className="text-xs"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <motion.a
                href={getScheduleLink("hero")}
                target="_blank"
              >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                style={{
                  background: theme.gradients.primary,
                  color: theme.colors.white,
                  boxShadow: theme.shadows.primary,
                }}
              >
                <span>Agende sua Avaliação</span>
                <span className="text-xl">→</span>
              </motion.button>
              </motion.a>
              <p 
                className="mt-4 text-sm"
                style={{ color: theme.colors.text.light }}
              >
                Avaliação sem compromisso
              </p>
            </motion.div>
          </div>

          {/* Lista de Benefícios */}
          <div className="space-y-6 order-last lg:order-first">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-xl flex items-start gap-4 group"
                  style={{ boxShadow: theme.shadows.light }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: theme.shadows.primary,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: theme.colors.primary.lighter }}
                  >
                    <benefit.icon 
                      className="w-6 h-6"
                      style={{ color: theme.colors.primary.main }}
                      stroke={1.5}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold" style={{ color: theme.colors.secondary.main }}>
                        {benefit.title}
                      </h3>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: theme.colors.primary.lighter,
                          color: theme.colors.primary.main,
                        }}
                      >
                        {benefit.badge}
                      </span>
                    </div>
                    <p style={{ color: theme.colors.text.secondary }}>
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
