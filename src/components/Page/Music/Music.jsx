/* Copyright © 2024—2025 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import MusicRelease from './MusicRelease';
import Header from '../../Header/Header';
import IconButton from '../../IconButton/IconButton';
import Scroller from '../../Scroller/Scroller';
import Socials from '../../Socials/Socials';

/* assets */
/* album covers */
import priibyuCover from '../../../assets/music/1.png';
import deibyuCover from '../../../assets/music/deibyu.png';
import burningMyTimeCover from '../../../assets/music/2.png';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesCover from '../../../assets/art/midnight-movies.jpg';
import sontoIVcover from '../../../assets/music/4.png';
import theFreewayCover from '../../../assets/music/5.png'
import sundayMorningTVCover from '../../../assets/music/tv.png';
import sontoOlegioCover from '../../../assets/art/olegio.png';
import whopperCover from '../../../assets/art/whopper-big.png';
import narlyYmorioCover from '../../../assets/art/narlyYmorio-cover.png';
import intercontinentalCover from '../../../assets/music/7.png';
import sonidoAmorCover from '../../../assets/music/8.png';

/* link icons */
import bandcampIcon from '../../../assets/socials/bandcamp-icon.png';
import soundCloudIcon from '../../../assets/socials/soundcloud-icon.png';
import spotifyIcon from '../../../assets/socials/spotify-icon.png';
import youTubeIcon from '../../../assets/socials/yt-icon.png';

/* graphics */
import sontomorioLogo from '../../../assets/art/sonto-logo-4.png';

export default function Music() {
    const musicReleases = [
        createElement(MusicRelease, {
            title: 'Sonido Amor',
            type: 'Album',
            releaseDate: '(In Production)',
            genre: 'hip-hop, boombap, salsa',
            coverImageSrc: sonidoAmorCover,
            links: [
                createElement(IconButton, {
                    href: 'https://www.pexels.com/photo/man-standing-beside-his-car-in-front-of-colorful-buildings-in-havana-cuba-14462602/',
                    text: 'Cover Photo by Vlad Vasnetsov',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Intercontinental',
            type: 'Album',
            releaseDate: '(In Production)',
            genre: 'pop, hip-hop, electronic',
            coverImageSrc: intercontinentalCover,
        }),
        createElement(MusicRelease, {
            title: 'Sunset Whopper',
            type: 'Single',
            releaseDate: 'November 27, 2023',
            genre: 'drum \'n bass, techno, noise',
            coverImageSrc: whopperCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/LYAIzBTEQVc?si=FkY3GbqPnOJiXy3m',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sunset-whopper-hyper-drumnbass-mix?si=fa61b5a3529d44c1902c72f81ee5e4c0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'THE NARLY Y MORIO LP',
            subtitle: '(with "Shreds" Abrahamson)',
            type: 'Album',
            releaseDate: 'Unreleased (April 4, 2023)',
            genre: 'psychedelic, hip-hop, rock',
            coverImageSrc: narlyYmorioCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/X_gEyzTSx6c',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ]
        }),
        createElement(MusicRelease, {
            title: 'Sonto\'olegio',
            type: 'Album',
            releaseDate: 'December 31, 2022',
            genre: 'electronic, hip-hop, psychedelic',
            coverImageSrc: sontoOlegioCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/fJ5Bcy_MBqE',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/sontoolegio?si=f26f92e9a02d4ddfb2e51a5a4a6efc54&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Sunday Morning TV',
            type: 'Compilation',
            releaseDate: 'October 19, 2021',
            genre: 'electronic, hip-hop/rap, ambient',
            coverImageSrc: sundayMorningTVCover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/1MFqbvKh5fEhGZ2CYJSWHW?si=bB2MUVwWRmOKdj1d47S4Tg',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'The Freeway',
            type: 'Album',
            releaseDate: 'February 27, 2021',
            genre: 'hip-hop, boombap, lofi',
            coverImageSrc: theFreewayCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/2FK6yWV96O8',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/the-freeway?si=397c86f8bc314688a9b12d0cbdae877e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Sonto IV',
            type: 'EP',
            releaseDate: 'April 22, 2020',
            genre: 'hip-hop/rap, noise, psychedelic',
            coverImageSrc: sontoIVcover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/Z7dY-NgBeVo',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/sonto-iv?si=8bb966d2e41d47879e085652a798354f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Midnight Movies',
            type: 'Album',
            releaseDate: 'December 20, 2019',
            genre: 'hip-hop, pop, ambient',
            coverImageSrc: midnightMoviesCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/cs69xVqK1lo',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/midnight-movies?si=4b6d99e7782d49c98c2eb3862706cd06&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Lucid Dreaming',
            type: 'Single',
            releaseDate: 'September 29, 2019',
            genre: 'hip-hop, trap, electronic',
            coverImageSrc: lucidCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/zEsdQEW04do',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/lucid-dreaming?si=ee2cbc158e8c4660954530e2aa36625d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Burning My Time Building My Mind',
            type: 'EP',
            releaseDate: 'April 23, 2019',
            genre: 'hip-hop/rap, lofi, chillout',
            coverImageSrc: burningMyTimeCover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/3xzAg3WGHvCTD05r7pqsJG?si=q3aymKroS5KbdV7by0SYow',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
                createElement(IconButton, {
                    href: 'https://sontomorio.bandcamp.com/album/burning-my-time-building-my-mind',
                    iconSrc: bandcampIcon,
                    text: 'Bandcamp',
                }),
                createElement(IconButton, {
                    href: 'https://youtu.be/ziNXngLa_zE',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/burning-my-time-building-my-mind?si=73ed1b6432b34b578118422d43b807a4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Deibyu',
            type: 'Album',
            releaseDate: 'January 23, 2019',
            genre: 'hip-hop/rap, electronic, psychedelic',
            coverImageSrc: deibyuCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/1dPLJkpZeMA',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ]
        }),
        createElement(MusicRelease, {
            title: 'Priibyu',
            type: 'Album',
            releaseDate: 'Unreleased (late 2018)',
            genre: 'hip-hop/rap, electronic, psychedelic',
            coverImageSrc: priibyuCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/CKVJ4MuKY-g',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ]
        }),
    ];

    return (
        <>
        <div
        className='fadeIn container-xxl'>
            <img
            src={ sontomorioLogo }
            className='w-25' />
            <iframe
            src='https://open.spotify.com/embed/artist/3goR9KK8F6uqLA7yoXjYgL?utm_source=generator'
            className='popInDelayed border border-0 shadow mb-5'
            style={{ borderRadius: '12px' }}
            width='95%'
            height='152px'
            allowfullscreen=''
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
            <Socials
            socialsList={[ 'patreon', 'bandcamp', 'spotify', 'apple-music', 'soundcloud', 'music-youtube', 'music-instagram', 'twitter', 'music-email' ]} />
            <Header
            title='Music'
            blurb='I&apos;ve made a ton of music over the years as Sontomorio. On this page is a catalogue of my most notable works.' />
        </div>
        <Scroller
        elements={ musicReleases } />
        </>
    );
}