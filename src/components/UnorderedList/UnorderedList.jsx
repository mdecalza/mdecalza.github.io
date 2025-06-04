/* Code by 2024—2025 Matthew DeCalzadilla */

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
            { items }
        </div>
    );
}