/* 2024 Matthew DeCalzadilla */

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
import burningMyTimeCover from '../../../assets/music/2.png';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesCover from '../../../assets/art/midnight-movies.jpg';
import sontoIVcover from '../../../assets/music/4.jpg';
import theFreewayCover from '../../../assets/music/5.png'
import sundayMorningTVCover from '../../../assets/music/tv.png';
import sontoOlegioCover from '../../../assets/art/sonto6_cover4.png';
import whopperCover from '../../../assets/art/whopper-big.png';
import narlyYmorioCover from '../../../assets/art/narlyYmorio-cover.png';
import intercontinentalCover from '../../../assets/music/7.png';

/* link icons */
import bandcampIcon from '../../../assets/socials/bandcamp-icon.png';
import soundCloudIcon from '../../../assets/socials/soundcloud-icon.png';
import spotifyIcon from '../../../assets/socials/spotify-icon.png';
import youTubeIcon from '../../../assets/socials/yt-icon.png';

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
            releaseDate: 'Unreleased',
            genre: 'Psychedelic, hip-hop, rock',
            coverImageSrc: narlyYmorioCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/k6R_75SZlbI',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ]
        }),
        createElement(MusicRelease, {
            title: 'Sonto\'olegio',
            type: 'Album',
            releaseDate: 'December 31, 2022',
            genre: 'Electronic, hip-hop, psychedelic',
            coverImageSrc: sontoOlegioCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/M0O79BVAad4?si=dMIvZFxf4QywpZnA',
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
            genre: 'Electronic, hip-hop/rap, ambient',
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
            genre: 'Hip-hop, boombap, lofi',
            coverImageSrc: theFreewayCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/ky2LwlD8fpU?si=MS47DoAzjFfz7IuV',
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
            genre: 'Hip-hop/rap, noise, psychedelic',
            coverImageSrc: sontoIVcover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/EhAIzKg0xBY?si=Z28cvEfeDMCLbc77',
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
            genre: 'Hip-hop, pop, ambient',
            coverImageSrc: midnightMoviesCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/UqXEcP8Uw68?si=uaSdkSiqe63-47ce',
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
            genre: 'Hip-hop, trap, electronic',
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
            genre: 'Hip-hop/rap, lofi, chillout',
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
                    href: 'https://youtu.be/Bhj6OgR-pgo?si=Mvcb_iEkbBals7M2',
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
            title: 'Priibyu/Deibyu',
            type: 'Album',
            releaseDate: 'January 23, 2019',
            genre: 'Hip-hop/rap, electronic, psychedelic',
            coverImageSrc: priibyuCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/xJ6Zhng8-KQ',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                })
            ]
        }),
    ];

    return (
        <>
        <div
        className='fadeIn container-xxl'>
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
            socialsList={[ 'spotify', 'bandcamp', 'soundcloud', 'music-youtube', 'music-instagram', 'twitter', 'music-email' ]} />
            <Header
            title='Music'
            blurb='I&apos;ve made a ton of music over the years as Sontomorio. On this page is a catalogue of my most notable works.' />
        </div>
        <Scroller
        elements={ musicReleases } />
        </>
    );
}