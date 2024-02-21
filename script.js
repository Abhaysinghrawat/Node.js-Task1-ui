const form = document.getElementById('registrationForm');
form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });
    try {
        const response = await fetch('https://node-js-task-1.onrender.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const responseData = await response;
        if(responseData.status === 201)
        Alert('User registered successfully');
        form.reset();
    } catch (error) {
        console.error('Error registering user:', error.message);
    }
});


