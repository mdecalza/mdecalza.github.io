/* Matthew DeCalzadilla 2024—2025 */

import { useEffect, useState } from 'react';

CensorBlur.propTypes = {
    contentWarningList: [],
};

export default function CensorBlur({ contentWarningList = [] }) {
    const [warnings, setWarnings] = useState('');
    const [on, setOn] = useState(true);

    useEffect(() => {
        let listString = '';

        for (let i = 0; i < contentWarningList.length; i++) {
            listString += contentWarningList[i] + ((i !== contentWarningList.length - 1) ? ', ' : '');
        }

        setWarnings(listString);
    }, [contentWarningList]);

    return (
        <div
        id='CensorBlur'
        className={`CensorBlur ${on ? 'd-flex' : 'd-none'} flex-column flex-wrap justify-content-center align-items-center overflow-hidden`}>
            <div
            className='w-75'
            style={{ fontSize: '0.85em' }}>
                <b>CONTENT WARNING</b><br />
                This content contains depections of:<br />
                <b>{warnings}</b>
                <div
                className='d-flex flex-column justify-content-center align-items-center mx-auto'>
                    <button
                    onClick={() => { setOn(false) }}
                    className='growOnHover btn btn-light opacity-75 p-1'
                    style={{ fontSize: '0.85em' }}>
                        &ldquo;I am 18+ years of age, and I am okay with seeing this content.&rdquo;
                    </button>
                </div>
            </div>
        </div>
    );
}