'use strict';

describe('Controller: CourseViewCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var CourseViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseViewCtrl = $controller('CourseViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourseViewCtrl.awesomeThings.length).toBe(3);
  });
});
