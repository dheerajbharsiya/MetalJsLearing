import './contact-form.scss';
import templates from './contact-form.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import ajax from 'metal-ajax';


class ContactForm extends Component {
    onFormSubmit() {
        console.log(this.formConfig);
        document.getElementById("formValues").innerHTML = JSON.stringify(this.formConfig);
        ajax.request('https://jsonplaceholder.typicode.com/posts', 'post', JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
          }))
        .then(xhrResponse => {
            console.log(xhrResponse.response);
        });
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
        value: []
    }

};
export default ContactForm;