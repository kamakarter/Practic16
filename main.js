const block2 = document.querySelector('.block2');
const popup = document.querySelector('.popup');

// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset;
//   const block2Top = block2.offsetTop;

//   
// });


window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    popup.style.display = 'block';
      
  }

  else {
    popup.style.display = 'none';
  }
  
});