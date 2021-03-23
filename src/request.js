const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: 'http://api.11st.co.kr/rest/'
})

const axiosOpen = axios.create({
    baseURL: 'http://openapi.11st.co.kr/openapi/OpenApiService.tmall'
})

axiosInstance.defaults.responseType = 'arraybuffer';
axiosOpen.defaults.responseType = 'arraybuffer';

function Request () {}

/**
 * 'get' request
 *
 * @param {string} apikey - API Key
 * @param {string} url - Request url
 * @param {Object} options - Params
 */
Request.get = function (apikey, url, options) {
  return axiosInstance.get(url, {
    params: Object.assign({
      key: apikey
    }, options)
  })
}

/**
 * 'get' request
 *
 * @param {string} apikey - API Key
 * @param {string} url - Request url
 * @param {Object} options - Params
 */
Request.getOpen = function (apikey, url, options) {
    return axiosOpen.get(url, {
        params: Object.assign({
            key: apikey
        }, options)
    })
}

module.exports = Request
