/* Code by 2024—2025 Matthew DeCalzadilla */

/* components */
import NavbarButtonContainer from './NavbarButtonContainer';

export default function NavbarWidescreen() {
    return(
        <div
        className='overflow-hidden d-flex pb-3'>
        <NavbarButtonContainer
        widescreen={true}/>
        </div>
    );
}