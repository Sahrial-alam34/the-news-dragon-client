import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odio, illum inventore et illo adipisci exercitationem accusantium voluptate pariatur cumque consectetur error! Ea consectetur accusantium nobis dicta praesentium neque laborum.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;