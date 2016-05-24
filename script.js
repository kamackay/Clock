const dataName = 'clocktype';
var clockType = '';

function getType() {
    return getData(dataName);
}

function setType(str) {
    storeData(dataName, str);
}

$(window).resize(setSizes);

$(document).ready(function () {
    $('#contents').css('height', $(window).height());
    setSizes();
    clockType = getType();
    if (clockType == 'analog') {
        $('#analogTab').addClass('active');
        showAnalog();
    } else if (clockType == 'digital') {
        $('#digitalTab').addClass('active');
        showDigital();
    } else {
        $('#bothTab').addClass('active');
        showBoth();
    }
});

function setSizes() {
    var types = $('#clocktypes').find('li');
    $.each(types, function (x, o) {
        $(this).css('width', $(window).width() / types.length);
    });
}

function tabClick(e) {
    setType(e.target.innerHTML.toLowerCase());
}

function clearClock() {
    $('#clock-contents').html('');
}

function showAnalog() {
    try {
        $('#clock-contents').append('<div id="keithapps-clock" style="position: fixed; padding: 50px;">' +
            '<img style="position: absolute; height: 100%; " src="https://googledrive.com/host/0B6vDuBGkfv-HSjhIcnJEUF9yc0k/clock-circle.png" />' + '</div>');
        var clock = $('#keithapps-clock');
        clock.css('height', $(window).height() - 250).css('width', $(window).width());
    } catch (err) {}
}

function showDigital() {
    try {} catch (err) {}

}

function showBoth() {
    try {} catch (err) {}
}
