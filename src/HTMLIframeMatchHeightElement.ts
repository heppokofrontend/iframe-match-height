/**
 * This custom element must not have any element as child other than their own iframe element.
 * The children of this custom element must not be empty.
 * @param elm - The custom element
 */
const init = function (elm: HTMLIframeMatchHeightElement) {
  elm.textContent = '';
  elm.append(elm.iframe);

  if (
    elm.iframe.src &&
    elm.iframe.contentWindow
  ) {
    elm.iframe.contentWindow.postMessage({
      action: 'iframe-match-height-reflow',
    }, elm.host);
  }
};

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    init(mutation.target as HTMLIframeMatchHeightElement);
  });
});

export default class HTMLIframeMatchHeightElement extends HTMLElement {
  iframe: HTMLIFrameElement = document.createElement('iframe');

  private onmessage = (e: MessageEvent) => {
    const {data} = e;

    if (
      !data ||
      data.whoAmI !== this.src
    ) {
      return;
    }

    this.iframe.width = `${data.width}px`;
    this.iframe.height = `${data.height}px`;
  }

  get host() {
    try {
      return new URL(this.src).hostname;
    } catch {
      return '';
    }
  }

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

  connectedCallback() {
    init(this);
  }

  constructor() {
    super();

    observer.observe(this, { childList: true });
    window.addEventListener('message', this.onmessage);
  }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLIframeMatchHeightElement, 'name', {
  value: 'HTMLIframeMatchHeightElement',
});
