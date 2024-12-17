/* 2024 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import ArtImage from './ArtImage';
import CensorBlur from '../../CensorBlur/CensorBlur';
import Header from '../../Header/Header';
import Scroller from '../../Scroller/Scroller';
import Socials from '../../Socials/Socials';

/* assets */
/* pixel illustrations */
import CRUDtitle from '../../../assets/art/crud-title.png';
import CRUDinter from '../../../assets/art/CRUD_INT.png';
import hovercabTitle from '../../../assets/art/hov-titlepic.png';
import hovercabInter from '../../../assets/art/hov-interpic2.png';
import atoneTitle from '../../../assets/art/atn_TITLEPIC.png';
import atoneCredit from '../../../assets/art/atn_credit2.png';
import atoneEnding from '../../../assets/art/atone_bossback_aspect.png';
import embryoTitle from '../../../assets/art/emb-titlepic.png';
import intercep3title from '../../../assets/art/int3-title.png';
import intercep3inter from '../../../assets/art/int3-inter.png';

/* sketches */
import aerithSketch from '../../../assets/art/16-aerith.png';
import cloudSketch from '../../../assets/art/17-cloud.png';
import intercep3sketch1 from '../../../assets/art/illustration-sketch1.png';
import intercep3sketch2 from '../../../assets/art/illustration-sketch2.png';
import intercep3sketch3 from '../../../assets/art/illustration-sketch4.png';
import sketchbook1 from '../../../assets/art/2-2024sketches-511.png';
import sketchbook2 from '../../../assets/art/2-2024sketches-511-2.png';
import sketchbook3 from '../../../assets/art/6-2024sketches-5-14.png';

/* 3D level design */
import atonementScreenshots from '../../../assets/art/atn_screenshots.png'
import herschelScreenshot from '../../../assets/art/herschel-screenshot.png';
import hovercabScreenshot from '../../../assets/art/hovercab-screen.png';
import tropicHELLscreenshot from '../../../assets/art/tropichell-screen.png';
import doomedResidentScreenshots from '../../../assets/art/doomedresident-screens.png';

/* album art */
import deibyuCoverAlt from '../../../assets/art/deibyu2.png';
import burningMyTimeCover from '../../../assets/art/burnin.jpg';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesSleeve from '../../../assets/art/midnight-movies-sleeve.jpg';
import sontoIVgatefold from '../../../assets/art/Sontomorio - Sonto IV - iv_sleeve_PAL.jpg';
import sundayMorningTVCover from '../../../assets/art/sunday-morning-tv_big.png';
import bpmCover from '../../../assets/art/88bpm.png';
import sontoOlegioCoverAlt from '../../../assets/art/olegio.png';
import sontoOlegioCoverAlt2 from '../../../assets/art/SONTO-OLEGIO.jpg';
import narlyYmorioCover from '../../../assets/art/narlyYmorio-cover.png';
import whopperCover from '../../../assets/art/whopper-big.png';
import smoothSailingCover from '../../../assets/art/sailing-cover2.png';
import intercontinentalCover from '../../../assets/art/intercontinental-sleeve.jpg';

/* graphic design */
import casaFrescaLogo from '../../../assets/art/casa-fresca-logo.png';
import sontomorioLogo from '../../../assets/music/sonto-logo.png';
import burningLogo from '../../../assets/art/burning-logo.png';
import atoneLogo from '../../../assets/art/atone-logo.png';
import CRUDlogo from '../../../assets/art/CRUD-logo.png';
import embryoLogo from '../../../assets/art/embryo-logo.png';

export default function Art() {
    const pixelArt = [
        createElement(ArtImage, { src: intercep3title }),
        createElement(ArtImage, { src: intercep3inter }),
        createElement(ArtImage, { src: hovercabTitle }),
        createElement(ArtImage, { src: hovercabInter }),
        createElement(ArtImage, { src: embryoTitle }),
        createElement(ArtImage, { src: CRUDinter }),
        createElement(ArtImage, { src: CRUDtitle }),
        createElement(ArtImage, { src: atoneTitle }),
        createElement(ArtImage, { src: atoneEnding }),
        createElement(ArtImage, { src: atoneCredit }),
    ];
    
    const sketches = [
        createElement(ArtImage, { src: aerithSketch }),
        createElement(ArtImage, { src: cloudSketch }),
        createElement(ArtImage, { src: intercep3sketch2 }),
        createElement(ArtImage, { src: sketchbook1 }),
        createElement(ArtImage, { src: intercep3sketch3 }),
        createElement(ArtImage, { src: sketchbook2 }),
        createElement(ArtImage, { src: intercep3sketch1 }),
        createElement(ArtImage, { src: sketchbook3 }),
    ];
    
    const levelDesign = [
        createElement(ArtImage, { src: doomedResidentScreenshots }),
        createElement(ArtImage, { src: atonementScreenshots }),
        createElement(ArtImage, { src: herschelScreenshot }),
        createElement(ArtImage, { src: hovercabScreenshot }),
        createElement(ArtImage, { src: tropicHELLscreenshot }),
    ];
    
    const albumArt = [
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
        createElement(ArtImage, { src: casaFrescaLogo, border: false }),
        createElement(ArtImage, { src: sontomorioLogo, border: false }),
        createElement(ArtImage, { src: burningLogo, border: false }),
        createElement(ArtImage, { src: atoneLogo, border: false }),
        createElement(ArtImage, { src: CRUDlogo, border: false }),
        createElement(ArtImage, { src: embryoLogo, border: false }),
    ];

    return (
        <>
        <CensorBlur
        contentWarningList={[ 'Violence', 'Gore' ]} />
        <div
        className='container-xxl'>
            <Header
            title='Art' />
        </div>
        <Socials
        socialsList={[ 'art-instagram', 'linkedin', 'main-email' ]} />
        <Scroller
        title='Pixel Illustrations'
        elements={ pixelArt } />
        <Scroller
        title='Sketches'
        elements={ sketches } />
        <Scroller
        title='Album Art'
        elements={ albumArt } />
        <Scroller
        title='Graphic Design'
        elements={ graphicDesign } />
        <Scroller
        title='3D Level Design'
        elements={ levelDesign } />
        </>
    );
}