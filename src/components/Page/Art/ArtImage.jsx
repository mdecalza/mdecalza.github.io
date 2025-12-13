/* Matthew DeCalzadilla 2024—2025 */

import CensorBlur from '/src/components/CensorBlur/CensorBlur';

ArtImage.propTypes = {
    src: '',
    border: true,
    censor: false,
    contentWarningList: [],
}

export default function ArtImage({ src = '', border = true, censor = false, contentWarningList = [] }) {
    return (
        <div
        className={ `my-auto fadeInDelayed rounded-2 ${ border ? 'border border-2 border-opacity-75 shadow mx-3' : 'mx-5' }` }>
            <div
            style={{ position: 'relative' }}>
                { censor ? <CensorBlur contentWarningList={ contentWarningList } /> : <></> }
                <img
                src={ src }
                className={ 'ArtImage rounded-1' }
                />
            </div>
        </div>
    );
}