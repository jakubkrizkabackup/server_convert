'use strict';

angular.module('serverConvertApp.auth', [
  'serverConvertApp.constants',
  'serverConvertApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
