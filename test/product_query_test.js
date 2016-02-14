import $ from "jquery"
import "jquery-mockjax"
import ProductQuery from '../src/product_query'

describe("ProductQuery", function () {
  let sampleData = [
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

  describe("#query", function () {
    it("should request to server with product title", function (done) {
      let title = "Tôi Thấy Hoa Vàng Trên Cỏ Xanh"
      ProductQuery.query(title).then(function (data) {
        expect(data).to.equal(sampleData)
        done()
      })
    })
  })
})
