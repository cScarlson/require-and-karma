
console.log('Included test-file_test.js');

define(['testFile'], function(getTestFileModule){
	var testFile = getTestFileModule({
		app: (new (function Application(){ this.module = {}; })()),
		globals: (new (function Globals(){ this.some = 'thing'; })())
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
