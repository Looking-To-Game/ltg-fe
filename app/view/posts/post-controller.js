'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {

      let url = $location.url();
      this.viewPost = url === '/post#view' || url === '/post';
      this.createPost = url === '/post#create';
      this.editPost = url === '/post#edit';
    };
  }];
