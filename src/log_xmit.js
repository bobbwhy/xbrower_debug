
/** 
 * @Class Logger Xmit.
 * 		A basic wrapper class for a xmitter to function as a 
 * 		Logger.
 * 		
 * 		Still needs testing
 *	
 */


var Xmit = require("xmit").Atom,
	Channel = require("xmit").ChannelAtom;

function LoggerXmit(name, XmitType, ChannelType) { 
	var xm = this._xm = this.xmitter = 
		new (XmitType||Xmit)(this, name, ChannelType||ChannelAtom);
	this.name = name;
	xmit.add("LOG")
	this._xm = this.xmitter = xmit;

}

LoggerXmit.prototype.log = function() { 
	this._xm.xmit.apply(this, ["LOG"].concat([].splice.call(arguments, 0)));
}

LoggerXmit.prototype.on = function(lambda) { 
	this._xm.on("LOG", lambda)
}

module.exports = Logger;

