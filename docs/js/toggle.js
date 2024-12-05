document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const blocks = document.querySelectorAll(".command-block");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const lang = tab.dataset.lang;

            // Update tab states
            tabs.forEach(t => t.classList.toggle("active", t.dataset.lang === lang));

            // Update block visibility
            blocks.forEach(block => {
                block.style.display = block.dataset.lang === lang ? "block" : "none";
            });
        });
    });
});
