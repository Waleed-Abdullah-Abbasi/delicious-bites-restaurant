// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav item
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Form Validation
    const reservationForm = document.getElementById('reservation-form');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const people = document.getElementById('people').value;

        // Check if any field is empty
        if (name === '' || date === '' || time === '' || people === '') {
            alert('Please fill in all fields to complete your reservation.');
            return;
        }

        // If all fields are filled, show success message
        alert('Thank you for your reservation! We look forward to serving you.');
        reservationForm.reset();
    });

    // Review Slider
    const reviews = document.querySelectorAll('.review');
    const nextButton = document.getElementById('next-review');
    const prevButton = document.getElementById('prev-review');
    let currentReview = 0;

    // Function to show specific review
    function showReview(index) {
        // Hide all reviews
        reviews.forEach(review => {
            review.classList.remove('active');
        });

        // Show the current review
        reviews[index].classList.add('active');
    }

    // Next review button
    nextButton.addEventListener('click', function () {
        currentReview++;
        if (currentReview >= reviews.length) {
            currentReview = 0;
        }
        showReview(currentReview);
    });

    // Previous review button
    prevButton.addEventListener('click', function () {
        currentReview--;
        if (currentReview < 0) {
            currentReview = reviews.length - 1;
        }
        showReview(currentReview);
    });

    // Auto-rotate reviews every 5 seconds
    setInterval(function () {
        currentReview++;
        if (currentReview >= reviews.length) {
            currentReview = 0;
        }
        showReview(currentReview);
    }, 5000);
});