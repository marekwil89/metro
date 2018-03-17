angular.module("commandsActiveListModule", []).controller('commandsActiveListCtrl', function($scope, commandsOperation, stations, redirect, $rootScope){

  if(redirect.ifLogout()){
    return;
  }

  $scope.reverse = false
  $scope.stations = stations.data

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  
  
  $scope.commandsGetActiveList = function(){
    commandsOperation.getActiveList().then(function(response){
      $scope.commands = response.data
    })
  }

  $scope.archiveCommand = function(command){
    if (window.confirm("Jesteś pewien?")) {
      commandsOperation.archiveCommand(command).then(function(response){
        if(response.data === 'success'){
          $scope.commandsGetActiveList()
        }
        else{
          $scope.errors = response.data
        }        
      })
    }
  }


  $scope.commandsGetActiveList()

})