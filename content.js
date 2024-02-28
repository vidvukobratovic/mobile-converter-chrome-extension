chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "convertLink") {
    var link = request.link;
    var convertedLink = convert(link);
    sendResponse({ result: convertedLink });
  }
});

function convert(link) {
  var ans = "";
  let id = "";
  if (link == null) {
    return "Invalid input. Enter another string.";
  } else {
    for (let i = 48; i < link.length; i++) {
      if (link.charAt(i) !== "&") {
        id = id.concat(link.charAt(i));
      } else {
        break;
      }
    }
    ans = "https://item.taobao.com/item.htm?id=".concat(id);
    return ans;
  }
}
