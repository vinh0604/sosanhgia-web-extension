import $ from "jquery"

let ProductQuery = {
  query(title) {
    return $.getJSON('/api/products1', { title: title });
  }
}

export default ProductQuery
