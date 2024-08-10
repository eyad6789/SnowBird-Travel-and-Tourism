// ---------------------------------------------------
//               navbar animation 
// ---------------------------------------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});




// ---------------------------------------------------
//               hero bg changer 
// ---------------------------------------------------
let next = document.querySelector('.left')
let prev = document.querySelector('.right')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener('DOMContentLoaded', () => {
const images = [
'/asset/images/bg-hero/1.jpg',
'/asset/images/bg-hero/2.jpg',
'/asset/images/bg-hero/3.jpg',
'/asset/images/bg-hero/4.jpg'
];

let currentImageIndex = 0;
const heroContent = document.querySelector('.hero-content');

function updateBackgroundImage(index) {
heroContent.style.backgroundImage = `url(${images[index]})`;
}

document.getElementById('prev-hero').addEventListener('click', () => {
currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
updateBackgroundImage(currentImageIndex);
});

document.getElementById('next-hero').addEventListener('click', () => {
currentImageIndex = (currentImageIndex + 1) % images.length;
updateBackgroundImage(currentImageIndex);
});

// Initial set of background image
updateBackgroundImage(currentImageIndex);
});

// ---------------------------------
// location slider section
// ---------------------------------

const slide = document.querySelector('.slide-loc');
const prevLocation = document.querySelector('.prev-location');
const nextLocation = document.querySelector('.next-location');

let currentIndex = 0;

prevLocation.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

nextLocation.addEventListener('click', () => {
    if (currentIndex < slide.children.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    slide.style.transform = `translateX(-${currentIndex * 320}px)`;
}

// ---------------------------------
// our groups slider section
// ---------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const customers = document.querySelectorAll('.customer');
    const prevButton = document.getElementById('left');
    const nextButton = document.getElementById('right');
    let currentCustomer = 0;

    function showCustomer(index) {
        customers.forEach((customer, i) => {
            customer.classList.toggle('active', i === index);
        });
    }

    function nextCustomer() {
        currentCustomer = (currentCustomer + 1) % customers.length;
        showCustomer(currentCustomer);
    }

    function prevCustomer() {
        currentCustomer = (currentCustomer - 1 + customers.length) % customers.length;
        showCustomer(currentCustomer);
    }

    nextButton.addEventListener('click', nextCustomer);
    prevButton.addEventListener('click', prevCustomer);

    setInterval(nextCustomer, 5000); // Change to the next customer every 5 seconds
});

// ---------------------------------
// trips slider section
// ---------------------------------

let prev_trips = document.querySelector('prev_trips')
let next_trips = document.querySelector('next_trips')
let tour_slide = document.querySelector('tour-slide')

next_trips.addEventListener(click,function(){
    let slides_trips = document.querySelectorAll('.tuor-slide')
    slides_trips.appendChild(tour_slide[0])
})
prev_trips.addEventListener(click,function(){
    let slides_trips = document.querySelectorAll('.tuor-slide')
    slides_trips.appendChild(tour_slide[tour_slide.length - 1])
})


// ---------------------------------
// trips revers slider section
// ---------------------------------


const sliderRevers = document.querySelector('.trips-slider-revers');

sliderRevers.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    StartX = e.pageX - sliderRevers.offsetLeft;
    scrollLeft = sliderRevers.scrollLeft;
});

sliderRevers.addEventListener('mouseleave', () => {
    isDown = false;
    sliderRevers.classList.remove('active');
});

sliderRevers.addEventListener('mouseup', () => {
    isDown = false;
    sliderRevers.classList.remove('active');
});

sliderRevers.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRevers.offsetLeft;
    const walk = (StartX - x) * 3; // Reverse scroll direction
    sliderRevers.scrollLeft = scrollLeft + walk;
});
