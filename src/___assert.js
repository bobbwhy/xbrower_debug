

// taken from http://code.tutsplus.com/tutorials/quick-and-easy-javascript-testing-with-assert--net-14050

/** 
 * 	@function 
 * 		A basic assert function found at: 
 *	http://code.tutsplus.com/tutorials/quick-and-easy-javascript-testing-with-assert--net-14050
 * 		and which originated with John Resig
 *		Any copyrights belong to him.
 */

module.exports = 
function ( test, message, parent ) {
	if (test === true) return;
	throw new Error(
		[message, (parent && parent.name) ? " at " + parent.name : ""].join("")
	)
}; 
