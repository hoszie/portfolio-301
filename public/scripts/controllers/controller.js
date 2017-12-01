'use strict';

(function(module) {
    const aboutController = {};
    
    aboutController.index = function() {
    var selectedTab = '#' + $(this).attr('data-content');           /////// ??
    $('.nav-sections').hide();
    $(selectedTab).show();
    };
    module.aboutController = aboutController;
})(window);