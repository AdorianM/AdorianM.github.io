import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Math">Math</Link>
                </li>
                <li>
                    <Link to="/Physics">Physics</Link>
                </li>
                <li>
                    <Link to="/Design">Design</Link>
                </li>
                <li>
                    <Link to="/Others">Others</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;