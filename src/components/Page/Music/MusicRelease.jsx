/* Matthew DeCalzadilla 2024—2025 */

/* components */
import BlockQuote from '/src/components/BlockQuote/BlockQuote';

/* icons */
import explicitIcon from '/src/assets/icons/alphabet-e-icon.svg'

MusicRelease.propTypes = {
    title: '',
    subtitle: '',
    releaseDate: '',
    type: '',
    genre: '',
    description: '',
    coverImageSrc: '',
    explicit: false,
    embedLink: '',
    links: [],
};

export default function MusicRelease({ title = '', subtitle = '', releaseDate = '', type = '', genre = '', description = '', coverImageSrc = '', explicit = false, embedLink = '', links = [] }) {
    return (
        <div
        className='MusicRelease fadeInDelayed d-flex flex-column align-items-center px-5'>
            <div
            className='position-relative mx-auto my-5 shadow'
            style={{ width: '90%'
            }}>
                <iframe
                src={ embedLink }
                title={ title }
                frameBorder="0"
                allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className='MusicEmbed z-2 w-100 h-100 position-absolute rounded-1'></iframe>
                <img
                src={ coverImageSrc }
                className='AlbumArt rounded-1' />
            </div>
            <div
            className='card bg-light w-100 mx-auto px-5 py-2 shadow-sm'>
                <div
                className='d-flex flex-column my-auto py-3 flex-fill'>
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
                    <div>
                        { links.length != 0 ? <i className='opacity-50 pb-1' style={{ fontSize: '1.1em' }}>Links:</i> : <></> }
                        <div
                        className='d-flex flex-wrap justify-content-center mx-auto pt-1'>
                            { links }
                        </div>
                    </div>
                    <div
                    className='py-3'>
                        { description !== '' ? <BlockQuote text={ description } textAlign='center' /> : <></> }
                    </div>
                </div>
            </div>
        </div>
    );
}