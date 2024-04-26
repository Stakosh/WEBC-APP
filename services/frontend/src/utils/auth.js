const handleLogin = async (formData) => {
    // The function now takes formData as an argument
    // Extract email and password from formData
    const { email, password } = formData;

    // Make a POST request to the backend server for authentication
    try {
        const response = await fetch('http://localhost:5000/login2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Parse the response JSON
        const data = await response.json();

        // Handle the response based on success
        if (data.success) {
            console.log('Login successful');
            // Handle successful login (e.g., redirect the user)
        } else {
            console.log('Login failed:', data.message);
            // Handle unsuccessful login (e.g., display an error message)
        }
    } catch (error) {
        console.error('Error during login request:', error);
        // Handle request error (e.g., display an error message)
    }
};
