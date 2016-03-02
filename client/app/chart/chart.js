'use strict';

angular.module('serverConvertApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/chart', {
        templateUrl: 'app/chart/chart.html',
        controller: 'ChartCtrl'
      });
  });
