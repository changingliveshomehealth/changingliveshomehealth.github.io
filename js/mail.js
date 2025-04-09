document.getElementById('ContactUsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const successMessage = document.getElementById('success-message');
    const statusMessage = document.getElementById('status-message');

    fetch('send_email.php', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            form.style.display = 'none'; 
            successMessage.style.flexdirection = 'column';
            successMessage.style.display = 'flex'; 
            successMessage.style.marginleft = '-25%';
            successMessage.style.marginright= '25%';
        } else {
            statusMessage.innerHTML = data.message;
            statusMessage.style.color = 'red';
        }
    })
    .catch(error => {
        statusMessage.innerHTML = 'Error: ' + error;
        statusMessage.style.color = 'red';
    });
});