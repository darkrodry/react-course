import React, { Component } from 'react';

import debounce from 'lodash/debounce';

export default class ContactPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      question: '',
    };

    /* Debounced methods */
    this.formInputChangeHandler = debounce(this.formInputChangeHandler, 300);
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submited!");
  };

  formInputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label htmlFor="userName">User name:</label>
            <input
              onChange={this.formInputChangeHandler}
              type="text"
              name="userName"
              id="userName" />
          </div>

          <div>
            <label htmlFor="question">Question:</label>
            <textarea
              onChange={this.formInputChangeHandler}
              name="question"
              id="question" />
          </div>
          <button>Submit</button>
        </form>

        <div>
          <h2>Preview</h2>
          <p>Name: {this.state.userName}</p>
          <p>Question: {this.state.question}</p>
        </div>
      </div>
    )
  }
}
