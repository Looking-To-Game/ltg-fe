'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  '$window',
  function($q, $log, $http, $window, authService){
    $log.debug('#fe-authService');

    let service = {};
    let token = null;

    function setToken(token){
      $log.debug('#fe-authService.setToken()');

      if(!token) return $q.reject(new Error('No Token'));
      $window.localStorage.setItem('token', token);
      let tempToken = token;

      return $q.resolve(tempToken);
    }

    service.getToken = function(){
      $log.debug('#fe-authService.getToken()');

      if(token) return $q.resolve(token);
      token = $window.localStorage.getItem('token');
      if(token) return $q.resolve(token);

      return $q.reject(new Error('Token not found'));
    };

    service.signup = function(user){
      $log.debug('#fe-authService.signup()');

      let url = `${__API_URL__}/api/signup`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      return $http.post(url, user, config)
        .then(res => {
          $log.log('sucess', res.data);
          return setToken(res.data);
        })
        .catch(err => {
          $log.error('failure', err.message);

          return $q.reject(err);
        });
    };

    service.login = function(user){
      $log.debug('#fe-authService.login()');

      let url = `${__API_URL__}/api/login`;
      let base64 = $window.btoa(`${user.username}:${user.password}`);
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${base64}`,
        },
      };

      return $http.get(url, config)
        .then(res => {
          return setToken(res.data);
        })
        .catch(err => {
          $log.error('failure', err.message);
          return $q.reject(err);
        });
    };

    service.logout = function(){
      $log.debug('#fe-authService.logout()');

      $window.localStorage.removeItem('token');
      token = null;

      return $q.resolve();
    };
    return service;
  },
];
