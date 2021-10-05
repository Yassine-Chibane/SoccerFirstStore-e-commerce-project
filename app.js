// Smooth Scroll
const scrollLinks = [...document.querySelectorAll(".scroll-link")];

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});

