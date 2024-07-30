document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pan = document.getElementById('pan').value;
    const error = document.getElementById('error');

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panRegex.test(pan)) {
        error.textContent = '';
        alert('Valid PAN Number');
    } else {
        error.textContent = 'Invalid PAN Number';
    }
});
