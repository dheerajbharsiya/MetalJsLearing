/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from contact-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ContactForm.
 * @public
 */

goog.module('ContactForm.incrementaldom');

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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'row');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'col-xs-6');
    incrementalDom.elementOpenEnd();
      var item381List = opt_data.formConfig;
      var item381ListLen = item381List.length;
      for (var item381Index = 0; item381Index < item381ListLen; item381Index++) {
          var item381Data = item381List[item381Index];
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'row');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('label');
                incrementalDom.attr('class', 'control-label col-xs-4');
                incrementalDom.attr('for', 'email');
            incrementalDom.elementOpenEnd();
              soyIdom.print(item381Data.labelName);
            incrementalDom.elementClose('label');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'col-xs-8');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('type', item381Data.fieldType);
                  incrementalDom.attr('value', item381Data.value);
                  incrementalDom.attr('name', item381Data.fieldName);
                  incrementalDom.attr('onChange', 'handleChange');
                  incrementalDom.attr('placeholder', item381Data.fieldName);
                  incrementalDom.attr('class', 'form-control');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        }
      if (opt_data.buttonAvailable) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'row');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'control-label col-xs-4');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('type', 'submit');
                incrementalDom.attr('class', 'btn btn-success');
                incrementalDom.attr('onClick', 'onFormSubmit');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Submit');
            incrementalDom.elementClose('button');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      }
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'col-xs-6');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('id', 'formValues');
          incrementalDom.attr('class', 'form-values');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ContactForm.render';
}

exports.render.params = ["formConfig","buttonAvailable"];
exports.render.types = {"formConfig":"any","buttonAvailable":"any"};
templates = exports;
return exports;

});

class ContactForm extends Component {}
Soy.register(ContactForm, templates);
export { ContactForm, templates };
export default templates;
/* jshint ignore:end */
