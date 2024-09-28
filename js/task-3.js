const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', ({ currentTarget }) => {
  output.textContent = currentTarget.value.trim() || 'Anonymous';
});
