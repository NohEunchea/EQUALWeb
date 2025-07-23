document.addEventListener("DOMContentLoaded", () => {
    const slidesEl = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsEl = document.querySelector(".dots");
    let idx = 0;
    const total = slides.length;

    // 도트 생성
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsEl.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function render() {
        slidesEl.style.transform = `translateX(-${idx * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    }

    function goToSlide(i) {
        idx = (i + total) % total;
        render();
    }
    prevBtn.addEventListener("click", () => goToSlide(idx - 1));
    nextBtn.addEventListener("click", () => goToSlide(idx + 1));

    // 자동재생 (5초마다)
    let timer = setInterval(() => goToSlide(idx + 1), 5000);
    // 호버 시 정지
    document.querySelector(".slider").addEventListener("mouseenter", () => clearInterval(timer));
    document.querySelector(".slider").addEventListener("mouseleave", () => {
        timer = setInterval(() => goToSlide(idx + 1), 5000);
    });
});
