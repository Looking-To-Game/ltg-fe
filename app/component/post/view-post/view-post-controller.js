'use strict';

require('./_view-post.scss');

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
        this.showViewPost = true;

      };
    }],
  bindings: {
    post: '<',
  },
};
