/* Matthew DeCalzadilla 2024—2025 */

import { createElement } from 'react';

/* components */
import ArtImage from '/src/components/Page/Art/ArtImage';
import Header from '/src/components/Header/Header';
import Scroller from '/src/components/Scroller/Scroller';
import Socials from '/src/components/Socials/Socials';

/* assets */
/* pixel illustrations */
import atoneInter from '/src/assets/art/atone-inter.png';
import embryoTitle from '/src/assets/art/emb-titlepic.png';
import intercepTitle from '/src/assets/art/int1-title.png';
import intercep3title from '/src/assets/art/int3-title.png';
import intercep3inter from '/src/assets/art/int3-inter.png';
import intercep3text1 from '/src/assets/art/int3-illust1.png';
import secondMixTitle from '/src/assets/art/second-mix-titlepic2-PALLARGE.png';

/* sketches */
import aerithSketch from '/src/assets/art/16-aerith.png';
import cloudSketch from '/src/assets/art/17-cloud.png';
import intercepSketch1 from '/src/assets/art/illustration-sketch5.png';
import intercep3sketch1 from '/src/assets/art/illustration-sketch1.png';
import intercep3sketch2 from '/src/assets/art/illustration-sketch2.png';
import intercep3sketch3 from '/src/assets/art/illustration-sketch4.png';
import sketchbook1 from '/src/assets/art/2-2024sketches-511.png';
import sketchbook2 from '/src/assets/art/2-2024sketches-511-2.png';

/* 3D level design */
import atonementScreenshots from '/src/assets/art/atn_screenshots.png'
import herschelScreenshot from '/src/assets/art/herschel-screenshot.png';
import hovercabScreenshot from '/src/assets/art/hovercab-screen.png';
import tropicHELLscreenshot from '/src/assets/art/tropichell-screen.png';
import doomedResidentScreenshots from '/src/assets/art/doomedresident-screens.png';

/* album art */
import deibyuCoverAlt from '/src/assets/art/deibyu2.png';
import burningMyTimeCover from '/src/assets/art/burnin.jpg';
import lucidCover from '/src/assets/art/lucid.jpg';
import midnightMoviesSleeve from '/src/assets/art/midnight-movies-sleeve.jpg';
import sontoIVgatefold from '/src/assets/art/Sontomorio - Sonto IV - iv_sleeve_PAL.jpg';
import sundayMorningTVCover from '/src/assets/art/sunday-morning-tv_big.png';
import bpmCover from '/src/assets/art/88bpm.png';
import sontoOlegioCoverAlt from '/src/assets/art/olegio.png';
import sontoOlegioCoverAlt2 from '/src/assets/art/SONTO-OLEGIO.jpg';
import narlyYmorioCover from '/src/assets/art/narlyYmorio-cover.png';
import whopperCover from '/src/assets/art/whopper-big.png';
import smoothSailingCover from '/src/assets/art/sailing-cover2.png';
import intercontinentalCover from '/src/assets/art/intercontinental-cover-2.jpg';
import blindPilotCover from '/src/assets/art/blind-pilot-cover.jpg';
import travelogueSleeve from '/src/assets/art/cd-cover-front-travelogue.jpg';

/* graphic design */
import sontomorioBanner from '/src/assets/art/sonto-art-small.png';
import casaFrescaLogo from '/src/assets/art/casa-fresca-logo.png';
import sontomorioLogo from '/src/assets/art/sonto-logo-4.png';
import atoneLogo from '/src/assets/art/atone-logo.png';
import embryoLogo from '/src/assets/art/embryo-logo.png';

export default function Art() {
    const pixelArt = [
        createElement(ArtImage, { src: secondMixTitle }),
        createElement(ArtImage, { src: intercep3title }),
        createElement(ArtImage, { src: atoneInter }),
        createElement(ArtImage, { src: intercep3inter }),
        createElement(ArtImage, { src: intercep3text1, censor: true, contentWarningList: ['Violence', 'Gore'] }),
        createElement(ArtImage, { src: intercepTitle, censor: true, contentWarningList: ['Violence', 'Gore'] }),
    ];
    
    const sketches = [
        createElement(ArtImage, { src: aerithSketch }),
        createElement(ArtImage, { src: sketchbook2 }),
        createElement(ArtImage, { src: cloudSketch }),
        createElement(ArtImage, { src: sketchbook1 }),
        createElement(ArtImage, { src: intercep3sketch1 }),
        createElement(ArtImage, { src: intercep3sketch2, censor: true, contentWarningList: ['Violence', 'Gore'] }),
        createElement(ArtImage, { src: intercep3sketch3, censor: true, contentWarningList: ['Violence', 'Gore'] }),
        createElement(ArtImage, { src: intercepSketch1, censor: true, contentWarningList: ['Violence', 'Gore'] }),
    ];
    
    const levelDesign = [
        createElement(ArtImage, { src: herschelScreenshot }),
        createElement(ArtImage, { src: tropicHELLscreenshot }),
        createElement(ArtImage, { src: hovercabScreenshot }),
        createElement(ArtImage, { src: doomedResidentScreenshots }),
        createElement(ArtImage, { src: atonementScreenshots }),
    ];
    
    const albumArt = [
        createElement(ArtImage, { src: travelogueSleeve }),
        createElement(ArtImage, { src: blindPilotCover }),
        createElement(ArtImage, { src: intercontinentalCover }),
        createElement(ArtImage, { src: smoothSailingCover }),
        createElement(ArtImage, { src: midnightMoviesSleeve }),
        createElement(ArtImage, { src: sontoIVgatefold }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt }),
        createElement(ArtImage, { src: narlyYmorioCover }),
        createElement(ArtImage, { src: lucidCover }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt2 }),
        createElement(ArtImage, { src: whopperCover }),
        createElement(ArtImage, { src: sundayMorningTVCover }),
        createElement(ArtImage, { src: bpmCover }),
        createElement(ArtImage, { src: burningMyTimeCover }),
        createElement(ArtImage, { src: deibyuCoverAlt }),
    ];

    const graphicDesign = [
        createElement(ArtImage, { src: sontomorioBanner }),
        createElement(ArtImage, { src: casaFrescaLogo, border: false }),
        createElement(ArtImage, { src: sontomorioLogo, border: false }),
        createElement(ArtImage, { src: atoneLogo, border: false }),
        createElement(ArtImage, { src: embryoLogo, border: false }),
        createElement(ArtImage, { src: embryoTitle }),
    ];

    return (
        <div
        className='fadeIn'>
            <div
            className='container-xxl'>
                <Header
                title='Matthew DeCalzadilla'
                blurb='Independent Artist' />
                <Socials
                socialsList={[ 'art-instagram' ]} />
            </div>
            <Scroller
            title='Pixel Illustrations'
            elements={ pixelArt } />
            <Scroller
            title='Album Art'
            elements={ albumArt } />
            <Scroller
            title='Graphic Design'
            elements={ graphicDesign } />
            <Scroller
            title='3D Level Design'
            elements={ levelDesign } />
            <Scroller
            title='Sketches'
            elements={ sketches } />
        </div>
    );
}