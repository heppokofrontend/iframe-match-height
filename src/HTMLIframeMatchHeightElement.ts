// TODO: 同一ドメインのときはpostMessageを使わないのを基本にする
// TODO: iframeがページ遷移したときの動き（onload）
// TODO: iframeとreplaceWithするか考える

/**
 * This custom element must not have any element as child other than their own iframe element.
 * The children of this custom element must not be empty.
 * @param elm - The custom element
 */
const init = function (elm: HTMLIframeMatchHeightElement) {
  const data: sendData = {
    action: 'iframe-match-height-reflow',
    host: window.location.host,
  };

  if (elm.firstElementChild === elm.lastElementChild) {
    return;
  }

  elm.textContent = '';
  elm.append(elm.iframe);

  if (
    elm.iframe.src &&
    elm.iframe.contentWindow &&
    elm.host
  ) {
    elm.iframe.contentWindow.postMessage(data, elm.host);
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
    const data:receiveData = e.data;

    if (
      !data ||
      data.action !== 'iframe-match-height-resize',
      data.whoAmI !== this.iframe.src
    ) {
      return;
    }

    this.iframe.width = `${data.width}px`;
    this.iframe.height = `${data.height}px`;
  }

  get host() {
    try {
      return new URL(this.iframe.src).hostname;
    } catch {
      return null;
    }
  }

  connectedCallback() {
    init(this);
  }

  constructor() {
    super();

    observer.observe(this, { childList: true });
    window.addEventListener('message', this.onmessage);
  }
}

// Prevent uglify from changing the name of the constructor.
Object.defineProperty(HTMLIframeMatchHeightElement, 'name', {
  value: 'HTMLIframeMatchHeightElement',
});
