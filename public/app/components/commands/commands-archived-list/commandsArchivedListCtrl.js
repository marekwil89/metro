angular.module("commandsArchivedListModule", []).controller('commandsArchivedListCtrl', function($scope, commandsOperation, redirect, $rootScope, stations){

  if(redirect.ifLogout()){
    return;
  }

  $scope.reverse = false;
  $scope.stations = stations.data;
  $scope.currentPage = 1;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  function commandsGetArchiveListLength() {
    commandsOperation.length().then(function (response) {
      $scope.commandsArchiveListLength = response.data.length;
    })
  }

  $scope.commandsGetArchiveList = function(){
    commandsOperation.getArchivedList($scope.currentPage).then(function(response){
      $scope.commands = response.data
    }) 
  };

  $scope.pageChanged = function() {
    $scope.commandsGetArchiveList($scope.currentPage);
  };

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
  
  commandsGetArchiveListLength();
  $scope.commandsGetArchiveList();
})