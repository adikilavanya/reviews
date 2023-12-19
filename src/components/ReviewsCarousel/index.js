// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(previousState => ({
        activeReview: previousState.activeReview + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(previousState => ({
        activeReview: previousState.activeReview - 1,
      }))
    }
  }

  render() {
    const {reviewList} = this.props
    const {activeReview} = this.state
    const currentReview = reviewList[activeReview]

    return (
      <div>
        <h1>Reviews</h1>
        <div>
          <button
            className="button"
            onClick={this.onLeftArrow}
            testid="leftArrow"
            type="button"
          >
            <img
              className="img"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderActiveReview(currentReview)}
          <button
            type="button"
            onClick={this.onRightArrow}
            testid="rightarrow"
            className="button"
          >
            <img
              className="img"
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
