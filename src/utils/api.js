export const fetchUserData = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', { // Assurez-vous que l'URL est correcte
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};