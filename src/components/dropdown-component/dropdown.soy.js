/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Dropdown.
 * @public
 */

goog.module('Dropdown.incrementaldom');

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
  if (opt_data.items) {
    incrementalDom.elementOpenStart('select');
        incrementalDom.attr('class', opt_data.cssClass);
        incrementalDom.attr('onChange', 'handleClick');
    incrementalDom.elementOpenEnd();
      var item522List = opt_data.items;
      var item522ListLen = item522List.length;
      for (var item522Index = 0; item522Index < item522ListLen; item522Index++) {
          var item522Data = item522List[item522Index];
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('data-index', item522Index);
              incrementalDom.attr('value', item522Data);
          incrementalDom.elementOpenEnd();
            soyIdom.print(item522Data);
          incrementalDom.elementClose('option');
        }
    incrementalDom.elementClose('select');
  } else {
    incrementalDom.text('"Something went wrong"');
  }
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Dropdown.render';
}

exports.render.params = ["cssClass","items"];
exports.render.types = {"cssClass":"any","items":"any"};
templates = exports;
return exports;

});

class Dropdown extends Component {}
Soy.register(Dropdown, templates);
export { Dropdown, templates };
export default templates;
/* jshint ignore:end */
