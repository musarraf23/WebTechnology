const sortButton = document.getElementById('sort-button');
const resultParagraph = document.getElementById('result');
const selectButton = document.getElementById('Selected');

sortButton.addEventListener('click', () => {
    const cardInputs = document.querySelectorAll('#card-inputs input'); 
    const cardValues = [];

    cardInputs.forEach(input => {
        const value = parseInt(input.value);
        if (!isNaN(value)) {
            cardValues.push(value);
        }
    });

    if (cardValues.length === 5) {
        cardValues.sort((a, b) => a - b);
        const sum = cardValues.reduce((acc, val) => acc + val, 0);
        resultParagraph.textContent = `Sorted values: ${cardValues.join(', ')}. Sum: ${sum}`;
    } else {
        resultParagraph.textContent = 'Please enter 5 valid card values.';
    }
    alert('Sorted List : ' +cardValues.join(','));
});

selectButton.addEventListener('click', () => {
    document.getElementById('card-inputs').innerHTML = `
      <input type='number' min='1' max='13' placeholder='Card 1'>
      <input type='number' min='1' max='13' placeholder='Card 2'>
      <input type='number' min='1' max='13' placeholder='Card 3'>
      <input type='number' min='1' max='13' placeholder='Card 4'>
      <input type='number' min='1' max='13' placeholder='Card 5'>
    `;
});
