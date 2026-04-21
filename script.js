// script.js

// Smooth scrolling navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Button animations and hover effects
const buttons = document.querySelectorAll('button, .btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
});

// Form validation and submission handling
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if(emailInput.value === '') {
        alert('Email is required.');
        return;
    }
    // Add more validation as needed
    submitForm();
});

const submitForm = () => {
    // Handle form submission
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your submission!');
        } else {
            alert('There was a problem with your submission.');
        }
    });
};

// Contact form email integration (example using EmailJS)
// EmailJS configuration would go here.

// Smooth page transitions
const transitionLinks = document.querySelectorAll('a.transition-link');
transitionLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetUrl = this.href;
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location = targetUrl;
        }, 300);
    });
});

// Interactive elements animation
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});

// Responsive menu functionality
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
