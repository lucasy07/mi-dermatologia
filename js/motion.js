// Movimento da página. Roda no <head>, antes de desenhar.
// As animações só existem sob a classe "motion": sem JavaScript, sem suporte a
// IntersectionObserver ou com prefers-reduced-motion: reduce, a página aparece
// direto no estado final.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion');

  // Revelações no scroll: linhas do método e das perguntas, e a foto da médica.
  // Cada elemento anima uma única vez, ao entrar na tela.
  const REVEAL_SELECTOR = '.step, .arch--doctor';
  const STAGGER_MS = 160; // intervalo entre elementos que entram na tela juntos

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      const entering = entries.filter((entry) => entry.isIntersecting);
      entering.forEach((entry, index) => {
        entry.target.style.setProperty('--reveal-delay', `${index * STAGGER_MS}ms`);
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el));
  });
}
