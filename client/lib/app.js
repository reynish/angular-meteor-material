angular.module('socially', ['angular-meteor', 'ui.router', 'ngMaterial']);

angular.module("socially").controller("AppCtrl", ['$scope', '$stateParams', '$mdSidenav',
  function ($scope, $stateParams, $mdSidenav) {

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

  }]);


angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteorCollection',
  function ($scope, $meteorCollection) {

    $scope.parties = $meteorCollection(Parties);

    $scope.add = function(party) {
      $scope.parties.push(newParty);
    }

    $scope.remove = function (party) {
      $scope.parties.remove(party);
    };

  }]);

angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteorObject',
  function ($scope, $stateParams, $meteorObject) {

    $scope.party = $meteorObject(Parties, $stateParams.partyId);

  }]);
