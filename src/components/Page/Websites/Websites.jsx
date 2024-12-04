/* 2024 Matthew DeCalzadilla */

import { Link } from 'react-router';

import casaFrescaThumbnail from '../../../assets/websites/casafrescapage.jpg';
import itsMateoThumbnail from '../../../assets/websites/itsmateopage.png';
import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';

export default function Websites() {
    const websiteButtonClasses = 'mx-auto my-3 btn btn-transparent';
    const websiteThumbnailClasses = 'Thumbnail rounded-4 border border-2 border-light border-opacity-75';

    return (
        <div
        className='container-xxl'>
            <Header
            title='Websites' />
            <Socials
            socialsList={['linkedin', 'main-email']} />
            <a
            href='https://casafrescacleaning.com/'
            className={websiteButtonClasses}
            type='button'>
                <img
                src={casaFrescaThumbnail}
                className={websiteThumbnailClasses} />
            </a>
            <Link
            to={{ pathname: '/', }}
            className={websiteButtonClasses}
            type='button'>
                <img
                src={itsMateoThumbnail}
                className={websiteThumbnailClasses} />
            </Link>
        </div>
    );
}