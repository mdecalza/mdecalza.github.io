/* Copyright © 2024—2025 Matthew DeCalzadilla */

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
            socialsList={[ 'doomworld', 'doomwiki', 'main-email', 'github' ]} />
            <p
            className='pt-3 fs-4'>
                <b>What is a wad anyway?</b>
            </p>
            <p
            className='pb-5'>
                <br />
                A <a href='https://doomwiki.org/wiki/WAD'>.wad</a> file contains all of the data for the game <a href='https://doomwiki.org/wiki/Doom'><i>Doom</i> (1993)</a> by <a href='https://doomwiki.org/wiki/Id_Software'>id Software</a>. One can enjoy new levels, graphics, music, and more for <i>Doom</i> by loading an extra .wad file on top of the game. Since 1994, players and creators alike have been enjoying a seemingly bottomless buffet of these wad files.<br />
                <br />
                Since 2011, I&apos;ve designed many wads&mdash;either all on my own or with the help of others. Here are my most notable Doom creations, including collaborative projects that I had a leading role in creating. I&apos;ve also listed wads by others for which I&apos;ve designed levels.
            </p>
        </div>
    );
}