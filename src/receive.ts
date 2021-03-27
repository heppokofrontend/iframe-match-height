{
  window.addEventListener('message', e => {
    const data:sendData = e.data;

    if (data.action !== 'iframe-match-height-reflow') {
      return;
    }

    const receiveData: receiveData = {
      action: 'iframe-match-height-resize',
      whoAmI: location.href,
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    };

    window.parent.postMessage(receiveData, data.host);
  });
}
