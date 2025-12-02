const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.id === 'clear') {
      currentInput = '';
      display.value = '';
      return;
    }

    if (value === '=') {
      try {
        let expression = currentInput
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-')
          .replace(/%/g, '/100');
        let result = eval(expression);
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
        currentInput = display.value;
        resultDisplayed = true;
      } catch {
        display.value = 'Помилка';
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      currentInput = value;
      display.value = value;
      resultDisplayed = false;
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});