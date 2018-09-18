'use strict';

describe('Controller: TeacherCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherCtrl = $controller('TeacherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherCtrl.awesomeThings.length).toBe(3);
  });
});
