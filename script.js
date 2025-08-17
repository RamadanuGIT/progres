function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message').value;

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Semua Field Harus di Isi';
        formMessage.style.color = '#ff4655';
    } else {
        formMessage.textContent =  'Terimakasi, ${name}!, Pesan mu telah terkirim';
        formMessage.style.color = '#ff4655';
        document.querySelectorAll('.contact-form').reset();
    }
}

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

function toggleDetail(e) {
    doc
}