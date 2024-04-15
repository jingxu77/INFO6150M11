const shibeImage = document.getElementById('shibe-image');
const generateShibeButton = document.getElementById('generate-shibe');

// Function to generate a shibe image
function generateShibe() {
    const url = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
    
    // Fetch a shibe image from the Shibe API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            shibeImage.src = data[0];
        })
        .catch(error => console.error('Error fetching shibe:', error));
}

// Load initial shibe
generateShibe();

generateShibeButton.addEventListener('click', generateShibe);