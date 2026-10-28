// 공통 헤더
// - 페이지를 조금이라도 내리면 body에 is-scrolled를 붙여 헤더를 작게 만든다.
// - 스크롤을 올리면 is-revealed를 붙여 원래 크기 헤더 + 메뉴 바를 보여 주고,
//   다시 내리면 떼어 작은 헤더로 돌아간다. (맨 위에서는 원래 상태)
// (모양과 호버 시 복귀는 index.css / lodge.css에서 처리)
(() => {
    const SCROLL_START = 8; // px
    const DIRECTION_MIN = 6; // px: 이만큼 움직였을 때만 방향 전환으로 판단 (손떨림 무시)
    let lastY = window.scrollY;
    let ticking = false;
    function update() {
        const y = window.scrollY;
        const scrolled = y > SCROLL_START;
        document.body.classList.toggle('is-scrolled', scrolled);
        if (!scrolled) {
            document.body.classList.remove('is-revealed');
            lastY = y;
        } else if (Math.abs(y - lastY) >= DIRECTION_MIN) {
            document.body.classList.toggle('is-revealed', y < lastY);
            lastY = y;
        }
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
})();
