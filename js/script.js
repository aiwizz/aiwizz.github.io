// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navLinks?.classList.remove('active');
      mobileMenuBtn?.classList.remove('active');
    }
  });

  // Demo Modal functionality
  const demoModal = document.getElementById('demoModal');
  const watchDemoBtn = document.getElementById('watchDemoBtn');
  const modalClose = document.querySelector('.demo-modal-close');
  const modalOverlay = document.querySelector('.demo-modal-overlay');

  const openModal = () => {
    demoModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    demoModal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  watchDemoBtn?.addEventListener('click', openModal);
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal?.classList.contains('active')) {
      closeModal();
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
      }
    });
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.boxShadow = 'none';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(
    '.feature-card, .step, .pricing-card, .testimonial-card'
  );

  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add stagger animation delay
  animateElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
  });

  // Counter animation for stats
  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Format the number
      let formatted;
      if (target >= 1000000) {
        formatted = (current / 1000000).toFixed(1) + 'M+';
      } else if (target >= 1000) {
        formatted = (current / 1000).toFixed(0) + 'K+';
      } else {
        formatted = current.toFixed(1) + '★';
      }

      element.textContent = formatted;
    }, 16);
  };

  // Trigger counter animation when stats come into view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
          const text = stat.textContent;
          let target;

          if (text.includes('K')) {
            target = parseFloat(text) * 1000;
          } else if (text.includes('M')) {
            target = parseFloat(text) * 1000000;
          } else if (text.includes('★')) {
            target = parseFloat(text);
          }

          if (target) {
            animateCounter(stat, target);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    statsObserver.observe(heroStats);
  }

  // Parallax effect for hero background orbs
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
      const speed = 0.5 + (index * 0.2);
      const yPos = -(scrolled * speed);
      orb.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Browser detection and button highlighting
  const detectBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let browser = 'chrome'; // default

    if (userAgent.includes('firefox')) {
      browser = 'firefox';
    } else if (userAgent.includes('edg')) {
      browser = 'edge';
    } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      browser = 'safari';
    }

    // Highlight the appropriate download button
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
      if (btn.classList.contains(browser)) {
        btn.style.border = '3px solid rgba(255, 255, 255, 0.5)';
        btn.style.transform = 'scale(1.05)';
      }
    });
  };

  detectBrowser();

  // Add hover effect to mockup
  const mockup = document.querySelector('.extension-mockup');
  if (mockup) {
    mockup.addEventListener('mousemove', (e) => {
      const rect = mockup.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    mockup.addEventListener('mouseleave', () => {
      mockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }

  // Add click animation to CTA buttons
  const ctaButtons = document.querySelectorAll('.btn-hero, .btn-primary, .btn-pricing');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Lazy load images (if you add images later)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Add subtle tilt effect to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // Track extension installation clicks (for analytics)
  const downloadLinks = document.querySelectorAll('.download-btn, .btn-hero');
  downloadLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const browser = link.classList.contains('chrome') ? 'chrome' :
                     link.classList.contains('firefox') ? 'firefox' :
                     link.classList.contains('edge') ? 'edge' : 'unknown';
      
      // You can add Google Analytics or other tracking here
      console.log(`Download button clicked: ${browser}`);
      
      // Example: gtag('event', 'click', { event_category: 'download', event_label: browser });
    });
  });

  // Add Easter egg: Konami code
  let konamiCode = [];
  const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);

    if (konamiCode.join('') === konamiPattern.join('')) {
      document.body.style.animation = 'rainbow 2s linear infinite';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 5000);
    }
  });

  console.log('%c🚀 Recap Dat Landing Page', 'font-size: 20px; font-weight: bold; color: #667eea;');
  console.log('%cBuilt with ❤️ for better reading', 'font-size: 12px; color: #764ba2;');
});

// Add rainbow animation for Easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    .nav-links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      padding: 24px;
      gap: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      animation: slideDown 0.3s ease;
    }

    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
document.head.appendChild(style);
