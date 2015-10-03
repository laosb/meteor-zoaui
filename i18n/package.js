Package.describe({
    name: 'zoa:ui-i18n',
    version: '0.1.7_2',
    // Brief, one-line summary of the package.
    summary: 'i18n basis for Zoa UI.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/laosb/meteor-zoaui',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: null
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use('zoa:ui@0.1.7');
    api.addFiles('../zoaui/css/langs/base.css', 'client');
});
