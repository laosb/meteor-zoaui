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
    api.addFiles('zoaui/css/fonts.css');
    api.addFiles('zoaui/css/general.css');
    api.addFiles('zoaui/css/layout.css');
    api.addFiles('zoaui/css/typography.css');
    api.addFiles('zoaui/css/button.css');
    api.addFiles('zoaui/css/nav.css');
    api.addFiles('zoaui/css/form.css');
    api.addFiles('zoaui/css/dialog.css');
    api.addFiles('zoaui/css/dropdown.css');
    api.addFiles('zoaui/css/triangle.css');
    api.addFiles('zoaui/css/pagination.css');
    api.addFiles('zoaui/css/image.css');

    api.use('jquery');

    api.addFiles('zoaui/js/nav.js', 'client');
    api.addFiles('zoaui/js/toggle.js', 'client');
});
