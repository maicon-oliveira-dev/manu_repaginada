const awaiting = (label: string) => `[AGUARDANDO ${label}]`;

export const masterclassCookies = {
  hero: { kicker: awaiting('TEXTO DO HERO'), title: 'Masterclass A Base dos Cookies Perfeitos', description: awaiting('DESCRIÇÃO DO HERO'), access: awaiting('INFORMAÇÃO DE ACESSO'), duration: awaiting('DURAÇÃO'), cta: awaiting('CTA DO HERO'), price: awaiting('PREÇO'), installments: awaiting('PARCELAMENTO'), image: 'hero.webp', photoCaption: awaiting('LEGENDA DA FOTO DO HERO') },
  problem: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO'), intro: awaiting('INTRODUÇÃO'), pains: Array.from({ length: 4 }, (_, index) => awaiting(`DOR ${index + 1}`)), close: awaiting('FECHAMENTO') },
  bases: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO'), subtitle: awaiting('SUBTÍTULO'), cookies: [{ label: awaiting('LABEL DO COOKIE TRADICIONAL'), title: awaiting('TÍTULO DO COOKIE TRADICIONAL'), copy: awaiting('TEXTO DO COOKIE TRADICIONAL'), image: 'cookie-tradicional.webp' }, { label: awaiting('LABEL DO COOKIE NEW YORK'), title: awaiting('TÍTULO DO COOKIE NEW YORK'), copy: awaiting('TEXTO DO COOKIE NEW YORK'), image: 'cookie-new-york.webp' }], quote: awaiting('DESTAQUE') },
  learn: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO'), intro: awaiting('INTRODUÇÃO'), process: [{ label: awaiting('MODELAGEM'), image: 'processo-modelagem.webp', caption: awaiting('LEGENDA DA MODELAGEM') }, { label: awaiting('RECHEIO'), image: 'processo-recheio.webp', caption: awaiting('LEGENDA DO RECHEIO') }, { label: awaiting('FORNO'), image: 'processo-forno.webp', caption: awaiting('LEGENDA DO FORNO') }], items: Array.from({ length: 6 }, (_, index) => awaiting(`ITEM DE APRENDIZADO ${index + 1}`)) },
  audience: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO'), items: Array.from({ length: 4 }, (_, index) => awaiting(`ITEM DE PÚBLICO ${index + 1}`)), close: awaiting('FECHAMENTO') },
  receive: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO: O QUE VOCÊ RECEBE'), blocks: Array.from({ length: 3 }, (_, index) => ({ title: awaiting(`TÍTULO DO BLOCO ${index + 1}`), copy: awaiting(`TEXTO DO BLOCO ${index + 1}`) })) },
  bonus: { kicker: awaiting('KICKER'), title: awaiting('TÍTULO DO BÔNUS'), copy: awaiting('TEXTO DO BÔNUS') },
  testimonials: { images: ['depoimento-01.webp', 'depoimento-02.webp', 'depoimento-03.webp'] },
  instructor: { image: 'manu-rosa.webp', eyebrow: awaiting('EYEBROW'), title: 'Sobre a instrutora Manu Rosa', copyOne: awaiting('PRIMEIRO TEXTO DA INSTRUTORA'), copyTwo: awaiting('SEGUNDO TEXTO DA INSTRUTORA'), close: awaiting('FECHAMENTO') },
  offer: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO DA OFERTA'), includesTitle: awaiting('TÍTULO DO QUE ESTÁ INCLUSO'), items: Array.from({ length: 4 }, (_, index) => awaiting(`ITEM DA OFERTA ${index + 1}`)), priceLabel: awaiting('RÓTULO DE PREÇO'), price: awaiting('PREÇO'), installments: awaiting('PARCELAMENTO'), cta: awaiting('CTA DE COMPRA'), checkoutHref: '' },
  guarantee: { title: awaiting('TÍTULO DA GARANTIA'), copy: awaiting('TEXTO DA GARANTIA') },
  faq: { eyebrow: awaiting('EYEBROW'), title: awaiting('TÍTULO DO FAQ'), items: Array.from({ length: 4 }, (_, index) => ({ question: awaiting(`PERGUNTA ${index + 1}`), answer: awaiting(`RESPOSTA ${index + 1}`) })) },
  final: { title: awaiting('TÍTULO FINAL'), copy: awaiting('TEXTO FINAL'), cta: awaiting('CTA FINAL') },
};
