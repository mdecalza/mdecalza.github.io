/* Matthew DeCalzadilla 2024—2026 */

import { createElement } from 'react';

/* components */
import ArtImage from '/src/components/Page/Art/ArtImage';
import Header from '/src/components/Header/Header';
import Scroller from '/src/components/Scroller/Scroller';
import Socials from '/src/components/Socials/Socials';

/* assets */
/* illustrations */
import theKuzc from '/src/assets/art/the-kuzc.jpg';
import atoneInter from '/src/assets/art/atone-inter.png';
import intercepTitle from '/src/assets/art/int1-title.png';
import intercep3title from '/src/assets/art/int3-title.png';
import intercep3inter from '/src/assets/art/int3-inter.png';
import intercep3text1 from '/src/assets/art/int3-illust1.png';
import secondMixTitle from '/src/assets/art/second-mix-titlepic2-PALLARGE.png';
import secondMixInter from '/src/assets/art/2ndmix-INTERPIC-200-PAL-BIG.png';

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
import doomedResident2screenshots from '/src/assets/art/resident2-screenshots.png';

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
import travelogueSleeve from '/src/assets/art/travelogue-sleeve.jpg';

/* graphic design */
import sontomorioLogo2 from '/src/assets/art/sonto-logo-text-large-glow.png';
import casaFrescaLogo from '/src/assets/art/casa-fresca-logo.png';
import sontomorioLogo from '/src/assets/art/sonto-logo-4.png';
import atoneLogo from '/src/assets/art/atone-logo.png';
import embryoLogo from '/src/assets/art/embryo-logo.png';

