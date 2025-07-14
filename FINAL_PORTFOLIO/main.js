document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the title
    new Typed('.text', {
        strings: ['Web Designer', 'Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll effects
    const elementsToAnimate = document.querySelectorAll('.home-content h3, .home-content p, .home-sci a, .btn-box, .about h2, .about p, .skills h2, .skills ul, .projects h2, .projects ul, .contact h2, .contact form');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(100px)';
        observer.observe(element);
    });

    // Redirect "Learn More" buttons to respective W3Schools pages
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Perform form validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // AJAX request to send form data to PHP script
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_form.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.status === 200) {
                alert(this.responseText);
            } else {
                alert('An error occurred while sending the message.');
            }
        };

        const params = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
        xhr.send(params);
    });
});