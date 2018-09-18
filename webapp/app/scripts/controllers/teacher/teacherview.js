'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherTeacherviewctrlCtrl
 * @description
 * # TeacherTeacherviewctrlCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('TeacherViewCtrl', function ($scope, $stateParams, teacher) {
    var self = this;
    self.init = function() {
    	teacher.get($stateParams.id, function(data) {
    		$scope.teacher = data;
    	});
    };
    self.init();
  });
