angular.module("socially").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('parties', {
        url: '/parties',
        templateUrl: 'client/views/parties-list.tpl',
        controller: 'PartiesListCtrl'
      })
      .state('partyDetails', {
        url: '/parties/:partyId',
        templateUrl: 'client/views/party-details.tpl',
        controller: 'PartyDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/parties");

  }]);
