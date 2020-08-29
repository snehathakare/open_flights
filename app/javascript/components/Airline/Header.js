import React from 'react'

const Header = (props) => {
    const {name, image_url, average_score, reviews} = props.attributes
    const reviewCount = props.reviews

    return (
        <div>
            <img className="logo" src={image_url} height="250" width="250" alt={name} />
            <h1>{name}</h1>
            <span className="review-count">{reviewCount} user reviews</span>
            <p>{average_score} out of 5 stars</p>       
      </div>
    )
}

export default Header;