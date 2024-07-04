document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('noteForm');
    const totalValueSpan1 = document.getElementById('totalValue1');
    const totalValueSpan2 = document.getElementById('totalValue2');

    form.addEventListener('input', updateTotal);

    function updateTotal() {
        const notes2 = parseInt(document.getElementById('notes2').value) || 0;
        const notes5 = parseInt(document.getElementById('notes5').value) || 0;
        const notes10 = parseInt(document.getElementById('notes10').value) || 0;
        const notes20 = parseInt(document.getElementById('notes20').value) || 0;
        const notes50 = parseInt(document.getElementById('notes50').value) || 0;
        const notes100 = parseInt(document.getElementById('notes100').value) || 0;
        const notes200 = parseInt(document.getElementById('notes200').value) || 0;

        const coins005 = parseInt(document.getElementById('coins005').value) || 0;
        const coins010 = parseInt(document.getElementById('coins010').value) || 0;
        const coins025 = parseInt(document.getElementById('coins025').value) || 0;
        const coins050 = parseInt(document.getElementById('coins050').value) || 0;
        const coins1 = parseInt(document.getElementById('coins1').value) || 0;

        const total = (notes2 * 2) + (notes5 * 5) + (notes10 * 10) +
                      (notes20 * 20) + (notes50 * 50) + (notes100 * 100) +
                      (notes200 * 200) + (coins005 * 0.05) + (coins010 * 0.10) +
                      (coins025 * 0.25) + (coins050 * 0.50) + (coins1 * 1);

        totalValueSpan1.textContent = total.toFixed(2);
        totalValueSpan2.textContent = total.toFixed(2);
    }
});
