/* Matthew DeCalzadilla 2024—2025 */

import { useEffect } from 'react';
import { useLocation } from 'react-router';

/* components */
import NavbarButtonContainer from '/src/components/Navbar/NavbarButtonContainer';

/* functions */
import { collapseButtonContainer } from '/src/functions/collapseButtonContainer';

export default function NavbarDropdown() {
    const location = useLocation();

    useEffect(() => {
        collapseButtonContainer(true);
    }, [location.pathname]);

    function handleMouseClick() {
        if (document.querySelector('.NavbarButtonContainer').classList.contains('d-none')) {
            collapseButtonContainer(false);
        } else if (document.querySelector('.NavbarButtonContainer').classList.contains('d-flex')) {
            collapseButtonContainer(true);
        }        
    }

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
                onClick={ handleMouseClick }>
                    &#9662;
                </button>
            </div>
        </div>
    );
}