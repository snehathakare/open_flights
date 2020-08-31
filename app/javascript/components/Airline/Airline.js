import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios';
import ReviewForm from './ReviewForm'
import './Airline.css'

const Airline = (props) => {

    const [airline, setAirline] = useState({});
    const [review, setReview] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const slug = props.match.params.slug
       const url = `/api/v1/airlines/${slug}`
    
       axios.get(url)
        .then(res => {
            console.log(res.data.data)
            setAirline(res.data.data)
            setReview(res.data.data.relationships)
            setLoaded(true)
        })
        .catch(res => console.log(res))
      
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        //console.log('name:', e.target.name, 'value:', e.target.value)
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        //console.log(reviews)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const airline_id = airline.id
        axios.post('/api/v1/reviews', {review, airline_id})
        .then(res => {
            const included = [...airline.included, res.data]
            setAirline({...airline, included})
            setReview({title:'', description:'', score:0})
            
        })
        .catch(res => console.log(res))


    }

    return (
        <div className="airline">
            {
                loaded &&
                <Header 
                    attributes={airline.attributes} 
                    review = {airline.relationships.reviews.data.length}
                />
                
            }

            <ReviewForm 
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                attributes={airline.attributes} 
                review = {review}
            />
            
        </div>
        
        
    )
}

export default Airline;