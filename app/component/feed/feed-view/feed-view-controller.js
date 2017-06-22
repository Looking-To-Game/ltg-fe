'use strict';

module.exports = {
  template: require('./feed-view.html'),
  controllerAs: 'feedViewCtrl',
  controller: [
    '$log',
    '$rootScope',
    'postService',
    function($log, $rootScope, postService){
      this.$onInit = () => {
        $log.debug('#feedViewCtrl');

        this.feed = [];

        this.loadFeed = function(){
          return postService.readPosts()
          .then(posts => {
            this.feed = posts;
            console.log(this.feed);
          });
        };

        // this.viewPost = function(){
        //   return postService.
        // }

        $rootScope.$on('locationChangeSuccess', this.loadFeed);
        this.loadFeed();
      };
    },
  ],
};
