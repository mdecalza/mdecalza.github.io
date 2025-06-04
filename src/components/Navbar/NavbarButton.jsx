/* Code by 2024—2025 Matthew DeCalzadilla */

import { NavLink } from 'react-router';

NavbarButton.propTypes = {
    text: '',
    widescreen: false,
}

export default function NavbarButton({text = '', widescreen = false}) {
    return (
        <NavLink
        to={{ pathname: `/${ text.toLowerCase() }`,}}
        className={`NavbarButton growOnHover btn btn-dark my-1 ${ widescreen ? 'mx-1' : 'mx-auto' }`}
        type='button'>
            {text}
        </NavLink>
    );
}