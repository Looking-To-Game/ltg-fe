'use strict';

// require('./_view-post-controller.scss')

module.exports = {
  template: require('./view-post.html'),
  controllerAs: 'viewPostCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$window',
    '$location',
    'postService',
    function($log, $rootScope, $window, $location, postService){
      this.$onInit = () => {
        $log.debug('#view post controller');

        this.post = JSON.parse($window.localStorage.currentPost);

        // this.post = feedViewCtrl.currentPost;

        this.showEditPost = false;
      };
    }],
  bindings: {
    post: '<',
  },
};
