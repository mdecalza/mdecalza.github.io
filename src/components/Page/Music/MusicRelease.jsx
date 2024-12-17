/* 2024 Matthew DeCalzadilla */

MusicRelease.propTypes = {
    title: '',
    subtitle: '',
    releaseDate: '',
    type: '',
    genre: '',
    coverImageSrc: '',
    links: [],
};

export default function MusicRelease({ title = '', subtitle = '', releaseDate = '', type = '', genre = '', coverImageSrc = '', links = [] }) {
    return (
        <div
        className='MusicRelease fadeInDelayed d-flex flex-column justify-content-evenly align-items-center me-5'>
            <img
            src={ coverImageSrc }
            className='AlbumArt mx-auto my-5 rounded-2 border border-3 border-light border-opacity-75 shadow' />
            <div
            className='card bg-light w-fit-content h-fit-content mx-auto px-5 pt-4 pb-3 shadow-sm'>
                <div
                className='my-auto'>
                    <p
                    className='fs-4 mb-0'>
                        <b><i>{ title }</i></b><br />
                    </p>
                    <p>
                        <b className='fs-6'><i>{ subtitle }</i></b><br />
                        { type }<br />
                        <i>{ genre }</i><br />
                        Released: { releaseDate }
                    </p>
                </div>
            </div>
            <div
            className='d-flex flex-wrap justify-content-center mx-auto py-4'>
                { links }
            </div>
        </div>
    );
}