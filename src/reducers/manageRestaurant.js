
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {reviews: [], restaurants: []}, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            console.log(action)
            let restaurantObj = {
                id: cuid(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurantObj]};
        case "DELETE_RESTAURANT":
            console.log(action)
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)};
        case "ADD_REVIEW":
            console.log(action)
            let newReview = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return {...state, reviews: [...state.reviews, newReview] };
        case "DELETE_REVIEW":
            console.log(action)
            return {...state, reviews: state.reviews.filter(rev => rev.id !== action.id)}
        default:
        return state
    }
}
