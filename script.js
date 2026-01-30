document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    function round(num) {
        return Math.round(num * 100) / 100;
    }

    function celsiusToFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }

    function fahrenheitToCelsius(f) {
        return (f - 32) * 5 / 9;
    }

    celsiusInput.addEventListener('input', (e) => {
        const cVal = parseFloat(e.target.value);
        if (!isNaN(cVal)) {
            const fVal = celsiusToFahrenheit(cVal);
            fahrenheitInput.value = round(fVal);
        } else {
            fahrenheitInput.value = '';
        }
    });

    fahrenheitInput.addEventListener('input', (e) => {
        const fVal = parseFloat(e.target.value);
        if (!isNaN(fVal)) {
            const cVal = fahrenheitToCelsius(fVal);
            celsiusInput.value = round(cVal);
        } else {
            celsiusInput.value = '';
        }
    });
    const swapBtn = document.getElementById('swap-btn');
    const inputGroup = document.querySelector('.input-group');
    const exchangeSymbol = document.querySelector('.exchange-symbol');

    swapBtn.addEventListener('click', () => {
        // Animation
        exchangeSymbol.classList.add('spinning');
        setTimeout(() => {
            exchangeSymbol.classList.remove('spinning');
        }, 500);

        // Swap visual positions
        const first = inputGroup.children[0];
        const last = inputGroup.children[2];
        const button = inputGroup.children[1];

        // Move the last element to before the button
        inputGroup.insertBefore(last, button);
        // Move the first element to the end of the container
        inputGroup.appendChild(first);
    });
});
