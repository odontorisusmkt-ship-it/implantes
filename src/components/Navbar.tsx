'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '@/theme/colors';
import { useState } from 'react';

const menuItems = [
  { label: 'Início', href: '#' },
  { label: 'Benefícios', href: '#' },
  { label: 'Resultados', href: '#' },
  { label: 'Depoimentos', href: '#' },
  { label: 'Contato', href: '#' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Navbar Principal */}
      <div 
        className="relative bg-white/80 backdrop-blur-lg"
        style={{ boxShadow: theme.shadows.light }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-36 md:w-48 h-10 md:h-12"
            >
              <Image
                src="/logo_ventury1.png"
                alt="Odonto Risus"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Menu de Navegação Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:underline decoration-2 underline-offset-4"
                  style={{ color: theme.colors.text.primary }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Botão CTA Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold"
              style={{
                background: theme.gradients.primary,
                color: theme.colors.white,
                boxShadow: theme.shadows.primary,
              }}
            >
              Agende sua Consulta
            </motion.button>

            {/* Botão Menu Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: theme.colors.primary.lighter }}
            >
              <svg
                className="w-6 h-6"
                style={{ color: theme.colors.primary.main }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        style={{ boxShadow: isMenuOpen ? theme.shadows.light : 'none' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-base font-medium py-2 px-4 rounded-lg transition-colors"
                style={{ 
                  color: theme.colors.text.primary,
                  backgroundColor: theme.colors.background.light 
                }}
                whileHover={{
                  backgroundColor: theme.colors.primary.lighter,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 py-3 px-6 rounded-lg text-base font-semibold text-center"
              style={{
                background: theme.gradients.primary,
                color: theme.colors.white,
                boxShadow: theme.shadows.primary,
              }}
            >
              Agende sua Consulta
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
