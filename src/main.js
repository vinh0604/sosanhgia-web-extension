import $ from 'jquery'
import ProductSearch from './product_search'
import ProductQuery from './product_search'

let mutationObserverConfig = {
  childList: true
}
let mutationObserver = new MutationObserver(function (mutationRecords) {
  mutationRecords.forEach((mutationRecord) => {
    if (typeof mutationRecord.addedNodes === "object") {
      let searchResults = mutationRecord.target.querySelectorAll(".srg .g")
      searchResults = [].slice.call(searchResults, 0, 10)
      let title = ProductSearch.extractTitle(searchResults)
      ProductQuery.query(title).then(function (data) {
        ProductsListView.render(data);
      }).catch(function (err) {

      });
    }
  })
})

$(function() {
  $("form[role=search] input[name=q]").on("keydown", function (e) {
    if (e.which === 13) {
      mutationObserver.observe(document.querySelector('#search'), mutationObserverConfig)
    }
  })
})

