import template from "./templates/products_list_view.html!text"
import _ from "lodash"

console.log(template)
let compiledTemplate = _.template(template)

let ProductsListView = {
  render(products) {
    return compiledTemplate({ products: products })
  }
}

export default ProductsListView
