steal('./project.less')
.then(function ($) {

    $.Controller('MS.Project', {}, {
        init: function (el, opt) {
            this.active = 0;
            this.element.html($.View('ms/project/' + opt.id + '/project.ejs'));
            this.length = this.element.find('.slider img').length;
        },

        '.prev click': function () {
            this.active = this.active ? (this.active - 1) : this.length - 1;
            this.element.find('.slider').css('left', '-' + this.active * 814 + 'px');
        },

        '.next,.view-port click': function () {
            this.active = (this.active + 1) % this.length;
            this.element.find('.slider').css('left', '-' + this.active * 814 + 'px');
        }
    });

});