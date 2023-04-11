const container = document.querySelector('.container');
const image = document.querySelector('.image');

container.addEventListener('mousemove', e => {
  const x = (e.clientX - container.offsetLeft) / container.offsetWidth - 0.5;
  const y = (e.clientY - container.offsetTop) / container.offsetHeight - 0.5;
  const maxRotation = 20; // Set the maximum rotation angle
  
  image.style.transform = `translateZ(-100px) rotateX(${y * maxRotation}deg) rotateY(${x * maxRotation}deg)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = `translateZ(-100px)`;
});
