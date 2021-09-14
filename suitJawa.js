var tanya = true;
while (tanya){
    var p = prompt('pilih : gajah, semut, orang');

    var comp = Math.random();

    if (comp < 0.34){
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else {
        comp = 'semut';
    }

    var hasil = ' ';

    if( p == comp){
        hasil ='SERI';
    }else if ( p == 'gajah'){
        hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
    }else if ( p == 'orang'){
        hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
    }else if ( p == 'semut'){
        hasil = (comp == 'manusia') ? 'Menang' : 'Kalah';
    }else {
        hasil = 'Masukkan pilihan yang salah!!'
    }

    alert('Kamu memilih' +' '+ p + ' '+'dan Komputer memilih:' +' '+ comp+' '+ 
    '\nMaka hasilnya : Kamu ' +hasil);

    tanya = confirm('lagi?');

}
alert('thank u for play');