const navLinks = document.querySelector(".nav-link-section");
const hamburgherMenu = document.querySelector(".hm-img");
const accordionToggle = document.getElementById('accordion-toggle');
const accordionContent = document.getElementById('accordion-content');
const accordionIcon = document.getElementById('accordion-icon');

hamburgherMenu.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  accordionContent.classList.add('hidden');
});

accordionToggle.addEventListener('click', () => {
  accordionContent.classList.toggle('hidden');
  accordionIcon.classList.toggle('rotate-180');
});
