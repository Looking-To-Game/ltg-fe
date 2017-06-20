'use strict';

module.exports = ['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider){
  $urlServiceProvider.rules.when('', '/join#signup');
  $urlServiceProvider.rules.when('/', '/join#login');
  $urlServiceProvider.rules.when('/signup', '/join#signup');
  $urlServiceProvider.rules.when('/login', '/join#login');
  $urlServiceProvider.rules.when('/editProfile', '/join#editProfile');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl',
    },
    {
      name: 'profile',
      url: '/profile',
      template: require('../view/profiles/profile.html'),
      controller: 'ProfileController',
      controllerAs: 'profileCtrl',
    },
    {
      name: 'post',
      url: '/post',
      template: require('../view/posts/post.html'),
      controller: 'PostController',
      controllerAs: 'postCtrl',
    },
  ];
  routes.forEach($stateProvider.state);
}];
