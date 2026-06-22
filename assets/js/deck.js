// Lightweight deck navigation: arrow keys + on-screen controls + presenter mode.
(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const counter = document.getElementById("counter");
  const total = slides.length;
  let current = 0;

  function clamp(i) { return Math.max(0, Math.min(total - 1, i)); }

  function updateCounter() {
    if (counter) counter.textContent = (current + 1) + " / " + total;
  }

  function goTo(i) {
    current = clamp(i);
    slides[current].scrollIntoView({ behavior: "smooth", block: "center" });
    updateCounter();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Track which slide is in view while scrolling.
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = slides.indexOf(entry.target);
        if (idx >= 0) { current = idx; updateCounter(); }
      }
    });
  }, { threshold: 0.55 });
  slides.forEach((s) => io.observe(s));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
    else if (e.key === "Home") { e.preventDefault(); goTo(0); }
    else if (e.key === "End") { e.preventDefault(); goTo(total - 1); }
    else if (e.key.toLowerCase() === "p") { window.print(); }
  });

  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");
  const btnPrint = document.getElementById("print");
  if (btnPrev) btnPrev.addEventListener("click", prev);
  if (btnNext) btnNext.addEventListener("click", next);
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());

  updateCounter();
})();
