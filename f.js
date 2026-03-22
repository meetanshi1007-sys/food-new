
$(document).ready(function () {
    // Single-item Slick Slider
    $('.trendfood').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true
    });

    // Add to Cart
    $('.foodcards button').click(function () {
        const itemName = $(this).siblings("b").text();
        alert(itemName + " added to cart!");
    });
});