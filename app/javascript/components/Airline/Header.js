import React from 'react'
import Typography from '@material-ui/core/Typography'
import './Airline.css'

const Header = (props) => {
    const {name, image_url, average_score, reviews} = props.attributes
    const reviewCount = props.reviews

    return (
        <div>
            <img className="logo" src={image_url} height="250" width="250" alt={name} />
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{average_score} out of 5 stars</Typography>
            <Typography variant="body1" className="review-count">{reviewCount} user reviews</Typography>      
      </div>
    )
}

export default Header;