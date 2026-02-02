/* Matthew DeCalzadilla 2024—2025 */

import { useEffect, useState } from 'react';

/* button icon filepaths */
import appleMusic from '../../assets/socials/apple-music-icon.svg';
import bandcamp from '../../assets/socials/bandcamp-icon.png';
import bethesda from '../../assets/socials/bethesdanet-icon.png';
import doomWiki from '../../assets/socials/doomwiki-icon.png';
import doomworld from '../../assets/socials/doomworld-icon.png';
import github from '../../assets/socials/github-mark-white.svg';
import instagram from '../../assets/socials/inst-icon.png';
import linkedIn from '../../assets/socials/linkedin-icon.png';
import patreon from '../../assets/socials/PATREON_SYMBOL_1_WHITE_RGB.svg';
import soundCloud from '../../assets/socials/soundcloud-icon.png';
import tikTok from '../../assets/socials/tiktok-icon.png';
import twitter from '../../assets/socials/twitter-icon.png';
import youTube from '../../assets/socials/yt-icon.png';

SocialsLink.propTypes = {
    target: null,
};

export default function SocialsLink({target = ''}) {
    const [targetURL, setTargetURL] = useState('#');
    const [iconSource, setIconSource] = useState(null);
    const [animation, setAnimation] = useState('popIn');

    useEffect(() => {
        setTimeout(setAnimation, 875, '');
    }, []);

    useEffect(() => {
        switch (target.toLowerCase()) {
            case 'apple-music':
            case 'apple':
            case 'itunes':
                setTargetURL('https://music.apple.com/us/artist/sontomorio/1490964793');
                setIconSource(appleMusic);
                break;
            case 'bandcamp':
                setTargetURL('https://sontomorio.bandcamp.com/');
                setIconSource(bandcamp);
                break;
            case 'bethesda':
                setTargetURL('https://mods.bethesda.net/en/doom_doomii/all?author_displayname=decalzi');
                setIconSource(bethesda);
                break;
            case 'doomwiki':
                setTargetURL('https://doomwiki.org/wiki/Matthew_DeCalzadilla_(Moustachio)');
                setIconSource(doomWiki);
                break;
            case 'doomworld':
                setTargetURL('https://www.doomworld.com/profile/12411-moustachio/');
                setIconSource(doomworld);
                break;
            case 'github':
                setTargetURL('https://github.com/mdecalza');
                setIconSource(github);
                break;
            case 'art-instagram':
                setTargetURL('https://www.instagram.com/the_decalzone/');
                setIconSource(instagram);
                break;
            case 'music-instagram':
                setTargetURL('https://instagram.com/sontomoriomusico');
                setIconSource(instagram);
                break;
            case 'linkedin':
                setTargetURL('https://www.linkedin.com/in/mdecalzadilla/');
                setIconSource(linkedIn);
                break;
            case 'patreon-doom':
                setTargetURL('https://patreon.com/Moustachio?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink');
                setIconSource(patreon);
                break;
            case 'patreon-music':
                setTargetURL('https://patreon.com/Sontomorio?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink');
                setIconSource(patreon);
                break;
            case 'soundcloud':
                setTargetURL('https://soundcloud.com/sontomorio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
                setIconSource(soundCloud);
                break;
            case 'tiktok':
                setTargetURL('https://www.tiktok.com/@sontomorio?is_from_webapp=1&sender_device=pc');
                setIconSource(tikTok);
                break;
            case 'twitter':
            case 'x':
                setTargetURL('https://x.com/sontomorio');
                setIconSource(twitter);
                break;
            case 'doom-youtube':
                setTargetURL('https://youtube.com/@matt534dog?feature=shared');
                setIconSource(youTube);
                break;
            case 'music-youtube':
                setTargetURL('https://youtube.com/@sontomorio4653?si=Yte3pFjgHcrZjeXg');
                setIconSource(youTube);
                break;
            default:
                setTargetURL('#');
                setIconSource(null);
                break;
        }
    }, [target]);

    return (
        <a
        href={targetURL}
        target='_blank'>
            <img
            src={iconSource}
            className={`SocialsLink ${animation} m-2 ${(targetURL === '#') ? 'd-none' : 'd-inline'}`}
            style={{ width: '64px', }}/>
        </a>
    );
}