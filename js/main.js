"use strict";

let galleryOfImages = Array.from(document.querySelectorAll('.gallery-item img')),
    containerOfImg = document.querySelector('.light-box'),
    sliderOfImg = document.querySelector('.light-box-content'),
    closeBtn = document.getElementById('closeBtn'),
    prevBtn = document.getElementById('prevBtn'),
    nextBtn = document.getElementById('nextBtn'),
    iconControls = document.getElementById('iconControls'),
    currentIndexOfImg;

for (let i = 0; i < galleryOfImages.length; i++) {
    galleryOfImages[i].addEventListener('click',function (e)
    {
        showSlider();
        let imgSrc = e.target.getAttribute('src');
        currentIndexOfImg = galleryOfImages.indexOf(e.target);
        sliderOfImg.style.backgroundImage = `url(${imgSrc})`;
    })
}

function showSlider()
{
    containerOfImg.classList.replace('d-none','d-block');
}
closeBtn.addEventListener('click',closeSlider);
function closeSlider()
{
    containerOfImg.classList.replace('d-block','d-none');
}
function slider(i)
{
    currentIndexOfImg = currentIndexOfImg + i;
    if(currentIndexOfImg > galleryOfImages.length - 1)
    {
        currentIndexOfImg = 0;
    }
    if(currentIndexOfImg < 0)
    {
        currentIndexOfImg = galleryOfImages.length - 1;
    }
    let imgSrc = galleryOfImages[currentIndexOfImg].getAttribute('src');
    sliderOfImg.style.backgroundImage = `url(${imgSrc})`;

}
nextBtn.addEventListener('click',function ()
{
    slider(1);
})
prevBtn.addEventListener('click',function ()
{
    slider(-1);
})

document.addEventListener('keydown',function (e)
{
    if(e.key == 'ArrowRight')
    {
        slider(1);
    }
    else if(e.key == 'ArrowLeft')
    {
        slider(-1);
    }
    else if(e.key == 'Escape')
    {
        closeSlider();
    }
})
containerOfImg.addEventListener('click',function (e)
{
    if(e.target != prevBtn && e.target != nextBtn && e.target != iconControls)
    {
        closeSlider();
    }
})
