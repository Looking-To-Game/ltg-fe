'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {

      let url = $location.url();
      this.showCreatePost = url === '/post#create';
      this.showPost = url === '/post#view';
      this.editPost = url === '/post#edit';
    };
  }];
