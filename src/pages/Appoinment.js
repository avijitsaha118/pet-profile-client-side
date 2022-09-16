import React from 'react';
import { Link } from 'react-router-dom';

const Appoinment = () => {
    return (
        <>
            <Link to='/appointment'>
                <button type="button" class="btn btn-primary btn-rounded">Virtual Appointment</button>
            </Link>

        </>
    );
};

export default Appoinment;