import ProductQuery from "./product_query"

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (sender.tab && request.title) {
    ProductQuery.query(request.title).then(function (data) {
      sendResponse({ success: true, data: data })
    }).catch(function (err) {
      sendResponse({ success: false, error: err })
    })
  }
})
