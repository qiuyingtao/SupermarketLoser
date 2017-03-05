/*
 * Globalize Culture zh_CN
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "zh-CN", "default", {
	name: "zh_CN",
	englishName: "PRC",
	nativeName: "中华人民共和国",
	language: "zh_CN",
	numberFormat: {
		",": ",",
		".": ".",
		"NaN": "请在上方输入总价和数量",
		negativeInfinity: "-∞",
		positiveInfinity: "+∞",
		percent: {
			",": ",",
			".": "."
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ",",
			".": ".",
			symbol: "￥"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
			patterns: {
				d: "yyyy/MM/dd",
				D: "yyyy MMMM dddd d",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "yyyy MMMM dddd d HH:mm",
				F: "yyyy MMMM dddd d HH:mm:ss",
				M: "MMMM d",
				Y: "yyyy MMMM"
			}
		}
	}
});

}( this ));
