// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cart functionality
    const cartBtns = document.querySelectorAll('.product-card button');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const product = this.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            alert(`${productName} added to cart!`);
        });
    });
    
    // Testimonial slider
    const testimonialPrev = document.querySelector('.testimonial-controls button:first-child');
    const testimonialNext = document.querySelector('.testimonial-controls button:last-child');
    
    if(testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', function() {
            console.log('Previous testimonial');
        });
        
        testimonialNext.addEventListener('click', function() {
            console.log('Next testimonial');
        });
    }
});