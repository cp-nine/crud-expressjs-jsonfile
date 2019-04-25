const MyFunction = require('./../functions/my-function');

// function checkNumber(angka) {
// 	let response;

// 	try {
// 		if (MyFunction.prima(angka)) {
// 			 response = 'PRIMA';
// 	 } else if (MyFunction.isEven(angka)) {
// 			 response = 'GENAP';
// 	 } else {
// 			 response = 'GANJIL';          
// 	 }	
// 	} catch (error) {
// 		response = error;
// 	}
	
//   return response;
// }

function checkNumber(angka, callback) {
	let response;

	try {
		if (MyFunction.prima(angka)) {
			 response = 'PRIMA';
	 } else if (MyFunction.isEven(angka)) {
			 response = 'GENAP';
	 } else {
			 response = 'GANJIL';          
	 }	
	} catch (error) {
		response = error;
	}
	
  return callback(response);
}

function print(data) {
	return data;
}

module.exports = {
	checkNumber: checkNumber,
	print: print
};