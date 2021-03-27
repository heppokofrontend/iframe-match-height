import HTMLIframeMatchHeightElement from '../src/HTMLIframeMatchHeightElement'
import '../src/index'

test('Basic usege', () => {
  document.body.innerHTML = `
    <iframe-match-height></iframe-match-height>
  `;

  const elm = document.body.firstElementChild! as HTMLIframeMatchHeightElement;

  console.log(elm.outerHTML);


  expect(elm.children.length).toBe(1);
});
