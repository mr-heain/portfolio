const allSections = document.querySelectorAll("section");
const sectionWatcher = new IntersectionObserver((entries) => {
  entries.forEach(ent => {
    if (ent.isIntersecting) {
      ent.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
allSections.forEach(sec => sectionWatcher.observe(sec));
let galleryImages = [];
let currentPos = 0;
function openimg(imgs) {
  galleryImages = imgs;
  currentPos = 0;
  document.getElementById("viewer-img").src = galleryImages[currentPos];
  document.getElementById("viewer").style.display = "flex";
  if (galleryImages.length > 1) {
    document.getElementById("prevBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "block";
  } else {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }
}
function closeimg() {
  document.getElementById("viewer").style.display = "none";
}
function preimg() {
  if (galleryImages.length > 1) {
    currentPos = (currentPos - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("viewer-img").src = galleryImages[currentPos];
  }
}
function nxtimg() {
  if (galleryImages.length > 1) {
    currentPos = (currentPos + 1) % galleryImages.length;
    document.getElementById("viewer-img").src = galleryImages[currentPos];
  }
}
