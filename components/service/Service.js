import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, plan, price, image } = props?.service
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{plan}</p>
                    <p className="card-text">Price:{price}$</p>
                    <Link to={'/checkout'} className="btn btn-primary">Start Program</Link>
                </div>
            </div>

        </div>
    );
};

export default Service;