export default function Art() {
    const socialsList = [
        'art-instagram',
    ];

    const paintings = [
        createElement(ArtImage, { src: theKuzc, title: 'Kuzco', year: 2026, medium: 'Acrylic on canvas', size: '8 x 10 inches' }),
    ];

    const illustrations = [
        createElement(ArtImage, { src: intercep3title, title: 'Interception III Title Screen', year: 2024, medium: 'Digital', size: '320 x 200 pixels' }),
        createElement(ArtImage, { src: secondMixTitle, title: 'Second Mix Title Screen', year: 2025, medium: 'Digital', size: '320 x 200 pixels' }),
        createElement(ArtImage, { src: intercep3inter, title: 'Interception III Intermission Screen', year: 2024, medium: 'Digital', size: '320 x 200 pixels' }),
        createElement(ArtImage, { src: intercep3text1, title: 'Interception III Text Screen I', year: 2025, medium: 'Digital', size: '854 x 200 pixels', censor: true, contentWarningList: ['Violence', 'Gore'] }),
        createElement(ArtImage, { src: intercepTitle, title: 'Interception Title Screen (Redux)', year: 2025, medium: 'Digital', size: '854 x 200 pixels (cropped for display)', censor: true, contentWarningList: ['Violence', 'Gore'] }),
        createElement(ArtImage, { src: secondMixInter, title: 'Second Mix Intermission Screen', year: 2026, medium: 'Digital', size: '320 x 200 pixels' }),
        createElement(ArtImage, { src: atoneInter, title: 'Atonement Intermission Screen', year: 2018, medium: 'Digital', size: '320 x 200 pixels' }),
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
        createElement(ArtImage, { src: doomedResident2screenshots }),
        createElement(ArtImage, { src: herschelScreenshot }),
        createElement(ArtImage, { src: tropicHELLscreenshot }),
        createElement(ArtImage, { src: hovercabScreenshot }),
        createElement(ArtImage, { src: doomedResidentScreenshots }),
        createElement(ArtImage, { src: atonementScreenshots }),
    ];
    
    const albumArt = [
        createElement(ArtImage, { src: travelogueSleeve, title: 'Travelogue Album Sleeve', year: 2025, medium: 'Digital, manipulated photographs', size: '5100 x 2550 pixels' }),
        createElement(ArtImage, { src: blindPilotCover, title: '"Blind Pilot" Single Cover', year: 2025, medium: 'Digital, manipulated photograph', size: '2960 x 2960 pixels' }),
        createElement(ArtImage, { src: intercontinentalCover, title: '"Intercontinental" Single Cover', year: 2025, medium: 'Digitally manipulated photograph', size: '3024 x 3024 pixels' }),
        createElement(ArtImage, { src: smoothSailingCover, title: '"Smooth Sailing" Single Cover', year: 2024, medium: 'Digital, manipulated photograph', size: '2832 x 2832 pixels' }),
        createElement(ArtImage, { src: midnightMoviesSleeve, title: 'Midnight Movies Album Sleeve', year: 2019, medium: 'Digital, manipulated photograph', size: '4320 x 2160 pixels' }),
        createElement(ArtImage, { src: sontoIVgatefold, title: 'Sonto IV EP Sleeve', year: 2020, medium: 'Digital, manipulated photograph', size: '7200 x 3600 pixels' }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt, title: 'Sonto\'olegio Album Cover (First Alternate)', year: 2022, medium: 'Digital', size: '3600 x 3600 pixels' }),
        createElement(ArtImage, { src: narlyYmorioCover, title: 'THE NARLY Y MORIO LP Album Cover', year: 2020, medium: 'Digital', size: '3750 x 3750 pixels (downscaled for storage)' }),
        createElement(ArtImage, { src: lucidCover, title: '"Lucid Dreaming" Single Cover', year: 2019, medium: 'Digital', size: '5000 x 5000 pixels' }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt2, title: 'Sonto\'olegio Album Cover (Second Alternate)', year: 2022, medium: 'Digital, manipulated photograph', size: '1000 x 1000 pixels' }),
        createElement(ArtImage, { src: whopperCover, title: '"Sunset Whopper" Single Cover', year: 2023, medium: 'Digital, manipulated video game screenshot', size: '1400 x 1400 pixels' }),
        createElement(ArtImage, { src: sundayMorningTVCover, title: 'Sunday Morning TV Compilation EP Cover', year: 2021, medium: 'Digital, photo collage', size: '3000 x 3000 pixels' }),
        createElement(ArtImage, { src: bpmCover, title: '"88 BPM" Single Cover', year: 2022, medium: 'Digital, manipulated photograph', size: '3227 x 3227 pixels' }),
        createElement(ArtImage, { src: burningMyTimeCover, title: 'Burning My Time Building My Mind EP Cover', year: 2019, medium: 'Digital', size: '3000 x 3000 pixels' }),
        createElement(ArtImage, { src: deibyuCoverAlt, title: 'Deibyu Album Cover (Alternate)', year: 2019, medium: 'Digital', size: '4512 x 4512 pixels' }),
    ];

    const graphicDesign = [
        createElement(ArtImage, { src: sontomorioLogo2, border: false }),
        createElement(ArtImage, { src: sontomorioLogo, border: false }),
        createElement(ArtImage, { src: atoneLogo, border: false }),
        createElement(ArtImage, { src: casaFrescaLogo, border: false }),
        createElement(ArtImage, { src: embryoLogo, border: false }),
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
                socialsList={ socialsList } />
            </div>
            <Scroller
            title='Paintings'
            elements={ paintings }
            scrollerID={ 0 } />
            <Scroller
            title='Illustrations'
            elements={ illustrations }
            scrollerID={ 0 } />
            <Scroller
            title='Album Art'
            elements={ albumArt }
            scrollerID={ 1 } />
            <Scroller
            title='Logos & Graphics'
            elements={ graphicDesign }
            scrollerID={ 2 } />
            <Scroller
            title='3D Level Design'
            elements={ levelDesign }
            scrollerID={ 3 } />
            <Scroller
            title='Sketches'
            elements={ sketches }
            scrollerID={ 4 } />
            <Socials
            socialsList={ socialsList } />
        </div>
    );
}