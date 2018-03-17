angular.module("commandsArchivedListCurrentStationModule", [])

.controller('commandsArchivedListCurrentStationCtrl', function($scope, commandsOperation, $location, redirect, $rootScope){

  if(redirect.ifLogout()){
    return;
  }

  $scope.reverse = false;
  $scope.currentPage = 1;
  
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  function commandsGetArchiveListLengthByStation() {
    commandsOperation.lengthByStation().then(function (response) {
      $scope.commandsArchiveListLengthByStation = response.data.length;
    })
  }

  $scope.commandsArchivedListCurrentStation = function(){
    commandsOperation.archivedListCurrentStation($scope.currentPage).then(function(response){
      $scope.commands = response.data
    })
  }

  $scope.pageChanged = function(currentPage) {
    $scope.commandsArchivedListCurrentStation($scope.currentPage);
  };

  $scope.commandsArchivedListCurrentStation()
  commandsGetArchiveListLengthByStation();
})

