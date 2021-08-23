import React from 'react'
import Spinner from './../assets/spinner';

function Spinner() {
    return (
        <div>
        <img
            src={Spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="Loading..."
        />
    </div>
    )
}

export default Spinner;
