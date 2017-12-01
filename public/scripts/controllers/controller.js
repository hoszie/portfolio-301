'use strict';

(function(module) {
    const tabController = {};
    

    tabController.home = function() {
        $ ('.nav-sections').hide();
        $('#home-article').show();
     };
     
     tabController.contact = function() {
         $ ('.nav-sections').hide();
         $('#contact-article').show();
      };
     
      tabController.music = function() {
         $ ('.nav-sections').hide();
         $('#music-articles').show();
      };
     
      tabController.about = function() {
         $ ('.nav-sections').hide();
         $('#about-article').show();
      };
      
      module.tabController = tabController;
    })(window);
    
    