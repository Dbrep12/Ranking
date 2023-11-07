// let nilai = prompt("masukkan nilai :")
// let nilaiText;
// if(nilai >= 1){
//     nilaiText = 'positif';
// }else if(nilai == 0){
//     nilaiText = 'netral';
// }else{
//     nilaiText = 'negatif';
// }

// console.log(nilaiText)



// let usia = prompt("masukkan usia :")

// let usiaText;
// if(usia < 17){
//     usiaText = "usia anda belum bisa memiliki sim"
// }else if(usia < 0){
//     usiaText = "usia anda tidak bisa memiliki sim"
// }
// else{
//     usiaText = "usia anda bisa memiliki sim"
// }
// console.log(usiaText)



//  let nilai = prompt("masukkan nilai")
//  let nilaiText;

// if(nilai > 90 && nilai <=100){
//     nilaiText = "grade A";
// }else if(nilai <= 90 && nilai > 75){
//     nilaiText = "grade B";
// }else if(nilai <= 75 && nilai > 60){
//     nilaiText = "grade c";
// }else if(nilai <= 60 && nilai > 0){
//     nilaiText = "grade D"
// }
// else{
//     nilaiText = "rank tidak di temukan";
// }
// console.log(nilaiText)



// let sumbuX = prompt("masukkan sumbu x")
// let sumbuY = prompt("masukkan sumbu y")

// let txt;
// if (sumbuX == 0 && sumbuY == 0){
//     txt = "player di tengah"
// }else if (sumbuX > 0 && sumbuY > 0){
//     txt = "player di kanan atas" 
// }else if  (sumbuX < 0 && sumbuY < 0){
//     txt = "player di kiri bawah"
// }else if  (sumbuX > 0 && sumbuY < 0){
//     txt = "player di kanan bawah"
// }else if  (sumbuX < 0 && sumbuY > 0){
//     txt = "player di kiri atas"
// }
// console.log(txt)

//input username

// let username = "daniel";
// let pw = "12";

// let loginUsername = prompt("isi nama : ");


// alert("akun dibuat dengan username : ${username}");

// let loginpw = prompt("isi password : ");

// if(loginUsername == username){
//     let loginpw = prompt("isi password : ");
//     if(loginpw == pw){
//         alert("login berhasil");
//     }else{
//         alert("password salah");
//         window.location.reload();
//     }
// }else{
//     alert("username salah");
//         window.location.reload();
// }

// switch case
// let agenMotor = ["Supra", "Aerox", "Smash"];
// let num = Math.floor(Math.random() *3 + 1); //1-3
// console.log(num)

// switch(num){
//     case 1:
//         console.log("ambil agen ${agenMotor[0]}");
//         break;
//     case 2:
//         console.log("ambil agen ${agenMotor[1]}");
//         break;
//     case 3:
//         console.log("ambil agen ${agenMotor[2]}");
//         break;
//         default:
//             console.log("tidak ada agen lain");
// }

// let bot = Math.floor(Math.random()* 2 + 1);
// let user = prompt("tebak");
// let sisiKoin = ["gunting ", "kertas "];

// document.write(user)
// document.write(sisiKoin[bot - 1])

// if(user == sisiKoin[bot - 1]){
//     document.write("<p>sama</p>")
// }else{
//     document.write("<p>tidak sama</p>")
// }

// let bot =  Math.floor(Math.random()* 3);
// let user = prompt("tabak")
// let suit = ["batu", "kertas", "gunting"];
// if (user == "batu" && suit[bot] == ){

// }


let nilai = prompt("Masukkan Nilai Anda :")
let teksNilai;

if(nilai >=90 && nilai <=100){
    teksNilai = confirm("Ranking A")
}else if(nilai >=80 && nilai <90){
    teksNilai = confirm("Ranking B")
}else if(nilai >=70 && nilai <80){
    teksNilai = confirm("Ranking C")
}else if(nilai >=60 && nilai <70){
    teksNilai = confirm("Ranking D")
}else if(nilai >=60 && nilai <70){
    teksNilai = confirm("Ranking D")
}else if (nilai >=1 && nilai <50){
    teksNilai = confirm("Ranking E")
}else{
    teksNilai = confirm("Tidak Terdaftar")
}

