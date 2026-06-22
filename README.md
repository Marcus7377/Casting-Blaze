# Casting-Blaze — Spin Gaming × Blaze

Apresentação comercial para engajar a **Blaze** em duas ações de Live Casino da **Spin Gaming**:

1. **Influencer Dealer** — treinar um influenciador conhecido da marca na *Spin Academy* e colocá-lo para atuar como **dealer ao vivo** nas mesas Spin Gaming dentro da Blaze.
2. **Cashback 10%** — programa de cashback (começando em 10% sobre perdas) nas mesas Spin Gaming dentro da Blaze.

A narrativa conecta as duas ações à métrica de **UAPI (Uniq Authentic Players)**, ao aumento de **depósitos** e ao crescimento do **volume de apostas (GGV)**, com dados de mercado para sustentar cada argumento.

A arte segue o mesmo padrão visual do PDF que a Spin já usa com a Blaze (gradientes em vermelho/vinho escuro, logotipo Blaze em chama, logotipo Spin Gaming, tipografia em caixa alta).

## Conteúdo

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Apresentação completa (13 slides) — abra no navegador |
| `css/deck.css` | Design system / estilos da marca |
| `assets/blaze-logo.svg` | Logotipo Blaze (chama) recriado em SVG |
| `assets/spin-logo.svg` | Logotipo Spin Gaming recriado em SVG |
| `scripts/build-pdf.sh` | Script para exportar o deck em PDF |
| `Spin-x-Blaze-Influencer-Dealer-Cashback.pdf` | Versão pronta para enviar/imprimir |

## Como visualizar

Abra o arquivo `index.html` em qualquer navegador moderno.

- Use as **setas ← →** (ou PageUp/PageDown) para navegar entre os slides.
- `Home` / `End` vão para o primeiro / último slide.

## Como exportar em PDF

**Opção A — pelo navegador:** abra `index.html`, pressione `Ctrl/Cmd + P`, escolha "Salvar como PDF", tamanho de papel paisagem e margens "Nenhuma".

**Opção B — pela linha de comando** (requer Google Chrome instalado):

```bash
bash scripts/build-pdf.sh
```

## Estrutura dos slides

1. **Capa** — Spin Gaming × Blaze
2. **Resumo executivo** — as duas alavancas (aquisição + retenção)
3. **O cenário** — tamanho e competitividade do mercado brasileiro regulado
4. **Por que UAPI** — por que jogador único e autêntico vale mais que cadastro
5. **Ação 1 · Influencer Dealer** — o formato e as 4 etapas
6. **Prova de conceito** — case Massao + economia do micro-influência
7. **Mecânica de valor** — do alcance ao depósito (funil UAPI → GGV)
8. **Ação 2 · Cashback 10%** — mecânica do programa
9. **Por que cashback funciona** — evidência de mercado e retenção
10. **Efeito combinado** — o flywheel de aquisição + retenção
11. **Plano de execução** — quatro fases
12. **KPIs & governança** — como medir o sucesso
13. **Próximo passo** — proposta de piloto

## Fontes dos dados (citadas nos slides)

- **SPA-MF / Ministério da Fazenda** — GGR R$ 37 bi e 25,2 mi de apostadores no 1º ano regulado (2025).
- **Blask — *What is Cashback in iGaming* (2026)** — cashback presente em 53,8% dos operadores; faixa de 10-20% reduz churn pós-perda; retenção +14-30%.
- **BidCanvas** — 40% de churn na 1ª semana com bônus; +25% de lucro a cada 5% de retenção; sinal dos 2 depósitos.
- **Uberman Agency** — case de rede de streamers: CPA US$ 22-38, engajamento 8-12%, conversão 14%, depósito 37%, ROI 3,2x; PIX usado por 95%+.
- **Sportradar/VAIX, Altenar** — personalização: +34% no valor médio da aposta, +20-25% na colocação de apostas, +15% de receita.
- **GameOn** — projeção de crescimento de 20-30% do GGR em 2026.
- **Jovem Pan / Conexão Bet** — cobertura da ação inédita do influenciador como crupiê (Spin Gaming).

> O dado de **~1 milhão de visualizações** é interno da Spin Gaming, referente à ação já realizada.
