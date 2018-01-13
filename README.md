<p align="center">
  <h3 align="center">Symfony Encore Demo</h3>
  <p align="center">trivago-symfony-encore-demo</p>

</p>

---

# Installation

1. Install  composer
```console
docker-compose run php
curl https://getcomposer.org/installer | php -- --filename=composer --install-dir=/bin
```

2. Install Symfony Skeleton
```console
docker-compose run php
composer create-project symfony/skeleton app
```

3. Install Symfony Flex packages
```console
docker-compose run php
cd app
composer require server twig asset encore
```

4. Copy `dist` files to root
```console
docker-compose run php
cp dist/* app -r
```

# Usage

1. Start web server
```console
docker-compose run --service-ports php
php bin/console server:run 0.0.0.0:80
```


---

Would you like to fix something in the documentation? Feel free to open an [issue](https://github.com/sveneisenschmidt/trivago-symfony-encore-demo/issues).