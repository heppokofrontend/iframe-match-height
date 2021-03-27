import { HTMLIframeMatchHeightElement } from  '../src/index';

test('Basic usege', () => {
  document.body.innerHTML = `
    <iframe-match-height></iframe-match-height>
  `;

  expect(document.body.firstElementChild?.firstElementChild?.tagName).toBe('IFRAME');
  expect((document.body.firstElementChild as HTMLIframeMatchHeightElement)?.host).toBe('');
});

// test('Nesting', () => {
//   document.body.innerHTML = `
//     <document-fragment>
//       <p>1</p>
//       <p>2</p>

//       <document-fragment>
//         <p>3</p>
//         <p>4</p>

//         <document-fragment>
//           <p>5</p>
//           <p>6</p>
//         </document-fragment>
//       </document-fragment>

//       <document-fragment>
//         <p>7</p>
//         <p>8</p>
//       </document-fragment>
//     </document-fragment>
//   `;

//   expect(document.body.children.length).toBe(8);

//   describe('string', () => {
//     const str = [...document.querySelectorAll('p')].map(p => p.textContent).join('');

//     expect(str).toBe('12345678');
//   });
// });

// test('createElement', () => {
//   const df = document.createElement('document-fragment');

//   df.innerHTML = `
//     test
//     <p>test</p>
//     test
//   `;

//   expect(df.firstElementChild?.tagName).toBe('P');

//   document.body.appendChild(df);

//   expect(df.firstElementChild).toBeNull();
//   expect(df.innerHTML).toBe('');
//   expect(document.body.firstElementChild?.tagName.toLowerCase()).toBe('p');
// });

// test('Use arguments', () => {
//   describe('a string', () => {
//     const elm = new HTMLIframeMatchHeightElement('text');

//     expect(elm.textContent).toBe('text');
//   });


//   describe('multiple arguments', () => {
//     const elm = new HTMLIframeMatchHeightElement(`
//         text
//         <p>text</p>
//       `,
//       document.createElement('div'),
//       'text2'
//     );

//     expect(elm.children.length).toBe(2);
//     expect(elm.children[0]?.tagName.toLowerCase()).toBe('p');
//     expect(elm.children[1]?.tagName.toLowerCase()).toBe('div');
//   });


//   describe('deep argument', () => {
//     const div = document.createElement('div');

//     div.innerHTML = `
//       <p></p>
//       <p></p>
//       <document-fragment>
//       <p></p>
//       </document-fragment>
//       <p></p>
//       <div></div>
//     `;

//     const elm = new HTMLIframeMatchHeightElement([
//       `
//         text
//         <p>text</p>
//       `,
//       document.createElement('div'),
//       'text2',
//     ],
//     div.children,
//     [
//       [
//         [
//           'last',
//         ]
//       ]
//     ]
//     );

//     expect(elm.children.length).toBe(7);
//     expect(elm.children[0]?.tagName.toLowerCase()).toBe('p');
//     expect(elm.children[1]?.tagName.toLowerCase()).toBe('div');
//     expect(elm.lastChild?.textContent).toBe('last');
//   });

//   describe('Unmatched types', () => {
//     expect(() => new HTMLIframeMatchHeightElement({} as any)).toThrow();
//     expect(() => new HTMLIframeMatchHeightElement(new Promise(r => r) as any)).toThrow();
//   });
// });

// test('DOMContentLoad event has not been called yet', () => {
//   Object.defineProperty(document, 'readyState', {
//     get() { return 'loading'; }
//   });
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(`
//     <document-fragment>
//       <p>test message 1</p>
//       <p>test message 2</p>
//     </document-fragment>
//   `, 'text/html');

//   expect(document.readyState).toBe('loading');

//   document.body.replaceWith(doc.body);

//   expect(document.body.children.length).toBe(1);

//   document.dispatchEvent(new Event('DOMContentLoaded'));

//   expect(document.body.children.length).toBe(2);
// });
