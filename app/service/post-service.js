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
    service.post = {};

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
          return $http.post(`${__API_URL__}/api/create`, post, config);
        })
        .then(res => {
          $log.log('successful post');

          let post = res.data;
          service.posts.push(post);
          console.log(post);
          return post;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.readPosts = () => {
      $log.debug('#post service.readPosts');
      return $http.get(`${__API_URL__}/api/feed`)
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

    service.viewPost = (groupId) => {
      $log.debug('#post service.readPosts');
      return $http.get(`${__API_URL__}/api/group/${groupId}`)
        .then(res => {
          $log.log('#single post retrieved');
          service.post = res.data;
          return service.post;
        })
        .catch(err => {
          $log.error(err.message);
          $q.reject(err);
        });
    };

    service.updatePost = (groupId, post) => {
      $log.debug('#postservice.updatePost');
      return authService.getToken()
        .then(token => {
          let url = `${__API_URL__}/api/group/${groupId}/update`;
          let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          console.log(groupId, post);
          return $http.put(url, post, config);
        })
        .then(res => {
          console.log('this is what we\'re getting back:', res.data);
          service.posts.forEach((ele, index) => {
            if(ele._id === res.data._id) service.posts[index] = res.data;
          });
          service.post = res.data;// NOTE: just changed
          console.log('this is the service.post:', service.post);
          return res.data;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.deletePost = (groupId) => {
      $log.debug('#postservice.deletePost()');

      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.delete(`${__API_URL__}/api/group/${groupId}/delete`, config);
        })
        .then(() => {
          service.posts.forEach((ele, index) => {
            if(ele._id === groupId) service.posts.splice(index, 1);
          });
        });
    };
    return service;
  },
];
