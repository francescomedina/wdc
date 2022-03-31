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
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.nameText}:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required="required" />
                </label>
                <label>
                    {this.emailText}:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} required="required" />
                </label>
                <label>
                    {this.messageText}:
                    <input type="text" name="message" value={this.state.message} onChange={this.handleInputChange} required="required" />
                </label>
                <input type="submit" value={this.submitText} />
            </form>
        );
    }
}

export default Contact;