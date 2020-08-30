import React, { Fragment } from 'react'

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
        <div>
          <form onSubmit={props.handleSubmit}>
            <h2>Share your experience with the airline</h2> 
            <p>
              <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title} />
            </p>
            <p>
              <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description} />
            </p>
            <p>
              {rating}
            </p>
            
            <button>submit</button> 
          </form>
                 
      </div>
    )
}

export default ReviewForm;