document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu .close-btn');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');

    // Get the search button
    const searchBtn = document.querySelector('.search-btn');


    // Toggle mobile menu
    if (menuToggle && mobileMenu && closeBtn) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable body scrolling
        });

        // Close menu if clicked outside
        document.addEventListener('click', (event) => {
            const isClickOutsideMenu = !mobileMenu.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);

            // Ensure the menu is active and the click is truly outside both the menu and its toggle button
            if (mobileMenu.classList.contains('active') && isClickOutsideMenu && !isClickOnMenuToggle) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable body scrolling
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable body scrolling
                }
            });
        });
    }

    // Add functionality to the search button
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            console.log('Search button clicked!');
            // IMPORTANT: Do NOT use alert(). Use a custom message box or modal instead.
            // For now, I'm replacing it with a console log as a placeholder.
            console.log('Search functionality will appear here!'); 
        });
    }

    // Timeline functionality (your existing code)
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineButtons.forEach(button => {
        button.addEventListener('click', () => {
            timelineButtons.forEach(btn => btn.classList.remove('active'));
            timelineItems.forEach(item => item.classList.remove('active'));

            button.classList.add('active');

            const period = button.dataset.period;
            const activeItem = document.querySelector(`.timeline-item.${period}`);
            if (activeItem) {
                activeItem.classList.add('active');
            }
        });
    });

    if (timelineButtons.length > 0 && timelineItems.length > 0) {
        timelineButtons[0].classList.add('active');
        timelineItems[0].classList.add('active');
    }
});
