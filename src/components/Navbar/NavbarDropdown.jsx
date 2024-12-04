/* 2024 Matthew DeCalzadilla */

import { useEffect } from 'react';
import { useLocation } from 'react-router';

/* components */
import NavbarButtonContainer from './NavbarButtonContainer';

export default function NavbarDropdown() {
    const location = useLocation();

    useEffect(() => {
        collapseButtonContainer('alwaysCollapse');
    }, [location.pathname])

    return (
        <div
        className='NavbarDropdown'>
            <div>
                <div
                className='d-block'>
                    <NavbarButtonContainer
                    widescreen={false}/>
                </div>
                <button
                className='NavbarDropdownButton btn btn-light mt-2 fs-6 p-0'
                type='button'
                onClick={collapseButtonContainer}>
                    &#9662;
                </button>
            </div>
        </div>
    );
}

function collapseButtonContainer(collapse = null) {
    const navbarButtonContainer = document.getElementsByClassName('NavbarButtonContainer')[0]
    const navbarDropdownButton = document.getElementsByClassName('NavbarDropdownButton')[0];

    if (navbarButtonContainer && navbarDropdownButton) {
        if (navbarButtonContainer.classList.contains('d-flex')) {
            navbarButtonContainer.classList.remove('d-flex');
            navbarButtonContainer.classList.add('d-none');
            navbarDropdownButton.textContent = '\u{25BE}';
        }
        else if (navbarButtonContainer.classList.contains('d-none') && collapse !== 'alwaysCollapse') {
            navbarButtonContainer.classList.remove('d-none');
            navbarButtonContainer.classList.add('d-flex');
            navbarDropdownButton.textContent = '\u{25B4}';
        }
    }
}