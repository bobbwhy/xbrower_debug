

var log = require("seldon/debug/log"),
	_ArM = require("seldon/arrays/each/_map");

module.export = 
function() { 
	var args = [].splice.call(arguments, 0),
		ts = this;
	return function() {
		var ts = this;
		var out = _ArM.run(
			this, 
			args, 
			function(name, i, names) {
				var rt = (name in ts) ? 
					[name, ts[name]].join(" : ") :
					name;
				return rt;
			}
		);
		try { 
			return out.join(", ");
		} catch(e) { 
			console.log(" A A A ", out);	
		}
	}
}