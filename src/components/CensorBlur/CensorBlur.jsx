/* 2024 Matthew DeCalzadilla */

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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

    useEffect(() => {
        console.log(on);
    }, [on]);

    return (
        <div
        id='CensorBlur'
        className={`CensorBlur ${on ? 'd-flex' : 'd-none'} flex-column flex-wrap justify-content-center align-items-center`}>
            <div
            className='container-xxl'>
                <h3>
                    <i>CONTENT WARNING</i>
                </h3>
                <hr />
                <p>
                    The art featured on this page contains depections of: <br />
                    <br />
                    {warnings}
                </p>
                <hr />
                <div
                className='d-flex flex-column justify-content-center align-items-center'>
                    <Link
                    to={{ pathname: '/' }}
                    type='button'
                    className='btn btn-light my-2'>
                        &ldquo;No, thanks. Please, take me home.&rdquo;
                    </Link>
                    <button
                    className='btn btn-light opacity-50 my-2'
                    onClick={() => { setOn(false) }}>
                        &ldquo;I am 18+ years of age, and I am okay with seeing this content.&rdquo;
                    </button>
                </div>
            </div>
        </div>
    );
}