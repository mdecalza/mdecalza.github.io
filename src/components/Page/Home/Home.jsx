/* Code by 2024—2025 Matthew DeCalzadilla */

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
                I&apos;m Matthew DeCalzadilla. I make <Link to={{ pathname: '/music' }}>music</Link>, <Link to={{ pathname: '/art' }}>art</Link>, <Link to={{ pathname: '/wads' }}>wads</Link>, and <Link to={{ pathname: '/websites' }}>websites</Link> (like the one you&apos;re on now!). Please, contact me if you&apos;d like me to make you things.
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