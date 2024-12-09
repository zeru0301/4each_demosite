(() => {
    document.addEventListener('DOMContentLoaded', () => {

        // ハンバーガーアイコン
        const menubtn = document.querySelector(".menu-btn");
        const overlayBox = document.querySelector(".overlay-nav");
        const menuLine = document.querySelector(".menu-line");

        menubtn.addEventListener("click", () => {
            overlayBox.classList.toggle("show");
            menuLine.classList.toggle("active");
            

        });

    });
})()