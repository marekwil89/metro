angular.module("commandsCreateModule", [])

.controller('commandsCreateCtrl', function($scope, commandsOperation, stations, model, tinymce, $location, redirect, $rootScope){

  redirect.ifLogout($rootScope.current_user)

  $scope.tinymceOptions = tinymce.options
  $scope.command = model.command
  $scope.stations = stations.data

  $scope.createCommand = function(command){
    commandsOperation.createNew(command).then(function(response){
      if(response.data === 'success'){
        $location.path('/commands-active-list')
        $scope.command = model.command
      }
      else{
        $scope.errors = response.data
      } 
    })
  }

  ////////////////////// form functions
  
  $scope.selectAll = function(){
    var toggleStatus = $scope.isAllSelected;
    angular.forEach($scope.stations, function(item){
      item.selected = toggleStatus
    })
    getSelected()
  }

  $scope.selectSingle = function(){
    $scope.isAllSelected = $scope.stations.every(function(item){ 
      return item.selected;
    })
    getSelected()
  }

  var getSelected = function(){
    $scope.command.stations = []
    angular.forEach($scope.stations, function(item){
      if(item.selected){
        $scope.command.stations.push(item)
      }
    })
  }


})