
$(document).on('click', '.validation', function(e){
    if ( $( e.target ).siblings( ".error_page" ).is(":visible")) {
        $( ".error_page" ).slideUp()
    } else {
        $( ".error_page" ).slideUp(), $( e.target ).siblings( ".error_page" ).slideDown();
    }
 });


$(document).on('click', '.sub-title', function(e){
    if ( $('.type_verification').eq($(e.target).index()).is(":visible")) {
        $('.type_verification').eq($(e.target).index()).slideUp()
    } else {
        $('.type_verification').slideUp(), $('.type_verification').eq($(e.target).index()).slideDown();
    }
 });

