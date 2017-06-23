'use strict';

module.exports = {
  template: require('./edit-post.html'),
  controllerAs: 'editPostCtrl',
  bindings: {
    post: '<',
  },
  controller: [
    '$log',
    '$window',
    '$location',
    'postService',
    function($log, $window, $location, postService){
      this.$onInit = () => {
        $log.debug('#editPostCtrl');

        this.showViewPost = function(){
          $location.url('/view#post');
          this.showEditPost = false;
        };

        this.showEditPost = true;

        this.editedPost = JSON.parse($window.localStorage.currentPost);

        this.updatePost = () => {
          return postService.updatePost(this.editedPost._id, this.editedPost)
            .then(post => {
              this.editedPost = $window.localStorage.currentPost = JSON.stringify(postService.post);
              () => $log.log('Edit successful'), err => $log.error(err);
            }
          )
          .then(
            () => {
              $location.url('/post');
            }
          );
        };

        this.deletePost = () => {
          return postService.deletePost(this.editedPost._id)
          .then(() => {
            $window.localStorage.currentPost = null;
            console.log('delete post click');
          })
          .then(
            () => $location.url('/home'),
            () => $location.url('/post#edit')
          );
        };
      };
    }],
};
