'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('AddCtrl', function ($scope, $state, teacher) {
  	var self = this;
  	self.init = function() {
  		$scope.teacher = {
  			name: '',
  			username: '',
  			email: '',
  			sex: true
  		};
  	};
  	self.submit = function() {
  		teacher.addTeacher($scope.teacher, function(data) {
  			if (data.data === null) {
  				alert('add fail')
  			} else {
  				$state.go('teacher', {}, {reload: true});
  			}
  		});
  	};
  	$scope.submit = self.submit;
  	self.init();
  });
