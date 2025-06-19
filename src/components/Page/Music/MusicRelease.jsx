/* Code by 2024—2025 Matthew DeCalzadilla */

/* components */
import BlockQuote from '../../BlockQuote/BlockQuote';

/* icons */
import explicitIcon from '../../../assets/icons/alphabet-e-icon.svg'

MusicRelease.propTypes = {
    title: '',
    subtitle: '',
    releaseDate: '',
    type: '',
    genre: '',
    description: '',
    coverImageSrc: '',
    explicit: false,
    links: [],
};

export default function MusicRelease({ title = '', subtitle = '', releaseDate = '', type = '', genre = '', description = '', coverImageSrc = '', explicit = false, links = [] }) {
    return (
        <div
        className='MusicRelease fadeInDelayed d-flex flex-column align-items-center mx-3'>
            <img
            src={ coverImageSrc }
            className='AlbumArt mx-auto my-5 rounded-2 border border-3 border-light border-opacity-75 shadow' />
            <div
            className='card bg-light w-100 mx-auto px-5 py-2 shadow-sm'>
                <div
                className='d-flex flex-column my-auto py-3 flex-fill justify-content-between'>
                    <p>
                        <div>
                            <b>
                                <div
                                className='d-flex flex-row m-0 p-0 justify-content-center'>
                                    <i className='pe-1' style={{ fontSize: 'clamp(105%, 1.24rem, 1.6vw)' }}>{ title }</i>
                                    { explicit ? <img src={ explicitIcon } alt='(Explicit)' className='ps-2 align-self-center' style={{ height: '1rem' }} /> : <></> }
                                </div>
                                {subtitle !== '' ? <><i className='fs-6'>{ subtitle }</i></> : <></>}
                            </b>
                        </div>
                        <i
                        className='opacity-75'>{ type }</i><br />
                        <i
                        className='opacity-50'>{ genre }</i><br />
                        { releaseDate !== '' ? <div className='pt-1'>Released: { releaseDate }</div> : <></> }
                    </p>
                    <div
                    className='py-3'>
                        { description !== '' ? <BlockQuote text={ description } textAlign='center' /> : <></> }
                    </div>
                    <div>
                        { links.length != 0 ? <i className='opacity-50 pb-1' style={{ fontSize: '1.1em' }}>Links:</i> : <></> }
                        <div
                        className='d-flex flex-wrap justify-content-center mx-auto pt-1'>
                            { links }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}