// menangkap pilihan player
var p = prompt('Silahkan pilih : gajah, semut, orang');

// menangkap pilihan komputer
// bilangan random

var comp = Math.random();
if(comp < 0.34){
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
} else{
    comp = 'semut';
}
 console.log(comp);


 var hasil='';
// menentukan rules
if(p == comp){
    hasil = 'SERI!';
}else if( p == 'gajah'){
    if(comp == orang){
        hasil = 'Menang!';
    }
    else{
        hasil = 'Kalah!';
    }
} else if( p == 'orang'){
    if(comp == 'semut'){
        hasil = 'Menang!';
    } else{
        hasil = 'Kalah!';
    }
}else if( p == 'semut'){
   hasil = 'Kalah!';
}
// tampilkan hasilnya
alert(hasil);