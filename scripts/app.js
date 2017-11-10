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
/////////////////// DOM RENDER TEMPLATE ///////////////
Pieces.prototype.toHtml = function() {
    var $newPieces = $('article.template').clone();
    
    $newPieces.removeClass('template');
    $newPieces.find('h1').html(this.title);
    $newPieces.find('#description').html(this.description);
    $newPieces.find('h2').text(this.composer);
    $newPieces.find('a').attr('href', this.pieceUrl);
    $newPieces.find('img').attr('src', this.image);
    $newPieces.find('time').attr('datetime', this.recorded).text('about ' + parseInt((new Date() - new Date(this.recorded))/60/60/24/1000) + ' days ago');
    $newPieces.append('<hr>');
    return $newPieces;
  };

musicPiecesObjArr.sort(function(a,b) {
    return (new Date(b.recorded)) - (new Date(a.recorded));
  });

musicPiecesObjArr.forEach(function(musicObject) {
     piecesArr.push(new Pieces(musicObject));
});

piecesArr.forEach(function(article) {
    $('#articles').append(article.toHtml());
  });





  
///////////// HANDLEBARS //////////////////////
// Pieces.prototype.toHtml = function() {
//     var theTemplateScript = $("#music-template").html();
//     var theTemplate = Handlebars.compile(theTemplateScript);
//     return theTemplate(this);
// }

// musicPiecesObjArr.forEach(function(musicObject) {
//     piecesArr.push(new Pieces(musicObject));
// });

// $('#three').on('click', function(){
//     piecesArr.forEach(function(piecesArr) {
//         $('#music-box').append(piecesArr.toHtml());
//     });
// });


