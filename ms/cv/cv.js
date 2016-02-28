steal('ms/cv/cv.less',
      'ms/cv/cv.ejs')
.then(function ($) {

    $.Controller('MS.CV', {
        init: function () {
            this.element.html($.View('ms/cv/cv.ejs'));
        }
    });

});