import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleOnChange = event => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleOnChange} />
        <input type="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
