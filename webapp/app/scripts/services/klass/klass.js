'use strict';

/**
 * @ngdoc service
 * @name webappApp.klass/klass
 * @description
 * # klass/klass
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('klass', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function\
    this.getAll = function(callBack) {
    	$http.get('/klass/getAll')
    	.then(function(response) {
    		callBack(response.data);
    	}, function() {
    		console.log('fail to get all Klass');
    	});
    };
    this.add = function(data, callBack) {
    	$http.post('/klass/add', data)
    	.then(function() {
    		callBack();
    	}, function() {
    		alert('fail to add klass');
    	});
    };
    this.get = function(id, callBack) {
        $http.get('/klass/getKlass' + id)
        .then(function(response) {
            callBack(response.data);
        }, function() {
            alert('fail get teaher');
        });
    };
    this.updata = function(id, klass, callBack) {
        $http.put('/klass/updata' + id, klass)
        .then(function() {
            callBack();
        }, function() {
            alert('fail to updata klass');
        });
    };
    this.delete = function(id, callBack) {
        $http.delete('/klass/delete' + id)
        .then(function() {
            callBack();
        }, function() {
            alert('fail to delete klass');
        });
    };
  });
