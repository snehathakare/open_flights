import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Airlines = () => {
    
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('/api/v1/airlines.json')
        .then(res =>  {setAirlines(res.data.data)})
        .catch(res => console.log(res))

    },[airlines.length])

    const list = airlines.map(item => {
    return(<li key={item.attributes.name}>{item.attributes.name}</li>)
    })
    
    return (
            <ul>{list}</ul>
        )
}

export default Airlines;
