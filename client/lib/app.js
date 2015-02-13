angular.module('socially', ['angular-meteor', 'ui.router', 'ngMaterial']);

angular.module("socially").controller("AppCtrl", ['$scope', '$stateParams', '$mdSidenav',
  function ($scope, $stateParams, $mdSidenav) {

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

  }]);


angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteorCollection', '$mdBottomSheet', '$templateCache',
  function ($scope, $meteorCollection, $mdBottomSheet, $templateCache) {

    $scope.parties = $meteorCollection(Parties);

    $scope.add = function(party) {
      $scope.parties.push(party);
    };

    $scope.remove = function (party) {
      $scope.parties.remove(party);
    };

    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        template: '<md-bottom-sheet>'+ $templateCache.get('client/views/parties/parties-new.tpl') +'</md-bottom-sheet>',
        controller: 'PartiesEditCtrl',
        targetEvent: $event
      }).then(function(){
      });
    };

  }]);

angular.module("socially").controller("PartiesEditCtrl", ['$scope', '$meteorCollection', '$mdBottomSheet',
  function ($scope, $meteorCollection, $mdBottomSheet) {

    $scope.parties = $meteorCollection(Parties);

    $scope.add = function(party) {
      $scope.parties.push(party);
      $mdBottomSheet.hide();
    };

  }]);

angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteorObject',
  function ($scope, $stateParams, $meteorObject) {

    $scope.party = $meteorObject(Parties, $stateParams.partyId);

  }]);
