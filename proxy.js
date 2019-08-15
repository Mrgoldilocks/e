import express from 'express';
import proxy from 'express-http-proxy';

const PROXY_HOST = process.env.PROXY_HOST || 'https://whatismyipaddress.com';

const app = express();

app.use(
  '/',
  proxy(PROXY_HOST, {
    proxyReqOptDecorator: proxyReqOpts => {
      proxyReqOpts.headers['X-Forwarded-For'] = '';
      return proxyReqOpts;
    },
  }),
);

export default app;
