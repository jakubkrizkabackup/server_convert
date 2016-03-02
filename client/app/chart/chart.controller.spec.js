'use strict';

describe('Controller: ChartCtrl', function () {

  // load the controller's module
  beforeEach(module('serverConvertApp'));

  var ChartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartCtrl = $controller('ChartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
