'use strict';

describe('Controller: TeacherAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherAddCtrl = $controller('TeacherAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherAddCtrl.awesomeThings.length).toBe(3);
  });
});
