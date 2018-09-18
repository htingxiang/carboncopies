'use strict';

describe('Controller: TeacherTeacherCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherTeacherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherTeacherCtrl = $controller('TeacherTeacherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherTeacherCtrl.awesomeThings.length).toBe(3);
  });
});
