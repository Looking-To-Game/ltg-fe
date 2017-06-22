'use strict';

require('./scss/main.scss');

const path  = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');

require('@uirouter/angularjs');

const ltg = angular.module('ltg', ['ui.router']);

let context = require.context('./config/', true, /\.js$/);

context.keys().forEach(path => ltg.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => ltg.controller(pascalcase(path.basename(key, '.js')), context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => ltg.service(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => ltg.component(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach(key => ltg.filter(camelcase(path.basename(key, '.js')), context(key)));
