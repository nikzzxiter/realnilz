// Variabel untuk menyimpan indeks gambar saat ini
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Menampilkan slide berdasarkan indeks
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlideIndex = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentSlideIndex = totalSlides
