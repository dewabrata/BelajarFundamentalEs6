


//nilai merupakan fungsi hitungkali
//hitungkali akan mereturn fungsi test

/*
let nilai = function HitungKali (a,b){
    return function Test(){
      return "Akhirnya ketemu saya" + a + b
    }
 
 }
 */
 //arrow function

 let nilai = (a,b) =>(x)=> {
 
    return "Akhirnya ketemu saya" + a + b+x;
 
 
 }
    
 
 

//// end arrow function



//jalan1 sekarang karena mengexecute fungsi nilai dia menjadi fungsi Test 
let jalan1 = nilai(2,3);
 
 // karena jalan1 sama dengan fungsi Test maka dia akan mereturn String
console.log(jalan1());

//atau jika ingin mempersingkat tanpa harus membuat variable baru untuk 
//mendapatkan fungsi Test() dapat diketikan seperti ini
console.log(nilai(2,3)(5));



    
 
 