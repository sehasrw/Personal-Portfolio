document.querySelectorAll(".menu-toggle").forEach((b) =>
  b.addEventListener("click", () => {
    const open = b.classList.toggle("is-open");
    b.setAttribute("aria-expanded", open);
    document.querySelector(".mobile-nav").classList.toggle("is-open", open);
  }),
);
document.querySelectorAll(".mobile-nav a").forEach((a) =>
  a.addEventListener("click", () => {
    document.querySelector(".menu-toggle").classList.remove("is-open");
    document.querySelector(".mobile-nav").classList.remove("is-open");
  }),
);
