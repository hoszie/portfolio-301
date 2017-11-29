'use strict';

///////////////////////// MUSIC CONSTRUCTOR FUNCTION ///////////////////////
var piecesArr = [];

function Pieces (musicPiecesObj) {
    this.title = musicPiecesObj.title;
    this.composer = musicPiecesObj.composer;
    this.description = musicPiecesObj.description;
    this.pieceUrl = musicPiecesObj.pieceUrl;
    this.image = musicPiecesObj.image;
    this.recorded = musicPiecesObj.recorded;
    
}

Pieces.all = [];

///////////// HANDLEBARS    quick suggestions delay //////////////////////

Pieces.prototype.toHtml = function() {
    var theTemplateScript = $("#music-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    this.daysAgo = parseInt((new Date() - new Date(this.recorded))/60/60/24/1000);
    this.performance = `The ${this.composer} was recorded roughly ${this.daysAgo} days ago.`
    return theTemplate(this);
}


Pieces.loadAll = function(musicPiecesObjArr) {
musicPiecesObjArr.sort(function(a,b) {
  return (new Date(b.recorded)) - (new Date(a.recorded));
});

musicPiecesObjArr.forEach(function(musicObject) {
    Pieces.all.push(new Pieces(musicObject));
});
};

    // piecesArr.forEach(function(piecesArr) {
    //     $('#music-articles').append(piecesArr.toHtml());
    // });

    

 ///////////////////////            JSON CALL           //////////////////////
 
 
Pieces.fetchAll = function() {
    if (localStorage.rawData) {
        Pieces.loadAll(JSON.parse(localStorage.getItem('rawData')));
        piecesView.initMusicPage();
    } else {
        $.getJSON('data/musicpieces.json', function(data) {
            console.log(data);
            localStorage.setItem('rawData', JSON.stringify(data));
            Pieces.loadAll(data);
        });
        piecesView.initMusicPage();
    }
}











/////////////////// DOM RENDER TEMPLATE ///////////////
// Pieces.prototype.toHtml = function() {
//     var $newPieces = $('article.template').clone();
    
//     $newPieces.removeClass('template');
//     $newPieces.find('h1').html(this.title);
//     $newPieces.find('.description').html(this.description);
//     $newPieces.find('h2').text(this.composer);
//     $newPieces.find('a.listen-on').attr('href', this.pieceUrl);
//     $newPieces.find('a.more').attr('data-content', this.description);
//     $newPieces.find('img').attr('src', this.image);
//     $newPieces.find('time').attr('datetime', this.recorded).text('Recorded about ' + parseInt((new Date() - new Date(this.recorded))/60/60/24/1000) + ' days ago');
//     $newPieces.append('<hr>');
//     return $newPieces;
//   };

// musicPiecesObjArr.sort(function(a,b) {
//     return (new Date(b.recorded)) - (new Date(a.recorded));
//   });

// musicPiecesObjArr.forEach(function(musicObject) {
//      piecesArr.push(new Pieces(musicObject));
// });

// piecesArr.forEach(function(piece) {
//   $('#music-articles').append(piece.toHtml());
// });
 

