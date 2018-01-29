import './Modal.js';
import './components/button-component/button.js';
import './components/dropdown-component/dropdown.js';
import templates from './home.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Home extends Component {
   
    constructor(config) {
        console.log(config);
        super(config);
        this.btnTitle = 'My Common Button';
        this.btnCssClass = 'btn btn-primary form-control';
        this.dropdownData = ['value1', 'value2', 'value3' , 'value4'];
    }

    btnClick() {
        console.log('button submit functionality');
    }

}
Soy.register(Home, templates);


export default Home;

