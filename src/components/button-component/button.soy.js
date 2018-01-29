/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Button.
 * @public
 */

goog.module('Button.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('button');
      incrementalDom.attr('onClick', opt_data.onClick);
      incrementalDom.attr('type', 'button');
      incrementalDom.attr('class', opt_data.cssClass);
  incrementalDom.elementOpenEnd();
    if (opt_data.title != null) {
      soyIdom.print(opt_data.title);
    } else {
      incrementalDom.text('DefaultTitle');
    }
  incrementalDom.elementClose('button');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Button.render';
}

exports.render.params = ["cssClass","onClick","title"];
exports.render.types = {"cssClass":"any","onClick":"any","title":"any"};
templates = exports;
return exports;

});

class Button extends Component {}
Soy.register(Button, templates);
export { Button, templates };
export default templates;
/* jshint ignore:end */
