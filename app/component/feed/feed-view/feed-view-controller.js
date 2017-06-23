'use strict';

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
          .then(post => {
            // console.log('post id', post._id);
            // console.log('post object', post);
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
