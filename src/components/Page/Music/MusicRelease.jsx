/* Code by 2024—2025 Matthew DeCalzadilla */

import BlockQuote from '../../BlockQuote/BlockQuote';

MusicRelease.propTypes = {
    title: '',
    subtitle: '',
    releaseDate: '',
    type: '',
    genre: '',
    description: '',
    coverImageSrc: '',
    links: [],
};

export default function MusicRelease({ title = '', subtitle = '', releaseDate = '', type = '', genre = '', description = '', coverImageSrc = '', links = [] }) {
    return (
        <div
        className='MusicRelease fadeInDelayed d-flex flex-column justify-content-between align-items-center mx-3 h-100'>
            <img
            src={ coverImageSrc }
            className='AlbumArt mx-auto my-5 rounded-2 border border-3 border-light border-opacity-75 shadow' />
            <div
            className='card bg-light w-fit-content mx-auto px-5 py-1 shadow-sm'>
                <div
                className='d-flex flex-column my-auto align-items-center justify-content-around py-3'>
                    <p>
                        <b>
                            <i style={{ fontSize: 'clamp(105%, 1.3rem, 1.6vw)' }}>{ title }</i>
                            {subtitle !== '' ? <><br /><i className='fs-6'>{ subtitle }</i></> : <></>}
                        </b><br />
                        <i
                        className='opacity-75'>{ type }</i><br />
                        <i
                        className='opacity-50'>{ genre }</i><br />
                        { releaseDate !== '' ? <div className='pt-2'>Released: { releaseDate }</div> : <></> }
                    </p>
                    { description !== '' ? <BlockQuote text={ description } textAlign='center' /> : <></> }
                    { links.length != 0 ? <i className='opacity-50 pb-1' style={{ fontSize: 'clamp(0.5vw, 0.95rem, 0.85vw)' }}>Listen on:</i> : <></> }
                    <div
                    className='d-flex flex-wrap justify-content-center mx-auto pt-1'>
                        { links }
                    </div>
                </div>
            </div>
        </div>
    );
}