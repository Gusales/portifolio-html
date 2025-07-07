function toogleTheme() {
  const body = document.body;
  body.classList.toggle('light');
}

function entrarEmContato(event) {
  event.preventDefault()
  const name = document.getElementById('input-name').value
  const email = document.getElementById('input-email').value
  alert(`Olá ${name}, entrarei em contato contigo pelo e-mail ${email}`)
}

document.querySelector('form')?.addEventListener('submit', entrarEmContato)