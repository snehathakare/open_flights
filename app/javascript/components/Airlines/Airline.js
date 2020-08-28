import React, {Fragment} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import './Airlines.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Airline = (props) => {
    return ( 
        <Card className="airline_card">
          <CardContent className="airline_details">
            <img className="logo" src={props.attributes.image_url} alt={props.attributes.name} />
            <Typography variant="h5" component="h3">
              <div className="title">{props.attributes.name}</div>
            </Typography>
            <Typography variant="h6" component="h6">
              <div className="score">Reviews: {props.attributes.average_score}</div>
            </Typography>
            <div className="link">
              <Button className="airline_button" variant="contained">
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline Details</Link>
              </Button> 
            </div>
          </CardContent>
        </Card>
        )
}

export default Airline;