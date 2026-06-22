# Casting Blaze — Proposta Spin Gaming × Blaze

Deck comercial em HTML/CSS replicando o visual do PDF "Blaze – Junho 2026"
para apresentar à Blaze duas alavancas combinadas:

1. **Casting Blaze** — Influenciador treinado pela Spin Academy atuando
   como dealer ao vivo nas mesas Spin dentro da Blaze (formato comprovado
   pelo case Thiago Massao, ~1M de views).
2. **Cashback 10% nas mesas Spin** — Programa semanal de devolução das
   perdas líquidas com regra simples, focado em aumentar UAPI,
   frequência de depósito, ticket médio e retenção.

## Estrutura

```
apresentacao/
├── index.html                 # Deck (12 slides em 1280x800)
├── styles.css                 # Visual do deck (mesma identidade Blaze)
├── casting-blaze-proposta.pdf # PDF final pronto para enviar
├── assets/
│   ├── logo-blaze.svg
│   ├── logo-blaze-wordmark.svg
│   ├── logo-spin.svg
│   └── images/                # Hero images geradas para os slides
└── previews/                  # PNG por slide (preview rápido)
```

## Como visualizar

Abra `apresentacao/index.html` em qualquer navegador moderno. O deck é
desenhado em uma "tela" fixa de 1280×800px por slide.

## Como gerar o PDF novamente

Requer Node 18+ e o Chrome instalado no path `/usr/local/bin/google-chrome`.

```bash
npm install puppeteer
node tools/render-pdf.js
```

(o script `tools/render-pdf.js` está versionado abaixo)

## Sumário do deck (12 slides)

| # | Slide | Objetivo |
|---|---|---|
| 01 | Capa | Identidade Casting Blaze + posicionamento |
| 02 | Contexto | Reforça parceria atual Spin × Blaze e introduz a proposta |
| 03 | Dois pilares | Visão geral: Casting Blaze + Cashback 10% |
| 04 | Casting Blaze · Conceito | O que é o formato influenciador-dealer |
| 05 | Casting Blaze · Processo | 4 etapas: Casting → Spin Academy → Live → Mensuração |
| 06 | Case Massao | Prova real: ~1M views, cobertura Jovem Pan/ConexãoBet |
| 07 | Funil UAPI/FTD/GGR | Por que gera +UAPI, +depósito, +volume |
| 08 | Cashback · Mecânica | Regra inicial: 10% semanal, mesas Spin, saldo real |
| 09 | Cashback · Benchmark | KTO, Vbet, Superbet, Rivalo, Bet365, 1xBet + KPIs |
| 10 | Cashback · Impacto | Projeção 90 dias nas mesas Spin × Blaze |
| 11 | Sinergia + Plano | Combo Casting + Cashback + roadmap 4 fases |
| 12 | CTA | Próximos passos concretos |

## Fontes citadas no deck

- Blask — *What is Cashback in iGaming: complete 2026 guide*
- Optimove — *iGaming Report 2024 / 2025*
- Vegasino — Case study cashback (Coney Island Maker Faire 2025)
- BrasilVegas — entrevistas TaDa Gaming · Yuri22
- Uberman Agency — relatório iGaming streaming Twitch/Kick
- Kinser Content — *iGaming Influencer Marketing 2026*
- Jovem Pan, ConexãoBet — cobertura da ação Thiago Massao × Spin Gaming
- LiveScore BR, O Dia — listagens de cashback em casas de apostas no BR
