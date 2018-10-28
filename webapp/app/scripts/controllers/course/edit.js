'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseEditCtrl
 * @description
 * # CourseEditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
	.controller('CourseEditCtrl', function($scope, $state, course, klass, currency) {
		var self = this;
		self.init = function() {
			$scope.course = {};
			$scope.klasses = [];
			self.id = $state.params.id;
			course.get(self.id, function(data) {
				$scope.course = data;
				klass.getAll(function(data) {
					var tempKlasses = [];
					$scope.klasses = data;
					currency.expandArray($scope.course.klasses, data, tempKlasses);
					$scope.course.klasses = tempKlasses;
				});
			});
		}();
		self.submit = function() {
			course.update(self.id, $scope.course, function() {
				$state.go('course', {}, {
					reload: true
				});
			});
		};
		$scope.submit = self.submit;
	});