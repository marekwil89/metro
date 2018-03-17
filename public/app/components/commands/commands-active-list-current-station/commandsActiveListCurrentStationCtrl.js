angular.module("commandsActiveListCurrentStationModule", [])


.controller('commandsActiveListCurrentStationCtrl', function($scope, commandsOperation, $location, redirect, $rootScope, debounce){

  if(redirect.ifLogout()){
    return;
  }

  $scope.reverse = false;
  $scope.openModal = false;
  
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  $scope.commandsActiveListCurrentStation = function(){
    commandsOperation.activeListCurrentStation().then(function(response){
      $scope.commands = response.data
    })
  }

  $scope.commandsActiveListCurrentStation()

  $scope.$watch('commands', debounce(function(newValue, oldValue) {
    $scope.commandsActiveListCurrentStation()
    if(newValue && oldValue){
      if(newValue.length > oldValue.length){
        $scope.openModal = true
      }
    }
  }, 3000));
})

