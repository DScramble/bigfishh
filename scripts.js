document.getElementById('spin-button').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const degrees = Math.floor(Math.random() * 360) + 720; // Random angle between 720 and 1080 degrees
    wheel.style.transform = `rotate(${degrees}deg)`;

    // Redirect to bigfishbuilt.com after spinning
    setTimeout(() => {
        window.location.href = 'https://bigfishbuilt.com';
    }, 4000); // Redirect after the spin animation (4 seconds)
});

// Function to show the spin button at random intervals
function showSpinButton() {
    const spinButton = document.getElementById('spin-button');
    const bubbleSound = document.getElementById('bubble-sound');
    const randomTime = Math.floor(Math.random() * 60000); // Random time between 0 and 60000 milliseconds (1 minute)
    
    setTimeout(() => {
        spinButton.style.display = 'block';
        bubbleSound.play(); // Play the bubble sound
        
        setTimeout(() => {
            spinButton.style.display = 'none';
            showSpinButton(); // Schedule the next appearance
        }, 1000); // Display for 1 second
    }, randomTime);
}

// Initial call to start the random appearances
showSpinButton();
