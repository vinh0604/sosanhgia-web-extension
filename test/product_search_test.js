import {expect} from "chai"
import ProductSearch from "../src/product_search"

describe("ProductSearch", function () {
  before(function (){
    fixture.setBase("test/fixtures")
  })

  afterEach(function (){
    fixture.cleanup()
  })

  describe("#extractTitle", function () {
    it("returns product title based on search results", function () {
      fixture.load("product_search_result.html")
      let searchResult = fixture.el.querySelectorAll(".srg .g")
      searchResult = [].slice.call(searchResult)
      let title = ProductSearch.extractTitle(searchResult)
      expect(title).to.equal("Tôi Thấy Hoa Vàng Trên Cỏ Xanh")
    })

    it("returns null if current search not related to any product", function () {
      fixture.load("no_product_search_result.html")
      let searchResult = fixture.el.querySelectorAll(".srg .g")
      searchResult = [].slice.call(searchResult)
      let title = ProductSearch.extractTitle(searchResult)
      expect(title).to.be.a("null")
    })
  })
})
