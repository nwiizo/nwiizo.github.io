document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const countButton = document.getElementById('countButton');
    const countWithSpaces = document.getElementById('countWithSpaces');
    const countWithoutSpaces = document.getElementById('countWithoutSpaces');
    const lineCount = document.getElementById('lineCount');
    const paragraphCount = document.getElementById('paragraphCount');

    function updateCounts() {
        const text = input.value;
        const withSpaces = text.length;
        const withoutSpaces = text.replace(/\s/g, '').length;
        const lines = text.split('\n').length;
        const paragraphs = text.split('\n\n').filter(p => p.trim() !== '').length;

        countWithSpaces.textContent = withSpaces;
        countWithoutSpaces.textContent = withoutSpaces;
        lineCount.textContent = lines;
        paragraphCount.textContent = paragraphs;
    }

    countButton.addEventListener('click', updateCounts);

    document.querySelectorAll('.copyable').forEach(element => {
        element.addEventListener('click', () => {
            navigator.clipboard.writeText(element.textContent);
        });
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        input.value = '';
        updateCounts();
    });
});
