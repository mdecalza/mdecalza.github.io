/* Code by 2024—2025 Matthew DeCalzadilla */

import { Link } from 'react-router';

/* components */
import Header from '../../Header/Header';
import Socials from '../../Socials/Socials';

/* assets */
import mateoLogo from '../../../assets/home/mateowhite.png';

export default function Home() {
    return(
        <div
        className='fadeIn container-xxl'>
            <div>
                <img
                src={ mateoLogo }
                className='MateoLogo w-100'/>
                <hr
                className='my-4'/>
                <p
                className='mb-5'>
                    I&apos;m Matthew DeCalzadilla. I make <Link to={{ pathname: '/music' }}>music</Link>, <Link to={{ pathname: '/art' }}>art</Link>, <Link to={{ pathname: '/wads' }}>wads</Link>, and <Link to={{ pathname: '/websites' }}>websites</Link> (like the one you&apos;re on now!). Please, contact me if you&apos;d like me to make you things:<br />
                <br />
                </p>
            </div>
            <div className='pb-5'>
                <Header
                title='Email' />
                <div className='row'>
                    <div className='col-lg my-3'>
                        <div
                        className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h4>
                                Music
                            </h4>
                            <a
                            href='mailto:&#115;&#111;&#110;&#116;&#111;&#109;&#111;&#114;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                            rel='noopener nofollower noreferrer'
                            style={{ fontSize: 'min(1.75rem, 5.5vw)' }}>
                                &#115;&#111;&#110;&#116;&#111;&#109;&#111;&#114;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                            </a>
                        </div>
                    </div>
                    <div className='col-lg my-3'>
                        <div className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h4>
                                Art & more
                            </h4>
                            <a
                            href='mailto:&#109;&#97;&#116;&#116;&#46;&#100;&#101;&#99;&#97;&#108;&#122;&#97;&#100;&#105;&#108;&#108;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                            rel='noopener nofollower noreferrer'
                            style={{ fontSize: 'min(1.75rem, 5.5vw)' }}>
                                &#109;&#97;&#116;&#116;&#46;&#100;&#101;&#99;&#97;&#108;&#122;&#97;&#100;&#105;&#108;&#108;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-5'>
                <Header
                title='Socials' />
                <div className='row'>
                    <div className='col-lg py-3'>
                        <div
                        className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h2
                            className='pb-2'>
                                Music
                            </h2>
                            <Socials
                            socialsList={[ 'spotify', 'apple-music', 'music-youtube', 'bandcamp', 'patreon', 'tiktok', 'music-instagram', 'soundcloud', 'twitter' ]} />
                        </div>
                    </div>
                    <div className='col-lg py-3'>
                        <div
                        className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h2
                            className='pb-2'>
                                Art
                            </h2>
                            <Socials
                            socialsList={[ 'art-instagram' ]} />
                        </div>
                    </div>
                    <div className='col-lg py-3'>
                        <div
                        className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h2
                            className='pb-2'>
                                Doom Wads
                            </h2>
                            <Socials
                            socialsList={[ 'doomwiki', 'doomworld', 'doom-youtube']} />
                        </div>
                    </div>
                    <div className='col-lg py-3'>
                        <div
                        className='h-100 py-3 rounded-5 bg-light bg-opacity-10'>
                            <h2
                            className='pb-2'>
                                Websites
                            </h2>
                            <Socials
                            socialsList={[ 'linkedin', 'github' ]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-5'>
                <Header
                title='About Me' />
                <h3
                className='mb-4'>
                    AS A MUSICIAN
                </h3>
                <br />
                <p
                className='px-4 pb-4'>
                    Since 2018, I&apos;ve been quietly broadcasting my musical experiments from my home studio in Northern Colorado under the pseudonym <Link to={{ pathname: "/music", }}>Sontomorio</Link>.<br/>
                    <br/>
                    Though quite amateur, my first songs <a href="https://open.spotify.com/track/66LjOq1s89FIYDqgZxqRNS"><i>Strangest Ways</i></a> and <a href="https://youtu.be/YUDLJnq4plE"><i>Space and Time (Unkillable Nature)</i></a> showcased my obsession with lofi, bedroom pop, rap, and musical experimentation. This eclectic combination of sounds coalesced into my maligned mixtape debut, <i>Deibyu</i>. However mixed the tape, <i>Deibyu</i> was a huge accomplishment for me as an musician, and marked my first of many collaborations with Aspen &quot;Shreds&quot; Abrahamson and Josh Jacquot.<br/>
                    <br/>
                    Itching to improve my sound, <a href="https://open.spotify.com/album/3xzAg3WGHvCTD05r7pqsJG"><i>Burning My Time Building My Mind</i></a> was released mere months later in April 2019. In contrast to my debut record, <i>Burning My Time...</i> features soft, sleek production with mostly instrumental songs.<br/>
                    <br/>
                    As 2019 was coming to an end, I began experimenting with heavier samples and more ambitious production. The <a href="https://youtu.be/cs69xVqK1lo"><i>Midnight Movies</i></a> mixtape was released in December 2019, showcasing more overtly my taste for humorous samples and light, funky hip-hop. The latter half of the record featured more original compositions, however, leading to the release of the singles <a href="https://open.spotify.com/track/3fUzaulddG1m6Hs6ai625V"><i>Golden Eyes</i></a>, <a href="https://youtu.be/bOTfRunns14"><i>When We Make It</i></a>, and <a href="https://youtu.be/PLhzyLvYiwM"><i>The Forest Spirits</i></a>.<br/>
                    <br/>
                    I still experiment with new sounds into the 2020s, releasing new music on <a href="https://www.youtube.com/channel/UCPeP7F5d_NSwuAxlEMr3ukQ">YouTube</a> and <a href="https://soundcloud.com/sontomorio">SoundCloud</a>. The mix EP <a href="https://youtu.be/Z7dY-NgBeVo"><i>Sonto IV</i></a> (2020) showcases some of my most abrasive hip-hop production yet, while the beattapes <a href="https://youtu.be/2FK6yWV96O8"><i>The Freeway</i></a> (2021) and <a href="https://youtu.be/fJ5Bcy_MBqE"><i>Sonto&apos;olegio</i></a> (2022) each feature more lo-fi production over a variety of genres.
                </p>
                <h3
                className='mb-4'>
                    AS AN ARTIST
                </h3>
                <br />
                <p
                className='px-4 pb-4'>
                    Over the course of my life, I have learned to apply my abilities to a wide variety of situations. I began my journey as an artist in grade school, making pixel art in Microsoft Paint and lending designs to Game Maker projects. I also found a passion for pencil drawing. In high school, I was graciously gifted my first Intuos tablet, and I began to draw and paint digitally in Photoshop while taking art classes at school.<br/>
                    <br/>
                    I&apos;ve since used my design skills to provide illustrations and graphics for game design projects, websites (including this one!), YouTube videos, and more. I continue to share my artistic progress on <a href="https://www.instagram.com/the_decalzone/">Instagram</a> and on <Link to={{ pathname: "/art", }}>my Art page</Link>.
                </p>
            </div>
        </div>
    );
}