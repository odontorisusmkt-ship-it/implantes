"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { theme } from "@/theme/colors";
import { getScheduleLink, getInfoLink } from "@/utils/whatsapp";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
      },
    },
  };

  const stats = [
    { value: "98%", label: "Taxa de Sucesso", shortLabel: "Sucesso" },
    { value: "+3k", label: "Implantes Realizados", shortLabel: "Implantes" },
    { value: "6+", label: "Anos de Experiência", shortLabel: "Anos Exp." },
  ];

  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-16 md:pt-0"
      style={{ background: theme.gradients.light }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/back-hero1.jpg"
          alt="Fundo do Hero"
          fill
          style={{ objectFit: "cover", opacity: 0.1 }}
          priority={true}
        />
      </div>
      <div className="container mx-auto px-4 py-6 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div style={{ y }} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.8,
                scale: {
                  type: "spring",
                  stiffness: 300
                }
              }}
              className="mb-8 md:mb-10 inline-block"
            >
              <Image
                src="/logo_odonto_risus.png"
                alt="Logo Odonto Risus"
                width={180}
                height={50}
                className="w-[180px] sm:w-[220px] md:w-[240px] mx-auto lg:mx-0 h-auto"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              style={{ color: theme.colors.secondary.main }}
            >
              <div>Implantes Dentários com{" "}</div>
              <motion.div
                initial={{ color: theme.colors.primary.main }}
                animate={{
                  color: [
                    theme.colors.primary.main,
                    theme.colors.primary.dark,
                    theme.colors.primary.main,
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Tecnologia de Ponta
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              style={{ color: theme.colors.text.secondary }}
            >
              Recupere seu sorriso com implantes dentários de última geração.
              Procedimento seguro e resultado natural garantido.
            </motion.p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Tecnologia avançada e precisa",
                "Resultado natural e duradouro",
                "Equipe especializada em implantes",
                "Avaliação gratuita",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 text-sm sm:text-base"
                >
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0"
                    style={{ color: theme.colors.primary.main }}
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span style={{ color: theme.colors.text.secondary }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href={getScheduleLink("hero")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto text-center"
                style={{
                  background: theme.gradients.primary,
                  color: theme.colors.white,
                  boxShadow: theme.shadows.primary,
                }}
              >
                Agende sua Avaliação
              </motion.a>
              <motion.a
                href={getInfoLink("hero", "implantes dentários")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: theme.colors.primary.lighter,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 transition-colors w-full sm:w-auto text-center"
                style={{
                  borderColor: theme.colors.primary.main,
                  color: theme.colors.primary.main,
                }}
              >
                Saiba Mais
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="relative mt-6 lg:mt-0"
          >
            <motion.div
              className="relative w-full h-[350px] sm:h-[350px] lg:h-[600px]"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/vantagens11.png"
                alt="Implante dentário moderno"
                fill
                className="object-contain"
                priority
              />

              {/* Card de Estatísticas */}
              <div className="relative sm:absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[85%] lg:w-[90%] xl:w-[75%] sm:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden my-3"
                  style={{ boxShadow: theme.shadows.light }}
                >
                  <div className="flex justify-between items-center gap-2 sm:gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex-1 text-center py-2.5 px-1.5 sm:py-3 sm:px-3 lg:py-3 lg:px-2 xl:py-3.5 xl:px-5"
                      >
                        <div
                          className="font-bold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-0.5 sm:mb-1"
                          style={{ color: theme.colors.primary.main }}
                        >
                          {stat.value}
                        </div>
                        <div 
                          className="text-sm sm:text-base lg:text-sm xl:text-base"
                          style={{ color: theme.colors.text.light }}
                        >
                          <span className="sm:hidden">{stat.shortLabel}</span>
                          <span className="hidden sm:inline">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certificações flutuantes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 xl:right-0 top-10 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer hidden sm:block"
              style={{ boxShadow: theme.shadows.light }}
            >
              <div className="text-xs sm:text-sm font-semibold mb-0.5" style={{ color: theme.colors.secondary.main }}>
                Segurança
              </div>
              <div className="text-xs sm:text-sm whitespace-nowrap" style={{ color: theme.colors.text.light }}>
                Sua autoestima de volta
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:block absolute -left-4 top-1/3 bg-white p-4 rounded-xl cursor-pointer"
              style={{ boxShadow: theme.shadows.light }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: theme.colors.secondary.main }}
              >
                Tecnologia
              </div>
              <div style={{ color: theme.colors.text.light }}>
                Implantes Importados
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decoração de fundo animada */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl hidden sm:block"
        style={{ background: theme.colors.primary.lighter }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 rounded-full filter blur-3xl hidden sm:block"
        style={{ background: theme.colors.secondary.lighter }}
      />

      {/* Dentes flutuando */}
      {[
        {
          position: "top-32 right-[2%] md:right-[3%] lg:right-[5%]",
          size: "w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]",
          initialRotate: -25,
          rotateRange: 15,
          animationDelay: 0,
          duration: 4
        },
        {
          position: "top-[50px] left-[2%] md:left-[3%] lg:left-[8%]",
          size: "w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]",
          initialRotate: 35,
          rotateRange: 20,
          animationDelay: 1,
          duration: 5
        },
        {
          position: "bottom-20 right-[3%] md:right-[8%] lg:right-[15%]",
          size: "w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]",
          initialRotate: -15,
          rotateRange: 25,
          animationDelay: 2,
          duration: 6
        },
      ].map((dente, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, rotate: dente.initialRotate }}
          animate={{
            opacity: 0.75,
            scale: 1,
            rotate: [dente.initialRotate, dente.initialRotate + dente.rotateRange, dente.initialRotate],
            y: [-15, 15, -15],
          }}
          transition={{
            delay: dente.animationDelay,
            rotate: {
              duration: dente.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: dente.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className={`absolute ${dente.position} ${dente.size} hidden sm:block`}
          style={{ zIndex: 5 }}
        >
          <Image
            src="/dente-implante.png"
            alt="Dente Implante"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      ))}
    </section>
  );
}
