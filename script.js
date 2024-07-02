document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('noteForm');
    const totalValueSpan = document.getElementById('totalValue');

    form.addEventListener('input', updateTotal);

    function updateTotal() {
        const notes2 = parseInt(document.getElementById('notes2').value) || 0;
        const notes5 = parseInt(document.getElementById('notes5').value) || 0;
        const notes10 = parseInt(document.getElementById('notes10').value) || 0;
        const notes20 = parseInt(document.getElementById('notes20').value) || 0;
        const notes50 = parseInt(document.getElementById('notes50').value) || 0;
        const notes100 = parseInt(document.getElementById('notes100').value) || 0;
        const notes200 = parseInt(document.getElementById('notes200').value) || 0;

        const total = (notes2 * 2) + (notes5 * 5) + (notes10 * 10) +
                      (notes20 * 20) + (notes50 * 50) + (notes100 * 100) +
                      (notes200 * 200);

        totalValueSpan.textContent = total;
    }
});
