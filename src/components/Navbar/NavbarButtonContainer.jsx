/* Matthew DeCalzadilla 2024—2025 */

import { useEffect, useState } from "react";

import NavbarButton from '/src/components/Navbar/NavbarButton';

NavbarButtonContainer.propTypes = {
    widescreen: false,
};

export default function NavbarButtonContainer({widescreen = false}) {
    const navbarButtonsClassBase = 'NavbarButtonContainer overflow-hidden d-none';
    const [navbarButtonsClass, setNavbarButtonContainerClass] = useState('');

    useEffect(() => {
        setNavbarButtonContainerClass(
            navbarButtonsClassBase.concat(
                widescreen ?
                ' flex-row my-auto' :
                ' flex-column mt-3'
            )
        );
    }, [widescreen]);

    return (
        <div
        className={navbarButtonsClass}>
            <NavbarButton
            text='Music'
            widescreen={widescreen}/>
            <NavbarButton
            text='Art'
            widescreen={widescreen}/>
            <NavbarButton
            text='Wads'
            widescreen={widescreen}/>
        </div>
    );
}