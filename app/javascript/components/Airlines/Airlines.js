import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Airline from '../Airline/Airline'

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
            <ul>{grid}</ul>
        )
}

export default Airlines;
