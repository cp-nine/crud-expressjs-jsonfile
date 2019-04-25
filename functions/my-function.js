// check genap
function isEven(angka){
	let modulus = angka%2;
	if (modulus === 0) {
			return true;
	} else {
			return false;
	}
}

// check prima
function prima(angka){

	isPrima = true;
	if (angka==1) {
			isPrima = false;
	} else {
			for (let i=2; i<angka; i++){
					if (angka % i == 0) {
							isPrima = false;
							break;
					} 
			}   
	}

	return isPrima;
}

module.exports = {
	isEven: isEven,
	prima: prima
}