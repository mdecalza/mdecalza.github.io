/* Copyright © 2024—2025 Matthew DeCalzadilla */

const initialDate = 2024;
const currentDate = new Date().getFullYear();

export default function Footer() {
    return (
        <div
        className='FooterContainer'>
            <footer
            className='Footer mx-auto p-4 text-center text-light text-opacity-50'>
                &copy; {
                    (currentDate === initialDate) ?
                    initialDate :
                    initialDate.toString() + ' - ' + currentDate
                } Matthew DeCalzadilla
            </footer>
        </div>
    );
}