'use strict';

module.exports - {
  template: require('./edit-user.html'),
  bindings: {
    user: '<',
  },
  controllerAs: 'editProfileCtrl',
  controller: ['$log', 'userService', function($log, userService) {
    this.$onInit = () => {
      $log.debug('#editProfileCtrl');

      this.user = {};

      this.getUser = function() {
        return userService.getUser()
        .then(user => this.user = user);
      };

      this.updateUser = function() {
        return userService.updateUser(this.newInfo)
        .then(user => this.user = user);
      };
    };
  }],
};
