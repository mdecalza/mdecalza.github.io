/* Copyright © 2024—2025 Matthew DeCalzadilla */

UnorderedListLink.propTypes = {
    href: '',
    text: '',
    year: null,
};

export default function UnorderedListLink({ href = '', text = '', year = null }) {
    const yearString = ` (${ year })`;

    return (
        <a
        href={ href }
        className='list-group-item list-group-item-action list-group-item-light py-2'
        type='button'>
            { `${text}${year ? yearString : ''}` }
        </a>
    );
}