/* Matthew DeCalzadilla 2024—2025 */

import ScrollerButtons from "./ScrollerButtons";
import checkTitle from "/src/components/Scroller/__tests__/checkTitle";

Scroller.propTypes = {
    scrollerID: 0,
    elements: [],
    title: '',
};

export default function Scroller({ scrollerID = 0, elements = [], title = '' }) {
    return (
        <div
        className='position-relative'>
            { checkTitle(title) ? <h2 className='mt-4'>{title}</h2> : <></> }
            <div
            id={`scroller-${scrollerID}`}
            className='Scroller d-flex mt-3 mb-5 pb-4 overflow-y-hidden'>
                { elements }
            </div>
            <ScrollerButtons
            scrollerID={ scrollerID } />
        </div>
    );
}