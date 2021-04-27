function changeVideo(index) {
  const player = document.querySelector('#player');
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

function changeImage(index) {
  const player=document.querySelector('#player');
  console.log('image',player);
  switch(index) {
    case 1:
      player.innerHTML = `<img src="./大戲01.PNG" style="width:100%;height:auto">`;
      break;
    case 2:
      player.innerHTML = `<img src="./大戲02.PNG" style="width:100%;height:auto">`;
      break;
    case 3:
      player.innerHTML = `<img src="./大戲03.PNG" style="width:100%;height:auto">`;
      break;
    case 4:
      player.innerHTML = `<img src="./大戲04.PNG" style="width:100%;height:auto">`;
      break;
    case 5:
      player.innerHTML = `<img src="./大戲05.PNG" style="width:100%;height:auto">`;
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
