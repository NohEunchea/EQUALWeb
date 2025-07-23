function includeHTML() {
    document.querySelectorAll('[id^="site-"]').forEach((el) => {
        const url = el.id === "site-header" ? "header.html" : "footer.html";
        fetch(url)
            .then((res) => res.text())
            .then((html) => (el.innerHTML = html))
            .catch((err) => console.error("Include error:", err));
    });
}
document.addEventListener("DOMContentLoaded", includeHTML);

document.addEventListener("DOMContentLoaded", () => {
    const { hash, pathname } = location;
    if (!hash) return;

    // 1) 해당 ID 위치로 부드럽게 스크롤 (옵션)
    const target = document.getElementById(hash.substring(1));
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }

    // 2) 주소창에서 .html 과 #부분 제거
    //    /about.html#CEO_Message → /about
    const newPath = pathname.replace(/\.html$/, "");
    history.replaceState(null, "", newPath);
});
