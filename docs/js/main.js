/**
 * Boulder Marketing - Main JavaScript
 * Consolidated and enhanced with mobile menu fixes
 */

document.addEventListener('DOMContentLoaded', function() {
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
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" (scroll to top button)
      if (href === '#') {
        return;
      }
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
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
  // REVEAL ELEMENTS ON SCROLL (AOS-like)
  // ==========================================
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
  
  // Reveal text elements (for hero animations)
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
  // FORM VALIDATION (if contact form exists)
  // ==========================================
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Add your form validation and submission logic here
      const formData = new FormData(this);
      
      // Example: Basic validation
      let isValid = true;
      const requiredFields = this.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Submit form (add your actual submission logic)
        console.log('Form is valid and ready to submit');
        // this.submit(); // Uncomment when ready
      }
    });
  }
});