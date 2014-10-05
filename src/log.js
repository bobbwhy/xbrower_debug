

// a cross platform safe logging function 
// call as log .. 
// will return the first argument 

module.exports = 
	function() {
		// cross platform console.log
		var args = [].splice.call(arguments, 0), 
			i = 0, _l = args.length;

		for ( ; i !== _l; i++ ) { 
			args[i] = String(args[i]);
		}

		var wn = (typeof(window)==="undefined") ? false : window;
		if (wn===false) {
			try {
				console.log.apply( this, args);
				return args[0];
			} catch(e) {}
			return
		}
		if ("console" in wn) {
			if (typeof(wn.opera)!=="undefined") { 
				var i = 0;
				for ( ; i !== _l; i++ ) {
					console.log(args[i]);	
				}
				return args[0];
			}
			//var astr = Array.prototype.slice.call(arguments).toString();

			try {
				console.log.apply( this, args);
				return args[0];
			} catch(e) { 
				console.log(Array.prototype.slice.call(arguments).toString());
				return args[0];
			} finally {
			
			}
			//alert(arguments);
		}
	}

