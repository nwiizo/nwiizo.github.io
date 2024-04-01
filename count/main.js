document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const countWithSpaces = document.getElementById('countWithSpaces');
    const countWithoutSpaces = document.getElementById('countWithoutSpaces');
    const lineCount = document.getElementById('lineCount');
    const paragraphCount = document.getElementById('paragraphCount');

    input.addEventListener('input', () => {
        const text = input.value;
        const withSpaces = text.length;
        const withoutSpaces = text.replace(/\s/g, '').length;
        const lines = text.split('\n').length;
        const paragraphs = text.split('\n\n').filter(p => p.trim() !== '').length;

        countWithSpaces.textContent = withSpaces;
        countWithoutSpaces.textContent = withoutSpaces;
        lineCount.textContent = lines;
        paragraphCount.textContent = paragraphs;
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        input.value = '';
        countWithSpaces.textContent = '0';
        countWithoutSpaces.textContent = '0';
        lineCount.textContent = '0';
        paragraphCount.textContent = '0';
    });
});
