/* Matthew DeCalzadilla 2025 */

BlockQuote.propTypes = {
    text: '',
    textAlign: 'end',
};

export default function BlockQuote({ text = '', textAlign = 'start' }) {
    return (
        <div
        className={`${ textAlign === 'center' ? 'text-center' : `${ textAlign === 'end' ? 'text-end' : 'text-start' }` }`}>
            <div
            className='blockquote fw-light opacity-75'
            style={{ fontSize: 'clamp(0.85vw, 1.05rem, 4.1vw)' }}>
                <i>{ text }</i>
            </div>
        </div>
    );
}