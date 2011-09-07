// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @id: S15.5.4.13_A1_T3;
 * @section: 15.5.4.13;
 * @description: Checking by using eval;
 */

var slice = String.prototype.slice;

if (typeof toString === "undefined"){
    toString = Object.prototype.toString;
}

var __class__ = toString();
var __toggle = 1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (slice(eval("\"1\""),{valueOf:function(){return "0x0007"}})!=="object") {
  $ERROR('#1: slice = String.prototype.slice; slice(eval("\\"1\\""),{valueOf:function(){return "0x0007"}})==="object". Actual: '+slice(eval("\"1\""),{valueOf:function(){return "0x0007"}}));
};
//
//////////////////////////////////////////////////////////////////////////////
