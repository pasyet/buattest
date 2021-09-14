var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroprasi = 8;

while ( noAngkot <= angkotBeroprasi){
    console.log('Angkot No.' + noAngkot + ' ' + 'beroperasi dengan baik.');
noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jumlahAngkot; noAngkot++){
    console.log('Angkot No.' + noAngkot + ' ' + 'sedang tidak beroperasi.');
}

