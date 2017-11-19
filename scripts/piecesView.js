'use strict';

var piecesView = {};

piecesView.handleNav = function() {
    $('#nav-bar').on('click', '.nb-item', function() {
        var selectedTab = '#' + $(this).attr('data-content');
        $('.nav-sections').hide();
        $(selectedTab).show();
      });
      $('#nav-bar .nb-item:first').click();
    };

piecesView.truncate = function () {
    $('.description, .listen-on, time').hide();
    $('a.more').on('click', function(e) {
        e.preventDefault();
        if ($(this).text() === 'More →') {
            $(this).parent().find('.description, .listen-on, time').fadeIn();
        } 
    });
};



    $(document).ready(function(){
    piecesView.handleNav();
    piecesView.truncate();
})