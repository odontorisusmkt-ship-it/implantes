'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DentalAnimation() {
  const shinePositions = [
    { x: "30%", y: "20%", delay: 0, size: 20 },
    { x: "70%", y: "25%", delay: 0.5, size: 15 },
    { x: "50%", y: "40%", delay: 1, size: 25 },
    { x: "75%", y: "50%", delay: 1.5, size: 18 },
    { x: "25%", y: "60%", delay: 2, size: 22 },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Próteses Dentárias de Alta Precisão
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Tecnologia 3D para um sorriso perfeito
        </p>
      </motion.div>

      <div className="relative w-[800px] h-[500px] bg-gradient-to-b from-white via-blue-50/10 to-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Fundo com gradiente */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/20 via-transparent to-transparent" />
        
        {/* Container da imagem 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/prosthesis-3d.png"
            alt="Prótese dentária 3D de alta qualidade"
            fill
            className="object-contain p-8"
            priority
            style={{ transform: "rotate(5deg)" }}
          />
        </motion.div>

        {/* Efeitos de brilho SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            {/* Gradiente radial para brilho principal */}
            <radialGradient id="shineGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            {/* Gradiente para brilho suave */}
            <radialGradient id="softShineGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </radialGradient>

            {/* Filtro de desfoque avançado */}
            <filter id="advancedGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 18 -7"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Brilhos dinâmicos */}
          {shinePositions.map((pos, index) => (
            <motion.g key={index}>
              {/* Brilho base */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={pos.size}
                fill="url(#shineGradient)"
                filter="url(#advancedGlow)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: pos.delay,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* Brilho secundário rotativo */}
              <motion.path
                d={`M ${pos.x} ${Number(pos.y.replace('%', '')) - pos.size}
                   A ${pos.size} ${pos.size} 0 1 1 ${pos.x} ${Number(pos.y.replace('%', '')) + pos.size}`}
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 4,
                  delay: pos.delay + 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.g>
          ))}

          {/* Reflexo suave animado */}
          <motion.ellipse
            cx="50%"
            cy="40%"
            rx="200"
            ry="100"
            fill="url(#softShineGradient)"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              ry: [100, 120, 100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Texto destacado */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-blue-600 font-semibold text-lg">
            Qualidade e precisão incomparáveis
          </p>
        </motion.div>
      </div>

      {/* Cards de características */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-4xl">
        {[
          { title: "Tecnologia 3D", description: "Precisão milimétrica", icon: "🔷" },
          { title: "Material Premium", description: "Durabilidade garantida", icon: "💎" },
          { title: "Acabamento Perfeito", description: "Aparência natural", icon: "✨" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
