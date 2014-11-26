
define(function(){
	
	return function init(sandbox){
		var app, application = app = sandbox.app
		  , globals = sandbox.globals;
		
		if(!app){ throw new Error('app in undefined'); }
		
		return {
			multiplyBy8: function(number){
				return (number * 8);
			}
		};
	};
	
});
