'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  // 'feedService',
  function($log, $rootScope, $window, $location, authService){
    this.$onInit = () => {
      $log.debug('#HomeController()');

      if(!$window.localStorage.token){
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        );
      }

      this.title = 'Looking to Game?';
      this.feed = [];

      this.fetchFeed = () => {
        return feedService.fetchFeed()
        .then(posts => {
          this.feed = posts;
        })
        .catch(err => $log.error(err));
      };

      this.logout = function(){
        $log.log('#navbarCtrl.logout');
        authService.logout()
        .then(
          () => $location.url('/')
        );
      };

      $rootScope.$on('locationChangeSuccess', this.fetchFeed);
      $rootScope.$on('newPostCreated', this.fetchFeed);
      return this.fetchFeed;

    };
  }];
