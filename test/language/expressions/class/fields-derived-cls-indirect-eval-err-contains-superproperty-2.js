// This file was procedurally generated from the following sources:
// - src/class-fields/eval-err-contains-superproperty-2.case
// - src/class-fields/initializer-eval-super-property/cls-expr-fields-indirect-eval.template
/*---
description: error if `super['x']` in StatementList of eval (indirect eval)
esid: sec-performeval-rules-in-initializer
features: [class-fields]
flags: [generated]
info: |
    Additional Early Error Rules for Eval Inside Initializer
    These static semantics are applied by PerformEval when a direct eval call occurs inside a class field initializer.
    ScriptBody : StatementList

      ...
      The remaining eval rules apply as outside a constructor, inside a method, and inside a function.

    Additional Early Error Rules for Eval Outside Methods
    These static semantics are applied by PerformEval when a direct eval call occurs outside of a MethodDefinition.
    ScriptBody:StatementList

      It is a Syntax Error if StatementList Contains SuperProperty.

---*/


var A = class {}

var executed = false;
var C = class extends A {
  x = (0, eval)('executed = true; super["x"];');
}

assert.throws(SyntaxError, function() {
  new C();
});

assert.sameValue(executed, false);
