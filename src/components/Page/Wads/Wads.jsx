/* 2024 Matthew DeCalzadilla */

import { createElement } from 'react';

/* components */
import UnorderedList from '../../UnorderedList/UnorderedList';
import WadsHeader from './WadsHeader';
import WadRelease from './WadRelease';

import IconButton from '../../IconButton/IconButton';
import Scroller from '../../Scroller/Scroller';

/* assets */
/* interception ii */
import interception3logo from '../../../assets/wads/intercep3/intercep3-title.png';
import interception3screenshot1 from '../../../assets/wads/intercep3/intercep3-p1.png';

/* embryo */
import embryoLogo from '../../../assets/wads/embryo/embryo-title.png';
import embryoScreenshot1 from '../../../assets/wads/embryo/embryo-p1.png';

/* atonement */
import atonementLogo from '../../../assets/wads/atone/atone-title.png';
import atonementScreenshot1 from '../../../assets/wads/atone/atone-p1.png';
import atonementScreenshot2 from '../../../assets/wads/atone/atone-p2.png';
import atonementScreenshot3 from '../../../assets/wads/atone/atone-p3.png';
import atonementScreenshot4 from '../../../assets/wads/atone/atone-p4.png';
import atonementScreenshot5 from '../../../assets/wads/atone/atone-p5.png';

/* crud */
import CRUDlogo from '../../../assets/wads/crud/crud-title.png';
import CRUDscreenshot1 from '../../../assets/wads/crud/crud-p1.png';
import CRUDscreenshot2 from '../../../assets/wads/crud/crud-p2.png';
import CRUDscreenshot3 from '../../../assets/wads/crud/crud-p3.png';

/* interception ii */
import interception2logo from '../../../assets/wads/intercep2/intercep2-title.png';
import interception2screenshot1 from '../../../assets/wads/intercep2/intercep2-p1.png';
import interception2screenshot2 from '../../../assets/wads/intercep2/intercep2-p2.png';
import interception2screenshot3 from '../../../assets/wads/intercep2/intercep2-p3.png';

/* interception */
import interceptionLogo from '../../../assets/wads/intercep/intercep-title.png';
import interceptionScreenshot1 from '../../../assets/wads/intercep/intercep-p1.png';
import interceptionScreenshot2 from '../../../assets/wads/intercep/intercep-p2.png';
import interceptionScreenshot3 from '../../../assets/wads/intercep/intercep-p3.png';

/* icons */
import bethesdaIcon from '../../../assets/socials/bethesdanet-icon.png';
import doomWikiIcon from '../../../assets/socials/doomwiki-icon.png';
import doomworldIcon from '../../../assets/socials/doomworld-icon.png';

