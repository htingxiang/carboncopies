'use strict';

/**
 * @ngdoc service
 * @name webappApp.course/course
 * @description
 * # course/course
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('course', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    var baseUrl = '/course/';
    self.add = function(data, callBack) {
    	$http.post(baseUrl, data)
    	.then(function(response) {
    		callBack();
    	}, function() {
    		console.log('fail to add course');
    	});
    };
    self.getAll = function(callBack) {
    	$http.get(baseUrl)
    	.then(function(response) {
    		callBack(response.data);
    	}, function() {
    		console.log('fail to get All course');
    	});
    };
    self.delete = function(id, callBack) {
    	 $http.delete(baseUrl + id)
    	 .then(function() {
    	 	callBack();
    	 }, function() {
    	 	console.log('fail to delete course');
    	 });
    };
    self.get = function(id, callBack) {
    	$http.get(baseUrl + id)
    	.then(function(response) {
    		callBack(response.data);
    	}, function() {
    		console.log('fail to get ' + id + 'course');
    	})
    };
    self.update = function(id, data, callBack) {
    	$http.put(baseUrl + id, data)
    	.then(function() {
    		callBack();
    	}, function() {
    		console.log('fail to update course');
    	});
    };
  });
