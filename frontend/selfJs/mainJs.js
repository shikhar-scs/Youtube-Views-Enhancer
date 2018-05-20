window.onload = function () {
  
  let submitButton = $("#beginButton");
  
  submitButton.click(function () {
    
    const videoLinkVal = $("#videoLink").val() || "";
    const videoDurationVal =  $("#videoDuration").val() || 60;
    const vTabsVal = $("#vTabs").val() || 1;
    const frequencyVal = $("#frequency").val() || 2;
  
/*    console.log(videoLinkVal);
    console.log(videoDurationVal);
    console.log(vTabsVal);
    console.log(frequencyVal);
    */
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