export default function Wads() {
    const wadsList = [
        createElement(WadRelease, {
            title: 'Interception III',
            role: 'Project Leader, Level Designer, Programmer (in-development)',
            logoSrc: interception3logo,
            screenshotImageSources: [ interception3screenshot1 ],
            quote: '',
            quoteCredit: '',
            quoteSource: '',
            quoteHREF: '',
            links: [
                createElement(IconButton, { href: 'https://www.doomworld.com/forum/topic/145230/', iconSrc: doomworldIcon, text: 'Doomworld Forums' }),
            ],
        }),
        createElement(WadRelease, {
            title: 'Embryo',
            role: 'Project Leader, Graphic Designer, Level Designer (in-development)',
            logoSrc: embryoLogo,
            screenshotImageSources: [ embryoScreenshot1 ],
            quote: '',
            quoteCredit: '',
            quoteSource: '',
            quoteHREF: '',
            links: [
                createElement(IconButton, { href: 'https://www.doomworld.com/forum/topic/139593/', iconSrc: doomworldIcon, text: 'Doomworld Forums' }),
            ],
        }),
        createElement(WadRelease, {
            title: 'Atonement',
            role: 'Author, Level Designer, Graphic Designer (2022)',
            logoSrc: atonementLogo,
            screenshotImageSources: [ atonementScreenshot3 ],
            quote: 'Variety is the order of the day here, in contrast to the tiring uniformity that so often afflicts one-man megawads: from tiny minimaps to grand non-linear adventures, martian bases to gothic castles, casual basecrawlers to slaughterlite bloodbaths, this set has it all.',
            quoteCredit: 'Omniarch',
            quoteSource: '2022 Cacowards: "22 More For 2022," doomworld.com',
            quoteHREF: 'https://www.doomworld.com/cacowards/2022/22for22/',
            links: [
                createElement(IconButton, { href: 'https://doomwiki.org/wiki/Atonement', iconSrc: doomWikiIcon, text: 'The Doom Wiki' }),
                createElement(IconButton, { href: 'https://mods.bethesda.net/en/doom_doomii/details/50c4c308-b420-4041-bbbc-560b64cbf80e/Atonement__Official_', iconSrc: bethesdaIcon, text: 'Bethesda.net' }),
                createElement(IconButton, { href: 'https://www.doomworld.com/idgames/?id=20527', iconSrc: doomworldIcon, text: '/idgames Archive' }),
            ],
        }),
        createElement(WadRelease, {
            title: 'CRUD',
            role: 'Author, Level Designer, Graphic Designer (2021)',
            logoSrc: CRUDlogo,
            screenshotImageSources: [ CRUDscreenshot2 ],
            quote: 'CRUD is a very simple, cozy and fast-paced set of 4 lovely vanilla maps designed with classical stock aesthetic but Plutonia-esque gameplay [...] It\'s pretty short and each map plays dynamically well. [...] A solid recommendation to those that enjoy both vanilla and more relaxed levels.',
            quoteCredit: 'Endless',
            quoteSource: '"Endless Random /idgames WAD Adventures #040", p. 1, doomworld.com',
            quoteHREF: 'https://www.doomworld.com/forum/post/2535989',
            links: [
                createElement(IconButton, { href: 'https://mods.bethesda.net/en/doom_doomii/details/8e311fcd-58cd-4952-bd91-bc04c335e5f5/CRUD__Official_', iconSrc: bethesdaIcon, text: 'Bethesda.net' }),
                createElement(IconButton, { href: 'https://www.doomworld.com/idgames/?id=19847', iconSrc: doomworldIcon, text: '/idgames Archive' }),
            ],
        }),
        createElement(WadRelease, {
            title: 'Interception II',
            role: 'Project Leader, Level Designer (2020)',
            logoSrc: interception2logo,
            screenshotImageSources: [ interception2screenshot1],
            quote: 'Enjoying myself so much on Interception 2 was quite a revelation, as I usually struggle with large maps and prefer shorter adventures. The quality of the gameplay and the theme kept me engaged beyond expectation [...] the megaWAD offers many creations to be astonished at, and solid Doom gameplay with contemporary graphics and effects.',
            quoteCredit: 'Book Lord',
            quoteSource: '"The DWmegawad Club plays: Interception II", p. 14, doomworld.com',
            quoteHREF: 'https://www.doomworld.com/forum/post/2421738',
            links: [
                createElement(IconButton, { href: 'https://doomwiki.org/wiki/Interception_II', iconSrc: doomWikiIcon, text: 'The Doom Wiki' }),
                createElement(IconButton, { href: 'https://mods.bethesda.net/en/doom_doomii/details/d9e7a597-384a-40d9-b1a4-0e94ffd12437/Interception_II__Official_', iconSrc: bethesdaIcon, text: 'Bethesda.net' }),
                createElement(IconButton, { href: 'https://www.doomworld.com/idgames/levels/doom2/Ports/megawads/intercep2', iconSrc: doomworldIcon, text: '/idgames Archive' }),
            ],
        }),
        createElement(WadRelease, {
            title: 'Interception',
            role: 'Project Leader, Level Designer (2013)',
            logoSrc: interceptionLogo,
            screenshotImageSources: [ interceptionScreenshot2 ],
            quote: 'The thing that sticks with me about Interception? It\'s [sic] mapping which lends itself between nature settings, brown brick fortresses, techbases and bloody steel hell maps, all of them feel like they were crafted to flow from one to the next, the maps neither too small nor too big and well placed ammo and health. [...] Interception is among my most played wads, It keeps speaking to me, honestly, as a one of kind megawad that has everything I expect in a megawad.',
            quoteCredit: 'Andrew Mullens',
            quoteSource: '"Doom Wads/Mods #490:Interception," youtube.com',
            quoteHREF: 'https://www.youtube.com/watch?v=KBlnPDBgQcs',
            links: [
                createElement(IconButton, { href: 'https://doomwiki.org/wiki/Interception', iconSrc: doomWikiIcon, text: 'The Doom Wiki' }),
                createElement(IconButton, { href: 'https://mods.bethesda.net/en/doom_doomii/details/6a4f32ce-f9a6-4138-91f9-235c1a24b1d6/Interception__Official_', iconSrc: bethesdaIcon, text: 'Bethesda.net' }),
                createElement(IconButton, { href: 'https://www.doomworld.com/idgames/?id=17082', iconSrc: doomworldIcon, text: '/idgames Archive' }),
            ],
        }),
    ];

    return (
        <>
        <WadsHeader />
        <Scroller
        elements={ wadsList } />
        <UnorderedList
        title='More WADs I&apos;ve contributed to' />
        </>
    );
}