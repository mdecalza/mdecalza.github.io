/* Code by 2024—2025 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import MusicRelease from './MusicRelease';
import Header from '../../Header/Header';
import IconButton from '../../IconButton/IconButton';
import Scroller from '../../Scroller/Scroller';
import Socials from '../../Socials/Socials';

/* assets */
/* album covers */
import priibyuCover from '../../../assets/music/0.png';
import deibyuCover from '../../../assets/music/1.png';
import burningMyTimeCover from '../../../assets/music/2.png';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesCover from '../../../assets/art/midnight-movies.jpg';
import sontoIVcover from '../../../assets/music/4.png';
import theFreewayCover from '../../../assets/music/5.png'
import sundayMorningTVCover from '../../../assets/music/tv.png';
import sontoOlegioCover from '../../../assets/art/olegio.png';
import whopperCover from '../../../assets/art/whopper-big.png';
import ostJam7cover from '../../../assets/music/ostjam7.png';
import narlyYmorioCover from '../../../assets/art/narlyYmorio-cover.png';
import travelogueCover from '../../../assets/music/7.png';
import sonidoAmorCover from '../../../assets/music/8.png';

/* link icons */
import spotifyIcon from '../../../assets/socials/spotify-icon.png';
import appleMusicIcon from '../../../assets/socials/apple-music-icon.svg';
import youTubeIcon from '../../../assets/socials/yt-icon.png';
import bandcampIcon from '../../../assets/socials/bandcamp-icon.png';
import patreonIcon from '../../../assets/socials/PATREON_SYMBOL_1_BLACK_RGB.svg';
import soundCloudIcon from '../../../assets/socials/soundcloud-icon.png';

/* graphics */
import sontomorioLogo from '../../../assets/art/sonto-logo-4.png';

