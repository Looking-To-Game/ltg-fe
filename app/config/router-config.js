'use strict';

module.exports = ['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider){
  $urlServiceProvider.rules.when('', '/join#signup');
  $urlServiceProvider.rules.when('/', '/join#login');
  $urlServiceProvider.rules.when('/signup', '/join#signup');
  $urlServiceProvider.rules.when('/login', '/join#login');

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
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    },
    {

    },
  ];
}];
