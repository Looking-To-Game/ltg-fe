'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {

      let url = $location.url();
      this.showSignup = url === '/posts';
    
    };
  }];
