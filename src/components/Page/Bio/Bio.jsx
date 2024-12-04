/* 2024 Matthew DeCalzadilla */

import { Link } from "react-router";
import Socials from "../../Socials/Socials";
import Header from "../../Header/Header";

export default function Bio() {
    return (
        <div
        className='container-xxl'>
            <Header
            title='Bio' />
            <h3
            className='mb-4'>
                AS AN ARTIST
            </h3>
            <Socials
            socialsList={['art-instagram']} />
            <p
            className='px-4 pb-4'>
                Beginning his artistic journey in grade school, Matthew DeCalzadilla has learned to apply his abilities to a wide variety of situations. At a young age, he began making pixel art in Microsoft Paint, lending his designs to his Game Maker projects. In elementary school, he found his passion for pencil drawing. In high school, he was given his first Intuos tablet, and he began to draw and paint digitally in Adobe Photoshop in addition to taking art classes at school.
                <br/>
                <br/>
                Over the years, Mateo has used his design skills to provide illustrations and graphics for game design projects, websites, YouTube videos, and more. He continues to mark his artistic progress on <a href="https://www.instagram.com/the_decalzone/">Instagram</a> and on <Link to={{ pathname: "/art", }}>his portfolio website</Link>.
            </p>
            <h3
            className='mb-4'>
                AS A MUSICIAN
            </h3>
            <Socials
            socialsList={['spotify', 'bandcamp', 'music-youtube', 'soundcloud', 'music-instagram']}/>
            <p
            className='px-4 pb-4'>
                Since 2018, Matthew DeCalzadilla has been quietly broadcasting his musical experiments from his home in Northern Colorado as <Link to={{ pathname: "/music", }}>Sontomorio</Link>.
                <br/>
                <br/>
                Though amateur, his first releases <a href="https://open.spotify.com/track/66LjOq1s89FIYDqgZxqRNS"><i>Strangest Ways</i></a> and <a href="https://open.spotify.com/track/52roInbjZuFBqzE9Av26rY"><i>Space and Time (Unkillable Nature)</i></a> showcased a penchant for lo-fi, bedroom pop, and rap. This eclectic combination of sounds coalesced into Sontomorio&apos;s maligned debut album, aptly titled Deibyu. However mixed the quality, Deibyu was a huge accomplishment for the budding artist, and marked Sontomorio&apos;s first of many collaborations with Narly Nate and Jay Ashr.
                <br/>
                <br/>
                Seeking to improve his sound, <a href="https://open.spotify.com/album/3xzAg3WGHvCTD05r7pqsJG"><i>Burning My Time Building My Mind</i></a> was released mere months later in April 2019. In contrast to his debut record, Burning My Time features slim, sleek production and mostly instrumental songs.
                <br/>
                <br/>
                As 2019 was coming to an end, Sontomorio began to experiment more heavily with samples. The <a href="https://soundcloud.com/sontomorio/sets/midnight-movies"><i>Midnight Movies</i></a> mixtape was released in December 2019, showcasing Sontomorio&apos;s unique ear for samples and a knack for light, funky hip-hop. The latter half of the record featured more original instrumentals, however, leading to the release of the singles <a href="https://open.spotify.com/track/3fUzaulddG1m6Hs6ai625V"><i>Golden Eyes</i></a>, <a href="https://open.spotify.com/track/0OEEx55wjjRIplhi5q6tUo"><i>When We Make It</i></a>, and <a href="https://open.spotify.com/track/3fVkJbVtt1EOEtvPm3cJRe"><i>The Forest Spirits</i></a>.
                <br/>
                <br/>
                Sontomorio continues to experiment with new sounds into the 2020s, releasing new music on <a href="https://www.youtube.com/channel/UCPeP7F5d_NSwuAxlEMr3ukQ">YouTube</a> and <a href="https://soundcloud.com/sontomorio">SoundCloud</a>. The mix EP <a href="https://soundcloud.com/sontomorio/sets/sonto-iv"><i>Sonto IV</i></a> (2020) showcases some of his most dense samples and rhymes, while the beattapes <a href="https://soundcloud.com/sontomorio/sets/the-freeway"><i>The Freeway</i></a> (2021) and <a href="https://soundcloud.com/sontomorio/sets/sontoolegio"><i>Sonto&apos;olegio</i></a> (2022) each feature more refined production than the last.
            </p>
        </div>
    );
}