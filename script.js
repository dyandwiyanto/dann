const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => observer.observe(el));

const toggle = document.getElementById("theme-toggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

document.getElementById("year").textContent = new Date().getFullYear();
