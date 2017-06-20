'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {
      this.title = 'Profile';

      let url = $location.url();
      this.editProfile = url === '/join#editProfile';
    };
  }];
