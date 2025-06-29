// index.tsx - Página principal da SUP3RA DIGITAL

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  return (
    <div className="bg-[#1b0c2d] text-white min-h-screen font-sans relative overflow-hidden">
      <Head>
        <title>SUP3RA DIGITAL | Marcas com Alma</title>
        <meta name="description" content="Sua marca não precisa aparecer. Ela precisa ser sentida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sup3radigital.site" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#2a153f" />
      </Head>

      {/* CTA PARA AGENDAMENTO DOS SERVIÇOS */}
      <section className="py-24 px-6 md:px-24 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif mb-8"
        >
          Vamos transformar sua marca em uma experiência simbólica
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6 text-lg"
        >
          Agende um atendimento ritualizado e descubra como sentir a presença da sua marca.
        </motion.p>
        <a
          href="https://wa.me/5588999137231"
          target="_blank"
          className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-[#f3e5f5] transition shadow"
        >
          Agendar agora
        </a>
      </section>

      {/* PÚBLICO IDEAL */}
      <section className="bg-[#160b24] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Para quem é a SUP3RA DIGITAL?
        </motion.h2>
        <div className="max-w-4xl mx-auto text-[#d1bfe8] text-lg space-y-4">
          <p>✨ Empreendedores que acreditam que marca é alma.</p>
          <p>🌀 Negócios que valorizam autenticidade, presença e sensibilidade.</p>
          <p>🌱 Marcas que querem ser sentidas, não apenas vistas.</p>
        </div>
      </section>

      {/* PROJETOS ENTREGUES */}
      <section className="py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Marcas que já foram ritualizadas
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#241533] p-6 rounded-xl shadow">Marca A — Branding Sensorial</div>
          <div className="bg-[#241533] p-6 rounded-xl shadow">Marca B — Comunicação Arquetípica</div>
          <div className="bg-[#241533] p-6 rounded-xl shadow">Marca C — Presença Digital com Alma</div>
        </div>
      </section>

      {/* SEÇÃO DE COMENTÁRIOS */}
      <section className="bg-[#160b24] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Compartilhe sua impressão
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Seu nome simbólico"
              className="bg-[#1f102f] border border-[#4b2d6b] rounded p-3 text-white placeholder-[#bfa8dc]"
            />
            <textarea
              placeholder="Deixe seu comentário ritualizado..."
              rows={4}
              className="bg-[#1f102f] border border-[#4b2d6b] rounded p-3 text-white placeholder-[#bfa8dc]"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#f3e5f5] transition shadow"
            >
              Enviar Comentário
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
