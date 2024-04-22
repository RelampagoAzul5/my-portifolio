
// Menu Script
const menuItems = document.querySelectorAll('.nav-link');

function removeActiveItem() {
    const selectedItem = document.querySelector('.active');
    if (selectedItem) {
        selectedItem.classList.remove('active');
    }
}
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        removeActiveItem();
        item.classList.add('active');
    });
});


// Link Script

const links = document.querySelectorAll('.link');
const linkNames = document.querySelectorAll('.link-name');

links.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        const linkText = link.getAttribute('class').split(' ')[1];
        linkNames[index].innerText = linkText;
        linkNames[index].style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        linkNames[index].style.display = 'none';
    });
});