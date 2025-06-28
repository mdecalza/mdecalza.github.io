/* Code by 2024—2025 Matthew DeCalzadilla */

import NavbarDropdown from '/src/components/Navbar/NavbarDropdown';
import NavbarLogo from '/src/components/Navbar/NavbarLogo';
import NavbarWidescreen from '/src/components/Navbar/NavbarWidescreen';

export default function Navbar() {
    function allButtonsDisplay() {
        return false;
    }

    return (
        <div
        className='NavbarContainer'>
            <div
            className='Navbar mx-auto pt-2 bg-light rounded-bottom-3 shadow-sm'>
                <NavbarLogo/>
                {allButtonsDisplay() ? <NavbarWidescreen /> : <NavbarDropdown />}
            </div>
        </div>
    );
}