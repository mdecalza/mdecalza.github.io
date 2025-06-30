/* Matthew DeCalzadilla 2024—2025 */

/* components */
import Header from '/src/components/Header/Header';
import Socials from '/src/components/Socials/Socials';
import WebsiteThumbnail from '/src/components/Thumbnail/WebsiteThumbnail';

export default function Websites() {

    return (
        <div
        className='fadeIn container-xxl'>
            <Header
            title='Websites' />
            <Socials
            socialsList={[ 'linkedin', 'github' ]} />
            <WebsiteThumbnail
            to={{ pathname: 'https://casafrescacleaning.com' }} />
            <WebsiteThumbnail
            to={{ pathname: '/' }} />
        </div>
    );
}