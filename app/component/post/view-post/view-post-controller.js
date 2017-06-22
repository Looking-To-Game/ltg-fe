'use strict';

// require('./_view-post-controller.scss')

module.exports = {
  template: require('./view-post.html'),
  controllerAs: 'viewPostCtrl',
  controller: [
    '$log',
    'postService',
    // 'feedViewCtrl',
    function($log, postService){
      this.$onInit = () => {
        $log.debug('#view post controller');

        this.post = {};

        this.showEditPost = false;
        // this.showCreatePost = false;
        //
        // this.viewPost = function(){
        //   return postService.viewPost()
        //   .then(post => {
        //     this.post = post;
        //     console.log(this.post);
        //   });
        // };

        // $rootScope.$on('locationChangeSuccess', this.viewPost);
        // feedViewCtrl.viewPost(feedViewCtrl.currentPost);
      };
    }],
  bindings: {
    post: '<',
  },
};
