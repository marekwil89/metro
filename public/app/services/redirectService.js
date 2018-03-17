angular.module("redirectService", [])

.factory('redirect', function($location, $rootScope, $state){
  return {
    ifLogout: function(){
      if(!$rootScope.current_user){
          $state.go('main-page');
          return true;
      }
      return false;
    },
    ifNotAdmin: function () {
      if($rootScope.current_user.admin === false){
          $state.go('main-page');
          return true;
      }
      return false;
    },
    user: function(current_user){
      if(current_user.admin === true){
        $location.path('/commands-active-list')
      }
      else if(current_user.admin === false){
        $location.path('/commands-active-list-current-station/' + current_user.station)
      }
      else{
        $location.path('/login')
      }
    }
  };
})