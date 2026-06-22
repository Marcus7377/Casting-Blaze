#!/usr/bin/env bash
# Gera o PDF da apresentação a partir do index.html usando o Google Chrome headless.
# Uso:  bash scripts/build-pdf.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/Spin-x-Blaze-Influencer-Dealer-Cashback.pdf"

# Tenta localizar um binário do Chrome/Chromium
CHROME="$(command -v google-chrome-stable || command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
if [ -z "$CHROME" ]; then
  echo "Chrome/Chromium não encontrado. Instale o Google Chrome para gerar o PDF." >&2
  echo "Alternativa: abra index.html no navegador e use Ctrl/Cmd+P > Salvar como PDF." >&2
  exit 1
fi

"$CHROME" --headless --no-sandbox --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  --virtual-time-budget=8000 \
  "file://$ROOT/index.html"

echo "PDF gerado em: $OUT"
