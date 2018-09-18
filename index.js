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

fs.readdir( './dir.txt', 'utf-8', function( err, files ) {
    console.log( 'Sciezka do katalogu przed zapisem.'.green );
    console.log('Output: ', files);
    fs.writeFile( './dir.txt', 'e:/projects/fsStats/index.js', function( err ) {
        if( err ) throw err;
        console.log( 'Zapisano tekst!'.yellow );
    });
});

