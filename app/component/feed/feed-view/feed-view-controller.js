'use strict';

module.exports = {
  template: require('./feed-view.html'),
  controllerAs: 'feedViewCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$location',
    'postService',
    function($log, $rootScope, $location, postService){
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
            this.post = post;
            this.currentPost = post;
            console.log('LOG SOME SHIT', post._id);
            console.log('LOG SOME SHIT', post);
          });
          // .then(
          //   () => $location.url('/#!/post#view')
          // );
        };

        $rootScope.$on('locationChangeSuccess', this.loadFeed);
        this.loadFeed();
      };
    },
  ],
};
