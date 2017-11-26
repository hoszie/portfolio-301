'use strict';

///////////////////////// MUSIC CONSTRUCTOR FUNCTION ///////////////////////
var piecesArr = [];

function Pieces(musicPiecesObj) {
    this.title = musicPiecesObj.title;
    this.composer = musicPiecesObj.composer;
    this.description = musicPiecesObj.description;
    this.pieceUrl = musicPiecesObj.pieceUrl;
    this.image = musicPiecesObj.image;
    this.recorded = musicPiecesObj.recorded;

}

///////////// HANDLEBARS    quick suggestions delay //////////////////////

Pieces.prototype.toHtml = function () {
    var theTemplateScript = $("#music-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    this.daysAgo = parseInt((new Date() - new Date(this.recorded)) / 60 / 60 / 24 / 1000);
    this.performance = `The ${this.composer} was recorded roughly ${this.daysAgo} days ago.`
    return theTemplate(this);
}

/**
 * Get music pieces from .json file
 */
$.getJSON('/data/musicpieces.json')
    .then(function (jsonData) {
        jsonData.sort(function (a, b) {
            return (new Date(b.recorded)) - (new Date(a.recorded));
        });

        jsonData.forEach(function (musicObject) {
            piecesArr.push(new Pieces(musicObject));
        });

        // $('[data-content="music-articles"]').on('click', function(){
        piecesArr.forEach(function (piecesArr) {
            $('#music-articles').append(piecesArr.toHtml());
        });
        piecesView.truncate();
        // 
    })
    .catch(function (xhr, message, status) {
        alert('message');
    })




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


