/* Matthew DeCalzadilla 2024—2025 */

WadScreenshot.propTypes = {
    src: '',
};

export default function WadScreenshot({src = ''}) {
    return (
        <img
        src={src}
        className='w-75 m-4 rounded-3 border border-2 border-light border-opacity-75 shadow' />
    );
}