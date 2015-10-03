Package.describe({
    name: 'zoa:ui-i18n-zh-cn',
    version: '0.1.7',
    // Brief, one-line summary of the package.
    summary: 'zh-cn for Zoa UI.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/laosb/meteor-zoaui',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: null
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use('zoa:ui-i18n@0.1.7');
    api.addFiles('../zoaui/css/langs/zh-cn/fonts.css', 'client');
    api.addFiles('../zoaui/css/langs/zh-cn/imports.css', 'client');
    api.addFiles('../zoaui/css/langs/zh-cn/lang.css', 'client');
});
