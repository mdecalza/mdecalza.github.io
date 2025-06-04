/* Code by 2024—2025 Matthew DeCalzadilla */

/* components */
import NavbarButtons from './NavbarButtonContainer';

export default function NavbarWidescreen() {
    return(
        <div
        className='overflow-hidden d-flex pb-3'>
        <NavbarButtons
        widescreen={true}/>
        </div>
    );
}