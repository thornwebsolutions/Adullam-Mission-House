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

// Registration form handler (for pastoral care course page)
document.addEventListener('DOMContentLoaded', function() {
    const regForm = document.getElementById('registrationForm');
    const regFormMessage = document.getElementById('registrationFormMessage');

    if (regForm && regFormMessage) {
        regForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = regForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            regFormMessage.className = 'form-message';
            regFormMessage.textContent = '';

            // Check honeypot field
            const honeypot = regForm.querySelector('input[name="website"]');
            if (honeypot && honeypot.value) {
                regFormMessage.className = 'form-message success';
                regFormMessage.textContent = 'Thank you! Your application has been submitted.';
                regForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            // Gather form data
            const getRadioValue = (name) => {
                const el = regForm.querySelector(`input[name="${name}"]:checked`);
                return el ? el.value : '';
            };

            const formData = {
                formType: 'registration',
                firstName: regForm.firstName.value,
                lastName: regForm.lastName.value,
                middleName: regForm.middleName.value,
                maidenName: regForm.maidenName.value,
                email: regForm.email.value,
                street: regForm.street.value,
                city: regForm.city.value,
                state: regForm.state.value,
                zip: regForm.zip.value,
                dayPhone: regForm.dayPhone.value,
                eveningPhone: regForm.eveningPhone.value,
                maritalStatus: getRadioValue('maritalStatus'),
                highSchool: regForm.highSchool.value,
                hsCity: regForm.hsCity.value,
                hsGradDate: regForm.hsGradDate.value,
                college: regForm.college.value,
                collegeCity: regForm.collegeCity.value,
                major: regForm.major.value,
                degree: regForm.degree.value,
                churchName: regForm.churchName.value,
                pastorName: regForm.pastorName.value,
                attendRegularly: getRadioValue('attendRegularly'),
                isMember: getRadioValue('isMember'),
                classFormat: getRadioValue('classFormat'),
                paymentMethod: getRadioValue('paymentMethod')
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const selectedPayment = formData.paymentMethod;
                    regFormMessage.className = 'form-message success';
                    regFormMessage.textContent = 'Thank you! Your application has been submitted successfully. We will be in touch soon.';
                    regForm.reset();

                    if (selectedPayment === 'PayPal') {
                        const paypalModal = document.getElementById('paypalModal');
                        if (paypalModal) {
                            paypalModal.classList.add('active');
                            document.body.style.overflow = 'hidden';
                        }
                    }
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                regFormMessage.className = 'form-message error';
                regFormMessage.textContent = 'Sorry, something went wrong. Please try again or email us directly at info@amissionhouse.com.';
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Calendly Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('calendlyModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close on button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click (not on content)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
