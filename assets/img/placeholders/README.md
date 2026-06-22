# Mídias da apresentação — onde inserir os arquivos reais

Esta apresentação usa _placeholders_ estilizados (sem arquivos de imagem) para
as mídias do Massao. Para inserir o material real, salve os arquivos em
`assets/img/` com os nomes abaixo e siga as instruções de substituição.

## Arquivos esperados

| Arquivo | Slide | Conteúdo |
| --- | --- | --- |
| `assets/img/massao-dealer-01.mp4` | 3 — A Ação | Vídeo do Massao atuando como dealer (vídeo 01) |
| `assets/img/massao-dealer-02.mp4` | 3/4 | Segundo vídeo do Massao como dealer |
| `assets/img/massao-viral-print.png` | 4 — A Prova | Print da ação que teve ~1 milhão de visualizações |

## Como substituir o placeholder por uma imagem (print viral)

No `index.html`, no bloco `.media` do slide 4, troque o conteúdo do placeholder
por uma imagem de fundo. Exemplo:

```html
<div class="media" style="background-image:url('assets/img/massao-viral-print.png'); background-size:cover; background-position:center;">
  <span class="media__tag">Print da ação</span>
  <div class="viral-badge">
    <div class="v-num">~1 MM</div>
    <div class="v-lbl">Visualizações</div>
  </div>
</div>
```

## Como inserir um vídeo (Massao dealer)

No bloco `.media` do slide 3, substitua o `.play`/`.cap` por:

```html
<video src="assets/img/massao-dealer-01.mp4" controls muted playsinline
       style="width:100%; height:100%; object-fit:cover; border-radius:14px;"></video>
```

> Observação: vídeos não aparecem na exportação em PDF (o PDF é estático). Para a
> versão impressa/PDF, prefira um frame do vídeo como imagem (`.png`/`.jpg`).
