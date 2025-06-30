/* Matthew DeCalzadilla 2024—2025 */

/* components */
import NavbarDropdown from '/src/components/Navbar/NavbarDropdown';
import NavbarLogo from '/src/components/Navbar/NavbarLogo';

export default function Navbar() {
    return (
        <div
        className='NavbarContainer'>
            <div
            className='Navbar mx-auto pt-2 bg-light rounded-bottom-3 shadow-sm'>
                <NavbarLogo/>
                <NavbarDropdown />
            </div>
        </div>
    );
}