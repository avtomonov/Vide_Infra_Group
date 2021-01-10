import $ from "jquery";

$.fn.lazyLoad = function (data) {

    const images = Array.from(document.querySelectorAll('[data-plugin="lazyLoad"]'));
            
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;

                    image.src = image.dataset.src;
                    image.srcset = image.dataset.srcset;
                    imageObserver.unobserve(image);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

};

