import './modal.scss';
import './CloseHeader.js';
import ModalBasicBody from './templates/modal-basic-body.js';
import templates from './Modal.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';


class Modal extends Component {
	close() {
		this.shown = false;
	}

	rendered() {
		let modalBody = document.getElementById('modal-body');
		new ModalBasicBody({name:'dheeraj'}, modalBody);
		//new ModalBasicBody({element: '#modal-body'});
	}
}
Soy.register(Modal, templates);

Modal.STATE = {
	body: {
		value: ''
	},
	header: {
		value: 'Default header'
	},
	shown: {
		// The default value will be: `true`.
		value: false
	}
};

export default Modal;

