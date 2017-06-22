'use strict';

const GameModel = module.exports = function(title, pc = false, xbox = false, ps4 = false){
  this.title = title;
  this.pc = pc; //expect these to be booleans
  this.xbox = xbox; //expect these to be booleans
  this.ps4 = ps4;  //expect these to be booleans
};
