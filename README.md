<p align="center">
  <h3 align="center">Symfony Encore Demo</h3>
  <p align="center">trivago-symfony-encore-demo</p>

</p>

---

# Installation

1. Prepare folders
```
mkdir app
```

2. Install  composer
```
docker-compose run php
curl https://getcomposer.org/installer | php -- --filename=composer --install-dir=/bin
```

3. Install Symfony Skeleton
```console
docker-compose run php
composer create-project symfony/skeleton /data/app
```

4. Install Symfony Flex packages
```console
docker-compose run php
composer require server twig asset encore
```

5. Install node packages
```console
docker-compose run node
yarn add node-sass sass-loader babel-preset-es2017 react react-dom prop-types babel-preset-react
yarn
```

# Usage

1. Pick example

| Folder | Description |
|---|---|
| `examples/01-basic-setup` | Default controller, assets and routes. |
| `examples/02-es5-scss` | Basic setup plus ES5 and SCSS support. |
| `examples/03-jquery` | Basic setup plus ES5, SCSS and jQuery support. |
| `examples/04-react` | Basic setup plus ES5, SCSS and React support. |

2. Copy examples files to application
```console
docker-compose run php
cp /data/examples/01-basic-setup/* /data/app -r
```

3. Start web server
```console
docker-compose run --service-ports php
php bin/console server:run 0.0.0.0:80
```

4. Build assets
```console
docker-compose run node
yarn run build
```

# Docs

- [Webpack Encore - Managing CSS and JavaScript](https://symfony.com/doc/current/frontend.html)
- [Using webpack-dev-server and HMR](https://symfony.com/doc/current/frontend/encore/dev-server.html)

---

Would you like to fix something in the documentation? Feel free to open an [issue](https://github.com/sveneisenschmidt/trivago-symfony-encore-demo/issues).