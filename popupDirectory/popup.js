$(function () {
  let openHome = $('#openHome');
  
  openHome.click(function () {
    chrome.runtime.sendMessage({
      action: 'open home page'
    })
  })
});
