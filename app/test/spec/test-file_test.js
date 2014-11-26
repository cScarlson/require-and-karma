
console.log('Included test-file_test.js');

define(['test-file'], function(getTestFileModule){
	var sandbox = {
		app: (new (function Application(){ this.module = {}; })()),
		globals: (new (function Globals(){ this.some = 'thing'; })())
	};
	
	var testFile = getTestFileModule(sandbox);
	
	describe('Initializing testFile Module', function(){
		it('should return the module', function(){
			expect( typeof(getTestFileModule(sandbox)) ).toEqual('object');
			expect(getTestFileModule({})).toThrowError();
		});
	});
	
	describe('Testing', function(){
	
		it('should work', function(){
			expect(true).toEqual(true);
			expect(testFile.multiplyBy8(0)).toEqual(0);
			expect(testFile.multiplyBy8(1)).toEqual(8);
			expect(testFile.multiplyBy8(8)).toEqual(64);
			expect(testFile.multiplyBy8(8)).not.toEqual(8);
			
			//expect(testFile.multiplyBy8(8)).not.toEqual(64);
		});
		
	});

});
