
console.log('Included test-test-file.js');

define(['testFile'], function(getTestFileModule){
	var testFile = getTestFileModule({
		app: (new (function Application(){ this.module = {}; })()),
		globals: (new (function Globals(){ this.some = 'thing'; })())
	});
	
	console.log('testing test-file', testFile);
	
	describe('Test Testing', function(){
	
		console.log('???????????????');
		it('should work', function(){
			//expect(true).toEqual(true);
			expect(testFile.multiplyBy8(0)).toEqual(0);
			expect(testFile.multiplyBy8(1)).toEqual(8);
			expect(testFile.multiplyBy8(8)).toEqual(64);
			expect(testFile.multiplyBy8(8)).not.toEqual(8);
			
			expect(testFile.multiplyBy8(8)).not.toEqual(64);
		});
		
	});

});
