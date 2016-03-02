'use strict';

angular.module('serverConvertApp', [
  'serverConvertApp.auth',
  'serverConvertApp.admin',
  'serverConvertApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial',
  'chart.js'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
