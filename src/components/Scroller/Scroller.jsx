/* Matthew DeCalzadilla 2024—2026 */

import { useEffect, useState } from "react";
import ScrollerButtons from "./ScrollerButtons";
import checkTitle from "/src/components/Scroller/__tests__/checkTitle";

Scroller.propTypes = {
    scrollerID: 0,
    elements: [],
    title: '',
};

export default function Scroller({ scrollerID = 0, elements = [], title = '' }) {
    const [ cols, setCols ] = useState([]);

    useEffect(() => {
        const newCols = [];
        let i = 0;

        elements.forEach((element) => {
            newCols.push(
                <div
                id={ `scroller-${ scrollerID }-column-${ i++ }` }
                className='m-auto'>
                    { element }
                </div>
            );
        });

        setCols(newCols);
    }, [ elements, scrollerID ]);

    return (
        <div
        className='position-relative'>
            { checkTitle(title) ? <h2 className='mt-4'>{title}</h2> : <></> }
            <ScrollerButtons
            scrollerID={ scrollerID } />
            <div
            id={ `scroller-${scrollerID}` }
            className='Scroller d-flex mt-3 mb-5 pb-4 overflow-y-hidden'>
                { cols }
            </div>
        </div>
    );
}