'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
/*MINHA INCLUSAO*/
import { getScheduleLink, getInfoLink } from "@/utils/whatsapp";

const steps = [
  {
    title: 'Avaliação Inicial',
    description: 'Exame clínico completo e planejamento digital 3D para garantir a precisão do procedimento.',
    image: '/procedure-1.jpg',
    duration: '1 hora',
  },
  {
    title: 'Preparação',
    description: 'Preparação do local e instalação do implante de titânio com técnicas minimamente invasivas.',
    image: '/procedure-2.jpg',
    duration: '1-2 horas',
  },
  {
    title: 'Osseointegração',
    description: 'Período de cicatrização onde o implante se funde naturalmente ao osso.',
    image: '/procedure-3.jpg',
    duration: '3-6 meses',
  },
  {
    title: 'Instalação da Coroa',
    description: 'Colocação da prótese definitiva, perfeitamente ajustada e com aparência natural.',
    image: '/procedure-4.jpg',
    duration: '1 hora',
  },
];

export default function ProcedureAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Como Funciona o Implante Dentário?
          </h2>
          <p className="text-xl text-gray-600">
            Conheça o passo a passo do procedimento realizado com tecnologia de ponta
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem do Procedimento */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-medium"
                  >
                    Duração aproximada: {steps[currentStep].duration}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Descrição do Procedimento */}
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200">
                <motion.div
                  className="absolute top-0 w-full bg-blue-600"
                  style={{
                    height: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="space-y-8 pl-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative ${
                      index === currentStep ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {/* Indicador da Timeline */}
                    <div
                      className={`absolute -left-10 w-3 h-3 rounded-full ${
                        index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Controles de Navegação */}
              <div className="flex justify-between mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Anterior
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Próximo
                </motion.button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">
              Pronto para começar sua transformação?
            </p>

          <motion.a
              href={getScheduleLink("hero")}
              target="_blank"
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Agende sua Avaliação
            </motion.button>
          </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
