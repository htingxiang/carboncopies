'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherTeacherCtrl
 * @description
 * # TeacherTeacherCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('TeacherCtrl', function($scope, $state, $filter, teacher, page) {
    var self = this;
    self.init = function() {
      $scope.data = {};
      $scope.data.number = 0;
      $scope.data.size = page.getPageSize();
      $scope.teachers = [];
      self.reload();
    };
    self.reload = function() {
      var params = {
        page: $scope.data.number,
        size: $scope.data.size
      };
      page.getByPage('/teacher/getByPage', params, function(data) {
        $scope.data = data;
        $scope.teachers = $scope.data.content;
      });
    };
    self.reloadByNumber = function(number) {
      $scope.data.number = number;
      self.reload();
    };
    self.reloadBySize = function(size) {
        page.setPageSize(size);
        $scope.data.size = page.getPageSize();
        self.reload();
    };
    self.add = function() {
      $state.go('teacher.add', {}, {
        reload: true
      });
    };
    self.delete = function(id) {
      teacher.delete(id, function() {
        $state.go('teacher', {}, {
          reload: true
        });
      });
    };
    $scope.delete = self.delete;
    $scope.add = self.add;
    $scope.reloadByNumber = self.reloadByNumber;
    $scope.reloadBySize = self.reloadBySize;
    self.init();
  });