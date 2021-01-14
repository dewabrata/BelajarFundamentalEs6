

var buah = ["Mangga", "Pisang", "Nangka", "Semangka", "Durian"];
var sayuran = ["Timun", "Wortel", "Tomat"];
var nilai_ujian = [1, 2, 3, 4];

console.log(buah);
console.log(sayuran);
console.log(buah[1]);
console.log(sayuran[2]);


for (var i = 0; i < 5; i++) {
    console.log(i);

}



var x = 6;
while (x < 5) {
    x++;
    console.log("nilai x=" + x);

}

var y = 6;
do {
    y++;
    console.log("nilai y=" + y);
} while (y < 5);

//mulai disini
createListBuah();
createListSayur();

function createListBuah() {
    var lstBuah = "";
    for (var z = 0; z < buah.length; z++) {


        lstBuah = lstBuah + "<li>" + buah[z] + "</li>";


    }
    console.log(lstBuah);
    document.getElementById("buah").innerHTML = lstBuah;
}

function createListSayur() {
    var lstSayuran = "";
    var counter = 0;
    while (counter < sayuran.length) {

        lstSayuran += "<li>" + sayuran[counter] + "</li>";
        counter++;

    }

    document.getElementById("sayuran").innerHTML = lstSayuran;
}




function tambahBuah(namaBuah) {


    if (buah.length >= 10) {
        alert("Maaf jumlah buah tidak dapat lebih daripada 10")
    } else {

       
        if (cariBuahSama(namaBuah)) {
            alert("Maaf  buah Sudah diinput");
        } else {
            buah.push(namaBuah);
            createListBuah();
        }
    }

}

 
function cariBuahSama(namaBuah) {
 
    for (var i = 0; i < buah.length; i++) {
 
        if (buah[i].toLowerCase() === namaBuah.toLowerCase()) {
            return true;
        }

    }
    return false;

}

function tambahSayur(namaSayur) {


    if (sayuran.length >= 10) {
        alert("Maaf jumlah sayur tidak dapat lebih daripada 10")
    } else {

       
        if (cariSayurSama(namaSayur)) {
            alert("Maaf  sayur Sudah diinput");
        } else {
            sayuran.push(namaSayur);
            createListSayur();
        }
    }

}

 
function cariSayurSama(namaSayur) {
 
    for (var i = 0; i < sayuran.length; i++) {
 
        if (sayuran[i].toLowerCase() === namaSayur.toLowerCase()) {
            return true;
        }

    }
    return false;

}


 function tambahItem(namaItem,jenisItem){
    switch(jenisItem){
    
    case "buah" :  
      tambahBuah(namaItem);
      break;
    case "sayur" : 
      tambahSayur(namaItem);
      
      break;
    
    
    }
 }


/* var globalBuah ="";
 function cekIsiBuah(namaBuah) {
     globalBuah = namaBuah;
     var jmlBuahSama = buah.find(cekBuah);
     return jmlBuahSama;

 }
 
 function cekBuah (a){
   return a=== globalBuah;
 
 }

*/




