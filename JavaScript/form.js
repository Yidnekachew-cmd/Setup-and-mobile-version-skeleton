function emailValidator() {
  const EMAIL_INVALID = 'Please enter a correct email address format';
  const email = document.getElementById('email').value;
  const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (event) {
    if (emailRegx.test(email)) {
      document.getElementById('message').innerHTML = 'Success!';
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').style.fontSize = '24px';
    } else {
      document.getElementById('message').innerHTML = EMAIL_INVALID;
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').style.fontSize = '24px';
      event.preventDefault();
    }
  };
}
