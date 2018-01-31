import "./popover.scss";
import templates from './popover.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Popover extends Component {
    handleClick(data) {
    }
}
Soy.register(Popover, templates);
Popover.STATE = {
    /**
* The popover's content.
* @type {string}
*/
    content: {
        isHtml: true,
        value: "<h2>Popover content</h2>"
    },

    /**
* Trigger events used to bind handlers to show and hide popover.
* @type {!Array<string>}
* @default ['click', 'click']
*/
    triggerEvents: {
        validator: Array.isArray,
        value: ['click', 'click']
    },

    /**
* Flag indicating if an arrow should be rendered for the popover.
* @type {boolean}
* @default true
*/
    withArrow: {
        value: true
    },

    title: {
        value: "popover"
    },



};
