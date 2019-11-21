
// 1. Melakukan Looping Menggunakan While
// ======================================


let maju = 2

console.log("LOOPING PERTAMA")
while (maju <= 20) {
    console.log(`${maju} - I Love Coding`)
    maju = maju + 1;
}
console.log(" ")
console.log("LOOPING KEDUA")
if ( maju = 20) {
    while (maju >= 2) {
        console.log(`${maju} - I will become fullstack developer`)
        maju = maju - 1
    }
}


// ========================================================================================================================

// 2. Melakukan Looping Menggunakan For
// ====================================


let maju = 1
console.log("LOOPING KE SATU")

for (maju;maju <= 20;maju=maju+1) {
    console.log(`${maju} - I love coding`)
}

maju = 20
console.log(" ")
console.log("LOOPING KEDUA")
for (maju; maju >= 1; maju=maju-1) {
    console.log(`${maju} - I will become fullstack developer`)
}


// ========================================================================================================================


// 3. Angka Ganjil dan Genap
// =========================

let angka = 1

for (angka; angka <= 100; angka = angka+1) {
    if (angka%2 == 0) {
        console.log("Genap")
    } else {
        console.log("Ganjil")
    }
}

for (angka; angka <= 100; angka = angka + 2) {
    if ((angka % 3 == 0)) {
        console.log(`${angka} kelipatan 3`)
    } 
    else {
        console.log(angka)
    }
}

for (angka; angka <= 100; angka = angka + 5) {
    if (angka%6 == 0) {
        console.log(`${angka} kelipatan 6`)
    } else {
        console.log(angka)
    }
}

for (angka; angka <= 100; angka = angka + 9) {
    if (angka%10 === 0) {
        console.log(`${angka} kelipatan 10`)
    } else {
        console.log(angka)
    }
}   

// ========================================================================================================================