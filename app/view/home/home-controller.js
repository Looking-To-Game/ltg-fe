'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'feedFilterService',
  function($log, $rootScope, $window, $location, authService, feedFilterService){
    this.$onInit = () => {
      $log.debug('#HomeController()');

      if(!$window.localStorage.token){
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        );
      }

      // this.post = 'whatever has been selected from a dropdown'

      this.title = 'Looking to Game?';
      this.feed = [];
      this.gameFilters = feedFilterService.supportedGames;
      this.supportedPlatforms = feedFilterService.supportedPlatforms;


      // this.fetchFeed = () => {
      //   return feedFilterService.fetchFeed()
      //   .then(posts => {
      //     this.feed = posts;
      //   })
      //   .catch(err => $log.error(err));
      // };

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
