import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.nameText = props.nameText;
        this.emailText = props.emailText;
        this.messageText = props.messageText;
        this.submitText = props.submitText;
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        alert('Grazie per il messaggio, ' + this.state.name + '! Ti risponderemo al più presto sulla email ' + this.state.email);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex-form">
                <div className="flex-form-container">
                    <label htmlFor="nome" className="flex-form-label">Nome:</label>
                    <input type="text" id="nome" className="flex-form-input" required="required" />
                </div>
                <div className="flex-form-container">
                    <label htmlFor="cognome" className="flex-form-label">Cognome:</label>
                    <input type="text" id="cognome" className="flex-form-input" required="required" />
                </div>
                <div className="flex-form-container">
                    <label htmlFor="email" className="flex-form-label">Indirizzo email:</label>
                    <input type="text" id="email" className="flex-form-input" required="required" />
                </div>
                <div className="flex-form-container">
                    <button className="btn btn-primary form-flex-button">Invia</button>
                </div>
            </form>
        );
    }
}

export default Contact;