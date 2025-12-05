"use client";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ImplantTypes from "@/components/ImplantTypes";
import BeforeAfter from "@/components/BeforeAfter";
// import Clinic from "@/components/Clinic";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ImplantBenefits from "@/components/ImplantBenefits";
// import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="relative">
      {/* Principal */}
      <header>
        <Hero />
      </header>

      {/* Conteúdo Principal */}
      <article>
        <section id="resultados" aria-label="Resultados e transformações">
          <BeforeAfter />
          <ImplantBenefits />
          <Benefits />
        </section>

        <section id="estrutura" aria-label="Nossa estrutura e expertise">
          {/* <Clinic /> */}
          <ImplantTypes />
          {/* <Gallery /> */}
        </section>

        <section id="informacoes" aria-label="Dúvidas e contato">
          <FAQ />
          <Contact />
        </section>
      </article>

      {/* WhatsApp Flutuante */}
      <motion.a
        href={generateWhatsAppLink({ source: "botao-flutuante" })}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full" // alterado para w-20 h-20
        style={{ backgroundColor: "#25D366" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32" // tamanho aumentado de 24 para 32
          height="32" // tamanho aumentado de 24 para 32
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp text-white"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </motion.a>
    </main>
  );
}
