steal('./projects.less',
      './projects.ejs')
.then(function ($) {

    $.Controller('MS.Projects', {}, {
        init: function () {
            this.element.html($.View('ms/projects/projects.ejs'));
        },

        '*[data-controller] click': function (el) {
            $.route.attrs({ 'page': el.data('controller'), 'id': el.data('project-id') }, true);
        }
    });

});