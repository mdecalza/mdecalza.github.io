/* Copyright © 2024—2025 Matthew DeCalzadilla */

ArtImage.propTypes = {
    src: '',
    border: true,
}

export default function ArtImage({ src = '', border = true }) {
    return (
        <img
        src={ src }
        className={`ArtImage fadeInDelayed my-auto rounded-2 ${border ? 'border border-2 border-opacity-75 shadow mx-3' : 'mx-5'}`}/>
    );
}