steal('jquery/controller',
      'jquery/view',
      'jquery/view/ejs',
      'jquery/dom/route',
      'steal/less')
.then(
    'ms/ms.ejs',
    'ms/ms.less',
    'ms/aboutme',
    'ms/projects',
    'ms/project',
    'ms/cv',
    'ms/contact'
)
.then(function ($) {

    $.Controller('MS.Main', {
        init: function () {
            this.element.html($.View('ms/ms.ejs'));
            $.route.bind('change', $.proxy(this.navigate, this));

            this.pageChange(
                typeof $.route.data.page === 'undefined' ? 'projects' : $.route.data.page,
                typeof $.route.data.id === 'undefined' ? '' : $.route.data.id);

        },

        '.top img click': function () {
            $.route.attrs({ page: 'projects', id: '' });
        },

        '*[data-controller] click': function (el) {
            $.route.attrs({ page: $(el).data('controller'), id: $(el).data('project-id') || '' });
        },

        navigate: function (ev, attr, type, newVal) {
            $.inArray(type, ['set', 'add']) >= 0 && attr === 'page' && this.pageNavigate(newVal);
        },

        pageNavigate: function (page) {
            this.element.find('*[data-controller=' + page + ']').addClass('active');

            var content = $('.content');
            var controller = content.controller();
            content.fadeOut(100, $.proxy(function () {
                controller.destroy();
                this.pageChange(page, $.route.data.id || 0);
            }, this));
        },

        pageChange: function (page, id) {
            this.element.find('*[data-controller!=' + page + ']').removeClass('active');

            var content = $('.content');
            switch (page) {
                case 'projects': content.fadeIn(100).ms_projects(); break;
                case 'contact': content.fadeIn(100).ms_contact(); break;
                case 'cv': content.fadeIn(100).ms_cv(); break;
                case 'aboutme': content.fadeIn(100).ms_aboutme(); break;
                case 'project': content.fadeIn(100).ms_project({ id: id }); break;
            }
        }

    });

    $(function () {
        $.route(':page/:id', { page: 'projects', id: '' });
        $.route.ready(true);

        new MS.Main($('body'));
    });
});