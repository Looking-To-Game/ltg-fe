'use strict';

require('./scss/main.scss');

const path  = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');

require('@uirouter/angularjs');

const ltg = angular.module('ltg', ['ui.router']);

let context = require.context('./config/', true, /\.js$/);
context.keys.forEach(path => ltg.config(context(path)));
