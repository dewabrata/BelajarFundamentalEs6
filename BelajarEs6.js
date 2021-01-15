
let namaVariable = 10;

{
namaVariable++;
console.log(namaVariable);
}


{

let namaVariable = 5;
namaVariable++;
console.log(namaVariable);

}

console.log(namaVariable);


let nama = "Dewa"
let namaLengkap = `Halo nama saya' adalah  "${nama}brata"` ;

console.log(namaLengkap);


//let buah = ["Mangga","Jeruk", "Pisang"];

function ambilBuah (){

    return ["Mangga","Jeruk", "Pisang","Rambutan"];
    
}

let [buahManis, buahAsam,,buahBerambut] = ambilBuah();



console.log(buahManis);
console.log(buahAsam);
console.log(buahBerambut);


let namaMuridKelas1 = ["Aqil", "Sidik","Hanif"];
let namaMuridKelas2 = ["Chelsea","Bambang", ...namaMuridKelas1];
let namaMuridKelas3 = ["Gisel", "Tono"];

namaMuridKelas3.push(...namaMuridKelas2);

let nilaiKelas =[10,9,10,8];

console.log(Math.max())

console.log(namaMuridKelas3);

function tambah(nilai,...nilai2){
let hasil = 0;
   for(let i = 0; i <nilai.length;i++){
      hasil = hasil + nilai[i];
   
   }
   
   for(let i = 0; i <nilai2.length;i++){
    hasil = hasil + nilai2[i];
 
 }
   
   return hasil;

}
let nilaix =[1,2,3,4];


const Manusia = {
      mata : "hitam",
      rambut :"panjang",
      gigi : "putih",
      nama : "hanif",
      kekasih : ["gisel","chelsea"],
      pekerjaan : {namaPerusahaan:"BukaToko",alamat:"Tebet Raya"},
      musuh :"bayu"

}

//let {mata,rambut,pekerjaan} = Manusia;
console.log(Manusia.nama);


 const  { musuh="Aqil"  } = Manusia;
 
 const {musuh:enemy, mata:eyes} = Manusia;
console.log(eyes);

let multiply = (a)=> (b)=>a*b;


let x = multiply(5);
let y = x(2);

console.log(y);






