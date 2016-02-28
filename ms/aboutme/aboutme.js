steal(
    './aboutme.less',
    './aboutme.ejs'
      )
.then(function ($) {

    $.Controller('MS.Aboutme', {
        init: function () {
           this.element.html($.View('ms/aboutme/aboutme.ejs'));
        }
    });

});