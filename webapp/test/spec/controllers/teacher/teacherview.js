'use strict';

describe('Controller: TeacherTeacherviewctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherTeacherviewctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherTeacherviewctrlCtrl = $controller('TeacherTeacherviewctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherTeacherviewctrlCtrl.awesomeThings.length).toBe(3);
  });
});
