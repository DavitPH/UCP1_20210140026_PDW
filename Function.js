// Get the current date and time
const currentDateTime = new Date();

// Format the date and time as desired
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);

// Display the date and time in the HTML
document.getElementById('currentDateTime').textContent = formattedDateTime;


var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: 2000
})