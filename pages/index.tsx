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
      <section className="bg-[#2a153f] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-6"
        >
          Escolha o ritual certo para sua marca
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1.2 }}
          className="text-[#d1c4e9] max-w-2xl mx-auto mb-8"
        >
          Agende uma conversa simbólica ou peça diretamente o serviço que ativa sua presença.
        </motion.p>
        <motion.a
          href="https://wa.me/SEUNUMERO?text=Olá,%20quero%20iniciar%20um%20ritual%20com%20a%20SUP3RA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-[#f3e5f5] transition shadow-lg"
        >
          Iniciar Conversa via WhatsApp
        </motion.a>
      </section>

      {/* PÚBLICO IDEAL */}
      <section className="bg-[#1c0f2d] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Para quem é a SUP3RA
        </motion.h2>
        <div className="max-w-4xl mx-auto text-[#d1c4e9] text-lg leading-relaxed space-y-6">
          <p>
            Para marcas que têm alma, mas não sabem como manifestá-la no digital. Que querem ser sentidas, não apenas vistas.
          </p>
          <p>
            Para empreendedores criativos, terapeutas, artistas, líderes de propósito, profissionais intuitivos, negócios regenerativos e marcas que desejam comunicação simbólica, posicionamento com essência e design com presença.
          </p>
          <p>
            Para quem sente que não cabe no marketing tradicional — e quer comunicar com verdade, estética e ritual.
          </p>
        </div>
      </section>

      {/* PROJETOS ENTREGUES */}
      <section className="bg-[#2a153f] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Projetos Entregues
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[{
            title: 'Lunária – Ritual de Posicionamento',
            desc: 'Diagnóstico arquetípico completo + manifesto sensorial + copy para lançamento da marca.'
          }, {
            title: 'Áurea Floral – Script Sensorial',
            desc: 'Narrativa poética e mística para vídeo institucional de marca de cosméticos naturais.'
          }, {
            title: 'Vivaz Alma – Rebranding com Presença',
            desc: 'Transformação simbólica da identidade digital com novo site, manifesto e landing emocional.'
          }].map((projeto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1b0c2d] border border-[#4b2d6b] rounded-xl p-6 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#f3e5f5] mb-2">{projeto.title}</h3>
              <p className="text-[#d1c4e9] text-sm">{projeto.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMBOS DE SERVIÇOS */}
      <section className="bg-[#2a153f] py-24 px-6 md:px-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-[#f3e5f5] mb-8"
        >
          Combos Ritualizados SUP3RA
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[{
            title: 'Combo RITUAL DE PRESENÇA',
            desc: 'Landing Page Sensorial + Manifesto de Marca + Diagnóstico Arquetípico. Ideal para quem está iniciando com alma.',
            price: 'a partir de R$ 3.500'
          }, {
            title: 'Combo REENCARNAÇÃO DIGITAL',
            desc: 'Rebranding completo com novo site, manifesto, tom de voz e storytelling simbólico.',
            price: 'a partir de R$ 7.000'
          }, {
            title: 'Combo PRESENÇA CONTÍNUA',
            desc: 'Pacote mensal de posts com copy simbólica, design emocional e hashtags ritualizadas.',
            price: 'a partir de R$ 1.200/mês'
          }].map((combo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1b0c2d] border border-[#4b2d6b] rounded-xl p-6 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#f3e5f5] mb-2">{combo.title}</h3>
              <p className="text-[#d1c4e9] text-sm mb-2">{combo.desc}</p>
              <p className="text-[#cfcfcf] text-sm italic mb-4">{combo.price}</p>
              <a
                href="https://wa.me/SEUNUMERO?text=Olá,%20quero%20contratar%20o%20{encodeURIComponent(combo.title)}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-[#f3e5f5] transition"
              >
                Solicitar este ritual
              </a>
            </motion.div>
          ))}
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
