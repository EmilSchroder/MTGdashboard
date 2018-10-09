import React from 'react'

const SingleDeck = (props) => {
    return (
    <React.Fragment>
        <figure>
            <img src={props.image} />
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </figcaption>
        </figure>
    </React.Fragment>
    )

}

export default SingleDeck