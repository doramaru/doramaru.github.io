'use strict';

{
  const images = [
    'img/DVC00007.JPG',
    'img/DVC00008.JPG',
    'img/DVC00009.JPG',
    'img/DVC00018.JPG',
    'img/DVC00037.JPG',
    'img/DVC00049.JPG',
    'img/DVC00061.JPG',
    'img/DVC00072.JPG',
    'img/NEC_0083.JPG',
    'img/NEC_0114.JPG',
    'img/NEC_0117.JPG',
    'img/NEC_0159.JPG',
    'img/NEC_0163.JPG',
    'img/NEC_0168.JPG',
    'img/NEC_0877.JPG',
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    
    const li = document.createElement('li');
    if(index ===currentIndex) {
      li.classList.add('current')
    }
    li.addEventListener('click', () =>{
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);

  });

  const next = document.getElementById('next');
  next.addEventListener('click' ,() => {
    let target = currentIndex + 1;
    if (target ===images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });
  const prev = document.getElementById('prev');
  prev.addEventListener('click' ,() => {
    let target = currentIndex - 1;
    if (target ===images.length - 9){
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow(){
    timeoutId = setTimeout(() =>{
      next.click();
    playSlideshow();
    },2000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click' ,() =>{
    if (isPlaying === false){
      playSlideshow();
      play.textContent = 'Pause';
    }else{
      clearTimeout(timeoutId);
      play.textContent = 'Play';

    }
    isPlaying = !isPlaying;
  });
}