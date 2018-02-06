import './Modal.js';
import './components/button-component/button.js';
import './components/dropdown-component/dropdown.js';
import './components/contact-form/contact-form.js';
import './components/popover/popover.js';
import templates from './home.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import idom from 'incremental-dom';


class Home extends Component {

    constructor(config) {
        console.log(config);
        super(config);
        this.btnTitle = 'My Common Button';
        this.btnCssClass = 'btn btn-primary form-control';
        this.dropdownData = ['value1', 'value2', 'value3', 'value4'];
        this.popoverClasses = '';
        this.contactFormConfig = [
            {
                fieldName: 'username',
                labelName: 'Username',
                fieldType: 'text',
                value: 'db',
                hasButton: true
            },
            {
                fieldName: 'password',
                labelName: 'Password',
                fieldType: 'password',
                value: 'db',
                hasButton: true
            }
        ];
    }

    btnClick() {
        console.log('button submit functionality');
        this.stateVar = 'ddfsdffsdfdddfddfdfdf';
        idom.elementOpen('div', null, ['class', 'text-bold'], null);
        idom.text('Added using Incremental Dom');
        idom.elementClose('div');
        patch(document.body, renderHello);
    }

    modalBtnClick() {
        //     soy.renderElement(myElement, examples.simple.helloName, {name: 'Ed'});
        if(this.isModalVisible) {
            this.isModalVisible = false;
        } else {
            this.isModalVisible = true;
        }

    }

    popoverBtnClick () {
        if(this.popoverClasses === '') {
            this.popoverClasses = 'visible';
        } else {
            this.popoverClasses = '';
        }
    }

}
Soy.register(Home, templates);

Home.STATE = {
    popoverClasses: {
        value: ''
    },
    isModalVisible: {
        value: false
    },
    stateVar: {
        value: "djeerak"
    }
}

export default Home;

