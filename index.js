// Starting
alert('Selamat datang di game tebak angka \nsilahkan pilih angka diantara 1-10 \nanda memiliki 3 kesempatan menebak');

let ask = true;
while (ask) {
// Chance to guessing & number pick
let chance = 3;

 // Loop
 let compt = Math.floor(Math.random() * 10 + 1);
while (chance > 0) {
let player = parseInt(prompt('Masukkan angka'));
console.log(compt)

if (player === compt) {
    alert('Selamat tebakan anda benar \nAngka yang dicari adalah ' + compt);
    break;
    } else if (chance === 1) {
    alert('Kesempatan telah habis');
    break;
    } else if (player < compt) {
    alert('Tebakan anda terlalu Rendah');
    } else if (player > compt) {
    alert('Tebakan anda terlalu Tinggi');
    }

    chance--;
}

ask = confirm('Ingin bermain lagi?');
}
