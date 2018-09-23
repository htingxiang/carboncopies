'use strict';

/**
 * @ngdoc service
 * @name webappApp.teacher/teacher
 * @description
 * # teacher/teacher
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('teacher', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    var pageNumber = 0;
    self.getPageNumber = function() {
        return pageNumber;
    };
    self.setPageNumber = function(number) {
        pageNumber = number;
    };
    self.getAllTeacher = function(callBack) {
    	$http.get('/teacher/getAllTeacher')
    	.then(function(response) {
    		callBack(response.data);
    	}, function() {
    		console.log('fail to getAllTeacher');
    	});
    };
    self.addTeacher = function(data, callBack) {
        $http.post('/teacher/addTeacher', data)
        .then(function(response) {
            callBack(response);
        }, function() {
            console.log('fail to addTeacher');
        });
    };
    self.delete = function(id, callBack) {
        $http.delete('/teacher/delete' + id)
        .then(function() {
            callBack();
        }, function() {
            alert('delete fail');
        });
    };
    self.get = function(id, callBack) {
        $http.get('/teacher/getTeacher' + id)
        .then(function(response) {
            callBack(response.data);
        }, function() {
            alert('get teacher fail');
        });
    };
    self.update = function(id, data, callBack) {
        $http.put('/teacher/updateTeacher' + id, data)
        .then(function(response) {
            callBack(response.data);
        },function() {
            alert('fail updateTeacher');
        });
    };
  });
