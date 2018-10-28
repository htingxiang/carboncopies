'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseViewCtrl
 * @description
 * # CourseViewCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseViewCtrl', function ($scope, $state, course) {
    var self = this;
    self.init = function() {
    	$scope.course = {};
    	self.id = $state.params.id;
    	course.get(self.id, function(data) {
    		$scope.course = data;
    	});
    }();
  });
