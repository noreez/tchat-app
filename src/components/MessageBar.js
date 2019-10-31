import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../actions/messages';

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
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.message} onChange={this.handleChange} placeholder="Votre message" type="text"/>
        <br />
        <button type="submit">Envoyer</button>
      </form>
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
