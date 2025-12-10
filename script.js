// ===================================
// RECYCLE4RESEARCH - JAVASCRIPT
// Interactive Elements & Animations
// ===================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initFormHandlers();
    initImpactData();
    initMobileMenu();
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .bounce-in');
    animatedElements.forEach(el => {
        // Set initial state
        if (!el.classList.contains('fade-in')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
        }
        observer.observe(el);
    });
}

// ===================================
// FORM HANDLERS
// ===================================
function initFormHandlers() {
    // Signup form
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Add input animations
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

function handleSignupSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    showNotification('Thank you for signing up! We\'ll contact you within 48 hours to confirm your registration.', 'success');
    
    // Reset form
    e.target.reset();
    
    // In production, you would send this data to a server
    console.log('Signup data:', data);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
    
    // In production, you would send this data to a server
    console.log('Contact data:', data);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-green)' : 'var(--dark-green)'};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 5px 20px var(--shadow-hover);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// IMPACT DATA - LIVE UPDATES
// ===================================
function initImpactData() {
    // Current data
    const currentData = {
        totalGlass: 727.674, // in thousands of pounds
        avgGlass: 121.279,
        totalPickups: 6,
        milestone: 1000 // 1 million pounds
    };
    
    // Animate numbers on impact page
    if (document.getElementById('totalGlass')) {
        animateNumber('totalGlass', currentData.totalGlass, 2000, true);
        animateNumber('avgGlass', currentData.avgGlass, 1500);
        animateNumber('totalPickups', currentData.totalPickups, 1000, false);
        
        // Calculate CO2 saved (approximately 2 lbs per lb of glass)
        const co2Saved = Math.round(currentData.totalGlass * 2);
        animateNumber('co2Saved', co2Saved, 2000, true);
        
        // Calculate and display milestone progress
        const milestonePercent = ((currentData.totalGlass) / (currentData.milestone) * 100).toFixed(1);
        const remaining = (currentData.milestone) - (currentData.totalGlass);
        
        document.getElementById('milestonePercent').textContent = milestonePercent + '%';
        document.getElementById('remainingGlass').textContent = remaining.toLocaleString();
        
        // Animate progress bar
        setTimeout(() => {
            const progressFill = document.getElementById('progressFill');
            if (progressFill) {
                progressFill.style.width = milestonePercent + '%';
            }
        }, 500);
    }
}

function animateNumber(elementId, target, duration, useCommas = false) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (useCommas) {
            element.textContent = Math.floor(current).toLocaleString();
        } else {
            element.textContent = current.toFixed(3);
        }
    }, 16);
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 30px var(--shadow-hover)';
        } else {
            navbar.style.boxShadow = '0 2px 20px var(--shadow)';
        }
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// BUBBLE INTERACTION
// ===================================
document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    bubbles.forEach((bubble, index) => {
        const rect = bubble.getBoundingClientRect();
        const bubbleX = rect.left + rect.width / 2;
        const bubbleY = rect.top + rect.height / 2;
        
        const distX = mouseX - bubbleX;
        const distY = mouseY - bubbleY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
            const force = (200 - distance) / 200;
            const moveX = -(distX * force * 0.3);
            const moveY = -(distY * force * 0.3);
            
            bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            bubble.style.transform = 'translate(0, 0)';
        }
    });
});

// ===================================
// CARD TILT EFFECT (3D hover)
// ===================================
const cards = document.querySelectorAll('.stat-card, .step-card, .impact-card, .donation-card');

cards.forEach(card => {
    card.addEventListener('mousemove', handleCardTilt);
    card.addEventListener('mouseleave', resetCardTilt);
});

function handleCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function resetCardTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
}

// ===================================
// PARALLAX EFFECT ON SCROLL
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content, .page-header');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// DYNAMIC STAT UPDATES (Simulated)
// ===================================
// In a real application, you would fetch this data from a server
function updateStatsFromServer() {
    // This would be an API call in production
    // For now, we'll just use the static data
    
    // Example of how you might update stats:
    /*
    fetch('/api/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalGlass').textContent = data.totalGlass.toLocaleString();
            document.getElementById('avgGlass').textContent = data.avgGlass;
            // etc.
        });
    */
}

// ===================================
// ADD LOADING STATE FOR BUTTONS
// ===================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('loading')) return;
        
        // Add subtle click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===================================
// INTERSECTION OBSERVER FOR STAT COUNTING
// ===================================
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const countElement = entry.target.querySelector('.stat-number');
            if (countElement) {
                const target = parseFloat(countElement.textContent.replace(/,/g, ''));
                animateStatNumber(countElement, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

function animateStatNumber(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

console.log('🌱 Recycle4Research initialized successfully!');
