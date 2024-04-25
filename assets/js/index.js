// Menu Script

const menuItems = document.querySelectorAll('.nav-link');

function removeActiveItem() {
    const selectedItem = document.querySelector('.active');
    if (selectedItem) {
        selectedItem.classList.remove('active');
    }
};
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

// CopyrightScript

const year = new Date().getFullYear();
const footer = document.querySelector('footer');
function createP(){
    return document.createElement('p');
};
function createCopyrightText(){
    const p = createP();
    p.classList.add('text-center');
    p.innerHTML = `Copyright &copy; ${year}. Todos os direitos reservados.`;
    footer.appendChild(p);
};
createCopyrightText();

// CarouselScript

document.getElementById('radio1').checked = true;

function nextImage(){
    count++;
    if (count>4){
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}


function checkButtonChecked(){
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    if (radio1.checked === true){
        return 0;
    }
    if (radio2.checked === true){
        return 1;
    }
    if (radio3.checked === true){
        return 2;
    }
    return 3;
    
}

function nextLink(){
    const projectButton = document.getElementById('project-button');
    const codeButton = document.getElementById('code-button');
    const carouselButtons = document.querySelector('.carousel-buttons');
    const projectLinks = ['https://relampagoazul5.github.io/prank-button-no/','https://landing-page-curso-python.netlify.app', 'https://relampagoazul5.github.io/x-men/'];

    const codeLinks = ['https://github.com/RelampagoAzul5/prank-button-no','https://github.com/RelampagoAzul5/LandingPage','https://github.com/RelampagoAzul5/x-men'];
    let currentSlide = checkButtonChecked();

    projectButton.href = `${projectLinks[currentSlide]}` ;
    codeButton.href = `${codeLinks[currentSlide]}`;
 
    carouselButtons.appendChild(projectButton);
    carouselButtons.appendChild(codeButton);
}

document.addEventListener('click', ()=>{
    nextLink();
})