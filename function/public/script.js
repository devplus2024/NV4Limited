document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            showProfile(data.user);
        } else {
            document.getElementById('message').innerText = data.message;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'An error occurred. Please try again.';
    }
});

function showProfile(user) {
    document.querySelector('.signup-container').style.display = 'none';
    document.querySelector('.profile-container').style.display = 'block';
    document.getElementById('profile-username').innerText = `Username: ${user.username}`;
    document.getElementById('profile-email').innerText = `Email: ${user.email}`;
}

document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('token');
    document.querySelector('.profile-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
});
