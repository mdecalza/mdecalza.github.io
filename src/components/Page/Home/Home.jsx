/* Matthew DeCalzadilla 2024—2025 */

/* components */
import Socials from '/src/components/Socials/Socials';
import Thumbnail from '../../Thumbnail/Thumbnail';

/* assets */
import artThumbnail from '/src/assets/art/second-mix-titlepic2-PALLARGE.png';
import mateoLogo from '/src/assets/home/mateowhite.png';
import musicThumbnail from '/src/assets/art/olegio.png';
import wadsThumbnail from '/src/assets/wads/crud/crud-p3.png';

export default function Home() {
    return(
        <div
        className='fadeIn container-xxl'>
            <div>
                <img
                src={ mateoLogo }
                className='MateoLogo w-100 pb-3'/>
                <h5
                className='pt-2 pb-1 opacity-75'
                style={{ fontFamily: 'Metropolis Thin' }}>
                    Home to the works of Matthew DeCalzadilla
                </h5>
            </div>
            <div className='px-4 pt-4 pb-5'>
                <div
                className='row justify-content-center'>
                    <div
                    className='col-lg-5 py-3'>
                        <div
                        style={{ minHeight: '75%' }}>
                            <Thumbnail
                            to={{ pathname: 'art' }}
                            imgSrc={ artThumbnail }
                            text='Art'
                            width='90%'
                            height='128px' />
                            <Thumbnail
                            to={{ pathname: 'music' }}
                            imgSrc={ musicThumbnail }
                            text='Music'
                            width='90%'
                            height='128px' />
                            <Thumbnail
                            to={{ pathname: 'wads' }}
                            imgSrc={ wadsThumbnail }
                            text='Doom WADs'
                            width='90%'
                            height='128px' />
                        </div>
                    </div>
                </div>
            </div>
            <Socials
            socialsList={[
                'linkedin',
                'github',
            ]} />
        </div>
    );
}