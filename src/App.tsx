import { useEffect, useState, type ReactNode, type FormEvent } from "react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";
const WHATSAPP_MSG =
  import.meta.env.VITE_WHATSAPP_MESSAGE ||
  "Olá! Vim pela Landing Page do Original Club e quero saber mais sobre os planos de assinatura de semijoias. Pode me ajudar a escolher o melhor plano para o meu perfil?";

const waLink = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function App() {
  return (
    <div className="min-h-screen bg-oc-bg text-oc-text">
      <Header />
      <main role="main">
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorks />
        <ProductsSection />
        <CuratorshipProfiles />
        <Testimonials />
        <Differentials />
        <Objections />
        <OfferSection />
        <FAQSection />
        <SignupForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CTAFixoMobile />
      <ScrollToTop />
    </div>
  );
}

/* ============ HEADER ============ */
function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-oc-border/60 backdrop-blur-md"
      style={{ backgroundColor: "rgba(31, 26, 23, 0.9)" }}
    >
      <div className="container-oc flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/oj-logo.png" alt="Logo" className="h-20 w-auto" />
        </a>
        <nav role="navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#como-funciona" className="hover:text-oc-gold transition-colors">Como funciona</a>
          <a href="#planos" className="hover:text-oc-gold transition-colors">Planos</a>
          <a href="#curadoria" className="hover:text-oc-gold transition-colors">Curadoria</a>
          <a href="#faq" className="hover:text-oc-gold transition-colors">FAQ</a>
        </nav>
        <a href="#planos" className="btn-gold !py-2.5 !px-5 !text-sm hidden sm:inline-flex">
          Quero assinar
        </a>
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #C9A05A 0%, transparent 65%)" }} />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #C9A05A 0%, transparent 65%)" }} />
      </div>
      <div className="container-oc relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-20 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-oc-gold font-semibold mb-6">
            <span className="w-8 h-px bg-oc-gold" /> Clube de assinatura premium
          </span>
          <h1 className="font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)" }}>
            Descubra<br />
            <span className="italic text-oc-gold">semijoias exclusivas</span><br />
            todo mês
          </h1>
          <p className="mt-7 text-lg md:text-xl text-oc-muted leading-relaxed max-w-xl">
            Assine o Original Club e receba semijoias premium direto da fábrica, escolhidas
            de acordo com seu estilo, acabamento preferido e perfil de uso.
          </p>
          <p className="mt-3 text-base text-oc-muted leading-relaxed max-w-xl">
            Uma experiência mensal de curadoria, exclusividade e pertencimento para mulheres
            que valorizam beleza, qualidade e peças com origem.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#planos" className="btn-gold">Quero assinar o Original Club</a>
            <a href="#planos" className="btn-ghost-gold">Conhecer os planos</a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-md mx-auto w-full">
      <div className="absolute inset-0 rounded-[2rem] bg-oc-card shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-oc-border">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#E0B870" />
              <stop offset="1" stopColor="#9C7134" />
            </linearGradient>
          </defs>
          <rect x="80" y="180" width="240" height="160" rx="8" fill="#2A2320" stroke="#3D332C" strokeWidth="2" />
          <rect x="80" y="170" width="240" height="20" rx="4" fill="#3D332C" stroke="#3D332C" />
          <circle cx="160" cy="120" r="42" fill="none" stroke="url(#gold)" strokeWidth="6" />
          <circle cx="160" cy="78" r="4" fill="#C9A05A" />
          <circle cx="250" cy="135" r="32" fill="none" stroke="url(#gold)" strokeWidth="5" />
          <circle cx="250" cy="103" r="3.5" fill="#C9A05A" />
          <path d="M 110 240 Q 200 290 290 240" stroke="url(#gold)" strokeWidth="2.5" fill="none" />
          <circle cx="200" cy="278" r="8" fill="url(#gold)" />
          <rect x="120" y="300" width="160" height="28" rx="3" fill="#1F1A17" stroke="#3D332C" />
          <line x1="135" y1="312" x2="220" y2="312" stroke="#C9A05A" strokeWidth="1" />
          <line x1="135" y1="319" x2="200" y2="319" stroke="#B8AA9A" strokeWidth="0.8" opacity="0.5" />
        </svg>
        <div className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-[0.25em] text-oc-gold font-semibold">
          Edição N°01
        </div>
        <div className="absolute bottom-4 right-4 font-display italic text-oc-text/60">
          Original Club
        </div>
      </div>
    </div>
  );
}

