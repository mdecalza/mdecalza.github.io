/* Code by 2024—2025 Matthew DeCalzadilla */

/* components */
import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';
import WebsiteThumbnail from '../../Thumbnail/WebsiteThumbnail';

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