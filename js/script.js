document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('toggle-animation');
            
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            if (mobileMenuBtn.classList.contains('toggle-animation')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-large');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const targetCategory = button.getAttribute('data-target');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (targetCategory === 'all' || cardCategory === targetCategory) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    const contactForm = document.getElementById('portfolio-contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const submitButton = document.getElementById('form-submit-engine');
            const originalButtonText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Verifying Payload...</span> <i class="fas fa-spinner fa-spin"></i>';
            
            const formData = {
                name: document.getElementById('sender-name').value,
                email: document.getElementById('sender-email').value,
                subject: document.getElementById('query-subject').value,
                budget: document.getElementById('project-budget').value,
                message: document.getElementById('message-payload').value,
                compliance: document.getElementById('data-compliance').checked
            };

            setTimeout(() => {
                submitButton.innerHTML = '<span>Transmission Successful</span> <i class="fas fa-check-circle"></i>';
                submitButton.style.backgroundColor = '#10b981';
                submitButton.style.borderColor = '#10b981';
                
                alert(`Thank you, ${formData.name}! Your message payload has been successfully dispatched to the engineering queue.`);
                
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    submitButton.style.backgroundColor = '';
                    submitButton.style.borderColor = '';
                }, 3000);
                
            }, 2000);
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const emailInput = document.getElementById('subscriber-email');
            const subscriberEmail = emailInput.value;
            
            alert(`Subscription validated! ${subscriberEmail} has been added to the system architecture feed.`);
            newsletterForm.reset();
        });
    }

    const progressBars = document.querySelectorAll('.bar-fill');
    
    if (progressBars.length > 0) {
        const animateProgressBars = () => {
            progressBars.forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
                    bar.style.width = targetWidth;
                }, 100);
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        const metricsSection = document.querySelector('.skills-metrics-section');
        
        if (metricsSection) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(metricsSection);
        }
    }
});
