// Movimento da página. Roda no <head>, antes de desenhar.
// As animações só existem sob a classe "motion": sem JavaScript, ou com
// prefers-reduced-motion: reduce, a página aparece direto no estado final.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('motion');
}
