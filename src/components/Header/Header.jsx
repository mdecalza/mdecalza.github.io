/* Matthew DeCalzadilla 2024—2025 */

Header.propTypes = {
    title: '',
    blurb: '',
}

export default function Header({title = '', blurb = ''}) {
    return (
        <>
        <h1>
            {title}
        </h1>
        <h5
        className='pb-3 opacity-75'>
            {blurb}
        </h5>
        </>
    );
}