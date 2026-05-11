export default function BloomyWebsite() {
  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#3B2414] font-sans overflow-hidden">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-8 py-6 bg-[#FFF9EF]/90 backdrop-blur sticky top-0 z-50 border-b border-yellow-100">
        <div className="flex items-center gap-3">
          <img
            src="https://i.imgur.com/R8v6J8J.png"
            alt="Bloomy"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              <span className="text-[#2F1B10]">Blo</span>
              <span className="text-[#F6B500]">omy</span>
            </h1>
            <p className="text-xs tracking-[0.3em] uppercase text-[#7C5A3A]">
              Agência de Marketing Digital
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#sobre" className="hover:text-[#F6B500] transition">Sobre</a>
          <a href="#servicos" className="hover:text-[#F6B500] transition">Serviços</a>
          <a href="#pais" className="hover:text-[#F6B500] transition">Para Pais</a>
          <a href="#portfolio" className="hover:text-[#F6B500] transition">Portfólio</a>
          <a href="#contato" className="hover:text-[#F6B500] transition">Contato</a>
        </nav>

        <button className="bg-[#F6B500] hover:scale-105 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          Fale com a Bloomy
        </button>
      </header>

      {/* Hero */}
      <section className="relative px-8 lg:px-20 py-20 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-[#A66B00] font-medium">
            ✨ Gestão de redes sociais para o público infantil e teen
          </div>

          <div>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              Crescimento digital com
              <span className="text-[#F6B500]"> criatividade</span>, estratégia e cuidado 💛
            </h2>
          </div>

          <p className="text-xl leading-relaxed text-[#5B4636] max-w-2xl">
            A Bloomy é uma agência especializada em gestão de redes sociais para crianças e adolescentes criadores de conteúdo.
            Transformamos criatividade em presença digital de forma profissional, segura e acolhedora.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#F6B500] hover:scale-105 transition text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl">
              Quero fazer parte
            </button>

            <button className="border-2 border-[#F6B500] text-[#D39000] hover:bg-yellow-50 transition px-8 py-4 rounded-full text-lg font-bold">
              Conhecer a Bloomy
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[500px] h-[500px] bg-[#FFE38A] rounded-full blur-3xl opacity-40"></div>

          <img
            src="https://i.imgur.com/R8v6J8J.png"
            alt="Mascote Bloomy"
            className="relative w-[420px] drop-shadow-2xl hover:scale-105 transition duration-500"
          />

          <div className="absolute top-10 right-10 bg-white shadow-xl rounded-3xl p-5 w-52 border border-yellow-100">
            <div className="space-y-4 text-[#5B4636]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">🛡️</div>
                <p className="font-medium">Segurança digital</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">📈</div>
                <p className="font-medium">Estratégias criativas</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">💛</div>
                <p className="font-medium">Acompanhamento responsável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="px-8 lg:px-20 py-24 bg-white rounded-t-[60px]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-yellow-100 text-[#C98B00] px-4 py-2 rounded-full font-semibold">
              Sobre a Bloomy
            </span>

            <h3 className="text-5xl font-black mt-6 mb-6 leading-tight">
              Muito mais que uma agência de redes sociais
            </h3>

            <p className="text-lg leading-relaxed text-[#5B4636] mb-6">
              Na Bloomy, acreditamos que jovens talentos merecem crescer na internet com apoio, responsabilidade e direcionamento profissional.
            </p>

            <p className="text-lg leading-relaxed text-[#5B4636]">
              Nossa missão é ajudar crianças e adolescentes criadores de conteúdo a desenvolverem sua presença digital de maneira saudável, estratégica e criativa.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-[#FFF9EF] p-8 rounded-3xl shadow-sm border border-yellow-100">
              <h4 className="text-2xl font-bold mb-3">✨ Criatividade com propósito</h4>
              <p className="text-[#5B4636]">Conteúdos pensados para gerar conexão verdadeira e crescimento saudável.</p>
            </div>

            <div className="bg-[#FFF9EF] p-8 rounded-3xl shadow-sm border border-yellow-100">
              <h4 className="text-2xl font-bold mb-3">🛡️ Segurança em primeiro lugar</h4>
              <p className="text-[#5B4636]">Acompanhamento responsável e cuidado com a imagem dos criadores.</p>
            </div>

            <div className="bg-[#FFF9EF] p-8 rounded-3xl shadow-sm border border-yellow-100">
              <h4 className="text-2xl font-bold mb-3">📱 Estratégia profissional</h4>
              <p className="text-[#5B4636]">Planejamento, identidade visual e posicionamento digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="px-8 lg:px-20 py-24 bg-[#FFF4D7]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-white text-[#C98B00] px-4 py-2 rounded-full font-semibold shadow-sm">
            Serviços
          </span>

          <h3 className="text-5xl font-black mt-6 mb-6">
            O que oferecemos
          </h3>

          <p className="text-lg text-[#5B4636]">
            Soluções criativas e estratégicas para fortalecer a presença digital de jovens criadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            ['📲', 'Gestão de Redes Sociais'],
            ['🎬', 'Criação de Conteúdo'],
            ['📈', 'Estratégias de Crescimento'],
            ['💡', 'Consultoria Digital'],
            ['🛡️', 'Segurança Online'],
            ['🎨', 'Identidade Visual'],
          ].map(([icon, title], index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[32px] shadow-sm hover:-translate-y-2 transition duration-300 border border-yellow-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFF4D7] flex items-center justify-center text-3xl mb-6">
                {icon}
              </div>

              <h4 className="text-2xl font-bold mb-4">{title}</h4>

              <p className="text-[#5B4636] leading-relaxed">
                Estratégias modernas e acompanhamento profissional para fortalecer a presença digital com criatividade e segurança.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Para Pais */}
      <section id="pais" className="px-8 lg:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFE38A] blur-3xl opacity-30 rounded-full"></div>

            <div className="relative bg-[#FFF9EF] p-10 rounded-[40px] border border-yellow-100 shadow-lg">
              <h3 className="text-4xl font-black mb-6 leading-tight">
                Crescimento digital também precisa de cuidado 💛
              </h3>

              <p className="text-lg leading-relaxed text-[#5B4636] mb-6">
                Trabalhamos com acompanhamento transparente, orientação responsável e estratégias pensadas para preservar a imagem, o bem-estar e a segurança dos criadores.
              </p>

              <p className="text-lg leading-relaxed text-[#5B4636]">
                Nosso objetivo é construir uma presença digital positiva, saudável e profissional.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              'Acompanhamento responsável',
              'Proteção da imagem infantil',
              'Orientação para responsáveis',
              'Segurança nas redes sociais',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF9EF] p-6 rounded-3xl flex items-center gap-5 border border-yellow-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F6B500] flex items-center justify-center text-white text-2xl shadow-md">
                  💛
                </div>

                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="px-8 lg:px-20 py-24 bg-[#2F1B10] text-white text-center rounded-t-[60px]">
        <div className="max-w-4xl mx-auto">
          <span className="bg-[#F6B500]/20 text-[#FFD965] px-4 py-2 rounded-full font-semibold">
            Bloomy Agency
          </span>

          <h3 className="text-5xl font-black mt-8 mb-8 leading-tight">
            Vamos transformar criatividade em presença digital?
          </h3>

          <p className="text-xl text-[#F5E6D8] leading-relaxed mb-10">
            Entre em contato com a Bloomy e descubra como podemos ajudar jovens talentos a crescerem nas redes sociais de forma profissional, saudável e segura.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#F6B500] hover:scale-105 transition px-8 py-4 rounded-full text-lg font-bold shadow-xl">
              Entrar em contato
            </button>

            <button className="border border-[#F6B500] hover:bg-[#F6B500]/10 transition px-8 py-4 rounded-full text-lg font-bold">
              Instagram da Bloomy
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F1B10] text-[#EAD7C7] border-t border-[#4E3422] px-8 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © 2026 Bloomy — Agência de Marketing Digital.
        </p>

        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-[#F6B500] transition">Instagram</a>
          <a href="#" className="hover:text-[#F6B500] transition">WhatsApp</a>
          <a href="#" className="hover:text-[#F6B500] transition">E-mail</a>
        </div>
      </footer>
    </div>
  )
}
