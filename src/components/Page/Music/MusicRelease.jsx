/* 2024 Matthew DeCalzadilla */

MusicRelease.propTypes = {
    title: '',
    releaseDate: '',
    type: '',
    genre: '',
    coverImageSrc: '',
};

export default function MusicRelease({title = '', releaseDate = '', type = '', genre = '', coverImageSrc = ''}) {
    return (
        <div
        className='MusicRelease mx-5'
        style={{
            maxHeight: '90vh',
        }}>
            <img
            src={coverImageSrc}
            className='w-75 m-5 mx-auto rounded-2 border border-3 border-light border-opacity-75' />
            <div
            className='card bg-light px-5 py-3 w-100'>
                <p
                className='fs-3'>
                    <b><i>{title}</i></b>
                </p>
                <p>
                    {type}<br />
                    <i>{genre}</i><br />
                    Released: {releaseDate}<br />
                </p>
            </div>
        </div>
    );
}