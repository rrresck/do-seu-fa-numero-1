"use strict";

const revealButtons = document.querySelectorAll(".reveal-button");
const musicButton = document.querySelector("#musicButton");
const backgroundMusic = document.querySelector("#backgroundMusic");

revealButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        const imageWrapper = document.getElementById(targetId);

        if (!imageWrapper) {
            return;
        }

        const isHidden = imageWrapper.hidden;

        imageWrapper.hidden = !isHidden;
        button.textContent = isHidden
            ? "Esconder lembrança"
            : "Mostrar lembrança";

        button.setAttribute(
            "aria-expanded",
            String(isHidden)
        );
    });
});

musicButton.addEventListener("click", async () => {
    try {
        if (backgroundMusic.paused) {
            await backgroundMusic.play();

            musicButton.textContent = "Pausar música";
            musicButton.setAttribute("aria-pressed", "true");
        } else {
            backgroundMusic.pause();

            musicButton.textContent = "Tocar música";
            musicButton.setAttribute("aria-pressed", "false");
        }
    } catch (error) {
        musicButton.textContent = "Não foi possível tocar";

        console.error(
            "Erro ao reproduzir a música:",
            error
        );
    }
});