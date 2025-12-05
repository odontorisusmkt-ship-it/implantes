'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { getInfoLink } from '@/utils/whatsapp';
import { IconClock, IconCircleCheck } from '@tabler/icons-react';

const implantTypes = [
  {
    title: 'Implante Unitário',
    description: 'Solução ideal para substituir um único dente perdido',
    image: '/implante_unitario.png',
    features: [
      'Aparência natural',
      'Procedimento rápido',
      'Alta durabilidade',
    ],
    timeframe: '1-2 sessões',
    recommended: false,
  },
  {
    title: 'Implantes Múltiplos',
    description: 'Restaure vários dentes com a máxima qualidade',
    image: '/implantes_multiplos.png',
    features: [
      'Economia em relação a implantes individuais',
      'Recuperação rápida',
      'Resultado harmonioso',
    ],
    timeframe: '2-3 sessões',
    recommended: false,
  },
  {
    title: 'Protocolo (Arco Completo)',
    description: 'Solução completa para reabilitação total',
    image: '/protese_protocolo.png',
    features: [
      'Função imediata',
      'Máximo conforto',
      'Resultado definitivo',
    ],
    timeframe: '1 dia para dentes provisórios',
    recommended: true,
  },
];

export default function ImplantTypes() {
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
            Tipos de Implantes
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Escolha a solução ideal para o seu caso com as melhores condições
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {implantTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: theme.shadows.light }}
              whileHover={{
                y: -5,
                boxShadow: theme.shadows.primary,
              }}
            >
              {/* Badge de Recomendado */}
              {type.recommended && (
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold z-10"
                  style={{ 
                    background: theme.gradients.primary,
                    color: theme.colors.white,
                  }}
                >
                  Mais Popular
                </div>
              )}

              {/* Imagem */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.secondary.main }}>
                    {type.title}
                  </h3>
                  <p className="mb-4" style={{ color: theme.colors.text.secondary }}>
                    {type.description}
                  </p>

                  {/* Características */}
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <IconCircleCheck 
                          className="w-5 h-5 mt-0.5 flex-shrink-0" 
                          style={{ color: theme.colors.primary.main }}
                          stroke={1.5}
                        />
                        <span style={{ color: theme.colors.text.secondary }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tempo e Preço */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <IconClock 
                        className="w-5 h-5" 
                        style={{ color: theme.colors.primary.main }}
                        stroke={1.5}
                      />
                      <span style={{ color: theme.colors.text.secondary }}>
                        {type.timeframe}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-auto">
                  <motion.a
                    href={getInfoLink('tipos-implante', type.title.toLowerCase())}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-3 rounded-xl font-semibold text-center"
                    style={{
                      background: theme.gradients.primary,
                      color: theme.colors.white,
                      boxShadow: theme.shadows.primary,
                    }}
                  >
                    Saiba Mais
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
            Todos os procedimentos incluem avaliação inicial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Avaliação gratuita',
              'Parcele em até 24x',
              'Facilidade com boletos',
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm"
                style={{ 
                  backgroundColor: theme.colors.primary.lighter,
                  color: theme.colors.primary.main,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
