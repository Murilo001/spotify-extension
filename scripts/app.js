document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('button');
  loginButton.addEventListener('click', function () {
    console.log('Function consolelog');
    window.oauth2.start();
    const authToken = window.oauth2.getToken();
    if (authToken) {
      console.log(authToken);
    }
  });


}, false);