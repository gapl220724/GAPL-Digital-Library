const scriptURL = 'https://script.google.com/macros/s/AKfycbxd0hKC4W0uKh61p8osHLqvPS_ENjMJz2q49o362od7s022zkB_l76aQFfaz2WHm9dq4A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}) 

