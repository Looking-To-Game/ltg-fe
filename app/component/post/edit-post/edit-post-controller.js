'use strict';

module.exports = {
  template: require('./edit-post.html'),
  controllerAs: 'editPostCtrl',
  bindings: {
    post: '<',
  },
  controller: ['$log', 'postService', function($log, postService){
    this.$onInit = () => {
      $log.debug('#editPostCtrl');

      this.showEditPost = true;

      this.updatePost = () => {
        postService.updatePost(this.post._id, this.post)
          .then(() => $log.log('Edit successful'), err => $log.error(err));
      };
    };
  }],
};
