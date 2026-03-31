

const larguraDaTela = window.innerWidth

if (larguraDaTela < 800) {
  var swiper5 = new Swiper(".mySwiper5", {
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
} else {
  var swiper5 = new Swiper(".mySwiper5", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

// pega todas as imagens dos dois carrosseis
const swiperImages = document.querySelectorAll(".mySwiper4 .card img, .mySwiper5 .card img");

swiperImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || "Imagem ampliada";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

// fecha clicando no fundo escuro
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// fecha com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});


