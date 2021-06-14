## node version

node@14.17.0  
npm@7.16.0
yarn@1.22.10

## installation

execute command below in project root directory.

```
$ mkdir build
$ mkdir src/images
$ yarn
```

## start dev server

execute command below in project root directory, and the page will open on your browser automatically.

```
$ yarn start
```

## start production server

```
$ yarn build
$ cd build
$ npx serve
```

## advanced settings

#### bootstrap

Add packages below,

```
$ yarn add bootstrap @popperjs/core
```

and write additional import scripts.

`index.(ts|js)x`

```
// Bootstrap - style sheet
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap - JavaScript
import "bootstrap";
```

If you have bootstrap work along with sass, you have to add `mini-css-extract-plugin` in next content (and enable postcss auto-prefix - this is enabled by default).

when you use sass with bootstrap, you can modify default style of bootstrap like below.

`index.scss`

```
// 角丸設定を上書き
$enable-rounded: false;

// テーマカラー設定
$primary: #c51162;

// ヒーロースペースの背景色
$jumbotron-bg: #d9f5ff;

// フォントを変える
$font-family-base: serif;

/* Bootstrap を読み込む */
@import "~bootstrap/scss/bootstrap.scss";
```

`index.(ts|js)x`

```
import "bootstrap";
import "./index.scss";
```

#### extract css files

```
$ yarn add -D mini-css-extract-plugin
```

set style-loader to off, and use this plugin in `webpack.dev/prod.js`.

copy files which (s)css files are loading using `CopyPlugin` in `webpack.common.js`, if needed.
