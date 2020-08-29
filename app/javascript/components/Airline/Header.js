import React from 'react'

const Header = (props) => {
    const {name, image_url, average_score} = props.attributes

    return (
        <div>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
            <p>{average_score}</p>
        </div>
    )
}

export default Header;