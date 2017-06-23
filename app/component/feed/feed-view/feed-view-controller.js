'use strict';

require('./_feed-view.scss');

module.exports = {
  template: require('./feed-view.html'),
  controllerAs: 'feedViewCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$window',
    '$location',
    'postService',
    function($log, $rootScope, $window, $location, postService){
      this.$onInit = () => {
        $log.debug('#feedViewCtrl');

        this.feed = [];
        this.currentPost = {};



        this.loadFeed = function(){
          return postService.readPosts()
          .then(posts => {
            this.feed = posts;
            console.log(this.feed);
          });
        };


        this.viewPost = function(postId){
          return postService.viewPost(postId)
          .then(() => {
            $window.localStorage.removeItem('currentPost');
            $window.localStorage.setItem('currentPost', JSON.stringify(postService.post));
          })
          .then(
            () => $location.url('/post')
          );
        };

        $rootScope.$on('locationChangeSuccess', this.loadFeed);
        this.loadFeed();
      };
    },
  ],
};
