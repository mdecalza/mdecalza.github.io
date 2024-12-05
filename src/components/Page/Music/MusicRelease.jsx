/* 2024 Matthew DeCalzadilla */

MusicRelease.propTypes = {
    title: '',
    subtitle: '',
    releaseDate: '',
    type: '',
    genre: '',
    coverImageSrc: '',
};

export default function MusicRelease({title = '', subtitle = '', releaseDate = '', type = '', genre = '', coverImageSrc = ''}) {
    return (
        <div
        className='MusicRelease mx-5'>
            <img
            src={coverImageSrc}
            className='w-75 m-5 mx-auto rounded-2 border border-3 border-light border-opacity-75' />
            <div
            className='card bg-light px-5 py-3 w-100'>
                <p
                className='fs-4 mb-0'>
                    <b><i>{title}</i></b><br />
                </p>
                <p>
                    <b className='fs-6'><i>{subtitle}</i></b><br />
                    {type}<br />
                    <i>{genre}</i><br />
                    Released: {releaseDate}
                </p>
            </div>
        </div>
    );
}