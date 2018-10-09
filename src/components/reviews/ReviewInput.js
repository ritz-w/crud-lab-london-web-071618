import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
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

export default ReviewInput;
