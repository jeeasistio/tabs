// selectors
const tab = document.querySelector('#tab-buttons');
const buttons = document.querySelectorAll('#tab-buttons a');

// functions
const clear = elem => {
  elem.style.color = 'black';
  elem.style.backgroundColor = '';
}
const highlight = elem => {
  elem.style.color = '#fff';
  elem.style.backgroundColor = '#9FD356';
}
const highlightOnClick = e => {
  buttons.forEach(clear);
  highlight(e.target);
}
highlight(buttons[0]);

// listeners
tab.addEventListener('click', highlightOnClick)