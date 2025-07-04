/* Matthew DeCalzadilla 2024—2025 */

Header.propTypes = {
    title: '',
    blurb: '',
}

export default function Header({title = '', blurb = ''}) {
    return (
        <>
        <h1
        className='pb-2'>
            {title}
        </h1>
        <hr
        className='py-2'/>
        <p>
            {blurb}
        </p>
        </>
    );
}