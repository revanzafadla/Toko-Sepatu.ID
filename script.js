/* saat tombol di klik */
const navbarExtra = document.querySelector("#navbar-extra");
const navbar = document.querySelector(".navbar-nav");

/* menjalankan tombol */

navbarExtra.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* saat di klik keluar */

document.addEventListener("click", function (e) {
  if (!navbarExtra.contains(e.target) && !navbar.contains(e.target))
    navbar.classList.remove("active");
});
