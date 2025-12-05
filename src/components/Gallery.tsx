'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

const galleryImages = [
  {
    src: "/gallery/1.jpeg",
    alt: "Espaço Café"
  },
  {
    src: "/gallery/2.jpeg",
    alt: "Detalhes - Recepção"
  },
  {
    src: "/gallery/3.jpeg",
    alt: "Detalhes do Consultório"
  },
  {
    src: "/gallery/4.jpeg",
    alt: "Detalhes do Toalete"
  },
  {
    src: "/gallery/5.jpeg",
    alt: "Apenas Detalhes"
  },
  {
    src: "/gallery/6.jpeg",
    alt: "Visão Frontal da Recepção"
  },
  {
    src: "/gallery/7.jpeg",
    alt: "Consultório"
  },
  {
    src: "/gallery/8.jpeg",
    alt: "Recepção"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20" style={{ background: theme.colors.background.light }}>
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
            Nossa Galeria
          </h2>
          <p 
            className="text-xl"
            style={{ color: theme.colors.text.secondary }}
          >
            Conheça nossas instalações através de nossa galeria de fotos
          </p>
        </motion.div>

        {/* Grid de Imagens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
    </section>
  );
}
