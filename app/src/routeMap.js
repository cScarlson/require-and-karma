
//
define('routeMap', [], function(){
	
	return function initRoutes(sandbox){
		var app, application = app = sandbox.app
		  , controllers = sandbox.controllers
		  , globals = sandbox.globals;
		
		application.config(function($routeProvider){
			console.log('@app.config');
			$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: controllers.indexController
				});
		});
		
	};
	
});
