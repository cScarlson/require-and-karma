
/**
 * 
 */
define('app', ['angular', 'routeMap'], function(angular, mapRoutes){
	
	return function initializeApplication(sandbox){
		var app, application = app = angular.module('app', ['ngRoute'])
		  , globals = sandbox.globals;
		
		var sandbox = {
			globals: globals,
			app: app,
			controllers: {
				indexController: function($scope){
					$scope.test = function(){
						console.log('@indexCtrl | #test', $scope);
					};
				}
			}
		};
		
		mapRoutes(sandbox);
		
		return app;
	};
	
});
