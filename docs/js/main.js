/**
 * Boulder Marketing - Main JavaScript
 * Enhanced and optimized version with AOS support
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================
  // INITIALIZE AOS (ANIMATE ON SCROLL)
  // ==========================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: false
    });
  } else {
    // Fallback if AOS is not loaded - use custom reveal
    const revealElements = document.querySelectorAll('[data-aos]');
    
    if (revealElements.length > 0) {
      const revealOnScroll = function() {
        revealElements.forEach(function(el) {
          const elementTop = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight * 0.85) {
            el.classList.add('revealed');
          }
        });
      };
      
      window.addEventListener('scroll', revealOnScroll);
      // Initial check on page load
      revealOnScroll();
    }
  }
  
  // ==========================================
  // HEADER & MOBILE MENU
  // ==========================================
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  // Header scroll effect
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }
    
    // Toggle scroll-to-top button visibility
    if (scrollTopBtn && window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else if (scrollTopBtn) {
      scrollTopBtn.classList.remove('show');
    }
  }
  
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Initialize header state on page load
  handleHeaderScroll();
  
  // Mobile menu toggle - ENHANCED VERSION
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = navList.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      menuToggle.classList.toggle('open');
      
      // Update aria-expanded for accessibility
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (document.body.classList.contains('menu-open') && 
          !navList.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking on nav links
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navList.classList.remove('active');
          document.body.classList.remove('menu-open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // Handle window resize - close menu if resizing to desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
          navList.classList.remove('active');
          document.body.classList.remove('menu-open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }, 250);
    });
  }
  
  // ==========================================
  // SCROLL TO TOP BUTTON
  // ==========================================
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" (scroll to top button)
      if (href === '#' || href === '') {
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 20; // 20px extra padding
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navList && navList.classList.contains('active')) {
          navList.classList.remove('active');
          document.body.classList.remove('menu-open');
          if (menuToggle) {
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
  
  // ==========================================
  // REVEAL TEXT ELEMENTS (for hero animations)
  // ==========================================
  const revealTextElements = document.querySelectorAll('.reveal-text');
  
  if (revealTextElements.length > 0) {
    setTimeout(function() {
      revealTextElements.forEach(function(el, index) {
        setTimeout(function() {
          el.classList.add('revealed');
        }, index * 200);
      });
    }, 300);
  }
  
  // ==========================================
  // TESTIMONIAL SLIDER
  // ==========================================
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  
  if (testimonials.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    let slideInterval;
    
    // Function to switch slide
    function showSlide(index) {
      // Handle bounds
      if (index < 0) index = testimonials.length - 1;
      if (index >= testimonials.length) index = 0;
      
      // Update current slide index
      currentSlide = index;
      
      // Hide all slides and remove active class from dots
      testimonials.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Show current slide and set active dot
      testimonials[currentSlide].classList.add('active');
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
      }
      
      // Set wrapper height based on active slide height
      const wrapper = document.querySelector('.testimonial-wrapper');
      if (wrapper && testimonials[currentSlide]) {
        wrapper.style.height = `${testimonials[currentSlide].offsetHeight}px`;
      }
    }
    
    // Set initial slide and wrapper height
    showSlide(0);
    
    // Event listeners for next/prev buttons
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
        // Reset auto-rotation timer
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 7000);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
        // Reset auto-rotation timer
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 7000);
      });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        showSlide(index);
        // Reset auto-rotation timer
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 7000);
      });
    });
    
    // Auto rotate testimonials
    slideInterval = setInterval(() => showSlide(currentSlide + 1), 7000);
    
    // Pause auto rotation on hover
    const sliderContainer = document.querySelector('.testimonial-slider');
    
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 7000);
      });
    }
    
    // Update slide height on window resize
    window.addEventListener('resize', () => {
      showSlide(currentSlide);
    });
  }
  
  // ==========================================
  // SCROLL INDICATOR
  // ==========================================
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '0.7';
      }
    });
  }
  
  // ==========================================
  // PORTFOLIO FILTERING
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items with animation
        portfolioItems.forEach((item, index) => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            setTimeout(() => {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 50);
            }, index * 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  const questionToggles = document.querySelectorAll('.question-toggle');
  
  if (questionToggles.length > 0) {
    questionToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          const icon = item.querySelector('.fas');
          if (icon) {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
          }
        });
        
        // If clicked item wasn't active, open it
        if (!isActive) {
          faqItem.classList.add('active');
          const icon = this.querySelector('.fas');
          if (icon) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
          }
        }
      });
    });
  }
  
  // ==========================================
  // STATS COUNTER ANIMATION
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0) {
    const animateCounter = (element) => {
      const text = element.textContent;
      const target = parseInt(text.replace(/\D/g, ''));
      const hasPlus = text.includes('+');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target + (hasPlus ? '+' : '');
        }
      };
      
      updateCounter();
    };
    
    // Animate counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => counterObserver.observe(stat));
  }
  
  // ==========================================
  // FORM VALIDATION
  // ==========================================
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form fields
      const name = this.querySelector('[name="name"]');
      const email = this.querySelector('[name="email"]');
      const message = this.querySelector('[name="message"]');
      
      let isValid = true;
      
      // Simple validation
      if (name && name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
      }
      
      if (email && !isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
      }
      
      if (message && message.value.trim() === '') {
        showError(message, 'Please enter a message');
        isValid = false;
      }
      
      if (isValid) {
        // Submit form or show success message
        console.log('Form is valid, ready to submit');
        showSuccess('Thank you! Your message has been sent.');
        this.reset();
      }
    });
    
    // Remove error on input
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('input', function() {
        removeError(this);
      });
    });
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Helper function to show error
  function showError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.85rem; margin-top: 0.5rem;';
    
    // Remove existing error message if any
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    field.parentElement.appendChild(errorDiv);
  }
  
  // Helper function to remove error
  function removeError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }
  
  // Helper function to show success message
  function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      successDiv.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        successDiv.remove();
      }, 300);
    }, 3000);
  }
  
  // ==========================================
  // LAZY LOADING IMAGES
  // ==========================================
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window && lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
});

// ==========================================
// ADD ANIMATION KEYFRAMES DYNAMICALLY
// ==========================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
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