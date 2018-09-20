'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
angular
  .module('webappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($provide) {
    $provide.constant('routes', [{
      name: 'teacher',
      templateUrl: 'views/teacher/index.html',
      controller: 'TeacherCtrl',
      url: '/',
      message: {
        title: 'Teacher',
        show: true
      }
    }, {
      name: 'klass.edit',
      templateUrl: 'views/klass/edit.html',
      controller: 'KlassEditCtrl',
      url: '/edit/:id',
      message: {
        title: 'KlassEdit'
      }
    },{
      name: 'klass.view',
      templateUrl: 'views/klass/view.html',
      url: '/view/:id',
      controller: 'KlassViewCtrl',
      message: {
        title: 'KlassView'
      }
    }, {
      name: 'klass',
      templateUrl: 'views/klass/index.html',
      controller: 'KlassIndexCtrl',
      url: '/klass',
      message: {
        title: 'Klass',
        show: true
      }
    }, {
      name: 'klass.add',
      templateUrl: 'views/klass/add.html',
      controller: 'KlassAddCtrl',
      url: '/add',
      message: {
        title: 'KlassAdd'
      }
    }, {
      name: 'teacher.edit',
      templateUrl: 'views/teacher/edit.html',
      url: 'edit/:id',
      controller: 'TeacherEditCtrl',
      message: {
        title: 'TeacherEdit'
      }
    }, {
      name: 'teacher.view',
      templateUrl: 'views/teacher/view.html',
      controller: 'TeacherViewCtrl',
      url: 'view/:id',
      message: {
        title: 'TeacherView'
      }
    }, {
      name: 'teacher.add',
      templateUrl: 'views/teacher/add.html',
      controller: 'AddCtrl',
      url: 'add',
      message: {
        title: 'TeacherAdd'
      }
    }]);
  })
  .config(function($stateProvider, $urlRouterProvider, routes) {
    angular.forEach(routes, function(value) {
      $stateProvider.state(value);
    });
    $urlRouterProvider.otherwise('/');
  })
  .config(function($provide, $httpProvider) {
    // register the interceptor as a service
    $provide.factory('myHttpInterceptor', function() {
      return {
        // optional method
        'request': function(config) {
          // do something on success
          var url = config.url;
          var suffix = url.split('.').pop();
          if (suffix !== 'html' && suffix !== 'css') {
            config.url = 'http://localhost:8080' + config.url;
          }
          return config;
        },
      };
    });
    $httpProvider.interceptors.push('myHttpInterceptor');
  });