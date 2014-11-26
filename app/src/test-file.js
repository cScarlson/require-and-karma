
define('testFile', [], function(){
	
	return function init(sandbox){
		var app, application = app = sandbox.app
		  , globals = sandbox.globals;
		
		return {
			multiplyBy8: function(number){
				return (number * 8);
			}
		};
	};
	
});
