# Casting Blaze — Spin Gaming

Apresentação (deck) da **Spin Gaming para a Blaze** propondo duas ações
integradas de Live Casino:

1. **Dealer Influencer** — treinar um influenciador conhecido da marca e colocá-lo
   para atuar como _dealer_ ao vivo nas mesas da Spin (caso real: Massao, com uma
   ação que alcançou ~1 milhão de visualizações).
2. **Programa de Cashback de 10%** — devolução de 10% das perdas líquidas nas
   mesas da Spin dentro da Blaze, como mecânica de retenção.

O deck contextualiza, com dados de mercado, por que essas ações aumentam **UAPI
(Uniq Authentic Players Increase)**, **depósitos** e **volume de apostas**.

A arte segue o mesmo padrão visual do PDF institucional Blaze x Spin Gaming
(gradientes em vinho/preto, logo flama da Blaze, tipografia condensada em caixa
alta, navegação em abas).

## Como visualizar

Abra `index.html` em qualquer navegador moderno.

- Navegação: setas `←` / `→` (ou os botões na barra inferior).
- Exportar PDF: tecla `P` ou o botão **Exportar PDF** (use "Salvar como PDF",
  margens "Nenhuma", tamanho 1280×720 px / paisagem).

### Gerar o PDF via linha de comando (Chrome headless)

```bash
google-chrome-stable --headless --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=spin-blaze-dealer-cashback.pdf "file://$PWD/index.html"
```

## Estrutura

```
index.html                  # o deck (11 slides)
assets/css/styles.css       # design system (cores, tipografia, componentes)
assets/js/deck.js           # navegação por teclado/botões + atalho de impressão
assets/img/placeholders/    # instruções para inserir os vídeos/print do Massao
```

## Slides

1. Capa
2. O momento do mercado (por que agora)
3. A ação: Dealer Influencer
4. A prova: viralização (~1 MM de views)
5. Por que gera mais UAPI
6. Mais depósitos e volume de apostas
7. Programa de Cashback de 10% (a oferta)
8. Por que cashback funciona em uma Bet (narrativa com dados)
9. O ciclo virtuoso (as duas ações juntas)
10. Metas & mensuração (KPIs e teste A/B)
11. Próximos passos

## Fontes dos dados citados

- SPA/MF — Panorama do Mercado Regulado de Apostas de Quota Fixa, 2025
  (R$ 37 bi de GGR; 25,2 mi de CPFs únicos; 100,7 mi de contas).
- SBC News / BNLData — resultados do 1º ano do mercado regulado (2026).
- Business of iGaming — Online Gambling in Brazil 2026 (Cassino Online +76% YoY).
- NEXT.io / SBC Events / Uberman — streaming e influência no Brasil (2025).
- Blask — "What is Cashback in iGaming" (2026); Extendy / European Gaming (2025);
  NuxGame (2025); BidCanvas — AI Churn Intervention (2025).
- Estudo de caso TaDa Gaming x Blaze — GiftCode (2025).
