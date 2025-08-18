alert('Klik Gambar Untuk Mendownload Resume')


function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message');
    if (name === '' || email ==='' || message === '') {
        formMessage.textContent = 'semua field harus di isi';
        formMessage.style.color = '#ff4655';
    } else {
        formMessage.textContent = `Terima kasih, ${name}! Pesanmu Telah Dikirim`
        formMessage.style.color = '#333';
        document.querySelector('.contact-form').reset();
    }
}

    const body = document.body;
    const theme = document.getElementById('theme');
    const form = document.querySelector('.contact-form')
    theme.addEventListener('click', () => {
        theme.textContent = "Dark Mode";
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')){
            theme.innerText = "Dark Mode"
            theme.style.border = "2px white solid"
            theme.style.color = "white"
            form.style.border = "1px black solid"
        } else {
            theme.innerText = "Light Mode"
            theme.style.border = "2px black solid"
            theme.style.color = "black"
            form.style.border = "1px white solid"

        }
    });

// tombol detail project
      function toggleDetail(e) {
    const button = e.target;
    const projectHead = button.closest('.project-head');
    const detail = projectHead.querySelector('.detail-project');

    document.querySelectorAll('.detail-project').forEach(d => {
        if (d !== detail) {
            d.classList.remove('active');

            const btn = d.closest('.project-head').querySelector('.btn');
            if(btn) btn.innerText = 'More Info'
        }
    });

    detail.classList.toggle('active');

    button.innerText = detail.classList.contains('active')
        ? "Less Info"
        : "More Info";
       
  }