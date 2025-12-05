'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { 
  IconSparkles, 
  IconShieldCheck, 
  IconHeart, 
  IconClock,
  IconUsers,
  IconMoneybag
} from '@tabler/icons-react';
/*MINHA INCLUSAO*/
import { getScheduleLink, getInfoLink } from "@/utils/whatsapp";

const benefits = [
  {
    title: 'Tecnologia Avançada',
    description: 'Equipamentos de última geração para resultados precisos',
    icon: IconSparkles,
    color: theme.colors.primary.main,
  },
  {
    title: 'Segurança Total',
    description: 'Procedimentos seguros e materiais certificados',
    icon: IconShieldCheck,
    color: theme.colors.secondary.main,
  },
  {
    title: 'Conforto Garantido',
    description: 'Ambiente acolhedor e equipe atenciosa',
    icon: IconHeart,
    color: theme.colors.primary.main,
  },
  {
    title: 'Atendimento Rápido',
    description: 'Sem longas esperas, respeitamos seu tempo',
    icon: IconClock,
    color: theme.colors.secondary.main,
  },
  {
    title: 'Equipe Especializada',
    description: 'Profissionais altamente qualificados',
    icon: IconUsers,
    color: theme.colors.primary.main,
  },
  {
    title: 'Facilidade de Pagamento',
    description: 'Diversas opções de parcelamento',
    icon: IconMoneybag,
    color: theme.colors.secondary.main,
  },
];

export default function Benefits() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: theme.colors.background.light }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full hidden sm:block"
          style={{ background: theme.colors.primary.lighter }}
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full hidden sm:block"
          style={{ background: theme.colors.secondary.lighter }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Imagem Lateral */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/jaleco-1.png"
                alt="Implante dentário de alta qualidade"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0" style={{
                background: `linear-gradient(45deg, ${theme.colors.primary.main}40, ${theme.colors.secondary.main}40)`
              }} />

              {/* Estatísticas flutuantes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 sm:bottom-8 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl"
                style={{ boxShadow: theme.shadows.primary }}
              >
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="font-bold text-xl sm:text-2xl md:text-3xl" style={{ color: theme.colors.primary.main }}>98%</div>
                    <div className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>Satisfação</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="font-bold text-xl sm:text-2xl md:text-3xl" style={{ color: theme.colors.primary.main }}>6+</div>
                    <div className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>Anos</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl sm:text-2xl md:text-3xl" style={{ color: theme.colors.primary.main }}>3k+</div>
                    <div className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>Sorrisos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center lg:text-left" style={{ color: theme.colors.secondary.main }}>
                Por que Escolher Nossa Clínica?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center lg:text-left" style={{ color: theme.colors.text.secondary }}>
                Oferecemos o melhor em tecnologia e cuidado para seu sorriso
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl"
                  style={{ boxShadow: theme.shadows.light }}
                  whileHover={{
                    y: -5,
                    boxShadow: theme.shadows.primary,
                  }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: theme.colors.primary.lighter }}
                    >
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: benefit.color }} stroke={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2" style={{ color: theme.colors.secondary.main }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 md:mt-8 text-center lg:text-left w-full"
            >
              <motion.a
                href={getScheduleLink("hero")}
                target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
                style={{
                  background: theme.gradients.primary,
                  color: theme.colors.white,
                  boxShadow: theme.shadows.primary,
                }}
              >
                <span>Agende sua Consulta</span>
                <span className="text-xl">→</span>
              </motion.button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
