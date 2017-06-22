'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('#fe-userService');

    let service = {};

    service.getUser = function() {
      $log.debug('#getUser');

      return authService.getToken()
        .then(token => {
          let url = `${__API_URL__}/api/user`;
          let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          return $http.get(url, config);
        })
        .then(res => {
          let user = res.body;
          return user;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.updateUser = function(user) {
      $log.debug('#updateUser');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/user`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        return $http.put(url, user, config);
      })
      .then(res => {
        let user = res.body;
        return user;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };


    return service;
  },
];
