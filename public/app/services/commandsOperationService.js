angular.module("commandsOperationService", [])

.factory('commandsOperation', function($http, $stateParams){
	return {
    activeListCurrentStation: function(){
      var station = $stateParams.station
      return $http.get('/commands/activeListCurrentStation/' + station)
    },
    archivedListCurrentStation: function(){
      var station = $stateParams.station
      return $http.get('/commands/archivedListCurrentStation/' + station)
    },
    getArchivedList: function(){
      return $http.get('/commands/archivedList')
    },
		getActiveList: function(){
      return $http.get('/commands/activeList')
    },
    createNew: function(command){
      return $http.post('/commands/create', command)
    },
		getDetail: function(){
			var id = $stateParams.id
      return $http.get('/commands/detail/' + id) 
		},
    archiveCommand: function(command){
      var id = command._id
      return $http.put('commands/archive/' + id, command)
    },
    removeCommand: function(command){
      var id = command._id
      return $http.delete('commands/remove/' + id)
    }
	};
})