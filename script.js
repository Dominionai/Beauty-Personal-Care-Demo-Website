// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav
function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow='hidden'; }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow=''; }

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Testimonial slider
let currentSlide = 0;
const track = document.getElementById('testiTrack');
const dots = document.querySelectorAll('.testi-dot');

function goToSlide(n) {
  currentSlide = n;
  track.style.transform = `translateX(-${n * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === n));
}

// Auto-advance testimonials
setInterval(() => { goToSlide((currentSlide + 1) % 3); }, 5000);

// Cart
let cartCount = 0;
const cartDisplay = document.querySelector('.cart-count');
function addToCart(btn) {
  cartCount++;
  cartDisplay.textContent = cartCount;
  const orig = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = 'var(--gold)';
  btn.style.borderColor = 'var(--gold)';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.borderColor = ''; }, 1800);
}

// Newsletter
function subscribe() {
  const input = document.getElementById('emailInput');
  if(input.value.includes('@')) {
    input.value = '✓ Welcome to the Glow Club!';
    input.style.color = 'var(--gold)';
  } else {
    input.placeholder = 'Please enter a valid email';
    input.style.borderColor = 'var(--blush)';
  }
}
