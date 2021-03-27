export default class HTMLIframeMatchHeightElement extends HTMLElement {
  iframe: HTMLIFrameElement = document.createElement('iframe');
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLIframeMatchHeightElement, 'name', {
  value: 'HTMLIframeMatchHeightElement',
});
