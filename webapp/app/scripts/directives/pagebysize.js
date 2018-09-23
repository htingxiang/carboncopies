'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:pageBySize
 * @description
 * # pageBySize
 */
angular.module('webappApp')
  .directive('pageBySize', function () {
    return {
      templateUrl: 'views/directive/pagebysize.html',
      restrict: 'E',
      scope: {
      	size: '=',
      	reloadBySize: '='
      },
      link: function postLink(scope) {
      	scope.sizes = [3,5,10];
      	scope.$watch('size', function(value) {
      		scope.reloadBySize(value);
      	});
      }
    };
  });
