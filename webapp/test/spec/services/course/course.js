'use strict';

describe('Service: course/course', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var course/course;
  beforeEach(inject(function (_course/course_) {
    course/course = _course/course_;
  }));

  it('should do something', function () {
    expect(!!course/course).toBe(true);
  });

});
