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
        $('#clock-contents').append('<div id="keithapps-clock" style="position: fixed;">' +
            '<img id="keithapps-clockImg" style="position: absolute; height: 100%;" src="https://googledrive.com/host/0B6vDuBGkfv-HSjhIcnJEUF9yc0k/clock-circle2.png" />' + '</div>');
        var clockEl = $("#keithapps-clock");
        var size = $(window).height() * .85;
        clockEl.css('width', size);
        clockEl.css('height', size);
        clockEl.css('top', 75);
        clockEl.css('left', ($(window).width() - size) / 2);
        clockEl.append('<div id="keithapps-secondParent" style="height: 100%; width: 100%; position: absolute;">' + '<img id="keithapps-clockSecond" src="https://googledrive.com/host/0B6vDuBGkfv-HSjhIcnJEUF9yc0k/clock-hand2.png" style="position: absolute; height: 50%; top: 5px;" />' + '</div>');
        clockEl.append('<div id="keithapps-minuteParent" style="height: 100%; width: 100%; position: absolute; ">' + '<img id="keithapps-clockMinute" src="https://googledrive.com/host/0B6vDuBGkfv-HSjhIcnJEUF9yc0k/clock-hand2.png" style="position: absolute; height: 50%; padding-top: 10%; top: 5px; z-index: 0;" />' + '</div>');
        clockEl.append('<div id="keithapps-hourParent" style="height: 100%; width: 100%; position: absolute; city: .5;">' + '<img id="keithapps-clockHour" src="https://googledrive.com/host/0B6vDuBGkfv-HSjhIcnJEUF9yc0k/clock-handRed2.png" style="position: absolute; height: 50%; padding-top: 18%; top: 5px; opacity: .5; z-index: 0;" />' + '</div>');
        var secondHand = $('#keithapps-clockSecond');
        var minuteHand = $('#keithapps-clockMinute');
        var hourHand = $('#keithapps-clockHour');
        var l = (clockEl.width() - secondHand.width()) / 2;
        secondHand.load(function () {
            secondHand.css('left', l - secondHand.width() / 2);
        });
        minuteHand.load(function () {
            minuteHand.css('left', l - minuteHand.width() / 2);
        });
        hourHand.load(function () {
            hourHand.css('left', l - hourHand.width() / 2);
        });
        var minuteParent = $("#keithapps-minuteParent");
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var secs = new Date().getSeconds();
        var minParent = $("#keithapps-minuteParent");
        var hourParent = $("#keithapps-hourParent");
        var secondParent = $("#keithapps-secondParent");
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var secs = new Date().getSeconds();
        $({
            deg: mins * 6 + secs / 10
        }).animate({
            deg: 360
        }, {
            duration: 3600000 - (mins * 60000) - (secs * 1000),
            easing: 'linear',
            step: function (now) {
                minParent.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: spinMinute
        });
        $({
            deg: secs * 6
        }).animate({
            deg: 360
        }, {
            duration: 60000 - (secs * 1000),
            easing: 'linear',
            step: function (now) {
                secondParent.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: spinSecond
        });
        setHourPosition();
    } catch (err) {
        alert(err);
    }
}


function spinSecond() {
    setHourPosition();
    var secondParent = $("#keithapps-secondParent");
    $({
        deg: 0
    }).animate({
        deg: 360
    }, {
        duration: 60000,
        easing: 'linear',
        step: function (now) {
            secondParent.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: spinSecond
    });
}


function spinMinute() {
    setHourPosition();
    var minuteParent = $("#keithapps-minuteParent");
    var date = new Date();
    var currMin = date.getMinutes() * 6 + date.getSeconds() / 10;
    $({
        deg: currMin
    }).animate({
        deg: 360
    }, {
        duration: 3600000,
        easing: 'linear',
        step: function (now) {
            minuteParent.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: spinMinute
    });
}

function setHourPosition() {
    var hour = new Date().getHours();
    var hourParent = $("#keithapps-hourParent");
    var angle = (hour % 12) * 30 + (new Date().getMinutes() / 2);
    hourParent.css({
        transform: 'rotate(' + angle + 'deg)'
    });
}

function showDigital() {
    try {} catch (err) {}

}

function showBoth() {
    try {} catch (err) {}
}
