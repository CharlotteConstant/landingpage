/* Animations au scroll */

const sr = ScrollReveal({
  reset: false,
  mobile: false,
});

sr.reveal(
  ".contain",
  {
    interval: 400,
  },
  50
);

sr.reveal("h2", {
  origin: "left",
  distance: "100px",
  duration: 2000,
});

sr.reveal(".sousTitre", {
  origin: "left",
  distance: "100px",
  duration: 2000,
});

sr.reveal(".vietnam", {
  origin: "right",
  distance: "20px",
  duration: 2000,
});

/*section peru*/

var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
}
