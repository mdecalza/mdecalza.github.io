/* 2024 Matthew DeCalzadilla */

import { NavLink } from 'react-router';

NavbarButton.propTypes = {
    text: '',
    widescreen: false,
}

export default function NavbarButton({text = '', widescreen = false}) {
    const navbarButtonClassBase = 'NavbarButton btn btn-dark my-1';

    return (
        <NavLink
        to={{ pathname: `/${ text.toLowerCase() }`,}}
        className={`${navbarButtonClassBase} ${ widescreen ? 'mx-1' : 'mx-auto' }`}
        type='button'>
            {text}
        </NavLink>
    );
}