'use strict';

angular.module('pairingbingoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.participants = [];

    $scope.addPairingPartner = function(){
      var name = $scope.participant;
      if(_.isUndefined(name) || name == "")
        return;

      if(_.isEmpty($scope.participants) || !lonesomeCowboyExist()) {
        $scope.participants.push([name]);
      } else {
        _.last($scope.participants)[1] = name;
      }
    };

    function lonesomeCowboyExist() {
      return _.find($scope.participants, function(entry){
        return entry[1] == undefined;
      });
    }

    $scope.playBingo = function(){
      var shuffledArray = _.shuffle(_.flatten($scope.participants));
      pairIt(shuffledArray);
    };

    function pairIt(participants){
      $scope.participants.length = 0;
      for(var i=0;i<participants.length;i+=2){
        $scope.participants.push(participants.slice(i, i+2));
      }
    }

    $scope.removeParticipant = function(name){
      var withoutParticipant = _.without(_.flatten($scope.participants), name);
      pairIt(withoutParticipant);
    };
});
