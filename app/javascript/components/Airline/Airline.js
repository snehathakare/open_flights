import React, {Fragment} from 'react'

const Airline = (props) => {
    

    return (
        <Fragment>
            <h1>Airline view for app</h1>
            <img className="logo" src={props.attributes.image_url} alt={props.attributes.name} />
            <div className="title">{props.attributes.name}</div>
            <div className="score">{props.attributes.average_score}</div>
            <div className="link">
                <a href={`/airlines/${props.attributes.slug}`}>View Airline Details</a>
            </div>
        </Fragment>
        
        )
}

export default Airline;