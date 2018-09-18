'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherTeachereditCtrl
 * @description
 * # TeacherTeachereditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('TeacherEditCtrl', function ($scope, $state, $stateParams, teacher) {
  	var self = this;
  	self.init = function() {
  		teacher.get($stateParams.id, function(data) {
  			$scope.teacher = data;
  		});
  	};
  	self.update = function() {
  		teacher.update($scope.teacher.id, $scope.teacher, function(data) {
  			$state.go('teacher', {}, {reload: true});
  		});
  	};
  	$scope.submit = self.update;
  	self.init();
  });
