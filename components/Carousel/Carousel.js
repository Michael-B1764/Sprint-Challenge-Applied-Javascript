/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel() {
  const carouselContainer = document.querySelector(".carousel-container")
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div')

  //structure
  carouselContainer.append(carousel);
  carousel.append(leftButton, mountains, computer, trees, turntable, rightButton);
  //classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  mountains.classList.add('img', 'mountains');
  computer.classList.add('img', 'computer');
  trees.classList.add('img', 'trees');
  turntable.classList.add('img', 'turntable');
  
  //content
  leftButton.innerText = (' < ');
  rightButton.innerText = (' > ');
  mountains.src = ("./assets/carousel/mountains.jpeg");
  computer.src = ('./assets/carousel/computer.jpeg');
  trees.src = ('./assets/carousel/trees.jpeg');
  turntable.src = ('./assets/carousel/turntable.jpeg');
  console.log(carousel);

  //carousel functionality
  let currentIndex = 1

  mountains.style.transitionDuration = "1s";
  computer.style.transitionDuration = "1s";
  trees.style.transitionDuration = "1s";
  turntable.style.transitionDuration = "1s";
  

  leftButton.addEventListener('click', event => {
    if (currentIndex === 1) {
      currentIndex = 4;
      console.log(currentIndex);
      mountains.style.transitionDuration = "1s";
      mountains.style.display = ("none");
      turntable.style.transitionDuration = "1s";
      turntable.style.display = ('block');
      
    }else if(currentIndex === 2){
      currentIndex -= 1;
      console.log(currentIndex);
      computer.style.transitionDuration = "1s";
      computer.style.display = ("none");
      mountains.style.transitionDuration = "1s";
      mountains.style.display = ('block');
    }else if(currentIndex === 3) {
      currentIndex -= 1;
      console.log(currentIndex);
      trees.style.transitionDuration = "1s";
      trees.style.display = ("none");
      computer.style.transitionDuration = "1s";
      computer.style.display = ('block');
    }else if(currentIndex === 4) {
      currentIndex -= 1;
      console.log(currentIndex);
      turntable.style.transitionDuration = "1s";
      turntable.style.display = ("none");
      trees.style.transitionDuration = "1s";
      trees.style.display = ('block');
    }
  
  })

  mountains.style.display = ("block");

  rightButton.addEventListener('click', event => {
    if (currentIndex === 4) {
      currentIndex = 1;
      console.log(currentIndex);
      turntable.style.transitionDuration = "1s";
      turntable.style.display = ("none");
      mountains.style.transitionDuration = "1s";
      mountains.style.display = ('block');
    }else if(currentIndex === 1){
      currentIndex += 1;
      console.log(currentIndex);
      mountains.style.transitionDuration = "1s";
      mountains.style.display = ("none");
      computer.style.transitionDuration = "1s";
      computer.style.display = ('block');
    }else if(currentIndex === 2) {
      currentIndex += 1;
      console.log(currentIndex);
      computer.style.transitionDuration = "1s";
      computer.style.display = ("none");
      trees.style.transitionDuration = "1s";
      trees.style.display = ('block');
    }else if(currentIndex === 3) {
      currentIndex += 1;
      console.log(currentIndex);
      trees.style.transitionDuration = "1s";
      trees.style.display = ("none");
      turntable.style.transitionDuration = "1s";
      turntable.style.display = ('block');
    }
  })

  

  return carousel;
}

createCarousel();



