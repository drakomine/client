document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- 1. Theme Toggle Logic ---
    
    // Function to set the theme
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update the icon based on the theme
        if (theme === 'dark') {
            themeToggle.querySelector('i').className = 'fas fa-sun';
        } else {
            themeToggle.querySelector('i').className = 'fas fa-moon';
        }
    }

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // --- 2. Navbar Scroll Effect ---
    const handleScroll = () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // --- 3. Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change the icon
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // --- 4. Smooth Scrolling & Menu Close ---
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll adjusted for the fixed navbar height
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }

            // Close the mobile menu after a link is clicked
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});
