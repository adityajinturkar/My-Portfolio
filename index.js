document.addEventListener('DOMContentLoaded', function() {
    // Function to load content into the main content area
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-area').innerHTML = data;

                // Add interactive elements (hover effects) for dynamically loaded content
                document.querySelectorAll('.experience-item').forEach(item => {
                    item.addEventListener('mouseover', function() {
                        this.style.backgroundColor = '#d1d1d1';
                    });

                    item.addEventListener('mouseout', function() {
                        this.style.backgroundColor = '#e2e2e2';
                    });
                });
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Navigation link event listeners
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('content-area').innerHTML = '<p>Welcome to my portfolio! Click on the navigation links to learn more about me.</p>';
    });

    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadContent('files/about.html');
    });

    document.getElementById('skills-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadContent('files/skills.html');
    });

    document.getElementById('experience-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadContent('files/experience.html');
    });

    document.getElementById('contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadContent('files/contact.html');
    });
});
