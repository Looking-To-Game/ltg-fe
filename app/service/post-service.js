'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService){
    $log.debug('#postService');

    let service = {};
    service.posts = [];

    service.createPost = (post) => {
      $log.debug('#service.createpost');

      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.post(`${__API_URL__}/api/post`, post, config);
        })
        .then(res => {
          $log.log('successful post');

          let post = res.data;
          service.posts.push(post);
          return post;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.readPosts = () => {
      $log.debug('#post service.readPosts');
      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.get(`${__API_URL__}/api/post`, config);
        })
        .then(res => {
          $log.log('#posts retrieved');
          service.posts = res.data;
          return service.posts;
        })
        .catch(err => {
          $log.error(err.message);
          $q.reject(err);
        });
    };

    service.updatePost = (postId, post) => {
      $log.debug('#postservice.updatePost');

      return authService.getToken()
        .then(token => {
          let url = `${__API_URL__}/api/post/${postId}`;
          let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.put(url, post, config);
        })
        .then(res => {
          service.posts.forEach((ele, index) => {
            if(ele._id === res.data._id) service.posts[index] = res.data;
          });
          return res.data;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.deletePost = (postId) => {
      $log.debug('#postservice.deletePost()');

      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.delete(`${__API_URL__}/api/post/${postId}`);
        })
        .then(() => {
          service.posts.forEach((ele, index) => {
            if(ele._id === postId) service.posts.splice(index, 1);
          });
        });
    };
    return service;
  },
];
