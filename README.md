# sk11st API for javascript

**Javascript** sk11st API package, Support **Node.js**

## Installation

```bash
npm install --save sk11st
```

## Getting Started

### with Node.js

```javascript
const sk11st = require('sk11st')

```

## Authentication

```
api key
```

## sk11st API

* apikey: sk11st API key

### sk11st.product.search(apikey: string, options: object = {})

 호출 예 ) 

```javascript
const sk11st = require('sk11st');
const convert  = require('xml-js');
const iconv = require('iconv-lite');

var options = {
    'apiCode' : 'ProductSearch',
    'keyword' : '세탁기'
}
sk11st.product.search(apikey, options).then(function (res){
    const decoded = iconv.decode(res.data,'EUC-KR');
    var results = convert.xml2json(decoded, {compact: true, spaces: 4});
    console.log(results);
});

```

## Details 
- http://openapi.11st.co.kr/openapi/OpenApiGuide.tmall

## 전체 API 

```javascript
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
```


## License

[MIT](https://github.com/hkjang/sk11st/blob/master/LICENSE)

Copyright 2018-2020. [hkjang](https://github.com/hkjang). All rights reserved.
