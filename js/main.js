// Main JavaScript - Adullam Mission House
// Shared functionality across all pages

// Fade in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    }
});

// Contact form handler (for pages with contact form)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');

    if (contactForm && contactFormMessage) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            contactFormMessage.className = 'form-message';
            contactFormMessage.textContent = '';

            // Check honeypot field
            const honeypot = contactForm.querySelector('input[name="website"]');
            if (honeypot && honeypot.value) {
                // Bot detected, silently fail
                contactFormMessage.className = 'form-message success';
                contactFormMessage.textContent = 'Thank you! Your message has been sent.';
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            const formData = {
                firstName: contactForm.firstName.value,
                lastName: contactForm.lastName.value,
                email: contactForm.email.value,
                message: contactForm.message.value,
                formType: 'contact'
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    contactFormMessage.className = 'form-message success';
                    contactFormMessage.textContent = 'Thank you! Your message has been sent.';
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                contactFormMessage.className = 'form-message error';
                contactFormMessage.textContent = 'Sorry, something went wrong. Please try again.';
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
