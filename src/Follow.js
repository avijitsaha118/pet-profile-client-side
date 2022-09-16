import React from 'react';
import { Link } from 'react-router-dom';

const Follow = () => {
    return (
        <>
            <Link to='/follow'>
                <button type="button" class="btn btn-primary btn-rounded">Follow</button>
            </Link>

        </>
    );
};

export default Follow;