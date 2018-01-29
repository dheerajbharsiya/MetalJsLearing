/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from home.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Home.
 * @public
 */

goog.module('Home.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('Button.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Dropdown.incrementaldom', 'render');


/**
 * @param {{
 *  btnCssClass: (?),
 *  btnClick: (?),
 *  btnTitle: (?),
 *  dropdownData: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {?} */
  var btnCssClass = opt_data.btnCssClass;
  /** @type {?} */
  var btnClick = opt_data.btnClick;
  /** @type {?} */
  var btnTitle = opt_data.btnTitle;
  /** @type {?} */
  var dropdownData = opt_data.dropdownData;
  incrementalDom.elementOpenStart('header');
      incrementalDom.attr('class', 'container-fluid text-center');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('h1');
      incrementalDom.text('Metal Js Components');
    incrementalDom.elementClose('h1');
  incrementalDom.elementClose('header');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'row');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-xs-4');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'form-group');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('label');
              incrementalDom.attr('for', 'sel1');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Button:');
          incrementalDom.elementClose('label');
          $templateAlias1({cssClass: btnCssClass, onClick: btnClick, title: btnTitle}, null, opt_ijData);
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-xs-4');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'form-group');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('label');
              incrementalDom.attr('for', 'sel1');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Select:');
          incrementalDom.elementClose('label');
          $templateAlias2({cssClass: 'btn btn-secondary dropdown-toggle form-control', onClick: btnClick, items: dropdownData}, null, opt_ijData);
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('footer');
      incrementalDom.attr('class', 'container-fluid text-right');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('p');
      incrementalDom.text('@Footer Text');
    incrementalDom.elementClose('p');
  incrementalDom.elementClose('footer');
}
exports.render = $render;
/**
 * @typedef {{
 *  btnCssClass: (?),
 *  btnClick: (?),
 *  btnTitle: (?),
 *  dropdownData: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Home.render';
}

exports.render.params = ["btnCssClass","btnClick","btnTitle","dropdownData"];
exports.render.types = {"btnCssClass":"?","btnClick":"?","btnTitle":"?","dropdownData":"?"};
templates = exports;
return exports;

});

class Home extends Component {}
Soy.register(Home, templates);
export { Home, templates };
export default templates;
/* jshint ignore:end */
