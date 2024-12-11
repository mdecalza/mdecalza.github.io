/* 2024 Matthew DeCalzadilla */

/* components */
import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';

export default function WadsHeader() {
    return (
        <div
        className='container-xxl'>
            <Header
            title='Doom Wads' />
            <Socials
            socialsList={[ 'doomworld', 'doomwiki', 'main-email' ]} />
            <p
            className='pt-3 fs-4'>
                <b>What is a wad anyway?</b>
            </p>
            <p
            className='pb-5'>
                <br />
                A <a href='https://doomwiki.org/wiki/WAD'>.wad</a> file contains all of the data for the game <a href='https://doomwiki.org/wiki/Doom'><i>Doom</i> (1993)</a> by <a href='https://doomwiki.org/wiki/Id_Software'>id Software</a>. One can make new levels, graphics, music, and more for <i>Doom</i> by loading an additional .wad file with the game. As such, players and creators alike have enjoyed the pastime of creating new content for <i>Doom</i>.<br />
                <br />
                Since 2011, I&apos;ve designed many custom levels for the classic video game, Doom. Here is a list of my most notable Doom creations—or those that I had a large part in creating.            
            </p>
        </div>
    );
}