'use strict';

module.exports = [
  '$log',
  '$location',
  'authService',
  function($log, $location /*, authservice*/){
    this.$onInit = () => {
      this.title = 'Please sign in!';

      let url = $location.url();
      this.showSignup = url === '/join#signup' || url === '/join';
    };
  }];
