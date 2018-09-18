'use strict';

describe('Service: teacher/teacher', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var teacher/teacher;
  beforeEach(inject(function (_teacher/teacher_) {
    teacher/teacher = _teacher/teacher_;
  }));

  it('should do something', function () {
    expect(!!teacher/teacher).toBe(true);
  });

});
