import React, { useEffect, useState } from 'react';
import Service from '../../service/Service';
import './services.css'

const Services = () => {
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
            <h2 className='service- '>Our Programs</h2>
            <div className='service-container container-fluid p-5 mx-auto'>
                {services[0] ? <Service key={services[0]?.id} service={services[0]}></Service> : <></>}
                {services[1] ? <Service key={services[1]?.id} service={services[1]}></Service> : <></>}
                {services[2] ? <Service key={services[2]?.id} service={services[2]}></Service> : <></>}
            </div>
        </div>
    );
};

export default Services;