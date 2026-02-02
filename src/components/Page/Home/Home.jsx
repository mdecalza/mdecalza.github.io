/* Matthew DeCalzadilla 2024—2025 */

/* components */
import Socials from '/src/components/Socials/Socials';
import Thumbnail from '../../Thumbnail/Thumbnail';

/* assets */
import artThumbnail from '/src/assets/art/int3-title.png';
import mateoLogo from '/src/assets/home/mateowhite.png';
import musicThumbnail from '/src/assets/music/7.png';
import wadsThumbnail from '/src/assets/wads/atone/atone-p1.png';

export default function Home() {
    return(
        <div
        className='fadeIn container-xxl'>
            <div>
                <img
                src={ mateoLogo }
                className='MateoLogo w-100 pb-3'/>
                <h5
                className='pt-2 pb-1 opacity-75'>
                    Home to the works of Matthew DeCalzadilla
                </h5>
            </div>
            <div className='px-4 pt-4 pb-5'>
                <div
                className='row justify-content-center'>
                    <div
                    className='col-lg-5 py-3'>
                        <div
                        className='py-3 rounded-5 shadow border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Thumbnail
                            to={{ pathname: 'wads' }}
                            imgSrc={ wadsThumbnail }
                            text='Doom Wads'
                            width='90%'
                            height='128px' />
                            <Socials
                            socialsList={[
                                'doomwiki',
                                'doomworld',
                                'doom-youtube',
                            ]} />
                        </div>
                    </div>
                    <div
                    className='col-lg-5 py-3'>
                        <div
                        className='py-3 rounded-5 border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Thumbnail
                            to={{ pathname: 'art' }}
                            imgSrc={ artThumbnail }
                            text='Art'
                            width='90%'
                            height='128px' />
                            <Socials
                            socialsList={[ 'art-instagram' ]} />
                        </div>
                    </div>
                    <div
                    className='col-lg-8 py-3'>
                        <div
                        className='py-3 rounded-5 border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Thumbnail
                            to={{ pathname: 'music' }}
                            imgSrc={ musicThumbnail }
                            text='Music'
                            width='90%'
                            height='128px' />
                            <Socials
                            socialsList={[
                                'apple-music',
                                'music-youtube',
                                'bandcamp',
                                'tiktok',
                                'music-instagram',
                                'soundcloud',
                                'twitter',
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
            <Socials
            socialsList={[
                'linkedin',
                'patreon-doom',
            ]} />
        </div>
    );
}