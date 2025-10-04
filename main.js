document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const preorderButton = document.getElementById('preorder-button');
    const whatsappNumber = '919903620685'; // Extracted from href in index.html

    // --- 1. Theme Toggle Logic ---
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

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
    handleScroll();

    // --- 3. Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20; // Add some padding

                window.scrollTo({
                    top: targetPosition, 
                    behavior: 'smooth'
                });
            }

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- 5. Pre-Order WhatsApp Logic ---
    if (preorderButton) {
        preorderButton.addEventListener('click', () => {
            const itemName = document.getElementById('item-name').value.trim();
            const quantity = document.getElementById('quantity').value.trim();
            
            // Basic validation
            if (!itemName && !quantity) {
                alert('Please enter the Item Name and Quantity for your pre-order.');
                return;
            }

            // Constructing the message
            const message = `Pre-Order Request:\n\nITEM(S): ${itemName || 'Not specified'}\nQUANTITY/DETAILS: ${quantity || 'Not specified'}\n\nThank you!`;
            
            // URL encode the message
            const encodedMessage = encodeURIComponent(message);
            
            // Construct the WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open the WhatsApp chat
            window.open(whatsappUrl, '_blank');
        });
    }
});
