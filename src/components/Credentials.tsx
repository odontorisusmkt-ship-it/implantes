'use client';
import { motion } from 'framer-motion';
import { 
  IconUsers, 
  IconShieldCheck, 
  IconClock,
  IconSchool,
  IconBuilding,
  IconCheckupList,
  IconStar
} from '@tabler/icons-react';
import { theme } from '@/theme/colors';

const stats = [
  {
    number: '15+',
    label: 'Anos de Experiência',
    description: 'Especialização exclusiva em implantodontia',
    icon: IconClock,
  },
  {
    number: '5000+',
    label: 'Implantes Realizados',
    description: 'Casos de sucesso documentados',
    icon: IconUsers,
  },
  {
    number: '98%',
    label: 'Taxa de Sucesso',
    description: 'Aprovação comprovada dos pacientes',
    icon: IconStar,
  },
  {
    number: '100%',
    label: 'Equipe Certificada',
    description: 'Profissionais altamente qualificados',
    icon: IconShieldCheck,
  },
];

const certifications = [
  {
    title: 'Certificações Internacionais',
    items: [
      'American Academy of Implant Dentistry',
      'International Congress of Oral Implantologists',
      'European Association for Osseointegration',
    ],
    icon: IconSchool,
  },
  {
    title: 'Credenciamentos Nacionais',
    items: [
      'Conselho Federal de Odontologia',
      'Sociedade Brasileira de Implantodontia',
      'Associação Brasileira de Odontologia',
    ],
    icon: IconBuilding,
  },
];

export default function Credentials() {
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
            Excelência em Implantes Dentários
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Nossa experiência e compromisso com a qualidade nos tornam referência em implantodontia
          </p>
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl text-center"
              style={{ boxShadow: theme.shadows.light }}
              whileHover={{ 
                y: -5,
                boxShadow: theme.shadows.primary,
              }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: theme.colors.primary.lighter }}>
                <stat.icon className="w-8 h-8" style={{ color: theme.colors.primary.main }} stroke={1.5} />
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary.main }}>
                {stat.number}
              </h3>
              <p className="text-lg font-semibold mb-2" style={{ color: theme.colors.secondary.main }}>
                {stat.label}
              </p>
              <p style={{ color: theme.colors.text.secondary }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl"
              style={{ boxShadow: theme.shadows.light }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ backgroundColor: theme.colors.primary.lighter }}>
                  <cert.icon className="w-6 h-6" style={{ color: theme.colors.primary.main }} stroke={1.5} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: theme.colors.secondary.main }}>
                  {cert.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {cert.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <IconCheckupList 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      style={{ color: theme.colors.primary.main }}
                      stroke={1.5}
                    />
                    <span style={{ color: theme.colors.text.secondary }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto" style={{ boxShadow: theme.shadows.light }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.secondary.main }}>
              Confie sua saúde bucal a especialistas
            </h3>
            <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
              Agende uma consulta e conheça nossa estrutura de ponta
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold"
              style={{
                background: theme.gradients.primary,
                color: theme.colors.white,
                boxShadow: theme.shadows.primary,
              }}
            >
              Agende sua Avaliação
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
