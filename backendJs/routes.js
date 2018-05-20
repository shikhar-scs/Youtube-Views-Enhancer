chrome.runtime.onMessage.addListener(function (message) {
  
  let messageAction = message.action
  
  const newTabList = [];
  
  switch (messageAction) {
    case 'open home page':
      chrome.tabs.create({
        url: './frontend/htmlFiles/index.html'
      })
      break;
      
    case 'letsBegin': maintainFreq(message);
      break;
  }
  
  function maintainFreq (message) {
    
    let url = message.videoLink;
    let duration = message.videoDuration;
    let vTabsVal = message.vTabs;
    let frequencyVal = message.frequency;
  
    for(let i=0 ; i < frequencyVal ;i++) {
      createASet(vTabsVal,duration,url);
    }
  }
  
  function createASet (vTabsVal,duration,url) {
  
    for(let i=0 ; i < vTabsVal ;i++) {
      createATab(url);
    }
  }
  
  function createATab (url) {
    chrome.tabs.create({
      url: url
    }, function (tabs) {
      console.log(tabs);
      newTabList.push(tabs.id);
    });
  }
  
  //for reloading stuff
  
  
  
})
