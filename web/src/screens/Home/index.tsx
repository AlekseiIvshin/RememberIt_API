import React from 'react';
import {
    Link
} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;