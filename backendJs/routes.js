chrome.runtime.onMessage.addListener(function (message) {
  
  let messageAction = message.action
  
  const tabsList = [];
  
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
    let vTabsVal = message.vTabs;
   
    createASet(vTabsVal,url);
    reloadTabs();
  }
  
  function createASet (vTabsVal,url) {
  
    for(let i=0 ; i < vTabsVal ;i++) {
      createATab(url);
    }
  }
  
  function createATab (url) {
    chrome.tabs.create({
      url: url
    }, function (tab) {
      tabsList.push(tab.id);
    });
  }
  
  function reloadTabs () {
    
    let frequencyVal = message.frequency;
    let duration = message.videoDuration;
    let vTabsVal = message.vTabs;
  
    duration = duration*1000;
    
    function settime () {
  
      function timering() {
    
        for (let i=0; i < vTabsVal; i++) {
          console.log('reloaded');
          chrome.tabs.reload(tabsList[i]);
        }
    
        console.log(frequencyVal);
        frequencyVal--;
        console.log(frequencyVal);
        
        checkCount();
      }
  
      function checkCount () {
        if (!frequencyVal) {
          clearInterval(forTimer);
          tabsList.forEach (function (tabId) {
            chrome.tabs.remove (tabId);
          })
        }
      }
      
      let forTimer = setInterval(timering, duration);
    }
    
    settime();
  }
})
