

// taken from http://code.tutsplus.com/tutorials/quick-and-easy-javascript-testing-with-assert--net-14050


module.exports = 
function ( test, message, parent ) {
	if (test === true) return;
	throw new Error([
		[message, (parent && parent.name ) ? " at " + parent.name : ""].join("")
	]);
}; 
