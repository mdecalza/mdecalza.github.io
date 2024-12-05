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
        className='MusicRelease d-flex flex-column mx-5 justify-content-center'>
            <img
            src={coverImageSrc}
            className='AlbumArt mx-auto my-5 rounded-2 border border-3 border-light border-opacity-75' />
            <div
            className='AlbumCard card bg-light w-fit-content mx-auto px-4 py-3'>
                <div
                className='my-auto'>
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
        </div>
    );
}