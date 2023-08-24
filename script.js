const introTitle = document.querySelector('.intro__title'); // Seleksi elemen dengan class "intro__title"
const introSection = document.querySelector('.intro'); // Seleksi elemen dengan class "intro"

let isIntroVisible = true; // Menandakan apakah section intro masih terlihat atau tidak

window.addEventListener('scroll', () => {
  // Mendapatkan posisi scroll vertikal
  const scrollY = window.scrollY;

  // Jika posisi scroll melebihi tinggi section intro dan section intro masih terlihat
  if (scrollY > introSection.clientHeight && isIntroVisible) {
    introTitle.classList.add('intro__title-scroll'); // Tambahkan class untuk animasi intro__title
    isIntroVisible = false; // Set isIntroVisible ke false
  }
  // Jika posisi scroll kembali ke section intro dan section intro tidak terlihat
  else if (scrollY <= introSection.clientHeight && !isIntroVisible) {
    introTitle.classList.remove('intro__title-scroll'); // Hapus class animasi dari intro__title
    isIntroVisible = true; // Set isIntroVisible ke true
  }
});
