/* Matthew DeCalzadilla 2024—2025 */

const initialDate = 2024;
const currentDate = new Date().getFullYear();

export default function Footer() {
    return (
        <div
        className='FooterContainer'>
            <footer
            className='Footer mx-auto p-4 text-center text-light text-opacity-50'>
                <div
                className='bg-light bg-opacity-10 rounded-4 p-3'>
                    Contact<br/>
                    <div
                    className='pt-1'>
                        Music: <a
                        href='mailto:&#115;&#111;&#110;&#116;&#111;&#109;&#111;&#114;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                        rel='noopener nofollower noreferrer'>
                            &#115;&#111;&#110;&#116;&#111;&#109;&#111;&#114;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                        </a><br />
                        General: <a
                        href='mailto:&#109;&#97;&#116;&#116;&#46;&#100;&#101;&#99;&#97;&#108;&#122;&#97;&#100;&#105;&#108;&#108;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                        rel='noopener nofollower noreferrer'>
                            &#109;&#97;&#116;&#116;&#46;&#100;&#101;&#99;&#97;&#108;&#122;&#97;&#100;&#105;&#108;&#108;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                        </a><br />
                    </div>
                </div>
                <div
                className='pt-5'>
                    &copy; Matthew DeCalzadilla {
                        (currentDate === initialDate) ?
                        initialDate :
                        initialDate.toString() + ' - ' + currentDate
                    }.
                </div>
            </footer>
        </div>
    );
}