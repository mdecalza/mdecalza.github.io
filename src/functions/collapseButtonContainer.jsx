/* Code by 2024—2025 Matthew DeCalzadilla */

export function collapseButtonContainer(collapse = false) {
    const navbarButtonContainer = document.querySelector('.NavbarButtonContainer');
    const navbarDropdownButton = document.querySelector('.NavbarDropdownButton');

    if (navbarButtonContainer && navbarDropdownButton) {
        if (!collapse) {
            navbarButtonContainer.classList.remove('d-none');
            navbarButtonContainer.classList.add('d-flex');
            navbarDropdownButton.textContent = '\u{25B4}';
        } else {
            navbarButtonContainer.classList.remove('d-flex');
            navbarButtonContainer.classList.add('d-none');
            navbarDropdownButton.textContent = '\u{25BE}';
        }
    }
}