export default function Music() {
    const musicReleases = [
/*
        createElement(MusicRelease, {
            title: 'Sonido Amor',
            type: 'Mixtape',
            description: 'Coming September 3, 2025.',
            genre: 'hip-hop, boombap, salsa',
            coverImageSrc: sonidoAmorCover,
            links: [
                createElement(IconButton, {
                    href: 'https://www.pexels.com/photo/man-standing-beside-his-car-in-front-of-colorful-buildings-in-havana-cuba-14462602/',
                    text: 'Cover source photo by Vlad Vasnetsov',
                }),
            ],
        }),
*/
        createElement(MusicRelease, {
            title: 'Travelogue',
            type: 'Album',
            releaseDate: 'June 18, 2025',
            description: 'Busy soundscapes, funky beats, and strange electronic noises. A globetrotting voyage in 45 minutes.',
            genre: 'pop, hip-hop, electronic',
            coverImageSrc: travelogueCover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/3qwrwW9pb67tjaoCDvmkBt?si=GVWk0s48QfODow9WSjkdZg',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
                createElement(IconButton, {
                    href: 'https://music.apple.com/us/album/travelogue/1821441225',
                    iconSrc: appleMusicIcon,
                    text: 'Apple Music',
                }),
                createElement(IconButton, {
                    href: 'https://youtu.be/FRbNazs6Wv4',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://sontomorio.bandcamp.com/album/travelogue',
                    iconSrc: bandcampIcon,
                    text: 'Bandcamp',
                }),
                createElement(IconButton, {
                    href: 'https://www.patreon.com/Sontomorio/shop/travelogue-instrumental-album-2025-1814640?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=productshare_creator&utm_content=join_link',
                    iconSrc: patreonIcon,
                    text: 'Patreon',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Tropical New World',
            type: 'Soundtrack',
            releaseDate: 'July 21, 2024',
            description: 'Light and loose bits of music composed for OST Jam 7 on itch.io.',
            genre: 'chillout, world, hip-hop',
            coverImageSrc: ostJam7cover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/1hxirm6dCM385FgHlsYaTf?si=dsBB2dmiT7-ZcR8U7FUREA',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
                createElement(IconButton, {
                    href: 'https://music.apple.com/us/album/tropical-new-world-ep/1818972447',
                    iconSrc: appleMusicIcon,
                    text: 'Apple Music',
                }),
                createElement(IconButton, {
                    href: 'https://www.youtube.com/playlist?list=PLdSVpo8uVNGWpYIPuigj2JNwaj9oUtjhD',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://sontomorio.bandcamp.com/album/tropical-new-world',
                    iconSrc: bandcampIcon,
                    text: 'Bandcamp',
                }),
                createElement(IconButton, {
                    href: 'https://soundcloud.com/sontomorio/sets/tropical-new-world?si=793bbcfcbfd84d88a574a5fdca9626f4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    iconSrc: soundCloudIcon,
                    text: 'SoundCloud',
                }),
                createElement(IconButton, {
                    href: 'https://www.pexels.com/photo/silhouette-of-mountains-during-sunset-10394187/',
                    text: 'Cover source photo by Shaheem Sjp',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Sunset Whopper',
            type: 'Hyper Drum\'n\' Bass Mix',
            releaseDate: 'November 27, 2023',
            description: 'High-energy DnB mix filled with distorted breaks, looping effects, varied samples, and lots of noisy synthesizers. Originally the soundtrack to Sunset Whopper, a video game for university.',
            genre: 'techno, noise, drum and bass',
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
            subtitle: '(with Aspen "Shreds" Abrahamson)',
            type: 'Unfinished Album',
            releaseDate: 'February 3, 2025 (April 4, 2023 demo)',
            description: 'An ambitious, experimental collaboration with "Shreds". We each did a fair bit of the work. It was about 85% done before dropped.',
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
            type: 'Beat Tape',
            releaseDate: 'December 31, 2022',
            description: 'A dark mix of original tunes among diverse beats, samples, and soundscapes.',
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
            explicit: true,
            type: 'Compilation EP',
            releaseDate: 'October 19, 2021',
            description: 'Combines two tracks from Midnight Movies with three previously unreleased original tracks. A compilation of music from The Freeway and prior that is suitable for streaming.',
            genre: 'electronic, hip-hop/rap, ambient',
            coverImageSrc: sundayMorningTVCover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/1MFqbvKh5fEhGZ2CYJSWHW?si=bB2MUVwWRmOKdj1d47S4Tg',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
                createElement(IconButton, {
                    href: 'https://music.apple.com/us/album/sunday-morning-tv-ep/1591252601',
                    iconSrc: appleMusicIcon,
                    text: 'Apple Music',
                }),
                createElement(IconButton, {
                    href: 'https://sontomorio.bandcamp.com/album/sunday-morning-tv',
                    iconSrc: bandcampIcon,
                    text: 'Bandcamp',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'The Freeway',
            type: 'Beat Tape',
            releaseDate: 'February 27, 2021',
            description: 'An assorted mix of driving-inspired loops and breakbeats.',
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
            type: 'Mix EP',
            releaseDate: 'April 22, 2020',
            description: 'Bold and brash, this EP drives oddball loops through high levels of distortion underneath esoteric lyrics.',
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
            type: 'Instrumental Mixtape',
            releaseDate: 'December 20, 2019',
            description: 'A picturesque journey told through patchwork samples and idiosyncratic beats woven together into soundscapes. A descent into dreams inspired by a bygone time.',
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
            type: 'Instrumental Remix',
            releaseDate: 'September 29, 2019',
            description: 'Ne expergisci possit.',
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
            explicit: true,
            type: 'EP',
            releaseDate: 'April 23, 2019',
            description: 'An ethereal mix of reverbed beats, spacey melodies, and bombastic rap verses.',
            genre: 'hip-hop/rap, lofi, chillout',
            coverImageSrc: burningMyTimeCover,
            links: [
                createElement(IconButton, {
                    href: 'https://open.spotify.com/album/3xzAg3WGHvCTD05r7pqsJG?si=q3aymKroS5KbdV7by0SYow',
                    iconSrc: spotifyIcon,
                    text: 'Spotify',
                }),
                createElement(IconButton, {
                    href: 'https://music.apple.com/us/album/burning-my-time-building-my-mind-ep/1774373578',
                    iconSrc: appleMusicIcon,
                    text: 'Apple Music',
                }),
                createElement(IconButton, {
                    href: 'https://youtu.be/ziNXngLa_zE',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://sontomorio.bandcamp.com/album/burning-my-time-building-my-mind',
                    iconSrc: bandcampIcon,
                    text: 'Bandcamp',
                }),
                createElement(IconButton, {
                    href: 'https://www.patreon.com/Sontomorio/shop/burning-my-time-building-my-mind-ep-2019-1506967?source=storefront',
                    iconSrc: patreonIcon,
                    text: 'Patreon',
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
            explicit: true,
            type: 'Mixtape',
            releaseDate: 'January 23, 2019',
            description: 'My first published album, featuring many collaborators. A dense and distorted evolution of the Priibyu mixtape. Part of a double LP package with Priibyu.',
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
            explicit: true,
            type: 'Mixtape Demo',
            releaseDate: 'February 3, 2025 (late 2018 demo)',
            description: 'Demo of the Deibyu mixtape. A bright, loose string of eclectic outsider music. Part of a double LP package with Deibyu.',
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
            <Socials
            socialsList={[ 'patreon', 'bandcamp', 'spotify', 'apple-music', 'soundcloud', 'music-youtube', 'music-instagram', 'twitter', 'music-email' ]} />
            <iframe
            src='https://open.spotify.com/embed/artist/3goR9KK8F6uqLA7yoXjYgL?utm_source=generator'
            className='popInDelayed border border-0 shadow mb-5'
            style={{ borderRadius: '12px' }}
            width='95%'
            height='152px'
            allowfullscreen=''
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
            <Header
            title='Music'
            blurb='I&apos;ve made a ton of music over the years as Sontomorio. On this page is a catalogue of my most notable works.' />
        </div>
        <Scroller
        elements={ musicReleases } />
        </>
    );
}