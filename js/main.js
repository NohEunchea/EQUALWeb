const slides = document.querySelectorAll('.hero-slide');
let current = 0;

setInterval(() => {
  // 1) 다음 슬라이드 인덱스
  const next = (current + 1) % slides.length;

  // 2) active 클래스 토글 → 크로스페이드
  slides[current].classList.remove('active');
  slides[next].classList.add('active');

  // 3) 현재 인덱스 갱신
  current = next;
}, 6500);  // 6.5초마다 전환