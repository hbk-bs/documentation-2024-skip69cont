document.addEventListener('DOMContentLoaded', () => {
  let dark = false;
  setInterval(() => {
    document.body.style = dark
      ? 'background-color:black'
      : Math.random() > 0.4
      ? 'background-color:#ff6347'
      : 'background-color:white';
    dark = !dark;
    document.querySelector('h1').style = dark
      ? Math.random() > 0.6
        ? 'color: white'
        : 'color: black'
      : 'color: #ff6347';
    document.title = dark
      ? Math.random() > 0.5
        ? 'Huh?'
        : '🍅'
      : Math.random() < 0.6
      ? 'hihihihih!'
      : 'HAH!';
  }, 1000);
});
