'use strict';

//////////////////////// Array of music objects ///////////////////////

var musicPiecesObjArr = [
    {
        title: 'Humoreske, op. 20',
        composer: 'Robert Schumann',
        description: 'Some shit about Schumann.',
        pieceUrl: 'https://soundcloud.com/user-398697111/sets/humoreske-op20',
        image: 'images/schumann.jpg'
    },

    {
        title: 'The Pleasure Dome of Kubali Khan',
        composer: 'Charles Thomlinson Griffes',
        description: '<p>Some shit about Griffes.</p>',
        pieceUrl: 'https://soundcloud.com/user-398697111/the-pleasure-dome-of-kublai-khan',
        image: 'images/griffes.jpg'
    },

    {
        title: 'Quintet for Piano & Winds in E<sup>b</sup> major, K.452',
        composer: 'W.A. Mozart',
        description: '<p>Some shit about Mozart.</p>',
        pieceUrl: 'https://soundcloud.com/user-398697111/sets/quintet-for-piano-winds-in-eb-major-k452',
        image: 'images/mozart.jpeg'
    }

];

///////////////////////// MUSIC CONSTRUCTOR FUNCTION AND DOM RENDER ///////////////////////
var piecesArr = [];

function Pieces (musicPiecesObj) {
    this.title = musicPiecesObj.title;
    this.composer = musicPiecesObj.composer;
    this.description = musicPiecesObj.description;
    this.pieceUrl = musicPiecesObj.pieceUrl;
    this.image = musicPiecesObj.image;
}
 
// Pieces.prototype.toHtml = function() {
//     var theTemplateScript = $("#music-template").html();
//     var theTemplate = Handlebars.compile(theTemplateScript);
//     return theTemplate(this);
// }

// musicPiecesObjArr.forEach(function(musicObject) {
//     piecesArr.push(new Pieces(musicObject));
// });

// piecesArr.forEach(function(piecesArr) {
//     $('#music-box').append(piecesArr.toHtml());
// });

