window.onload = () => {
  let buttons = document.querySelectorAll('button');
  let sliders = document.querySelector('.main__products');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      buttons.forEach((l) => l.classList.remove('active'));
      e.target.classList.add('active');
      let id = e.target.getAttribute('for').slice(5);
      if (id === '1') {
        sliders.style.transform = "translateX(0)";
        sliders.style.transition= '1s';
      } else if (id === '2') {
        sliders.style.transform = "translateX(-256px)";
        sliders.style.transition= '1s';
      } else if (id === '3') {
        sliders.style.transform = "translateX(-512px)";
        sliders.style.transition= '1s';
      } else if (id === '4') {
        sliders.style.transform = "translateX(-768px)";
        sliders.style.transition= '1s';
      } else if (id === '5') {
        sliders.style.transform = "translateX(-1024px)";
        sliders.style.transition= '1s';
      } else if (id === '6') {
        sliders.style.transform = "translateX(-1280px)";
        sliders.style.transition= '1s';
      } else if (id === '7') {
        sliders.style.transform = "translateX(-1536px)";
        sliders.style.transition= '1s';
      } else if (id === '8') {
        sliders.style.transform = "translateX(-1792px)";
        sliders.style.transition= '1s';
      } else if (id === '9') {
        sliders.style.transform = "translateX(-2048px)";
        sliders.style.transition= '1s';
      } 
    })
  })
}