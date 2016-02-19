import ProductsListView from "../src/products_list_view"
import {expect} from "chai"

describe("ProductsListView", function () {
  before(function (){
    fixture.setBase("test/fixtures")
  })

  afterEach(function() {
    fixture.cleanup()
  })

  it("should render list view for products", function () {
    fixture.load("products_list_view.html")
    let products = [
      {
        title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        store: "tiki.vn",
        link: "http://tiki.vn/toi-thay-hoa-vang-tren-co-xanh.html",
        image: "http://img.websosanh.net/ThumbImages/Store/f/fahasa_com/com/combo-sach-toi-thay-hoa-vang-tren-co-xanh_140.jpg",
        price: "44,100đ"
      },
      {
        title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        store: "adayroi.com",
        link: "https://www.adayroi.com/toi-thay-hoa-vang-tren-co-xanh-p-kvzL-f1-2?pi=N36Kv",
        image: "http://img.websosanh.net/ThumbImages/Store/a/adayroi_com/sot/so-tay-toi-thay-hoa-vang-tren-co-xanh_140.jpg",
        price: "57,000đ"
      }

    ]
    let result = ProductsListView.render(products)
    result = result.replace(/\>\s+\</g, "><").trim()
    let expected = fixture.el.innerHTML.replace(/\>\s+\</g, "><").trim()
    expect(result).to.equal(expected)
  })
})
