import React, { Fragment } from 'react'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import './Airline.css'

const ReviewForm = (props) => {
    
    const rating = [5,4,3,2,1].map((score, index) => {
      return(
        <Fragment key={index}>
        <input type="radio" value={score} onChange={()=>console.log('selected:', score)} name="rating" id={`rating-${score}`}/>
        <label></label>
      </Fragment>
      )
      
    })

    return (
        <div className="review_form">
          <form onSubmit={props.handleSubmit}>
            <Typography variant="h6">Share your experience with the airline</Typography> 
            <TextField variant="outlined" label="Review title" className="review_text">
              <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title} />
            </TextField>
            <div>
              <TextField variant="outlined" label="Add your review here" className="review_text">
                <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description} />
              </TextField>
            </div>
            <div>
              <Rating className="review_text"
                name="simple-controlled"
                value={rating}
                />
            </div>
            
            <Button variant="contained" color="primary">submit</Button> 
          </form>
                 
      </div>
    )
}

export default ReviewForm;