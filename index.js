//document.getElementById("informasi").style.visibility="hidden";
 /* document.querySelector('.judul#Loser').style.color="magenta"; 
  
  var text = "Halo Dewabrata";
  var angka1 = 5;
  var angka2 = 3;
  var angka3 = "4";
  var lebihBesar = true;
  var modulus = 102 % 2;
  
  var jumlah = String(angka1) + String(angka2) + parseInt(angka3) + lebihBesar;
  
  console.log(jumlah); //534  <> 12*/
  
  
  function kalkulasi (){
   
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);
    
    document.getElementById("hasil").value = tambah(a,b);
   
  
  }
  
  function kalkulasi2(){
    sayHello();
    document.getElementById("hasil").value = parseInt(document.getElementById("angka1").value) + parseInt(document.getElementById("angka2").value);
  }
  
  
 function tambah ( a,  b){
 
    return  a+b;
      
 
 }
 
 function kurang (a,b){
   var c = a-b;
   return c;
   //return a-b
 
 }
 
 function sayHello(){
  return "Hello apakabar");
 }
 

 
 
