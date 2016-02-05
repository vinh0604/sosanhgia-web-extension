import $ from 'jquery'

const POTENTIAL_VENDORS = [
  "tiki",
  "lazada",
  "adayroi",
  "sendo",
  "nguyenkim",
  "thegioididong",
  "dienmayxanh",
  "pico"
]
const DOMAIN_PREFIX = /^(https?:\/\/(www\.?)?)?/
const SEPARATORS = /[-\(]/

let mutationObserverConfig = {
  childList: true
}
let mutationObserver = new MutationObserver(function (mutationRecords) {
  mutationRecords.forEach((mutationRecord) => {
    if (typeof mutationRecord.addedNodes === "object") {
      let searchResults = mutationRecord.target.querySelectorAll(".srg .g")
      searchResults = [].slice.call(searchResults, 0, 10)
      if (searchResults.length) {
        let shoppingItem = searchResults.find((elem) => {
          let domain = elem.querySelector('cite').innerText.replace(DOMAIN_PREFIX, "")
          return POTENTIAL_VENDORS.find((vendor) => { return domain.startsWith(vendor) })
        })

        if (shoppingItem) {
          let title = shoppingItem.querySelector('.r a').innerText
          title = title.split(/[-\(]/, 1)[0].trim()
          console.log("Title", title)
        }
      }
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

