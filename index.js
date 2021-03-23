const Request = require('./src/request')

const sk11st = {
  product: {
    /** 상품 검색 API */
    search(apikey, options = {}) {
      options.key = apikey;
      options.apiCode = 'ProductSearch';
      return Request.getOpen(apikey, '', options)
    },
    /** 상품 카테고리 검색 API */
    catetorySearch(apikey, options = {}) {
      options.key = apikey;
      options.apiCode = 'ProductSearch';
      options.option = 'Categories';
      return Request.getOpen(apikey, '', options)
    },
    /** 상품 카테고리 정보 검색 API */
    catetoryInfo(apikey, options = {}) {
      options.key = apikey;
      options.apiCode = 'CategoryInfo';
      return Request.getOpen(apikey, '', options)
    },
    /** 상품 카테고리 정보 검색 API */
    productImage(apikey, options = {}) {
      options.key = apikey;
      options.apiCode = 'ProductImage';
      return Request.getOpen(apikey, '', options)
    },
    /** 상품 카테고리 API */
    category(apikey, options = {}) {
      return Request.get(apikey, '/cateservice/category', options)
    },
    categoryByNum(apikey, options = {}) {
      return Request.get(apikey, '/cateservice/category/'+options.ctgrNm, options)
    },
  }
}
module.exports = sk11st
