$(document).ready(function () {
    $('#contents').css('height', $(window).height());
    setSizes();

});

function setSizes() {
    var types = $('#clocktypes').find('li');
    $.each(types, function (x, o) {
        $(this).css('width', $(window).width() / types.length);
    });
}
