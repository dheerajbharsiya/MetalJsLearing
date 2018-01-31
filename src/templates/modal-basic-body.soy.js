/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from modal-basic-body.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ModalBasicBody.
 * @public
 */

goog.module('ModalBasicBody.incrementaldom');

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
  opt_data = opt_data || {};
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpen('h3');
      incrementalDom.text('  ');
      soyIdom.print(opt_data.name);
      incrementalDom.text(' into template ');
    incrementalDom.elementClose('h3');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ModalBasicBody.render';
}

exports.render.params = ["name"];
exports.render.types = {"name":"any"};
templates = exports;
return exports;

});

class ModalBasicBody extends Component {}
Soy.register(ModalBasicBody, templates);
export { ModalBasicBody, templates };
export default templates;
/* jshint ignore:end */
