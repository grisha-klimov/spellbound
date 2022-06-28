const mix = require('laravel-mix');
const path = require('path');
const os = require('os');

require('laravel-mix-clean');

// Variables
const proxy = 'http://0.0.0.0/';
const sourcePath = os.platform() === 'win32' ? path.normalize('resources') : 'resources';
const publicPath = os.platform() === 'win32' ? path.normalize('public/assets/') : 'public/assets/';

// Settings
mix.setPublicPath(publicPath).options({
  processCssUrls: false,
  postCss: [
    require('postcss-preset-env')({
      stage: 1,
      autoprefixer: { grid: true },
    }),
    require('postcss-assets')({
      loadPaths: [`images/`],
      basePath: `${sourcePath}/`,
      baseUrl: `${publicPath}/`,
      // cachebuster: true,
    }),
    require('postcss-aspect-ratio-polyfill'),
  ],
});

mix.babelConfig({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.21',
      },
    ],
  ],
});

mix.alias({
  '@': path.join(__dirname, 'node_modules'),
  '~': path.join(__dirname, 'node_modules'),
});

// Fix for JavaScript Dynamic Imports
mix.webpackConfig({
  output: {
    publicPath: `/assets/`,
  },
});

mix
  .sass(`${sourcePath}/styles/app.scss`, `styles`)
  .js(`${sourcePath}/scripts/app.js`, `scripts`)
  .copyDirectory(`${sourcePath}/images`, `${publicPath}/images`)
  .copyDirectory(`${sourcePath}/fonts`, `${publicPath}/fonts`)
  .sourceMaps(false, 'inline-source-map')
  .clean();

// Versioning for production (cache busting)
if (mix.inProduction()) {
  mix.version();
}

// BrowserSync setup
mix.browserSync({
  proxy,
  https: false,
  ui: false,
  open: true,
  notify: false,
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  files: [`public/assets/styles/*.css`, `public/assets/scripts/*.js`],
});

// Disable OS notifications
mix.disableSuccessNotifications();
