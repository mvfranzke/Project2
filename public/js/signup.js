//event listener for sign me up button
function registerUser() {
  document.getElementById('registerUser').addEventListener('click', async event => {
    event.preventDefault();
    console.log("hello there!!!!");

    const user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };
    console.log(user);
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.replace('/');
  });
}

// Call the function to add the event listener to the button
registerUser();