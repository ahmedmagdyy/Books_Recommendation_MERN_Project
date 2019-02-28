import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class Foo extends Component {
  state = {
    rating: 3,
  };
  changeRating = (newRating, name) => {
    this.setState({ rating: newRating });
  };

  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="5px"
      />
    );
  }
}
