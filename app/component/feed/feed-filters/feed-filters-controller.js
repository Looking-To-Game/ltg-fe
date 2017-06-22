'use strict';

const Game = require('../../../model/game');

module.exports = {
  template: require('./feed-filters.html'),
  controllerAs: 'feedFilterCtrl',
  controller: [
    '$log',
    function($log){
      this.$onInit = () => {
        $log.debug('#feedFilterCtrl');

      };
    },
  ],
};
