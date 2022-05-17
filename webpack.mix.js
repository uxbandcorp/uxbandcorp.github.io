const mix = require('laravel-mix');

mix
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(html|svelte)$/,
          use: 'svelte-loader'
        },
      ]
    }
  })
  .ts('resources/ts/app.ts', 'public/js')
  .sass('resources/scss/app.scss', 'public/css', [])
  // .css('public/css/app.css', 'public/css/app.css')
;
