'use strict';

module.exports = {
  template: require('./create-post.html'),
  controllerAs: 'createPostCtrl',
  controller: [
    '$log',
    '$location',
    'postService',
    function($log, $location, postService){
      this.$onInit = () => {
        $log.debug('#create post controller');
        this.post = {};


        this.createPost = () => {
          return postService.createPost(this.post)
            .then(() => {
              let res = this.post;
              this.post.title = null;
              this.post.description = null;
              // this.post.host = null;
              this.post.game = null;
              this.post.platform = null;
              this.post.skillLevel = null;
              this.post.dedication = null;
              this.post.groupSize = null;
              this.post.startTime = null;
              this.post.endTime = null;
              return res;
            })
            .then(
              () => $location.url('/home'),
              () => $location.url('/post#create')
            )
            .catch(err => $log.error(err));
        };
      };
    }],
};
