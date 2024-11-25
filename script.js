const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', () => {

      if (square.style.backgroundColor === 'lightblue') {
        square.style.backgroundColor = 'white';
      } else {
        square.style.backgroundColor = 'lightblue';
      }
    });
});

squares.forEach(square => {
    square.addEventListener('click', () => {
     
      squares.forEach(sq => sq.style.backgroundColor = 'white');
     
      square.style.backgroundColor = 'lightblue';
    });
});

const menuButton = document.getElementById('menuButton');

const menu = document.getElementById('menu');

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
  
    menuButton.addEventListener('click', function () {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show'); 
      } else {
        menu.classList.add('show'); 
      }
    });
});


  