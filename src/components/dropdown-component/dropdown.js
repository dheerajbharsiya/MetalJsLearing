import templates from './dropdown.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Dropdown extends Component {
    handleClick(data) {
        console.log(data.target.value);
        let dropdown = data.delegateTarget;
        let index = dropdown.getAttribute('data-index');
        console.log(this.items[index]);
    }
}
Soy.register(Dropdown, templates);
Soy.STATE = {
    items: {
        valueFn: function valueFn() {
            return ['value1', 'value2', 'value3' , 'value4'];
        }
    }
}

export default Dropdown;
