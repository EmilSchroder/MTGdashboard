import React from 'react'

const SingleDeck = (props) => {
    return (
    <React.Fragment>
        <figure>
            <image src={props.image} />
            <figcaption>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
            </figcaption>
        </figure>
    </React.Fragment>
    )

}

export default SingleDeck