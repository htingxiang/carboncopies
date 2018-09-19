'use strict';

describe('Service: klass/klass', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var klass/klass;
  beforeEach(inject(function (_klass/klass_) {
    klass/klass = _klass/klass_;
  }));

  it('should do something', function () {
    expect(!!klass/klass).toBe(true);
  });

});
