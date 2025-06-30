/* Matthew DeCalzadilla 2024—2025 */

/* components */
import NavbarButtonContainer from '/src/components/Navbar/NavbarButtonContainer';

export default function NavbarWidescreen() {
    return(
        <div
        className='overflow-hidden d-flex pb-3'>
        <NavbarButtonContainer
        widescreen={true}/>
        </div>
    );
}