window.onload = function () {
  
  let submitButton = $("#beginButton");
  
  submitButton.click(function () {
    
    const videoLinkVal = $("#videoLink").val() || "";
    const videoDurationVal =  $("#videoDuration").val() || 60;
    const vTabsVal = $("#vTabs").val() || 2;
    const frequencyVal = $("#frequency").val() || 20;
    
    chrome.runtime.sendMessage({
      action: "letsBegin",
      videoLink: videoLinkVal,
      videoDuration: videoDurationVal,
      vTabs: vTabsVal,
      frequency: frequencyVal
    })
    submitButton.innerText = ":)";
  })
  
  
  
}
