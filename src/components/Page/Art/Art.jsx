/* 2024 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import ArtImage from './ArtImage';
import Header from '../../Header/Header';
import Scroller from '../../Scroller/Scroller';

/* assets */
/* pixel illustrations */
import CRUDtitle from '../../../assets/art/crud-title.png';
import CRUDinter from '../../../assets/art/CRUD_INT.png';
import hovercabTitle from '../../../assets/art/hov-titlepic.png';
import hovercabInter from '../../../assets/art/hov-interpic2.png';
import embryoTitle from '../../../assets/art/emb-titlepic.png';
import intercep3title from '../../../assets/art/int3-title.png';
import intercep3inter from '../../../assets/art/int3-inter.png';

/* sketches */
import aerithSketch from '../../../assets/art/16-aerith.png';
import cloudSketch from '../../../assets/art/17-cloud.png';
import intercep3sketch1 from '../../../assets/art/illustration-sketch1.png';
import intercep3sketch2 from '../../../assets/art/illustration-sketch2.png';
import intercep3sketch3 from '../../../assets/art/illustration-sketch4.png';
import intercep3sketch4 from '../../../assets/art/illustration-sketch3.png';

/* 3D level design */
import atonementScreenshots from '../../../assets/art/atn_screenshots.png'
import herschelScreenshot from '../../../assets/art/herschel-screenshot.png';
import hovercabScreenshot from '../../../assets/art/hovercab-screen.png';
import tropicHELLscreenshot from '../../../assets/art/tropichell-screen.png';
import doomedResidentScreenshots from '../../../assets/art/doomedresident-screens.png';

/* album art */
import burningMyTimeCover from '../../../assets/art/burnin.jpg';
import lucidCover from '../../../assets/art/lucid.jpg';
import midnightMoviesCover from '../../../assets/art/midnight-movies.jpg';
import sontoIVgatefold from '../../../assets/art/Sontomorio - Sonto IV - iv_sleeve_PAL.jpg';
import sundayMorningTVCover from '../../../assets/art/sunday-morning-tv_big.png';
import sontoOlegioCover from '../../../assets/art/sonto6_cover4.png';
import sontoOlegioCoverAlt from '../../../assets/art/olegio.png';
import sontoOlegioCoverAlt2 from '../../../assets/art/SONTO-OLEGIO.jpg';
import whopperCover from '../../../assets/art/whopper-big.png'
import intercontinentalCover from '../../../assets/art/intercontinental-cover.png';
import Socials from '../../Socials/Socials';

export default function Art() {
    const pixelArt = [
        createElement(ArtImage, { src: intercep3title }),
        createElement(ArtImage, { src: intercep3inter }),
        createElement(ArtImage, { src: hovercabTitle }),
        createElement(ArtImage, { src: hovercabInter }),
        createElement(ArtImage, { src: embryoTitle }),
        createElement(ArtImage, { src: CRUDinter }),
        createElement(ArtImage, { src: CRUDtitle }),
    ];
    
    const sketches = [
        createElement(ArtImage, { src: aerithSketch }),
        createElement(ArtImage, { src: cloudSketch }),
        createElement(ArtImage, { src: intercep3sketch1 }),
        createElement(ArtImage, { src: intercep3sketch2 }),
        createElement(ArtImage, { src: intercep3sketch3 }),
        createElement(ArtImage, { src: intercep3sketch4 }),
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
        createElement(ArtImage, { src: sontoIVgatefold }),
        createElement(ArtImage, { src: midnightMoviesCover }),
        createElement(ArtImage, { src: sontoOlegioCover }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt2 }),
        createElement(ArtImage, { src: sontoOlegioCoverAlt }),
        createElement(ArtImage, { src: sundayMorningTVCover }),
        createElement(ArtImage, { src: lucidCover }),
        createElement(ArtImage, { src: burningMyTimeCover }),
        createElement(ArtImage, { src: whopperCover }),
    ];

    return (
        <>
        <div
        className='container-xxl'>
            <Header
            title='Art' />
        </div>
        <Socials
        socialsList={['art-instagram', 'linkedin', 'main-email']} />
        <Scroller
        title='Pixel Illustrations'
        elements={pixelArt} />
        <Scroller
        title='Sketches'
        elements={sketches} />
        <Scroller
        title='3D Level Design'
        elements={levelDesign} />
        <Scroller
        title='Album Art'
        elements={albumArt} />
        </>
    );
}