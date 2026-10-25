// 공통 헤더: 페이지를 조금이라도 내리면 body에 is-scrolled를 붙여 헤더를 작게 만든다.
// (작아진 헤더의 모양과 호버 시 복귀는 index.css에서 처리)
(() => {
    const SCROLL_START = 8; // px
    let ticking = false;
    function update() {
        document.body.classList.toggle('is-scrolled', window.scrollY > SCROLL_START);
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
})();
