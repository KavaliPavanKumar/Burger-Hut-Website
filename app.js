document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});