const createProxyMiddleware = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:29444';

const context =  [
    "/weatherforecast",
    "/api/Customers",
    "/api/Orders",
    "/api/Products",
    "/api/Suppliers",
    "/api"
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

    app.use(appProxy);

    app.use(createProxyMiddleware('/api_/aa', {
        target: 'http://m.kugou.com?json=true',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api_/aa': ''
        },
    }));

    //app.use(createProxyMiddleware('https://blooming-sands-85089.herokuapp.com/react-shopping-cart/cart', {
    //    target: 'https://blooming-sands-85089.herokuapp.com/react-shopping-cart/carte',
    //    changeOrigin: true,
    //    ws: true,
    //    pathRewrite: {
    //        '^/api_/aa': ''
    //    },
    //}));
};
