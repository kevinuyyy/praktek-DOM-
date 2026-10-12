const buah = document.getElementsByClassName("buah");
const h2Elements = document.getElementsByTagName("h2");
h2Elements[0].style.color = "teal";  // ubah warna h2 pertama
h2Elements[1].style.color = "teal"; // ubah warna h2 kedua
 
console.log(buah);          // lihat koleksinya
console.log(buah.length);   // jumlah elemen
console.log(buah[0]);       // elemen pertama
 
// mengubah elemen tertentu
buah[0].style.color = "red";
 
// mengubah semua elemen dengan perulangan
for (let i = 0; i < buah.length; i++) {
  buah[i].style.fontWeight = "bold";
  buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}
 
// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName("li");
 
console.log(semuaLi.length);
 
for (let i = 0; i < semuaLi.length; i++) {
  semuaLi[i].style.backgroundColor = "blue";
}
