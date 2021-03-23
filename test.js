const sk11st = require('./index.js');
const convert  = require('xml-js');
const iconv = require('iconv-lite');

var apikey = 'API_KEY';

// var options = {
//     'ctgrNm' : '1142222'
// }

// sk11st.product.categoryByNum(apikey, options).then(function (res){
//     var decoded = iconv.decode(res.data,'EUC-KR');
//     var results = convert.xml2json(decoded, {compact: true, spaces: 4});
//     console.log(results);
// });
//
// sk11st.product.category(apikey, options).then(function (res){
//     var decoded = iconv.decode(res.data,'EUC-KR');
//     var results = convert.xml2json(decoded, {compact: true, spaces: 4});
//     console.log(results);
// });

// var options = {
//     'apiCode' : 'ProductSearch',
//     'keyword' : '세탁기'
// }
//
// sk11st.product.search(apikey, options).then(function (res){
//     var decoded = iconv.decode(res.data,'EUC-KR');
//     var results = convert.xml2json(decoded, {compact: true, spaces: 4});
//     console.log(results);
// });


// var options = {
//     'apiCode' : 'ProductSearch',
//     'option' : 'Categories',
//     'keyword' : '세탁기'
// }
//
// sk11st.product.catetorySearch(apikey, options).then(function (res){
//     var decoded = iconv.decode(res.data,'EUC-KR');
//     var results = convert.xml2json(decoded, {compact: true, spaces: 4});
//     console.log(results);
// });

// var options = {
//     'categoryCode' : '1142222'
// }
//
// sk11st.product.catetoryInfo(apikey, options).then(function (res){
//     var decoded = iconv.decode(res.data,'EUC-KR');
//     var results = convert.xml2json(decoded, {compact: true, spaces: 4});
//     console.log(results);
// });

var options = {
    'productCode' : '3331630966'
}

sk11st.product.productImage(apikey, options).then(function (res){
    var decoded = iconv.decode(res.data,'EUC-KR');
    var results = convert.xml2json(decoded, {compact: true, spaces: 4});
    console.log(results);
});
