/* Matthew DeCalzadilla 2024—2025 */

import CensorBlur from '/src/components/CensorBlur/CensorBlur';

ArtImage.propTypes = {
    src: null,
    border: true,
    censor: false,
    contentWarningList: [],
    title: '',
    year: 0,
    medium: '',
    size: '',
}

export default function ArtImage({ src = null, border = true, censor = false, contentWarningList = [], title = '', year = 0, medium = '', size = '' }) {
    return (
        <div
        className='d-flex pe-5 fadeInDelayed'>
            <div
            className={ `my-auto rounded-2 ${ border ? 'border border-2 border-opacity-75 shadow mx-3' : 'mx-5' }` }>
                <div
                style={{ position: 'relative' }}>
                    { censor ? <CensorBlur contentWarningList={ contentWarningList } /> : <></> }
                    <img
                    src={ src }
                    className={ 'ArtImage rounded-1' }
                    />
                </div>
            </div>
            { title === '' || year === 0 || medium === '' || size === '' ? <></> :
                <div>
                    <div
                    className='p-3 mt-4 text-start bg-light text-dark rounded-2'
                    style={{ minWidth: '245px', fontSize: '11pt' }}>
                        Matthew DeCalzadilla (b. 1997)
                        <br />
                        <b><i>{ title }</i></b>
                        <br />
                        { year }
                        <br />
                        <i>{ medium }</i>
                        <br />
                        <i>{ size }</i>
                    </div>
                </div>
            }
        </div>
    );
}