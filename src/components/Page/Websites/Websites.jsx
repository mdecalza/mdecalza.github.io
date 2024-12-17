/* 2024 Matthew DeCalzadilla */

/* assets */
import casaFrescaThumbnail from '../../../assets/websites/casafrescapage.jpg';
import itsMateoThumbnail from '../../../assets/websites/itsmateopage.png';

/* components */
import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';
import Thumbnail from '../../Thumbnail/Thumbnail';

export default function Websites() {

    return (
        <div
        className='container-xxl'>
            <Header
            title='Websites' />
            <Socials
            socialsList={[ 'linkedin', 'main-email', 'github' ]} />
            <Thumbnail
            to={{ pathname: 'https://casafrescacleaning.com/' }}
            imgSrc={ casaFrescaThumbnail } />
            <Thumbnail
            to={{ pathname: '/' }}
            imgSrc={ itsMateoThumbnail } />
        </div>
    );
}