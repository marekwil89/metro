angular.module("commandsArchivedListCurrentStationModule", [])

.controller('commandsArchivedListCurrentStationCtrl', function($scope, commandsOperation, $location, redirect, $rootScope){

  redirect.ifLogout($rootScope.current_user);

  $scope.reverse = false;
  
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  $scope.commandsArchivedListCurrentStation = function(){
    commandsOperation.archivedListCurrentStation().then(function(response){
      $scope.commands = response.data
    })
  }

  $scope.commandsArchivedListCurrentStation()

})

