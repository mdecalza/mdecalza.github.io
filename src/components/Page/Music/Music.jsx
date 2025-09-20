/* Matthew DeCalzadilla 2024—2025 */

import { createElement } from 'react';

/* components */
import MusicRelease from '/src/components/Page/Music/MusicRelease';
import IconButton from '/src/components/IconButton/IconButton';
import Scroller from '/src/components/Scroller/Scroller';
import Socials from '/src/components/Socials/Socials';

/* assets */
/* album covers */
import priibyuCover from '/src/assets/music/0.png';
import deibyuCover from '/src/assets/music/1.png';
import burningMyTimeCover from '/src/assets/music/2.png';
import lucidCover from '/src/assets/art/lucid.jpg';
import earlyOdditiesCover from '/src/assets/music/oddities.jpg';
import midnightMoviesCover from '/src/assets/art/midnight-movies.jpg';
import sontoIVcover from '/src/assets/music/4.png';
import theFreewayCover from '/src/assets/music/5.png'
import sundayMorningTVCover from '/src/assets/music/tv.png';
import sontoOlegioCover from '/src/assets/art/olegio.png';
import whopperCover from '/src/assets/art/whopper-big.png';
import ostJam7cover from '/src/assets/music/ostjam7.png';
import narlyYmorioCover from '/src/assets/art/narlyYmorio-cover.png';
import travelogueCover from '/src/assets/music/7.png';
import sketchinCover from '/src/assets/music/8.png';
import loveOfSoundCover from '/src/assets/music/9.png';

/* link icons */
import spotifyIcon from '/src/assets/socials/spotify-icon.png';
import appleMusicIcon from '/src/assets/socials/apple-music-icon.svg';
import youTubeIcon from '/src/assets/socials/yt-icon.png';
import bandcampIcon from '/src/assets/socials/bandcamp-icon.png';
import soundCloudIcon from '/src/assets/socials/soundcloud-icon.png';

/* graphics */
import sontomorioLogo from '/src/assets/art/sonto-logo-4.png';

export default function Music() {
    const sonto9releaseDate = new Date(2025, 8, 27, 10, 30);

    const musicReleases = [
        Date.now() >= sonto9releaseDate.getTime() ?
        createElement(MusicRelease, {
            title: 'The Love of Sound',
            type: 'Mixtape',
            releaseDate: 'September 27, 2025',
            description: '37 minutes of chill chops and funky breaks.',
            genre: 'hip-hop, old-school, chillout',
            coverImageSrc: loveOfSoundCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/K-MZGLKwd2g',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
                createElement(IconButton, {
                    href: 'https://www.pexels.com/photo/a-man-sitting-on-the-table-beside-the-oscilloscope-7858254/',
                    text: 'Cover art based on a stock photo by cottonbro studio',
                }),
            ],
        }) :
        createElement(MusicRelease, {
            title: 'The Love of Sound',
            type: 'Upcoming Mixtape',
            description: '37 minutes of chill chops and funky breaks. Coming September 27, 2025.',
            genre: 'hip-hop, old-school, chillout',
            coverImageSrc: loveOfSoundCover,
            links: [
                createElement(IconButton, {
                    href: 'https://www.pexels.com/photo/a-man-sitting-on-the-table-beside-the-oscilloscope-7858254/',
                    text: 'Cover source photo by cottonbro studio',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Sketchin\'',
            type: 'EP',
            releaseDate: 'September 11, 2025',
            description: 'A quick mix of six boombap beats for ears to feast.',
            genre: 'hip-hop, boombap, old-school',
            coverImageSrc: sketchinCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/jLf3ZbvQYDk',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Travelogue',
            type: 'Album',
            releaseDate: 'June 17, 2025',
            description: 'Busy soundscapes, funky beats, and strange electronic noises. A globetrotting voyage in 45 minutes.',
            genre: 'downtempo, hip-hop, chillout',
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
            ],
        }),
        createElement(MusicRelease, {
            title: 'Tropical New World',
            type: 'EP',
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
            type: 'Single',
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
            type: 'Unfinished Mixtape',
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
            type: 'Mixtape',
            releaseDate: 'December 31, 2022',
            description: 'A dark mix of original tunes among diverse beats, samples, and soundscapes.',
            genre: 'downtempo, hip-hop, psychedelic',
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
            type: 'Compilation',
            releaseDate: 'October 19, 2021',
            description: 'Combines two tracks from Midnight Movies with three previously unreleased original tracks. A compilation of music from The Freeway and prior that is suitable for streaming.',
            genre: 'downtempo, hip-hop/rap, ambient',
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
            type: 'Mixtape',
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
            type: 'EP',
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
            type: 'Mixtape',
            releaseDate: 'December 20, 2019',
            description: 'A picturesque journey told through patchwork samples and idiosyncratic beats woven together into soundscapes. A descent into dreams inspired by a bygone time.',
            genre: 'hip-hop, downtempo, ambient',
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
            title: 'Early Oddities',
            explicit: true,
            type: 'Compilation',
            releaseDate: 'December 13, 2019',
            description: 'A collection of odds and ends from the era between Deibyu and Midnight Movies.',
            genre: 'r&b, bedroom pop, downtempo',
            coverImageSrc: earlyOdditiesCover,
            links: [
                createElement(IconButton, {
                    href: 'https://youtu.be/dsMD7FMGUAA',
                    iconSrc: youTubeIcon,
                    text: 'YouTube',
                }),
            ],
        }),
        createElement(MusicRelease, {
            title: 'Lucid Dreaming',
            type: 'Single',
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
            genre: 'hip-hop/rap, downtempo, psychedelic',
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
            type: 'Mixtape',
            releaseDate: 'February 3, 2025 (late 2018 demo)',
            description: 'Demo of the Deibyu mixtape. A bright, loose string of eclectic outsider music. Part of a double LP package with Deibyu.',
            genre: 'hip-hop/rap, downtempo, psychedelic',
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
            socialsList={[ 'spotify', 'apple-music', 'music-youtube', 'bandcamp', 'patreon', 'tiktok', 'music-instagram', 'soundcloud', 'twitter' ]} />
            <iframe
            data-testid='embed-iframe'
            src='https://open.spotify.com/embed/artist/3goR9KK8F6uqLA7yoXjYgL?utm_source=generator&theme=0'
            width='100%'
            height='352'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
            className='popInDelayed border border-0 shadow mt-1'
            style={{
                borderRadius: '12px',
                opacity: '90%',
            }}></iframe>
        </div>
        <Scroller
        elements={ musicReleases } />
        </>
    );
}