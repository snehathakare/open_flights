import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios';
import ReviewForm from './ReviewForm'

const Airline = (props) => {

    const [airline, setAirline] = useState({});
    const [reviews, setReviews] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const slug = props.match.params.slug
       const url = `/api/v1/airlines/${slug}`
    
       axios.get(url)
        .then(res => {
           // console.log(res.data.data)
            setAirline(res.data.data)
            setReviews(res.data.data.relationships)
            setLoaded(true)
        })
        .catch(res => console.log(res))
      
    },[])

    const handleChange = () => {}

    const handleSubmit = () => {}

    return (
        <div>
            {
                loaded &&
                <Header 
                    attributes={airline.attributes} 
                    reviews = {airline.relationships.reviews.data.length}
                />
                
            }

            <ReviewForm />
            
        </div>
        
        
    )
}

export default Airline;