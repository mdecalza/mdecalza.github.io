/* Matthew DeCalzadilla 2025 */

import { useEffect, useState } from "react";
import checkTitle from "/src/components/Scroller/__tests__/checkTitle";

TileDisplay.propTypes = {
    elements: [],
    title: '',
}

export default function TileDisplay({ elements = [], title = '' }) {
    const [cols, setCols] = useState([]);

    useEffect(() => {
        const newCols = [];

        elements.forEach((element) => {
            newCols.push(
                <div
                className='col-lg-6'>
                    { element }
                </div>
            );
        });

        setCols(newCols);
    }, [ elements ]);

    return (
        <>
        { checkTitle(title) ? <h2 className='mt-4'>{title}</h2> : <></> }
        <div
        id={ checkTitle(title) ? title : '' }
        className='row justify-content-center mx-auto pb-4'
        style={{ maxWidth: '1920px' }}>
            { cols }
        </div>
        </>
    );
}