/* 2024 Matthew DeCalzadilla */

import { Link } from 'react-router';

/* components */
import mateoLogo from '../../../assets/home/mateowhite.png';
import Socials from '../../Socials/Socials';

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
                I&apos;m Matthew DeCalzadilla. I make <Link to={{ pathname: '/websites' }}>websites</Link> (like the one you&apos;re reading now!), <Link to={{ pathname: '/games' }}>games</Link>, <Link to={{ pathname: '/art' }}>art</Link>, and <Link to={{ pathname: '/music' }}>music</Link>. Please, contact me if you&apos;d like me to make you things.
                </p>
            </div>
            <h2 className='pt-2'>
                Socials
            </h2>
            <hr/>
            <Socials
            socialsList={[ 'linkedin', 'main-email', 'github' ]}/>
        </div>
    );
}