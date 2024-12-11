/* 2024 Matthew DeCalzadilla */

UnorderedListLink.propTypes = {
    href: '',
    text: '',
    year: null,
};

function UnorderedListLink({ href = '', text = '', year = null }) {
    const yearString = ` (${ year })`;

    return (
        <a
        href={ href }
        className='list-group-item list-group-item-action list-group-item-light py-2'
        type='button'>
            { `${text}${year ? yearString : ''}` }
        </a>
    );
}

UnorderedList.propTypes = {
    title: '',
    items: {},
};

export default function UnorderedList({ title = '', items = {} }) {
    return (
        <div
        className='UnorderedList list-group list-group-flush bg-light mx-auto my-5 rounded-3'>
            <div
            className='list-group-item list-group-item-light px-5 py-3'>
                <b
                className='text-dark fs-5'>
                    { title }
                </b>
            </div>
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Doom_the_Way_id_Did:_The_Lost_Episodes'
            text='Doom the Way id Did: The Lost Episodes'
            year={ 2012 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Doomworld_Mega_Project_2013'
            text='Doomworld Mega Project 2013'
            year={ 2013 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Akeldama'
            text='Akeldama'
            year={ 2020 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Rowdy_Rudy_II:_POWERTRIP'
            text='Rowdy Rudy II: POWERTRIP'
            year={ 2020 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Skulltiverse'
            text='Skulltiverse'
            year={ 2021 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Ray_Mohawk_2:_Ray_Wreaks_Havoc!'
            text='Ray Mohawk 2: Ray Wreaks Havoc!'
            year={ 2021 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Doomworld_Mega_Project_2022'
            text='Doomworld Mega Project 2022'
            year={ 2022 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Not_Even_Remotely_Fair'
            text='Not Even Remotely Fair'
            year={ 2023 } />
            <UnorderedListLink
            href='https://www.doomworld.com/vb/thread/134536'
            text='Super Doom TV'
            year={ 2024 } />
            <UnorderedListLink
            href='https://www.doomworld.com/idgames/?id=21326'
            text='Doomworld Dating Simulator w/ Stochastic'
            year={ 2024 } />
            <UnorderedListLink
            href='https://www.doomworld.com/vb/thread/145820'
            text='Blocked-Out!'
            year={ 2024 } />
            <UnorderedListLink
            href='https://www.doomworld.com/idgames/?id=21362'
            text='Constriction: 1024'
            year={ 2024 } />
            <UnorderedListLink
            href='https://doomwiki.org/wiki/Tribute_Quilt_II'
            text='Tribute Quilt II'
            year={ 2024 } />
            <UnorderedListLink
            href='https://www.doomworld.com/idgames/?id=21381'
            text='Box Doom'
            year={ 2024 } />
            <UnorderedListLink
            href='https://www.doomworld.com/idgames/?id=21443'
            text='Paint It Doom'
            year={ 2024 } />
        </div>
    );
}