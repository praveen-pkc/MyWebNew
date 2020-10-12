$('.filter-container').isotope({
    itemSelector: '.filter-item',
});
$('.filter-btn ul li').click(function(){
    $('.filter-btn ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.filter-container').isotope({
        filter: selector
    });
    return false;
});