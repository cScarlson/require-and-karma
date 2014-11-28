
/**
 * Mediator (Module Pattern)
 */
//
var mediator = (function Mediator(){
	
	function subscribe(channel, fn){
		if(!mediator.channels[channel]){ mediator.channels[channel] = []; }
		var subscription = { context: this, callback: fn };
		mediator.channels[channel].push(subscription);
		return this;
	}
	
	function publish(channel){
		if(!mediator.channels[channel]){ return false; }
		var subscription
		  , args = Array.prototype.slice.call(arguments, 1)
		  , i
		  , len
		;
		
		for(i = 0, len = mediator.channels[channel].length; i < len; i++){
			subscription = mediator.channels[channel][i];
			subscription.callback.apply(subscription.context, args);
		}
		
		return this;
	}
	
	function installTo(obj){
		obj.subscribe = subscribe;
		obj.publish = publish;
	}
	
	return {
		channels: {},
		subscribe: subscribe,
		publish: publish,
		installTo: installTo
	};
})();

var mediator = (new (function ApplicationMediator(){
	var thus = this;
	
	var Mediator = (function(){
		return function Mediator(){
			function subscribe(channel, fn){
				if(!this.channels[channel]){ this.channels[channel] = []; }
				var subscription = { context: this, callback: fn };
				this.channels[channel].push(subscription);
				
				return this;
			}
			
			function publish(channel){
				if(!this.channels[channel]){ return false; }
				var subscription
				  , args = Array.prototype.slice.call(arguments, 1)
				  , i
				  , len
				;
				
				for(i = 0, len = this.channels[channel].length; i < len; i++){
					subscription = this.channels[channel][i];
					subscription.callback.apply(subscription.context, args);
				}
				
				return this;
			}
			
			function installTo(context){
				Mediator.apply(context);
				
				return this;
			}
			
			this.channels = {};
			this.subscribe = subscribe;
			this.publish = publish;
			this.installTo = installTo;
			
			return this;
		};
	})();
	
	return Mediator.call(this);
})());









































