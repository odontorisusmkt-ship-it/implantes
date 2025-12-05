'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
/*MINHA INCLUSAO*/
import { getScheduleLink, getInfoLink } from "@/utils/whatsapp";

const transformations = [
  {
    id: 1,
    name: 'Maria Silva',
    before: '/antes-1.jpg',
    after: '/depois-1.jpg',
    testimonial: 'Os implantes mudaram minha vida! Agora posso sorrir e comer com confiança.',
    procedure: 'Protocolo (Arco Completo)',
  },
  {
    id: 2,
    name: 'João Santos',
    before: '/antes-2.jpg',
    after: '/depois-2.jpg',
    testimonial: 'Resultado incrível! Nem parece que são implantes, são idênticos aos dentes naturais.',
    procedure: 'Implantes Múltiplos',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    before: '/antes-3.jpg',
    after: '/depois-3.jpg',
    testimonial: 'Procedimento tranquilo e resultado perfeito. Recomendo a todos!',
    procedure: 'Implantes Múltiplos',
  },
];

// Componente que representa cada caso de antes/depois
function BeforeAfterCase({ transformation }: { transformation: typeof transformations[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startSliderPosition = useRef(0);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !isDragging) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      const newPosition = Math.max(0, Math.min(100, percentage));
      setSliderPosition(newPosition);
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    startSliderPosition.current = sliderPosition;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    startSliderPosition.current = sliderPosition;
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Event listeners para drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4 md:gap-6 h-full"
    >
      {/* Container de Imagens com Slider */}
      <div 
        ref={containerRef}
        className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 cursor-grab active:cursor-grabbing shadow-lg" 
      >
        {/* Imagem Depois */}
        <div className="absolute inset-0">
          <Image
            src={transformation.after}
            alt="Depois do tratamento"
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            draggable={false}
          />
        </div>

        {/* Imagem Antes com clipPath */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={transformation.before}
            alt="Antes do tratamento"
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            draggable={false}
          />
        </div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-grab active:cursor-grabbing"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center gap-1">
              <IconArrowLeft className="w-4 h-4" />
              <IconArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div 
          className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300"
          style={{
            opacity: Math.min(1, sliderPosition / 20)
          }}
        >
          Antes
        </div>
        <div 
          className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300"
          style={{
            opacity: Math.min(1, (100 - sliderPosition) / 20)
          }}
        >
          Depois
        </div>
      </div>

      {/* Informações do Caso */}
      <div 
        className="bg-white rounded-xl p-4 md:p-6 shadow-md flex-1"
      >
        <div className="space-y-3 md:space-y-4">
          <div>
            <h4 className="text-sm uppercase mb-2" style={{ color: theme.colors.text.light }}>
              Procedimento
            </h4>
            <p className="font-semibold" style={{ color: theme.colors.secondary.main }}>
              {transformation.procedure}
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase mb-2" style={{ color: theme.colors.text.light }}>
              Depoimento
            </h4>
            <p className="italic text-sm" style={{ color: theme.colors.text.secondary }}>
              &ldquo;{transformation.testimonial}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-20" style={{ background: theme.colors.background.light }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: theme.colors.secondary.main }}>
            Transformações Reais com Implantes
          </h2>
          <p className="text-lg md:text-xl" style={{ color: theme.colors.text.secondary }}>
            Veja os resultados impressionantes dos nossos tratamentos com implantes dentários
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {transformations.map((transformation) => (
              <BeforeAfterCase key={transformation.id} transformation={transformation} />
            ))}
          </div>

          {/* Indicador de arraste */}
          <div className="mt-6 md:mt-8 text-center text-gray-500 text-sm">
            Arraste para comparar antes e depois em cada caso
          </div>
        </div>
            
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
          >
        <motion.a
                href={getScheduleLink("hero")}
                target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base"
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
