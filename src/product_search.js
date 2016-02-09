import _ from "lodash"

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

let ProductSearch = {
  extractTitle(searchResults) {
    if (searchResults.length) {
      let shoppingItem = _.find(searchResults, (elem) => {
        let domain = elem.querySelector('cite').innerText.replace(DOMAIN_PREFIX, "")
        return _.find(POTENTIAL_VENDORS, (vendor) => { return domain.startsWith(vendor) })
      })

      if (shoppingItem) {
        let title = shoppingItem.querySelector('.r a').innerText
        title = title.split(/[-\(]/, 1)[0].trim()
        return title
      }
    }

    return null
  }
}

export default ProductSearch
