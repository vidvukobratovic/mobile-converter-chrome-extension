document.getElementById("convertButton").addEventListener("click", function () {
  var link = document.getElementById("linkInput").value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      { action: "convertLink", link: link },
      function (response) {
        document.getElementById("output").innerText = response.result;
      }
    );
  });
});
