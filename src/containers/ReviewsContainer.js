import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  reviewsForRestaurant = () => {
    let foundRes = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    return foundRes
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.reviewsForRestaurant()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addReview: (reviewText, restaurantId) => dispatch({type: 'ADD_REVIEW', review: { text: reviewText, restaurantId }}),
    deleteReview: (reviewId) => dispatch({type: "DELETE_REVIEW", id: reviewId})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
