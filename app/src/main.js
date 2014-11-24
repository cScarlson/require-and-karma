
/***/
requirejs.config({
	baseUrl: '/src',
	paths: {
		angular: '../lib/angular/angular',
		ngRoute: '../lib/angular-route/angular-route',
		jquery: '../lib/jQuery/dist/jquery',
		bootstrap: '../lib/bootstrap/dist/js/bootstrap',
		lib: '../lib',
		models: 'models',
		controllers: 'controllers',
		app: 'app',
		globals: 'globals',
		routeMap: 'routeMap'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		ngRoute: {
			deps: ['angular']
		},
		jquery: {
			exports: '$'
		},
		bootstrap: {
			deps: ['jquery']
		}
	},
	bundles: {}
});

require(['angular', 'jquery', 'globals', 'app', 'ngRoute', 'bootstrap'], function(angular, $, globals, initializeApp){
	console.log('required', ['angular', 'jquery', 'app', 'bootstrap'], angular, $, initializeApp);
	
	angular.element(document).ready(function(){
		var app = initializeApp({globals: globals});
		angular.bootstrap(document, ['app']);
	});
	
});
