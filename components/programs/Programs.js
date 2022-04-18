import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Programs = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("fake.json")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data)
            })
    }, []);
    return (
        <div>
            <div className='service-container container-fluid'>
                {
                    services.map(service => <Service key={service?.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Programs;