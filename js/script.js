// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di click

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Klik donasi sekarang langsung ke DM instagram

document
  .getElementById("donasiNow")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const url = `https://www.instagram.com/direct/t/106102004124694`;
    window.open(url, "_blank");
  });

// Klik kirim pesan langsung ke DM instagram

document
  .getElementById("kirimPesan")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const nama = document.getElementById("Nama");
    const instagram = document.getElementById("Instagram");

    // Membuat pesan dengan template
    const pesan = `Halo, nama saya ${nama} dan username instagram saya ${instagram}. Saya mau mendonasikan beberapa buku, apakah bisa?`;
    const encodedPesan = encodeURIComponent(pesan);
    const url = `https://www.instagram.com/direct/t/106102004124694`;
    window.open(url, "_blank");
  });
