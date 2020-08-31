import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Airline from './Airline'
import Nav from './Nav'
import './Airlines.css'
import Typography from '@material-ui/core/Typography'

const Airlines = () => {
    
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('/api/v1/airlines.json')
        .then(res =>  {setAirlines(res.data.data)})
        .catch(res => console.log(res))
        
    },[airlines.length])

    const grid = airlines.map(item => {
    return(<Airline key={item.attributes.name}
            attributes = {item.attributes}
        ></Airline>)
    })
    
    return (
            <Fragment>
                <Nav/>
                <div className="header"> 
                  <Typography variant="h3">Open Flights</Typography>
                  <Typography variant="h5">Airline Reviews and Ratings</Typography>
                  <Typography variant="body1">Trip verified honest and unbiased reviews</Typography>
                  <ul className="airlines_grid">{grid}</ul>
                </div>
            </Fragment>    
        )
}

export default Airlines;
