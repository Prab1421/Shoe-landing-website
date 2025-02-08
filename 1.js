const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', () => {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', () => {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', () => {
    setTimeout(() => {
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', () => {
    setTimeout(() => {
        cross.style.display = 'none';
    },200);
    headerbar.style.right = '-100%';
});

console.log('JS loaded');

let img1 = document.querySelector('.image1');
let img2 = document.querySelector('.image2');
let img3 = document.querySelector('.image3');
let img4 = document.querySelector('.image4');
let bike = document.getElementById('bike');

img1.addEventListener('click', () => {
    console.log('image1 clicked');
    bike.style.backgroundImage = "url('images/image1.png')";
});

img2.addEventListener('click', () => { 
    bike.style.backgroundImage = "url('images/image2.png')";
});

img3.addEventListener('click', () => {
    bike.style.backgroundImage = "url('images/image3.png')";
});

img4.addEventListener('click', () => {
    bike.style.backgroundImage = "url('images/image4.png')";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); 
    const closeToggle = document.getElementById("hdcross");    
    const contentImage = document.getElementById("bike");   
    menuToggle.addEventListener("click", function () {
        contentImage.classList.add("hide-content"); 
    });

    closeToggle.addEventListener("click", function () {
        contentImage.classList.remove("hide-content"); 
    });
});



document.addEventListener('DOMContentLoaded', () => {
    let showMoreBtn = document.getElementById('show-more-btn');
    let image_main = document.querySelector('.content-image');
    let imgSelect = document.querySelector('.img-select');
    let bike = document.getElementById('bike');
    let images = document.querySelectorAll('.img-select img');

    showMoreBtn.addEventListener('click', () => {
        if (imgSelect.style.display === 'none' || imgSelect.style.display === '') {
            imgSelect.style.display = 'block';
            image_main.style.display = 'none';
            showMoreBtn.textContent = '<';
            showMoreBtn.style.marginLeft = '20px';
        } else {
            imgSelect.style.display = 'none';
            image_main.style.display = 'flex'; 
            
            showMoreBtn.textContent = '>';
        }
    });

    images.forEach((img) => {
        img.addEventListener('click', (event) => {
            let selectedImgSrc = event.target.getAttribute('src');
            bike.style.backgroundImage = `url('${selectedImgSrc}')`;
            images.forEach(img => img.classList.remove('selected'));
            event.target.classList.add('selected');
        });
    });
});


