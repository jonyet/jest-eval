let exports = jest.genMockFromModule('./../restHelper.js');

exports.get.mockImplementation(function(a){
	let success = new Promise(function(resolve){

	});

	return success;
});

module.exports = exports;
