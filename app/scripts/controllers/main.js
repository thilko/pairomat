'use strict';

angular.module('pairingbingoApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.participants = [];
    $scope.pairs = [];

    $scope.addPairingPartner = function(){
      $scope.participants.push($scope.participant);
      $scope.pairIt();
    };

    $scope.playBingo = function(){
      $scope.participants = _.shuffle($scope.participants);
      $scope.pairIt();
    };

    $scope.pairIt = function(){
      $scope.pairs.length = 0;
      for(var i=0;i<$scope.participants.length;i+=2){
        $scope.pairs.push($scope.participants.slice(i, i+2));
      }
      $scope.save();
    };

    $scope.save = function(){
      var storage = $window["localStorage"];
      storage["participants"] = $scope.participants;
    };

    $scope.removeParticipant = function(name){
      $scope.participants = _.without($scope.participants, name);
      $scope.pairIt();
    };

    $scope.loadFromStorage = function(){
      var storage = $window["localStorage"];
      //$scope.participants = storage["participants"] || [];
    }

    $scope.$on('$viewContentLoaded', $scope.loadFromStorage);

});
