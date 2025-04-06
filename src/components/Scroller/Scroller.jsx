/* Copyright © 2024—2025 Matthew DeCalzadilla */

import checkTitle from "./__tests__/checkTitle";

Scroller.propTypes = {
    elements: [],
    title: '',
};

export default function Scroller({ elements = [], title = '' }) {
    return (
        <>
        { checkTitle(title) ? <h2 className='mt-4'>{title}</h2> : <></> }
        <div
        id={checkTitle(title) ? title : ''}
        className='Scroller d-flex mt-3 mb-5 pb-4 overflow-y-hidden'>
            { elements }
        </div>
        </>
    );
}