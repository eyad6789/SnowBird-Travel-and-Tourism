document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const mainImage = document.querySelector('.main-image img');
    
    let currentIndex = 0;
    const itemWidth = carouselItems[0].clientWidth;

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            carouselImages.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < carouselItems.length - 4) {
            currentIndex++;
            carouselImages.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });

    carouselItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const clickedImageSrc = item.getAttribute('src');
            mainImage.setAttribute('src', clickedImageSrc);

            // تحريك الصور في شريط التمرير
            carouselImages.style.transform = `translateX(-${index * itemWidth}px)`;
            currentIndex = index;
        });
    });
});
