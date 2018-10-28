'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseAddCtrl
 * @description
 * # CourseAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseAddCtrl', function ($scope, $state, klass, course) {
    var self = this;
    self.init = function() {
    	$scope.klasses = [];
    	$scope.course = {};
    	$scope.course.klasses = [];
    	klass.getAll(function(data) {
    		$scope.klasses = data;
    	});
    }();
    self.submit = function() {
    	course.add($scope.course, function() {
    		$state.go('course', {}, {reload: true});
    	});
    };
    $scope.submit = self.submit;
  });
