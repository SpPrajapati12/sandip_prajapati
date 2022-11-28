import React from 'react'
import "./card.css"

const Card = ({items}) => {
    return (
        <div className='col-sm-6 col-md-4 v my-2'>
            <div className="card d-flex justify-content-center align-items-center shadow rounded " >
                <img className="card-img-top rounded-circle avatar-image" src={items.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{`${items.firstName} ${items.lastName}`}</h5>
                        <p className="card-text">{items.email}</p>
                    </div>
            </div>
        </div>
    )
}

export default Card
