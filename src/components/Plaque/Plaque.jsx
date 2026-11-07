/* Matthew DeCalzadilla 2026 */

Plaque.propTypes = {
    contents: <></>,
}

export default function Plaque({ contents = <></> }) {
    return (<>
        <div
        className='bg-dark bg-opacity-25 border border-2 border-light border-opacity-75 rounded-5 px-4 pt-5 pb-4 shadow-lg mt-3 mb-5'>
            { contents }
        </div>
    </>);
}