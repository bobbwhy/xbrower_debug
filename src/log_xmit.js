

var log = require("seldon/debug/log");

function xm_log() { 
	_xm.xmit("LOG", log.apply(this, arguments));
}

function __Logger(name, xmitter) { 

	var _xm;

	function Logger(name, xmitter) { 
		this.name = name;
		_xm = xmitter;
	}

	Logger.prototype = { 
		log:function() { 
			_xm.xmit("LOG", log.apply(this, arguments));
		},
		xmit:function() { 
			_xm.xmit("LOG", arguments[0] || null)
		}
	}


	return new Logger(name, xmitter);

}

module.exports = __Logger;



