'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('pairingbingoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  
  it('add the participants', function () {
    scope.participant = "test";
    scope.addPairingPartner();

    expect(scope.participants.length).toBe(1);
  });
});
