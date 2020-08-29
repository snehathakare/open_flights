import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios';

const Airline = (props) => {

    const [airline, setAirline] = useState({});
    const [reviews, setReviews] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const slug = props.match.params.slug
       const url = `/api/v1/airlines/${slug}`
    
       axios.get(url)
        .then(res => {
            console.log(res)
            setAirline(res.data.data)
            setLoaded(true)
        })
        .catch(res => console.log(res))

      
    },[])


    return (
        <div>
            {
                loaded &&
                <Header 
                    attributes={airline.attributes} 
                />
            }
            
        </div>
        
        
    )
}

export default Airline;