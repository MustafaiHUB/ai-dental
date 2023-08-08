'use strict';

// /////////////////////////////////////////
class App {
  // Selectors
  header = document.querySelector('header');
  footer = document.querySelector('footer');
  scrollTop = document.getElementById('scroll-top');
  hero = document.getElementById('hero');
  nav = document.querySelector('.nav');
  scrollTop = document.getElementById('scroll-top');

  constructor() {
    this._generateHeader();
    this._generateFooter();
  }
  // Dynamic header & footer
  _generateHeader() {
    const headerHTML = `
      <div class="container nav">
        <a href="index.html" id="logo">
          <img
            src="assets/Images/ai-dental-blue.png"
            alt="AI Dental Logo"
            title="AI Dental"
          />
        </a>
        <nav>
          <ul>
            <li><a class="link" href="products.html">Our Product</a></li>
            <li><a class="link" href="#">About</a></li>
            <li><a class="link" href="contact.html" id="contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    `;
    this.header.insertAdjacentHTML('afterbegin', headerHTML);
  }
  _generateFooter() {
    const footerHTML = `
    <div class="container">
        <div class="footer-top">
          <a href="index.html">
            <img src="assets/Images/ai-dental-white.png" alt="AI Dental" />
          </a>
          <div class="links">
            <h3>Important Links</h3>
            <div>
              <a href="products.html">Our Product</a>
              <a href="about.html">About</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
          <div class="social">
            <div class="social-media">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div class="general">
              <div>
                <i class="fa-solid fa-envelope"></i>
                <div>example@gmail.com</div>
              </div>
              <div>
                <i class="fa-solid fa-phone"></i>
                <div>+96212374893</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright © 2023 CPE | All rights reserved.</p>
        </div>
      </div>
    `;
    this.footer.insertAdjacentHTML('afterbegin', footerHTML);
  }
}
const app = new App();
// /////////////////////////////////////////

// Set the page nav link to active

const links = document.querySelectorAll('.link');
const pageActivePath = window.location.pathname;
links.forEach(link => {
  if (link.href.includes(`${pageActivePath}`)) {
    link.classList.add('active');
  }
});

// Sticky Nav & Scroll To Top Button
const scrollTop = document.getElementById('scroll-top');
const hero = document.getElementById('hero');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    nav.style.transition = '0.5s';
    nav.classList.add('sticky');
    scrollTop.style.display = 'flex';
  }
  else {
    nav.style.transition = '0.5s';
    nav.classList.remove('sticky');
    scrollTop.style.display = 'none';
  }
}
const haederObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.15,
  rootMargin: `-${navHeight.toFixed(1)}px`,
});
haederObserver.observe(hero);
scrollTop.addEventListener('click', function () {
  document.documentElement.scrollIntoView({ behavior: 'smooth' });
})

const sections = document.querySelectorAll('.section');
const sectionViewer = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.style.transition = '1s';
    entry.target.classList.remove('section');
  }
}
const sectionObserver = new IntersectionObserver(sectionViewer, {
  root: null,
  threshold: 0,
});
sections.forEach(sec => {
  sectionObserver.observe(sec);
})