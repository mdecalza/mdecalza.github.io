/* Code by 2024—2025 Matthew DeCalzadilla */

import { Link } from 'react-router';

/* components */
import logo from '../../assets/home/mateo.png';

export default function NavbarLogo() {
    return (
        <Link
        to={{ pathname: '/', }}>
            <img
            src={logo}
            className='NavbarLogo mx-auto px-5 d-block'/>
        </Link>
    );
}