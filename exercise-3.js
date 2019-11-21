let nama = "Anton" 
let peran = "Penyihir"

var greeting = "Selamat datang di Dunia Proxytia"

if (peran !== " ") {
    if (peran === "Ksatria") {
        console.log(greeting, nama)
        console.log(`Hallo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if (peran === "Tabib") {
        console.log(greeting, nama)
        console.log(`Hallo ${peran} ${nama}, kamu akan membantu temanmu yang terluka!`)
    } else if (peran === "Penyihir") {
        console.log(greeting, nama)
        console.log(`Hallo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    } 
} else if (peran === " " && nama !== " ") {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} 
else {
    console.log("Nama harus diisi!")
}