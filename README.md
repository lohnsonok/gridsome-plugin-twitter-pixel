# gridsome-twitter-pixel

> Simply integrate twitter Pixel with Gridsome

## Installation

`yarn add gridsome-plugin-twitter-pixel`

## Usage

`gridsome.config.js`

```js
module.exports = {
  plugins: [
    'gridsome-plugin-twitter-pixel'
  ]
}
```

## Configuration

The default config options will take `id`.

```js
{
  use: 'gridsome-plugin-twitter-pixel',
  options: {
    id: 'xxxx'
  }
}
```

To prevent use in development mode, add `debug: false`

```js
{
  use: 'gridsome-plugin-twitter-pixel',
  options: {
    debug: true
  }
}
```
