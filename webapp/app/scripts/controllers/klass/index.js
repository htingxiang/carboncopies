'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('KlassIndexCtrl', function ($scope, $state, klass, page) {
    var self = this;
    self.init = function() {
    	$scope.klasses = {};
        $scope.data = {};
        $scope.data.number = klass.getPageNumber();
        $scope.data.size = page.getPageSize();
        self.reload();
    };
    self.reload = function() {
        var params = {page: $scope.data.number, size: $scope.data.size};
        page.getByPage('/klass/getByPage', params, function(data) {
            $scope.data = data;
            $scope.klasses = $scope.data.content;
        });
    };
    self.add = function() {
    	$state.go('klass.add', {}, {reload: true});
    };
    self.delete = function(id) {
        klass.delete(id, function() {
            $state.go('klass', {}, {reload: true});
        });
    };
    self.reloadByNumber = function(number) {
        klass.setPageNumber(number);
        $scope.data.number = klass.getPageNumber();
        self.reload();
    };
    self.reloadBySize = function(size) {
        page.setPageSize(size);
        $scope.data.size = page.getPageSize();
        self.reload();
    };
    $scope.delete = self.delete;
    $scope.add = self.add;
    $scope.reloadByNumber = self.reloadByNumber;
    $scope.reloadBySize = self.reloadBySize;
    self.init();
  });
