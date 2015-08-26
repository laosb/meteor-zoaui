Package.describe({
    name: 'zoa:ui',
    version: '0.1.7',
    summary: 'Wrapper for Zoa UI.',
    git: 'https://github.com/laosb/meteor-zoaui',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');

    //File oreder in the recommened way: http://infinnie.github.io/zoaui/css/
    api.addFile('zoaui/css/fonts.css');
    api.addFile('zoaui/css/general.css');
    api.addFile('zoaui/css/layout.css');
    api.addFile('zoaui/css/typography.css');
    api.addFile('zoaui/css/button.css');
    api.addFile('zoaui/css/nav.css');
    api.addFile('zoaui/css/form.css');
    api.addFile('zoaui/css/dialog.css');
    api.addFile('zoaui/css/dropdown.css');
    api.addFile('zoaui/css/triangle.css');
    api.addFile('zoaui/css/pagination.css');
    api.addFile('zoaui/css/image.css');

    api.use('jquery');

    api.addFile('zoaui/js/nav.js', 'client');
    api.addFile('zoaui/js/toggle.js', 'client');
});
