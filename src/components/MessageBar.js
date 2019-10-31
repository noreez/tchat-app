import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../actions/messages';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


class MessageBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { message: '' };

  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onAddMessage(this.state.message,'test');
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormControl value={this.state.message} onChange={this.handleChange} placeholder="Votre message" type="text"/>
        <br />
        <Button variant="primary" type="submit">Envoyer</Button>

      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMessage: (message, username) => {
      dispatch(addMessage(message, username));
    },
  };
};

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(MessageBar);
