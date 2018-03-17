angular.module("routesModule", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state({
	    name: 'main-page',
	    url: '/',
		templateUrl: 'app/components/main-page/mainPageView.html',
		controller: 'mainPageCtrl'
 	})
 	.state({
	    name: 'main',
	    url: '/main',
	    templateUrl: 'app/components/main/mainView.html'
 	})
	.state({
	    name: 'commands-active-list',
	    url: '/commands-active-list',
	    templateUrl: 'app/components/commands/commands-active-list/commandsActiveListView.html',
    	controller: 'commandsActiveListCtrl'
 	})
	.state({
	    name: 'commands-archived-list',
	    url: '/commands-archived-list',
	    templateUrl: 'app/components/commands/commands-archived-list/commandsArchivedListView.html',
    	controller: 'commandsArchivedListCtrl'
 	})
	.state({
	    name: 'commands-detail',
	    url: '/commands-detail/{id}',
	    templateUrl: 'app/components/commands/commands-detail/commandsDetailView.html',
	    controller: 'commandsDetailCtrl'
 	})
	.state({
	    name: 'commands-create',
	    url: '/commands-create',
	    templateUrl: 'app/components/commands/commands-create/commandsCreateView.html',
	    controller: 'commandsCreateCtrl'
 	})
	.state({
	    name: 'commands-edit',
	    url: '/commands-edit/{id}',
	    templateUrl: 'app/components/commands/commands-edit/commandsEditView.html',
	    controller: 'commandsEditCtrl'
 	})
 	.state({
	    name: 'commands-active-list-current-station',
	    url: '/commands-active-list-current-station/{station}',
	    templateUrl: 'app/components/commands/commands-active-list-current-station/commandsActiveListCurrentStationView.html',
	    controller: 'commandsActiveListCurrentStationCtrl'
 	})
 	.state({
	    name: 'commands-archived-list-current-station',
	    url: '/commands-archived-list-current-station/{station}',
	    templateUrl: 'app/components/commands/commands-archived-list-current-station/commandsArchivedListCurrentStationView.html',
	    controller: 'commandsArchivedListCurrentStationCtrl'
 	})
	.state({
	    name: 'login',
	    url: '/login',
	    templateUrl: 'app/components/authenticate/authenticate-login/authenticateLoginView.html',
	    controller: 'authenticateLoginCtrl'
 	})
	.state({
	    name: 'register',
	    url: '/register',
	    templateUrl: 'app/components/authenticate/authenticate-register/authenticateRegisterView.html',
	    controller: 'authenticateRegisterCtrl'
 	})
})