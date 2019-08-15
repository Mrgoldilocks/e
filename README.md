# Serverless Geo Proxy

Serverless geo-located proxy with Zeit Now

## Getting Started

Install dependencies:
```
yarn
```

Deploy proxy servers located in regions with specifying `PROXY_HOST` like:
```
PROXY_HOST=https://www.google.com yarn deploy
```

Now you can open the proxy URLs with your browser:
```
open \
    https://serverless-geo-proxy-sfo1.<username>.now.sh \
    https://serverless-geo-proxy-bru1.<username>.now.sh \
    https://serverless-geo-proxy-hnd1.<username>.now.sh
```

## Thanks

* [How to setup proxy with next v2(serverless)? · ZEIT](https://spectrum.chat/zeit/now/how-to-setup-proxy-with-next-v2-serverless~8748580e-162d-4827-a14d-87b0e052ed6f)

## License

[MIT](LICENSE)
