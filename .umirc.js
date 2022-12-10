import { defineConfig } from 'umi';
import routes from './routes';
import common from './routes/common';

export default defineConfig({
  // mfsu: { production: { output: '.mfsu-production' } },
  // mfsu: {},

  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  publicPath: './',
  links: [{ rel: 'icon', href: 'favicon.ico' }],
  locale: {
    antd: true,
    // default: 'zh-CN', //
    default: 'en-US', //
    baseSeparator: '-',
  },

  dynamicImport: {
    loading: '@/common/Loading',
  },
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        },
      },
    });
  },
  // terserOptions: {
  //   compress: {
  //     drop_console: true,
  //   },
  // },

  alias: {},
  routes: [
    // { path: '/login', component: 'login' },
    // { path: '/userCenter', component: '@/pages/UserCenter' },

    ...common,
    {
      path: '/',
      component: '@/layouts/index',
      // component: '@/pages/common/Home',
      routes: [{ path: '/om/test', component: '@/layouts/index.jsx' }, ...routes],
    },
  ],
  theme: {
    '@primary-color': '#A45E5D',
  },

  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        },
      },
    });
  },
  proxy: {
    '/api': {
      target: 'https://api.github.com',
      target: 'http://49.232.139.185:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
