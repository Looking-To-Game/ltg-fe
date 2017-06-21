'use strict';

// require('./_view-post-controller.scss')

module.exports = {
  template: require('./view-post.html'),
  controllerAs: 'postViewCtrl',
  controller: ['$log', 'postService', function($log, postService){
    $log.debug('#view post controller');

    this.showEditPost = false;
  }],
  bindings: {
    post: '<',
  },
};
