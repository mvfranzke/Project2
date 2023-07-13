const logoutUser = async function(event) {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
    
};

const listenLogout = () => {
    let logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', logoutUser);
}

listenLogout();