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
