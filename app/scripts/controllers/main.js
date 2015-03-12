'use strict';

/**
 * @ngdoc function
 * @name cashmereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cashmereApp
 */
angular.module('cashmereApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
