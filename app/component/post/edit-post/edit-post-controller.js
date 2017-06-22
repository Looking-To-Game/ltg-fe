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
    'postService', function($log, $window, $location, postService){
      this.$onInit = () => {
        $log.debug('#editPostCtrl');

        this.showViewPost = function(){
          $location.url('/view#post');
          this.showEditPost = false;
        };

        this.showEditPost = true;
        this.editedPost = JSON.parse($window.localStorage.currentPost);
        console.log('THE EDITED POST MOTHA FUCKA', this.editedPost);

        this.updatePost = () => {
          postService.updatePost(this.post._id, this.post)
            .then(post => {
              $window.localStorage.removeItem('currentPost');
              $window.localStorage.setItem('currentPost', JSON.stringify(post.data));
              () => $log.log('Edit successful'), err => $log.error(err);
            }
          )
          .then(
            () => $location.url('/post')
          );
        };
      };
    }],
};
