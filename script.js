// フェードイン
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// FAQ開閉
document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});

// カウントアップ
const countEls = document.querySelectorAll('.count');
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1400, steps = 35, inc = target / steps;
      let cur = 0;
      const t = setInterval(() => {
        cur += inc;
        if (cur >= target) { el.textContent = target; clearInterval(t); }
        else el.textContent = Math.floor(cur);
      }, dur / steps);
      countObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
countEls.forEach(el => countObs.observe(el));

// モバイルメニュー
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

// 固定CTA表示
const stickyCta = document.getElementById('stickyCta');
const hero = document.getElementById('hero');
if (stickyCta && hero) {
  const stickyObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      stickyCta.classList.toggle('visible', !e.isIntersecting);
    });
  }, { threshold: 0 });
  stickyObs.observe(hero);
}
