/* Matthew DeCalzadilla 2024—2025 */

import { Link } from 'react-router';

/* components */
import Socials from '/src/components/Socials/Socials';

/* assets */
import mateoLogo from '/src/assets/home/mateowhite.png';

export default function Home() {
    return(
        <div
        className='fadeIn container-xxl'>
            <div>
                <img
                src={ mateoLogo }
                className='MateoLogo w-100 pb-3'/>
                <h5
                className='pt-2 pb-1 opacity-75'>
                    Home to the works of Matthew DeCalzadilla
                </h5>
            </div>
            <div className='px-4 pt-4 pb-5'>
                <div
                className='row justify-content-center'>
                    <div
                    className='col-lg-10 py-3'>
                        <div
                        className='py-3 rounded-5 border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Link
                            to={'music'}
                            className='link-light'>
                                <div
                                className='btn border-0 text-white bg-secondary bg-opacity-25 mx-3 mb-3 p-2 rounded-4 shadow-sm growOnHover'>
                                    <h2
                                    className='mx-3 my-2'>
                                        Music
                                    </h2>
                                </div>
                            </Link>
                            <Socials
                            socialsList={[ 'apple-music', 'music-youtube', 'bandcamp', 'patreon', 'tiktok', 'music-instagram', 'soundcloud', 'twitter' ]} />
                        </div>
                    </div>
                    <div
                    className='col-lg-4 py-3'>
                        <div
                        className='py-3 rounded-5 border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Link
                            to={'art'}
                            className='link-light'>
                                <div
                                className='btn border-0 text-white bg-secondary bg-opacity-25 mx-3 mb-3 p-2 rounded-4 shadow-sm growOnHover'>
                                    <h2
                                    className='mx-3 my-2'>
                                        Art
                                    </h2>
                                </div>
                            </Link>
                            <Socials
                            socialsList={[ 'art-instagram' ]} />
                        </div>
                    </div>
                    <div
                    className='col-lg-4 py-3'>
                        <div
                        className='py-3 rounded-5 shadow border border-3 border-dark'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            minHeight: '75%',
                        }}>
                            <Link
                            to={'wads'}
                            className='link-light'>
                                <div
                                className='btn border-0 text-white bg-secondary bg-opacity-25 mx-3 mb-3 p-2 rounded-4 shadow-sm growOnHover'>
                                    <h2
                                    className='mx-3 my-2'>
                                        Wads
                                    </h2>
                                </div>
                            </Link>
                            <Socials
                            socialsList={[ 'doomwiki', 'doomworld', 'doom-youtube']} />
                        </div>
                    </div>
                </div>
            </div>
            <Socials
            socialsList={[ 'linkedin' ]} />
        </div>
    );
}