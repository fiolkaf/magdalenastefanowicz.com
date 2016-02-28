steal('./contact.less',
      './contact.ejs')
.then(function ($) {

    $.Controller('MS.Contact', {
        init: function () {
            this.element.html($.View('ms/contact/contact.ejs'));
        }
    });

});