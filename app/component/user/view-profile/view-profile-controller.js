'use strict';

require('./_view-profile.scss');

module.exports = {
  template: require('./view-profile.html'),
  bindings: {
    user: '<',
  },
  controllerAs: 'userViewCtrl',
  controller: ['$log', 'userService', function($log, userService){
    this.$onInit = () => {
      $log.debug('#userViewCtrl');

      this.showEditUser = false;
      this.user = {};

      this.getUser = function() {
        return userService.getUser()
        .then(user => this.user = user);
      };

      this.getUser();
    };
  }],
};
