import template from "./templates/products_list_view.html!text"
import _ from "lodash"

let compiledTemplate = _.template(template)

function formatMoney(value, symbol) {
  let formattedValue = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return formattedValue + symbol
}

let ProductsListView = {
  render(products) {
    products = _.map(products, function (product) {
      product.formattedPrice = formatMoney(product.price.value, product.price.symbol)
      return product
    })

    return compiledTemplate({ products: products })
  }
}

export default ProductsListView
