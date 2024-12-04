export default function checkTitle(title) {
    if (typeof(title) !== 'string') {
        return false;
    }

    if (title === '') {
        return false;
    }

    return true;
}