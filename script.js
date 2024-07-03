document.getElementById('predictionForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('csvFile', document.getElementById('csvFile').files[0]);
    
    const response = await fetch('backend.php', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    document.getElementById('predictionResult').innerText = `Prediction: ${result.prediction}`;
});
