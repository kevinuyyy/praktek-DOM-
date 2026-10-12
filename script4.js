const judul = document.querySelector("#judul");
judul.style.color = "darkblue";
 
const kartuPertama = document.querySelector("kartu");
console.log(kartuPertama);
 
const hargaPertama = document.querySelector(".kartu .harga");
hargaPertama.style.fontWeight = "bold";
 
const menuPertama = document.querySelector(".menu li:first-child");
menuPertama.style.color = "red";

document.querySelector("li:nth-child(2)").style.color = "orange";
 
// ===== querySelectorAll: memilih BANYAK elemen =====
const semuaKartu = document.querySelectorAll(".kartu");
console.log(semuaKartu.length);

const kartuH3 = document.querySelectorAll(".kartu h3");
kartuH3.forEach(function(item) {
    item.textContent = item.textContent.toUpperCase();
});
 
semuaKartu.forEach(function (kartu) {
  kartu.style.border = "2px solid teal";
  kartu.style.padding = "10px";
  kartu.style.margin = "10px 0";
});
 
const semuaHarga = document.querySelectorAll(".harga");
semuaHarga.forEach((harga) => {
  harga.style.color = "green";
});
 
const semuaMenu = document.querySelectorAll(".menu li");
console.log(semuaMenu.length);
