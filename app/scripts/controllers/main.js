'use strict';

angular.module('pairingbingoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.participants = [];
    $scope.pairs = [];

    $scope.addPairingPartner = function(){
      $scope.participants.push($scope.participant);
      $scope.pairIt();
    };

    function lonesomeCowboyExist() {
      return _.find($scope.participants, function(entry){
        return entry[1] == undefined;
      });
    }

    $scope.playBingo = function(){
      $scope.participants = _.shuffle($scope.participants);
      $scope.pairIt();
    };

    $scope.pairIt = function(){
      $scope.pairs.length = 0;
      for(var i=0;i<$scope.participants.length;i+=2){
        $scope.pairs.push($scope.participants.slice(i, i+2));
      }
    }

    $scope.removeParticipant = function(name){
      $scope.participants = _.without($scope.participants, name);
      $scope.pairIt();
    };
});
