document.addEventListener("DOMContentLoaded", () => {
  const brilho1Elements = document.querySelectorAll(".brilho1");
  const brilho2Buttons = document.querySelectorAll(".brilho2 .elementor-button");

  brilho2Buttons.forEach((brilho2Button, index) => {
    const brilho1 = brilho1Elements[index];
    let timeoutId;

    if (!brilho1) return;

    brilho2Button.addEventListener("mousemove", (event) => {
      clearTimeout(timeoutId);
      brilho2Button.classList.add("hovering");

      const brilho1Rect = brilho1.getBoundingClientRect();
      const mouseX = event.clientX - brilho1Rect.left;
      const pct = Math.min(Math.max(mouseX / brilho1Rect.width, 0), 1).toFixed(2);

      brilho1.style.setProperty("--before-opacity", pct);
      brilho1.style.setProperty("--after-opacity", (1 - pct).toFixed(2));

      const btnRect = brilho2Button.getBoundingClientRect();
      const relX = event.clientX - btnRect.left;
      const translateX = (relX / btnRect.width) * 100 - 100;

      brilho2Button.style.setProperty("--button-translate-x", `${translateX}%`);
    });

    brilho2Button.addEventListener("mouseleave", () => {
      brilho2Button.classList.remove("hovering");
      timeoutId = setTimeout(() => {
        brilho1.style.setProperty("--before-opacity", "1");
        brilho1.style.setProperty("--after-opacity", "0");
        brilho2Button.style.setProperty("--button-translate-x", "-10%");
      }, 1200);
    });
  });
});
