/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from popover.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Popover.
 * @public
 */

goog.module('Popover.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  alignedPosition: (?),
 *  elementClasses: (?),
 *  position: (?),
 *  withArrow: (?),
 *  content: (function()|null|undefined),
 *  title: (function()|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {function()|null|undefined} */
  var content = soy.asserts.assertType(opt_data.content == null || goog.isFunction(opt_data.content), 'content', opt_data.content, 'function()|null|undefined');
  /** @type {function()|null|undefined} */
  var title = soy.asserts.assertType(opt_data.title == null || goog.isFunction(opt_data.title), 'title', opt_data.title, 'function()|null|undefined');
  var positionClasses__soy555 = ['top', 'top', 'right', 'bottom', 'bottom', 'bottom', 'left', 'top'];
  var currentPosition__soy557 = (opt_data.alignedPosition != null) ? opt_data.alignedPosition : opt_data.position;
  var positionClass__soy559 = (currentPosition__soy557 != null) ? positionClasses__soy555[currentPosition__soy557] : 'bottom';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'popover ' + positionClass__soy559 + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('role', 'tooltip');
  incrementalDom.elementOpenEnd();
    if (opt_data.withArrow || !(opt_data.withArrow != null)) {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'arrow');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('div');
    }
    incrementalDom.elementOpenStart('h3');
        incrementalDom.attr('class', 'popover-title' + (title ? '' : ' hidden'));
    incrementalDom.elementOpenEnd();
      if (title) {
        title();
      }
    incrementalDom.elementClose('h3');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'popover-content');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('p');
        if (content) {
          content();
        }
      incrementalDom.elementClose('p');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  alignedPosition: (?),
 *  elementClasses: (?),
 *  position: (?),
 *  withArrow: (?),
 *  content: (function()|null|undefined),
 *  title: (function()|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Popover.render';
}

exports.render.params = ["content","title","alignedPosition","elementClasses","position","withArrow"];
exports.render.types = {"content":"html","title":"html","alignedPosition":"any","elementClasses":"any","position":"any","withArrow":"any"};
templates = exports;
return exports;

});

class Popover extends Component {}
Soy.register(Popover, templates);
export { Popover, templates };
export default templates;
/* jshint ignore:end */
