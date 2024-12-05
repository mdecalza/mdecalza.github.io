/* 2024 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import MusicRelease from './MusicRelease';
import Header from '../../Header/Header';
import Scroller from '../../Scroller/Scroller';
import Socials from '../../Socials/Socials';

/* assets */
import sontomorioLogo from '../../../assets/music/sonto-logo.png';
import deibyuCover from '../../../assets/music/1.png';
import burningMyTimeCover from '../../../assets/music/2.png';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesCover from '../../../assets/art/midnight-movies.jpg';
import sontoIVcover from '../../../assets/music/4.png';
import theFreewayCover from '../../../assets/music/5.png'
import sundayMorningTVCover from '../../../assets/art/sunday-morning-tv_big.png';
import sontoOlegioCover from '../../../assets/art/sonto6_cover4.png';
import whopperCover from '../../../assets/art/whopper-big.png';
import intercontinentalCover from '../../../assets/art/intercontinental-cover.png';

export default function Music() {
    const musicReleases = [
        createElement(MusicRelease, {
            title: 'Intercontinental',
            type: 'Album',
            releaseDate: 'In production',
            genre: 'Pop, hip-hop, electronic',
            coverImageSrc: intercontinentalCover,
        }),
        createElement(MusicRelease, {
            title: 'Sunset Whopper',
            type: 'Single',
            releaseDate: 'November 27, 2023',
            genre: 'Drum \'n bass, techno, noise',
            coverImageSrc: whopperCover,
        }),
        createElement(MusicRelease, {
            title: 'Sonto\'olegio',
            type: 'Album',
            releaseDate: 'December 31, 2022',
            genre: 'Electronic, hip-hop, experimental',
            coverImageSrc: sontoOlegioCover,
        }),
        createElement(MusicRelease, {
            title: 'Sunday Morning TV',
            type: 'Compilation',
            releaseDate: 'October 19, 2021',
            genre: 'Electronic, hip-hop/rap, ambient',
            coverImageSrc: sundayMorningTVCover,
        }),
        createElement(MusicRelease, {
            title: 'The Freeway',
            type: 'Album',
            releaseDate: 'February 27, 2021',
            genre: 'Hip-hop, boombap, lofi',
            coverImageSrc: theFreewayCover,
        }),
        createElement(MusicRelease, {
            title: 'Sonto IV',
            type: 'EP',
            releaseDate: 'April 22, 2020',
            genre: 'Hip-hop/rap, noise, experimental',
            coverImageSrc: sontoIVcover,
        }),
        createElement(MusicRelease, {
            title: 'Midnight Movies',
            type: 'Album',
            releaseDate: 'December 20, 2019',
            genre: 'Hip-hop, pop, ambient',
            coverImageSrc: midnightMoviesCover,
        }),
        createElement(MusicRelease, {
            title: 'Lucid Dreaming',
            type: 'Single',
            releaseDate: 'September 29, 2019',
            genre: 'Hip-hop, trap, electronic',
            coverImageSrc: lucidCover,
        }),
        createElement(MusicRelease, {
            title: 'Burning My Time Building My Mind',
            type: 'EP',
            releaseDate: 'April 23, 2019',
            genre: 'Hip-hop/rap, lofi, chillout',
            coverImageSrc: burningMyTimeCover,
        }),
        createElement(MusicRelease, {
            title: 'Deibyu',
            type: 'Album',
            releaseDate: 'January 3, 2019',
            genre: 'Hip-hop/rap, electronic, experimental',
            coverImageSrc: deibyuCover,
        }),
    ];

    return (
        <>
        <div
        className='container-xxl'>
            <img
            src={sontomorioLogo}
            className='w-25 m-5 rounded-5' />
            <Socials
            socialsList={['spotify', 'bandcamp', 'soundcloud', 'music-youtube', 'music-insta', 'twitter', 'music-email']} />
            <Header
            title='Music'
            blurb='I&apos;ve made a ton of music over the years as Sontomorio. Here you can find a catalogue of all my released music.' />
        </div>
        <Scroller
        elements={musicReleases} />
        </>
    );
}

