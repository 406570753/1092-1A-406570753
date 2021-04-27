function goPage(index) {
  const p = document.querySelector('#player');
  console.log('p', p);
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="./w02/imageGallery.html"width="100%" height="700px" ></iframe>`;
      break;
    case 2:
      p.innerHTML = `<iframe src="./w04-blog/blog.html"width="100%" height="700px" ></iframe>`;
      break;
    case 3:
      p.innerHTML =`<iframe src="./w08/tku60/div.html"width="100%" height="700px" ></iframe>`;
      break;
  }
}
  
function toggle() {
  const p = document.querySelector('#main');
  p.classList.toggle('invisible');
}

function changeVideo(index) {
  const player =document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}

function changeColor(index) {
  const p = document.querySelector('#section');
  switch (index) {
    case 1:
      p.style.backgroundColor = 'purple';
      break;
    case 2:
      p.style.backgroundColor = 'white';
      break;
    case 3:
      p.style.backgroundColor = 'brown';
      break;
  }
}

function colorMenu() {
  const p = document.querySelector('aside ul');
  console.log('colorMenu' , p);
  p.innerHTML =`
    <li onclick="changeColor(1)">
      <a herf="#">Color 1</a>
    </li>
    <li onclick="changeColor(2)">
      <a herf="#">Color 2</a>
    </li>
    <li onclick="changeColor(3)">
      <a herf="#">Color 3</a>
    </li>
  `;
}

function tku60Menu() {
  const p = document.querySelector('aside ul');
  console.log('tku60Menu', p);
  p.innerHTML = `
    <li onclick="changeVideo(1)">
      <a href="#">淡江大戲 1</a>
    </li>
    <li onclick="changeVideo(2)">
      <a href="#">淡江大戲 2</a>
    </li>
    <li onclick="changeVideo(3)">
      <a href="#">淡江大戲 3</a>
    </li>
    <li onclick="changeVideo(4)">
      <a href="#">淡江大戲 4</a>
    </li>
    <li onclick="changeVideo(5)">
      <a href="#">淡江大戲 5</a>
    </li>
    `;
}