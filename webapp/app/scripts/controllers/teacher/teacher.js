'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherTeacherCtrl
 * @description
 * # TeacherTeacherCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('TeacherCtrl', function ($scope, $state, $filter, teacher) {
  	var self = this;
  	self.init = function() {
  		teacher.getAllTeacher(function(data) {
  			$scope.teachers = $filter('orderBy')(data, 'label.id', true);
  		});
  	};
  	self.add = function() {
  		$state.go('teacher.add', {}, {reload: true});
  	};
  	self.delete = function(id) {
  		teacher.delete(id, function() {
  			$state.go('teacher', {}, {reload: true});
  		});
  	};
  	$scope.delete = self.delete;
  	$scope.add = self.add;
  	self.init();
  });
