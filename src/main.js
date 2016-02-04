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


$(function() {
  let searchTerm = ""

  $("form[role=search]").on("submit", function () {
    searchTerm = $(this).find("input[name=q]").val()
    searchUpdated = true
  })

  $(document).on("DOMSubtreeModified", "#search", function () {
    let currentSearchTerm = $("form[role=search] input[name=q]").val()
    let searchResults = $(this).find('.srg .g')
    if (searchTerm != currentSearchTerm && searchResults.length) {
      let topSearchResults = searchResults.slice(0,10).toArray()
      let shoppingItem = topSearchResults.find((elem) => {
        let domain = $(elem).find('cite').text().replace(DOMAIN_PREFIX, "")
        return POTENTIAL_VENDORS.find((vendor) => { return domain.startsWith(vendor) })
      })

      if (shoppingItem) {
        let title = $(shoppingItem).find('.r a').text()
        title = title.split(/[-\(]/, 1)[0].trim()
        console.log("Title", title)
      }
      searchTerm = currentSearchTerm
    }
  })
})

