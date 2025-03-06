
        // Initialize particles
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#FFCA40" },
                shape: {
                    type: "star",
                    stroke: { width: 1, color: "#efde34" },
                    polygon: { nb_sides: 5 },
                    image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "bubble" },
                    onclick: { enable: true, mode: "repulse" },
                    resize: true
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });

        // Open parallax content
        function openParallax() {
            // Memulai musik otomatis saat tombol "Buka Undangan" diklik
            const audio = document.getElementById("background-audio");
            const audioIcon = document.getElementById("audio-icon");
            
            // Putar audio dan ubah ikon
            audio.play().catch(e => console.log("Auto-play prevented by browser:", e));
            audioIcon.className = "fas fa-pause";
            
            const startingPoint = document.getElementById('startingPoint');
            const navbar = document.getElementById('navbar');
            const sections = document.querySelectorAll('.parallax-section');
    
            // Hide starting point
            startingPoint.style.opacity = '0';
            startingPoint.style.pointerEvents = 'none';
    
            // Show navbar
            navbar.classList.add('visible');
    
            // Show first section
            sections[0].classList.add('visible');
            sections[0].scrollIntoView({ behavior: 'smooth' });
    
            // Initialize intersection observers for sections
            initIntersectionObservers();
        }
    
        // Menangani klik tombol audio
        document.addEventListener("DOMContentLoaded", function() {
            const audio = document.getElementById("background-audio");
            const audioControl = document.getElementById("audio-control");
            const audioIcon = document.getElementById("audio-icon");
    
            audioControl.addEventListener("click", function() {
                if (audio.paused) {
                    audio.play();
                    audioIcon.className = "fas fa-pause";
                } else {
                    audio.pause();
                    audioIcon.className = "fas fa-play";
                }
            });
        });

        // Set up intersection observers for sections
        function initIntersectionObservers() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, { threshold: 0.15 });

            document.querySelectorAll('.parallax-section').forEach(section => {
                observer.observe(section);
            });
        }

        // Highlight active section in navbar
        function highlightActiveSection() {
            const sections = document.querySelectorAll('.parallax-section');
            const navLinks = document.querySelectorAll('.navbar a');

            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= (sectionTop - 300)) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.style.fontWeight = '500';
                if (link.getAttribute('href').substring(1) === currentSection) {
                    link.style.fontWeight = '700';
                    link.style.textShadow = '0 0 10px rgba(255, 202, 64, 0.8)';
                } else {
                    link.style.textShadow = 'none';
                }
            });
        }

        // Listen for scroll events
        window.addEventListener('scroll', () => {
            highlightActiveSection();
        });

        