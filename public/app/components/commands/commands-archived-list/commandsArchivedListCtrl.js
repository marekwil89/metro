angular.module("commandsArchivedListModule", []).controller('commandsArchivedListCtrl', function($scope, commandsOperation, redirect, $rootScope, stations){

  redirect.ifLogout($rootScope.current_user)

  $scope.reverse = false
  $scope.stations = stations.data

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  $scope.commandsGetArchiveList = function(){
    commandsOperation.getArchivedList().then(function(response){
      $scope.commands = response.data
    }) 
  }

  $scope.removeCommand = function(command){
    if (window.confirm("Jesteś pewien?")) {
      commandsOperation.removeCommand(command).then(function(response){
        if(response.data === 'success'){
          $scope.commandsGetArchiveList()
        }
        else{
          $scope.errors = response.data
        } 
      })  
    }
  }



  $scope.commandsGetArchiveList()
  
})