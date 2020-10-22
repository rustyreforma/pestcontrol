let mix = require("laravel-mix");
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    };
});

mix.js("src/js/main.js", "dist/js/main.js")
    .copy('src/images/', 'dist/images/')
    //.copy('src/fonts/', 'dist/fonts/')
    .sass("src/scss/main.scss", "dist/css/main.css")
    .setPublicPath('dist')
    .purgeCss({
        enabled: true,
        content: ['*.php', 'dist/js/main.js', 'components/*.php'],
        css: ['dist/css/main.css']
    })
    .options({
        processCssUrls: false
    });