'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseIndexCtrl
 * @description
 * # CourseIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseIndexCtrl', function ($scope, $state, course) {
    var self = this;
    self.init = function() {
    	$scope.courses = [];
    	course.getAll(function(data) {
    		$scope.courses = data;
    	});
    }();
    self.add = function() {
    	$state.go('course.add', {}, {reload: true});
    };
    self.delete = function(id) {
    	course.delete(id, function() {
    		$state.go('course', {}, {reload: true});
    	});
    };
    $scope.add = self.add;
    $scope.delete = self.delete;
  });
