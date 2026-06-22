# Casting Blaze — Spin Gaming × Blaze

Apresentação comercial Spin Gaming → Blaze propondo duas frentes integradas
para expandir UAPI, depósitos e volume nas mesas Spin Gaming dentro da Blaze:

1. **Casting Blaze** — Programa de *Influencer Dealers* nas mesas Spin
   (extensão do case Spin × Casa de Apostas com Thiago Massao, ~1M views).
2. **Cashback 10%** — Cashback semanal sobre o GGR negativo
   exclusivamente nas mesas Spin Gaming dentro da Blaze.

O deck foi desenhado para preservar a identidade visual já utilizada com a
Blaze (referência: capa preta/burgundy, tipografia Oswald/Inter, acento
fire-red `#ff2c5a`, logo flame-drop).

## Estrutura

```
presentation/
├── index.html        Deck completo em HTML (11 slides)
├── styles.css        Identidade visual Blaze
├── build.js          Conversor HTML → PDF via Chrome headless
└── Casting-Blaze-Spin-Gaming-Blaze.pdf   Deck final (compartilhar com Blaze)
```

## Como regenerar o PDF

Requer Google Chrome / Chromium instalado.

```bash
cd presentation
node build.js
```

O PDF é gerado em landscape no tamanho 297×167 mm (proporção próxima a 16:9).

## Slides

1. **Capa** — `casting blaze` / *Presence. Identity. Influence.*
2. **Contexto de mercado** — 39M contas, R$30bi/mês, +76% online casino, +20% live dealer
3. **Prova** — Case Spin × Casa de Apostas com Massao (~1M views, formato inédito BR)
4. **Duas frentes** — Casting Blaze + Cashback 10%
5. **Frente 1 — Estúdio** — Como o programa de influencer-dealer opera
6. **Frente 1 — UAPI** — Por que gera UAPI/depósito/volume (benchmarks de mercado)
7. **Frente 2 — Cashback 10%** — Mecânica e benchmark vs. Superbet, KTO, R7, Cassino.bet.br
8. **Frente 2 — Evidências** — Por que cashback funciona em uma Bet (dados de retenção)
9. **Efeito combinado** — Matriz de impacto em UAPI, FTD, D30, volume, viralização, CAC
10. **Roadmap** — Fases 0–3 de implementação
11. **Encerramento** — CTA `Vamos acender a primeira mesa-evento do cassino brasileiro?`

## Fontes citadas no deck

- H2 Gambling Capital (via OpenBet white paper) — 39M contas ativas 2026
- Banco Central do Brasil — R$30bi/mês em stakes
- Blask Index 2025 — +76% YoY Online Casino / +20% YoY Live Dealer
- Delasport — benchmarks de retenção (loyalty + cashback)
- iGrowth Agency — case PA-iGaming (retenção 23%→67%)
- CasinoRIX — segmentação VIP (+40% depósitos)
- Uberman Agency — rede de streamers LatAm (14% conv. / 37% FTD / 3.2x ROI)
- TaDa × Yuri22 — 5M views/mês, pico 62k espectadores
- Jovem Pan — cobertura do case Massao como dealer
- Lei 14.790/2023 — proibição de bônus de boas-vindas (cashback continua permitido)
