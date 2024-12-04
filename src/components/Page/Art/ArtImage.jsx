/* 2024 Matthew DeCalzadilla */

ArtImage.propTypes = {
    src: '',
}

export default function ArtImage({src = ''}) {
    return (
        <img
        src={src}
        className='ArtImage mx-3 my-auto rounded-2 border border-2 border-opacity-75'/>
    );
}