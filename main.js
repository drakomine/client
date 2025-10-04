document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault(); 
            
            // Get the target element ID (e.g., '#home', '#doctors')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smoothly scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add a class to the navbar on scroll for a shrinking/shadow effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // You would need to add this CSS for the 'scrolled' class in main.css:
    /*
    .navbar.scrolled {
        padding: 10px 0;
        background-color: var(--background-dark);
    }
    */
});
