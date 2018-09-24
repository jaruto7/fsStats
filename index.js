var fs = require( 'fs' );
var StatMode = require( 'stat-mode' );
var color = require( 'colors' );

fs.stat( './cat.jpg', function( err, stats ) {
    var statMode = new StatMode( stats );
    console.log( statMode.toString() );
});

// fs.readFile( './tekst.txt', 'utf-8', function( err, data ) {
//     console.log( data );
// });

// fs.appendFile( './tekst.txt', '\nTak wyglądały dane przed zapisem!', function( err ) {
//     if( err ) throw err; // Jeśli pojawi się błąd, wyrzuć wyjątek
//     // console.log( 'Zapisano!' );   
// });

// fs.readFile( './tekst.txt', 'utf-8', function( err, data) {
//     console.log( 'Dane przed zapisem!'.blue );
//     console.log( data );
//     fs.appendFile( './tekst.txt', '\nTak wyglądają po zapisie!', function( err ) {
//         if( err ) throw err;
//         console.log( 'Zapisano!'.blue );
//         fs.readFile( './tekst.txt', 'utf-8', function( err, data ) {
//             console.log( 'Dane po zapisie'.blue );
//             console.log( data );
//         })
//     });
// });
// Odczytaj informacje dotyczace plikow katalogu
fs.readdir( './', 'utf-8', function( err, files ) {
    // Powiadom o tym ze metoda readdir probuje odczytac zawartosc katalogu zanim ja zapisze
    console.log( 'Sciezka do katalogu przed zapisem.'.green );
    // Wyswietl zawartosc katalogu
    console.log( 'Output: ', files );
    // Zapisz informacje plikow katalogu do pliku tekstowego
    fs.writeFile( './dir.txt', files, function( err ) {
        // W przypadku gdy zapisanie sie nie powiedzie, wyswietl info o bledzie
        if( err ) throw err;
        // Wyswietl info ze operacja zapisu sie udala
        console.log( 'Zapisano tekst!'.yellow );
    });
});

