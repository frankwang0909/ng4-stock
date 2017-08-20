# Stocks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## admin-lte 版本问题有兼容性问题：

官方最新版本为 v2.4.0， 但从 npm 下载的最新为 v2.3.11. ，编译会报错。

解决办法：从官网或者GitHub 下载最新版本，替换掉node_module目录下的v2.3.11版的admin-lte。


## 设置 Http代理 配置，转发请求。

在项目根目录下，新增一个`proxy.conf.json` 文件


    {
        "/api":{
            "target": "http://localhost:8000"
        }
    }


修改`package.json`:

    "start": "ng serve",

改为：

    "start": "ng serve --proxy-config proxy.conf.json",
