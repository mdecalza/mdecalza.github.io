/* 2024 Matthew DeCalzadilla */

import casaFrescaThumbnail from '../../../assets/websites/casafrescapage.jpg';
import itsMateoThumbnail from '../../../assets/websites/itsmateopage.png';

import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';
import WebsiteThumbnail from './WebsiteThumbnail';

export default function Websites() {

    return (
        <div
        className='container-xxl'>
            <Header
            title='Websites' />
            <Socials
            socialsList={[ 'linkedin', 'main-email' ]} />
            <WebsiteThumbnail
            to={{ pathname: 'https://casafrescacleaning.com/' }}
            imgSrc={casaFrescaThumbnail} />
            <WebsiteThumbnail
            to={{ pathname: '/' }}
            imgSrc={itsMateoThumbnail}
            innerLink={true} />
        </div>
    );
}