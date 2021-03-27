export default class HTMLIframeMatchHeightElement extends HTMLElement {
  iframe: HTMLIFrameElement = document.createElement('iframe');

  get src() { return this.iframe.src }
  set src(path: string) { this.iframe.src = path }

  get srcdoc() { return this.iframe.srcdoc }
  set srcdoc(srcdoc: string) { this.iframe.srcdoc = srcdoc }

  get name() { return this.iframe.name }
  set name(name: string) { this.iframe.name = name }

  get sandbox() { return this.iframe.sandbox }
  // set sandbox(sandbox: DOMTokenList) { this.iframe.sandbox = sandbox }

  get allow() { return this.iframe.allow }
  set allow(allow: string) { this.iframe.allow = allow }

  get allowFullscreen() { return this.iframe.allowFullscreen }
  set allowFullscreen(allowFullscreen: boolean) { this.iframe.allowFullscreen = allowFullscreen }

  get width() { return this.iframe.width }
  set width(width: string) { this.iframe.width = width }

  get height() { return this.iframe.height }
  set height(height: string) { this.iframe.height = height }

  get referrerPolicy() { return this.iframe.referrerPolicy }
  set referrerPolicy(referrerPolicy: ReferrerPolicy) { this.iframe.referrerPolicy = referrerPolicy }

  get loading() { return this.iframe.getAttribute('loading') || 'auto' }
  set loading(loading: string) { this.iframe.setAttribute('loading', loading) }

  get contentDocument() { return this.iframe.contentDocument }

  get contentWindow() { return this.iframe.contentWindow }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLIframeMatchHeightElement, 'name', {
  value: 'HTMLIframeMatchHeightElement',
});
