# WIP: &lt;iframe-match-height&gt;

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/html-iframe-match-height.svg)](https://www.npmjs.com/package/html-iframe-match-height) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/html-iframe-match-height) [![](https://data.jsdelivr.com/v1/package/npm/html-iframe-match-height/badge)](https://www.jsdelivr.com/package/npm/html-iframe-match-height) [![Maintainability](https://api.codeclimate.com/v1/badges/de7f3242b44531ac8fa7/maintainability)](https://codeclimate.com/github/heppokofrontend/html-iframe-match-height/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/de7f3242b44531ac8fa7/test_coverage)](https://codeclimate.com/github/heppokofrontend/html-iframe-match-height/test_coverage) [![Known Vulnerabilities](https://snyk.io/package/npm/html-iframe-match-height/badge.svg)](https://snyk.io/package/npm/html-iframe-match-height)
 [![html-iframe-match-height](https://snyk.io/advisor/npm-package/html-iframe-match-height/badge.svg)](https://snyk.io/advisor/npm-package/html-iframe-match-height)


The iframe element that automatically adjust their height to match the height of the child document.

## Usage

### In browser

```html
<!DOCTYPE html>
<html>
<head>
  <title>html-iframe-match-height in the browser</title>
  <script src="https://cdn.jsdelivr.net/npm/html-iframe-match-height/lib/index.min.js"></script>
</head>
<body>
  <iframe-match-height src="./child-document.html"></iframe-match-height>
</body>
</html>
```

#### Support browser

- Chrome
- Safari
- Firefox
- Edge

### In development

Installation:

```shell
npm install --save html-iframe-match-height
```
#### Use replaceWith with some elements

```javascript
import 'html-iframe-match-height';

const target = document.querySelector('.target');
const ifm = document.createElement('iframe-match-height');

ifm.iframe.src = 'https://wwww.example.com/';
ifm.iframe.title = 'Test document';

document.body.append(ifm);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
