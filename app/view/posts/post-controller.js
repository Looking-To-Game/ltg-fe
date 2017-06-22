'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$location',
  function($log, $rootScope, $location){
    this.$onInit = () => {

      let url = $location.url();
      this.viewPost = url === '/post#view' || url === '/post';
      this.createPost = url === '/post#create';
      this.editPost = url === '/post#edit';
    };
  }];
