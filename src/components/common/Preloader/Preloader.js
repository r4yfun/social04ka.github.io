import preloader from '../../../assets/images/preloader.svg'
import React from 'react';

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='Loading...' />
        </div>
    )
}

export default Preloader;