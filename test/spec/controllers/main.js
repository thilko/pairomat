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

  it('creates a pair with two participants', function() {
    scope.participants = ["harry", "manfred"];
    scope.pairIt();

    expect(scope.pairs).toEqual([["harry", "manfred"]]);
  });


  it('creates new pairs every time', function() {
    scope.participants = ["harry", "manfred"];
    scope.pairIt();
    scope.pairIt();

    expect(scope.pairs.length).toBe(1);
  });
});
