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

        const total = (notes2 * 0.05) + (notes5 * 0.10) + (notes10 * 0.25) +
                      (notes20 * 0.5) + (notes50 * 1);

        totalValueSpan.textContent = total.toFixed(2);
    }
});
