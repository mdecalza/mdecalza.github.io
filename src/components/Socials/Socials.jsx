/* Matthew DeCalzadilla 2024—2025 */

import { createElement, useEffect, useState } from 'react';
import SocialsLink from '/src/components/Socials/SocialsLink';

Socials.propTypes = {
    socialsList: [],
    header: true,
};

export default function Socials({socialsList = []}) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        let elements = [];

        socialsList.forEach((social) => {
            const element = createElement(SocialsLink, { target: social });
            elements.push(element);
        });

        setContent(elements);
    }, [socialsList]);

    return (
        <>
        <div
        className='mx-auto pb-4'>
            { content }
        </div>
        </>
    );
}