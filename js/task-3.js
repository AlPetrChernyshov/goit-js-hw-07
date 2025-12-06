const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const rawInput = event.currentTarget.value;
  const trimmedInput = rawInput.trim();
  if (trimmedInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedInput;
  }
});