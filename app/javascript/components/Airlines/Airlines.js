import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Airline from '../Airline/Airline'
import './Airlines.css'

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
            <div className="header">
                <h1>Open Flights</h1>
                <h2>Honest Unbiased Airline Reviews</h2>
                <ul className="airlines_grid">{grid}</ul>
            </div>
        )
}

export default Airlines;
