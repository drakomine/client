document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    // 1. Navbar Scroll Effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on load in case the page is already scrolled

    // 2. Mobile Menu Toggle (Hamburger)
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change the icon from bars to times (X)
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 3. Smooth Scrolling and Menu Close on Link Click
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll adjusted for the fixed navbar height
                window.scrollTo({
                    top: targetElement.offsetTop - 80, 
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
