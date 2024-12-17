/* 2024 Matthew DeCalzadilla */

/* components */
import Header from "../../Header/Header";
import Socials from '../../Socials/Socials';

/* assets */
import wadsThumbnail from '../../../assets/games/wads-thumb.png';
import Thumbnail from "../../Thumbnail/Thumbnail";

export default function Games() {
    return (
        <div
        className='fadeIn container-xxl'>
            <Header
            title='Games'/>
            <Socials
            socialsList={['linkedin', 'doomwiki', 'doomworld', 'doom-youtube', 'main-email', 'github']} />
            <Thumbnail
            to={{ pathname: '/wads' }}
            imgSrc={ wadsThumbnail } />
        </div>
    );
}