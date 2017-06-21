'use strict';

module.exports = {
  template: require('./view-profile.html'),
  bindings: {
    user: '<',
  },
  controllerAs: 'userViewCtrl',
  controller: ['$log', 'userService', function($log, userService){
    $log.debug('#userViewCtrl');

    this.showEditUser = false;
  }],
};
