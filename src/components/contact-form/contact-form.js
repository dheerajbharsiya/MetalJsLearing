import './contact-form.scss';
import templates from './contact-form.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class ContactForm extends Component {
    onFormSubmit() {
        console.log(this.formConfig);
        document.getElementById("formValues").innerHTML = JSON.stringify(this.formConfig);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.formConfig.map(config => {
            if (config.fieldName === target.name) {
                config.value = value;
            }
        });
    }
}

Soy.register(ContactForm, templates);
ContactForm.STATE = {
    formConfig: {
        value: [
            {
                fieldName: 'username',
                labelName: 'Username',
                fieldType: 'text',
                value: 'db'
            }
        ]
    }

};
export default ContactForm;