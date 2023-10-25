const textarea = document.getElementById('editor');
const clearButton = document.getElementById('clear-editor');

const storedText = localStorage.getItem('text');

if (storedText) {
  textarea.value = storedText;
}

textarea.addEventListener('input', () => {
  localStorage.setItem('text', textarea.value);
})

clearButton.addEventListener('click', () => {
  textarea.value = '';
  localStorage.removeItem('text');
})