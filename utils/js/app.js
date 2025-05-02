$(document).ready(function() {
    const $mobileBtn = $('.mobile-btn');
    const $mainNav = $('.main-nav');

    $mobileBtn.on('click', function() {
        $mainNav.toggleClass('open');
    });
});