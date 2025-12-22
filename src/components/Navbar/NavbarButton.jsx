/* Matthew DeCalzadilla 2024—2025 */

import { NavLink } from 'react-router';

NavbarButton.propTypes = {
    buttonText: '',
    pageURLname: '',
    widescreen: false,
}

export default function NavbarButton({buttonText = '', pageURLname = '', widescreen = false}) {
    return (
        <NavLink
        to={{ pathname: `/${ pageURLname.toLowerCase() }`,}}
        className={`NavbarButton growOnHover btn btn-dark my-1 ${ widescreen ? 'mx-1' : 'mx-auto' }`}
        type='button'>
            { buttonText }
        </NavLink>
    );
}