/* ============ SOCIAL PROOF ============ */
function SocialProofBar() {
  const items = [
    { t: "Direto da fábrica", s: "Sem intermediários, com origem garantida" },
    { t: "3 perfis de curadoria", s: "Clássica, Romântica ou Bold" },
    { t: "3 planos mensais", s: "Básico, Plus e Premium" },
    { t: "6 edições colecionáveis", s: "Caixas temáticas bimestrais por ano" },
  ];
  return (
    <section className="border-y border-oc-border bg-oc-card/40">
      <div className="container-oc grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {items.map((i) => (
          <div key={i.t} className="text-center md:text-left">
            <div className="font-display text-lg md:text-xl font-semibold text-oc-text">{i.t}</div>
            <div className="text-xs md:text-sm text-oc-muted mt-1">{i.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ PROBLEM ============ */
function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="container-oc max-w-3xl">
        <SectionTitle eyebrow="O problema">
          Quando bonito <span className="italic text-oc-gold">não basta</span>
        </SectionTitle>
        <div className="space-y-5 text-lg text-oc-muted leading-relaxed">
          <p>Você ama semijoias, mas nem sempre encontra peças que realmente combinam com seu estilo.</p>
          <p>Muitas marcas vendem produtos parecidos, sem origem clara, sem curadoria e sem uma experiência que faça a compra parecer especial.</p>
          <p>Às vezes você compra uma peça bonita, mas ela não combina com seu dia a dia, não conversa com suas outras joias ou fica esquecida na gaveta.</p>
          <p>E quando encontra algo com qualidade, normalmente precisa pagar mais caro por causa dos intermediários.</p>
          <p className="text-oc-text font-medium">O que falta não é mais uma peça aleatória: é uma curadoria pensada para você.</p>
        </div>
      </div>
    </section>
  );
}

/* ============ SOLUTION ============ */
function SolutionSection() {
  return (
    <section className="section-pad bg-oc-card/40 border-y border-oc-border">
      <div className="container-oc grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle eyebrow="A solução">
            Uma curadoria <span className="italic text-oc-gold">pensada para você</span>
          </SectionTitle>
          <div className="space-y-5 text-base md:text-lg text-oc-muted leading-relaxed">
            <p>O Original Club transforma a compra de semijoias em uma experiência mensal personalizada.</p>
            <p>Você escolhe seu acabamento preferido — ródio branco ou ouro — responde um questionário simples de estilo e passa a receber peças selecionadas para o seu perfil.</p>
            <p>Cada caixa é montada direto na fábrica, com semijoias premium, cartão de inspiração, garantia e QR Code com bastidores da produção.</p>
            <p className="text-oc-text font-medium">Todo mês, uma nova experiência para usar, colecionar e compartilhar.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["Ródio Branco", "Ouro", "Clássica", "Romântica", "Bold", "Edições Limitadas"].map((label, i) => (
            <div key={label} className="card-oc !p-6 text-center">
              <div className="editorial-number !text-3xl mb-2">0{i + 1}</div>
              <div className="font-display text-lg">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ BENEFITS ============ */
function BenefitsSection() {
  const benefits = [
    { t: "Receba peças que combinam com seu estilo", d: "O questionário de curadoria identifica seu perfil entre Clássica, Romântica ou Bold, evitando escolhas aleatórias.", icon: <IconHoop /> },
    { t: "Escolha o acabamento que você realmente usa", d: "Selecione ródio branco ou ouro, mantendo coerência com suas preferências e combinações do dia a dia.", icon: <IconRing /> },
    { t: "Semijoias direto da fábrica", d: "A Original Joias controla produção, acabamento e qualidade, reduzindo intermediários e aumentando a exclusividade.", icon: <IconFactory /> },
    { t: "Viva uma experiência colecionável", d: "6 edições temáticas por ano, com caixas pensadas para serem guardadas, exibidas e compartilhadas.", icon: <IconBox /> },
    { t: "Descubra sem perder tempo escolhendo", d: "A curadoria mensal simplifica sua compra e entrega uma seleção pronta, alinhada ao seu perfil.", icon: <IconStar /> },
    { t: "Ajuste sua curadoria com feedback real", d: "A pesquisa NPS pós-entrega permite melhorar os próximos envios de acordo com sua experiência.", icon: <IconQR /> },
  ];
  return (
    <section className="section-pad">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Benefícios">Por que assinar o <span className="italic text-oc-gold">Original Club</span></SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <article key={b.t} className="card-oc">
              <div className="flex items-start justify-between mb-5">
                <span className="editorial-number !text-4xl">0{i + 1}</span>
                <div className="text-oc-gold">{b.icon}</div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 leading-tight">{b.t}</h3>
              <p className="text-oc-muted leading-relaxed text-[0.95rem]">{b.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS ============ */
function HowItWorks() {
  const steps = [
    { t: "Escolha seu plano", d: "Selecione entre Básico, Plus ou Premium, de acordo com a quantidade de peças que deseja receber por mês." },
    { t: "Responda o questionário de curadoria", d: "Informe seu acabamento preferido, estilo, tamanhos, tipos de acessórios e o que você nunca usaria." },
    { t: "Receba sua caixa mensal", d: "A fábrica monta sua seleção com base no seu perfil e envia sua caixa com peças, cartão, garantia e QR Code." },
    { t: "Use, colecione e compartilhe", d: "Cada edição tem identidade especial para transformar o recebimento em uma experiência desejável." },
    { t: "Avalie sua experiência", d: "Após a entrega, responda uma pesquisa simples para ajudar a melhorar sua curadoria nos próximos envios." },
  ];
  return (
    <section id="como-funciona" className="section-pad bg-oc-card/40 border-y border-oc-border">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Como funciona">Sua jornada em <span className="italic text-oc-gold">5 passos</span></SectionTitle>
        </div>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.t} className="card-oc grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start !p-6 md:!p-8">
              <div className="editorial-number">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{s.t}</h3>
                <p className="text-oc-muted leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PRODUCTS ============ */
function ProductsSection() {
  const plans = [
    {
      name: "Básico", pieces: "2 peças por mês", price: "89",
      desc: "Ideal para quem quer começar a viver a experiência do clube com uma seleção essencial.",
      features: ["Embalagem kraft", "Cartão de inspiração", "Garantia", "QR Code da produção", "Frete incluso"],
      result: "Receber mensalmente uma curadoria enxuta, acessível e alinhada ao seu estilo.",
    },
    {
      name: "Plus", pieces: "4 peças por mês", price: "149", popular: true,
      desc: "O plano mais popular para quem deseja mais variedade e uma experiência mais completa.",
      features: ["Embalagem premium", "Cartão de inspiração", "Garantia", "QR Code da produção", "Acesso antecipado a lançamentos", "Frete incluso"],
      result: "Renovar suas combinações todos os meses com peças coordenadas e maior variedade.",
    },
    {
      name: "Premium", pieces: "6 peças por mês", price: "199",
      desc: "A experiência mais completa do Original Club, para quem ama semijoias e quer receber uma seleção robusta.",
      features: ["Embalagem premium personalizada", "Cartão de inspiração", "Garantia", "QR Code da produção", "Peça surpresa trimestral bônus", "Frete incluso"],
      result: "Viver a experiência completa do clube, com mais peças, mais exclusividade e benefícios adicionais.",
    },
  ];
  return (
    <section id="planos" className="section-pad">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Planos">
            Escolha o plano que <span className="italic text-oc-gold">combina com você</span>
          </SectionTitle>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`card-oc relative flex flex-col ${p.popular ? "border-oc-gold border-2 !shadow-[0_20px_60px_-15px_rgba(201,160,90,0.45)]" : ""}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-oc-gold text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Mais popular
                </span>
              )}
              <div className="text-center pb-6 border-b border-oc-border">
                <h3 className="font-display text-3xl font-semibold">{p.name}</h3>
                <p className="text-oc-muted mt-1 text-sm">{p.pieces}</p>
                <div className="mt-5">
                  <span className="text-sm text-oc-muted align-top">R$</span>
                  <span className="font-display text-6xl font-semibold text-oc-gold mx-1">{p.price}</span>
                  <span className="text-sm text-oc-muted">/mês</span>
                </div>
              </div>
              <p className="text-sm text-oc-muted leading-relaxed my-6">{p.desc}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-oc-gold mt-0.5">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs italic text-oc-muted border-t border-oc-border pt-4 mb-5">
                <strong className="not-italic text-oc-text">Resultado esperado: </strong>{p.result}
              </div>
              <a
                href={waLink(`Olá! Quero assinar o Plano ${p.name} do Original Club (${p.pieces}, R$ ${p.price}/mês).`)}
                target="_blank" rel="noopener noreferrer"
                className="btn-gold w-full"
                aria-label={`Escolher plano ${p.name}`}
              >
                Escolher este plano
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CURATORSHIP ============ */
function CuratorshipProfiles() {
  const profiles = [
    { t: "Clássica", d: "Peças finas, delicadas e atemporais.", p: "Brincos fixos pequenos e médios, argolas finas, colares discretos, pingentes sutis e semijoias que nunca saem de moda." },
    { t: "Romântica", d: "Peças femininas, elegantes e com detalhes delicados.", p: "Zircônias, pedrarias, pulseiras femininas, brilho moderado e acessórios com acabamento sofisticado." },
    { t: "Bold", d: "Peças com presença, personalidade e estilo marcante.", p: "Argolas médias e grandes, colares estruturados, brincos compridos e semijoias que chamam atenção com elegância." },
  ];
  return (
    <section id="curadoria" className="section-pad bg-oc-card/40 border-y border-oc-border">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Perfis de curadoria">
            Descubra o seu <span className="italic text-oc-gold">estilo</span>
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <article key={p.t} className="card-oc text-center">
              <div className="editorial-number mb-4">0{i + 1}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{p.t}</h3>
              <p className="text-oc-text mb-4 italic">{p.d}</p>
              <p className="text-sm text-oc-muted leading-relaxed">{p.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const items = [1, 2, 3];
  return (
    <section className="section-pad">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Depoimentos">
            Quem já vive a <span className="italic text-oc-gold">experiência Original</span>
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i} className="card-oc">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-oc-border flex items-center justify-center text-oc-muted text-xs">
                  Foto
                </div>
                <div>
                  <div className="font-semibold">[NOME DA CLIENTE]</div>
                  <div className="text-xs text-oc-muted">[PERFIL DA ASSINANTE]</div>
                </div>
              </div>
              <div className="text-oc-gold mb-3" aria-label="5 estrelas">★★★★★</div>
              <p className="text-sm text-oc-muted italic leading-relaxed">[DEPOIMENTO REAL A INSERIR]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DIFFERENTIALS ============ */
function Differentials() {
  const items = [
    { t: "Origem garantida", d: "Direto da fábrica da Original Joias, sem intermediários." },
    { t: "Curadoria viva", d: "Sua experiência melhora a cada feedback enviado." },
    { t: "Edições colecionáveis", d: "6 caixas temáticas bimestrais ao longo do ano." },
    { t: "Acabamento à sua escolha", d: "Ródio branco ou ouro, em todos os planos." },
  ];
  return (
    <section className="section-pad bg-oc-card/40 border-y border-oc-border">
      <div className="container-oc">
        <div className="max-w-2xl mb-14">
          <SectionTitle eyebrow="Diferenciais">
            O que torna o Original Club <span className="italic text-oc-gold">único</span>
          </SectionTitle>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((d, i) => (
            <div key={d.t} className="card-oc">
              <div className="editorial-number !text-3xl mb-3">0{i + 1}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{d.t}</h3>
              <p className="text-sm text-oc-muted leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OBJECTIONS ============ */
function Objections() {
  const items = [
    { q: "E se eu receber uma peça que eu não usaria?", a: "O questionário inclui o filtro \"Que tipo de peça você nunca usaria?\". Essa resposta orienta a curadoria para evitar envios incompatíveis. Além disso, a pesquisa pós-entrega ajuda a ajustar os próximos kits." },
    { q: "Como sei que as peças têm qualidade?", a: "O Original Club nasce dentro da Original Joias, com vantagem de fábrica. Isso significa controle sobre produção, acabamento, seleção dos kits e rastreabilidade da origem das peças, com cartão de garantia em cada caixa." },
    { q: "Será que vale a pena assinar todo mês?", a: "A assinatura foi criada para entregar mais do que peças avulsas. Você recebe curadoria, embalagem especial, edição colecionável, frete incluso, acesso antecipado em planos selecionados e uma experiência mensal pensada para gerar valor recorrente." },
  ];
  return (
    <section className="section-pad">
      <div className="container-oc max-w-4xl">
        <div className="mb-14">
          <SectionTitle eyebrow="Suas dúvidas">
            Respondemos com <span className="italic text-oc-gold">transparência</span>
          </SectionTitle>
        </div>
        <div className="space-y-5">
          {items.map((o, i) => (
            <div key={o.q} className="card-oc">
              <div className="flex gap-5">
                <div className="editorial-number !text-3xl">0{i + 1}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{o.q}</h3>
                  <p className="text-oc-muted leading-relaxed">{o.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OFFER ============ */
function OfferSection() {
  return (
    <section className="section-pad bg-oc-bg text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #C9A05A 0%, transparent 60%)" }} />
      </div>
      <div className="container-oc relative text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-oc-gold font-semibold">A oferta</span>
        <h2 className="font-display font-semibold mt-4 leading-[1.05]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
          Entre para o clube de quem recebe<br />
          <span className="italic text-oc-gold">semijoias com propósito</span>
        </h2>
        <p className="mt-8 text-lg text-white/75 leading-relaxed">
          Assine o Original Club e transforme o recebimento de semijoias em uma experiência mensal
          de descoberta, curadoria e exclusividade. Escolha seu plano, responda seu perfil e receba
          peças selecionadas direto da fábrica.
        </p>
        <p className="mt-6 text-base text-white/60 italic">
          [DADO A CONFIRMAR: condição especial para lista de espera ou desconto para as 50 primeiras assinantes]
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#planos" className="btn-gold">Quero assinar o Original Club</a>
          <a 
            href="#curadoria" 
            className="btn-ghost-gold !text-white !border-white/40 hover:!bg-white hover:!text-[#1F1A17] hover:!border-[#1F1A17]"
          >
            Responder meu perfil de estilo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQSection() {
  const faqs = [
    { q: "O que é o Original Club?", a: "É um clube de assinatura mensal de semijoias da Original Joias, com peças enviadas direto da fábrica, curadoria personalizada e edições colecionáveis ao longo do ano." },
    { q: "Como funciona a curadoria personalizada?", a: "Após assinar, você responde um questionário rápido informando acabamento preferido, estilo, tipos de peças que usa e o que nunca gostaria de receber. A equipe monta seu kit mensal com base nessas respostas." },
    { q: "Posso escolher entre dourado e prata?", a: "Sim. A assinante informa se prefere acabamento em ouro ou ródio branco, e os kits são separados conforme essa preferência." },
    { q: "Quais planos estão disponíveis?", a: "O Original Club possui três planos: Básico com 2 peças por mês, Plus com 4 peças por mês e Premium com 6 peças por mês." },
    { q: "O frete está incluso?", a: "Sim. Segundo o modelo apresentado no briefing, todos os planos contam com frete incluso." },
    { q: "As peças são iguais para todas as assinantes?", a: "Os kits são pré-montados por perfil, plano e acabamento. Isso permite manter qualidade, organização operacional e personalização sem tornar o processo complexo." },
    { q: "Posso dar feedback sobre as peças recebidas?", a: "Sim. A proposta inclui uma pesquisa NPS 7 dias após a entrega. Caso a nota seja baixa, o perfil pode ser revisado para melhorar os próximos envios." },
  ];
  return (
    <section id="faq" className="section-pad bg-oc-card/40 border-y border-oc-border">
      <div className="container-oc max-w-3xl">
        <div className="mb-14 text-center">
          <SectionTitle eyebrow="FAQ" center>
            Perguntas <span className="italic text-oc-gold">frequentes</span>
          </SectionTitle>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-oc !p-0 group [&[open]>summary>span:last-child]:rotate-45">
              <summary className="flex justify-between items-center gap-4 p-6 cursor-pointer font-display text-lg font-semibold list-none">
                <span>{f.q}</span>
                <span className="text-oc-gold text-2xl font-light transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-oc-muted leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SIGNUP FORM ============ */
function SignupForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxBH1eCb-lq4Rh6OmWMW23a0cmpVBTGmDYH-6waJ-JttWifsV57kMMqYLqa96CaFCUsVA/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  }

  return (
    <section id="cadastro" className="section-pad">
      <div className="container-oc max-w-2xl">
        <div className="mb-10 text-center">
          <SectionTitle eyebrow="Cadastro" center>
            Reserve a sua <span className="italic text-oc-gold">primeira caixa</span>
          </SectionTitle>
        </div>

        {sent ? (
          <div className="card-oc text-center">
            <div className="editorial-number mb-4">✓</div>
            <h3 className="font-display text-2xl mb-3">
              Recebemos seu interesse no Original Club.
            </h3>
            <p className="text-oc-muted">
              Em breve nossa equipe entrará em contato.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="card-oc space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" name="nome" required />
              <Field label="WhatsApp" name="whatsapp" type="tel" required />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Cidade" name="cidade" required />
              <SelectField label="Plano de interesse" name="plano" options={["Básico", "Plus", "Premium"]} />
              <SelectField label="Perfil de estilo" name="perfil" options={["Clássica", "Romântica", "Bold"]} />
            </div>

            <SelectField label="Acabamento preferido" name="acabamento" options={["Ródio Branco", "Ouro"]} />

            <button type="submit" className="btn-gold w-full !mt-2">
              Quero garantir minha vaga
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-oc-text mb-1.5 block">
        {label}
        {required && <span className="text-oc-gold"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-oc-border bg-oc-bg text-oc-text focus:border-oc-gold focus:outline-none transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-oc-text mb-1.5 block">
        {label}
      </span>
      <select
        name={name}
        className="w-full px-4 py-3 rounded-lg border border-oc-border bg-oc-bg text-oc-text focus:border-oc-gold focus:outline-none transition-colors"
      >
        <option value="">Selecione</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer role="contentinfo" className="bg-oc-card text-white/70 pt-16 pb-8">
      <div className="container-oc">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/oj-logo.png" alt="Original Joias Logo" className="h-20 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Clube de assinatura de semijoias direto da fábrica, com curadoria personalizada e edições colecionáveis.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#como-funciona" className="hover:text-oc-gold">Como funciona</a></li>
              <li><a href="#planos" className="hover:text-oc-gold">Planos</a></li>
              <li><a href="#curadoria" className="hover:text-oc-gold">Curadoria</a></li>
              <li><a href="#faq" className="hover:text-oc-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: [DADO A CONFIRMAR]</li>
              <li>E-mail: [DADO A CONFIRMAR]</li>
              <li>Instagram: [DADO A CONFIRMAR]</li>
              <li>TikTok: [DADO A CONFIRMAR]</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-center text-white/50">
          © {new Date().getFullYear()} Original Club — Original Joias. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ============ FLOATING UI ============ */
function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden>
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>
  );
}

function CTAFixoMobile() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-oc-bg/95 backdrop-blur-md border-t border-oc-border p-3">
      <a href="#planos" className="btn-gold w-full !py-3">Quero assinar o Original Club</a>
    </div>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-44 md:bottom-24 right-5 z-50 w-11 h-11 rounded-full bg-oc-card border border-oc-border text-oc-gold flex items-center justify-center shadow-md hover:bg-oc-gold hover:text-white transition-colors"
    >
      ↑
    </button>
  );
}

/* ============ HELPERS ============ */
function SectionTitle({ children, eyebrow, center = false }: { children: ReactNode; eyebrow: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-block text-xs uppercase tracking-[0.25em] text-oc-gold font-semibold mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display font-semibold leading-[1.05] mb-6"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
        {children}
      </h2>
    </div>
  );
}

/* ============ ICONS ============ */
function IconHoop() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="18" r="10" /><circle cx="16" cy="6" r="1.5" fill="currentColor" /></svg>; }
function IconRing() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="20" r="8" /><path d="M11 13 L16 5 L21 13" /></svg>; }
function IconFactory() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 28 V14 L12 18 V14 L20 18 V10 L28 14 V28 Z" /><line x1="4" y1="28" x2="28" y2="28" /></svg>; }
function IconBox() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="11" width="22" height="16" rx="1" /><line x1="5" y1="17" x2="27" y2="17" /><path d="M16 11 V7 M12 7 H20" /></svg>; }
function IconStar() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4 L19.5 12.5 L28 13 L21.5 18.5 L23.5 27 L16 22.5 L8.5 27 L10.5 18.5 L4 13 L12.5 12.5 Z" /></svg>; }
function IconQR() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="9" height="9" /><rect x="19" y="4" width="9" height="9" /><rect x="4" y="19" width="9" height="9" /><rect x="19" y="19" width="3" height="3" /><rect x="25" y="19" width="3" height="3" /><rect x="19" y="25" width="3" height="3" /><rect x="25" y="25" width="3" height="3" /></svg>; }
