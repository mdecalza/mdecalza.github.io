/* 2024 Matthew DeCalzadilla */

import { Link } from "react-router";

/* components */
import Header from "../../Header/Header";
import Socials from '../../Socials/Socials';

/* assets */
import wadsThumbnail from '../../../assets/games/wads-thumb.png';

export default function Games() {
    const gameButtonClasses = 'm-3 btn btn-transparent';
    const gameThumbnailClasses = 'Thumbnail rounded-2 border border-2 border-light border-opacity-75';

    return (
        <div
        className='container-xxl'>
            <Header
            title='Games'/>
            <Socials
            socialsList={['linkedin', 'doomwiki', 'doomworld', 'doom-youtube', 'main-email']} />
            <Link
            to={{ pathname: '/wads', }}
            className={gameButtonClasses}>
                <img
                src={wadsThumbnail}
                className={gameThumbnailClasses}/>
            </Link>
        </div>
    );
}