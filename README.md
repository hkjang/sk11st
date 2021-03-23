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
apikey
```

## sk11st API

* apikey: sk11st API key

### sk11st.disclosure.company(access_token: string, options: object = {})

 호출 예 ) 

```javascript
const sk11st = require('sk11st');

var options = {
    'corp_code' : '00126380'
}
sk11st.disclosure.company('ACCESS_TOKEN', options).then(function (res){
    console.log(res.data);
});

```

## Details 
- https://sk11st.fss.or.kr/guide/main.do?apiGrpCd=DS001
- https://documenter.getpostman.com/view/12899159/TVKJxEeP

## 전체 API 

```javascript
const sk11st = {
  disclosure: {
    /** 공시검색 API */
    list (apikey, options = {}) {
      return Request.get(apikey, '/list.json', options)
    },
    /** 기업개황 API */
    company (apikey, options = {}) {
      return Request.get(apikey, '/company.json', options)
    },
    /** 고유번호 API */
    corpCode (apikey, options = {}) {
      return Request.get(apikey, '/corpCode.xml', options)
    },
    /** 고유번호 API */
    document (apikey, options = {}) {
      return Request.get(apikey, '/document.xml', options)
    }
  },
  report: {
    /** 증자(감자) 현황 API */
    irdsSttus(apikey, options = {}) {
      return Request.get(apikey, '/irdsSttus.json', options)
    },
    /** 배당에 관한 사항 API */
    alotMatter(apikey, options = {}) {
      return Request.get(apikey, '/alotMatter.json', options)
    },
    /** 자기주식 취득 및 처분 현황 API */
    tesstkAcqsDspsSttus(apikey, options = {}) {
      return Request.get(apikey, '/tesstkAcqsDspsSttus.json', options)
    },
    /** 최대주주 현황 API */
    hyslrSttus(apikey, options = {}) {
      return Request.get(apikey, '/hyslrSttus.json', options)
    },
    /** 최대주주 변동 현황 API */
    hyslrChgSttus(apikey, options = {}) {
      return Request.get(apikey, '/hyslrChgSttus.json', options)
    },
    /** 소액주주 현황 API */
    mrhlSttus(apikey, options = {}) {
      return Request.get(apikey, '/mrhlSttus.json', options)
    },
    /** 임원 현황 API */
    exctvSttus(apikey, options = {}) {
      return Request.get(apikey, '/exctvSttus.json', options)
    },
    /** 직원 현황 API */
    empSttus(apikey, options = {}) {
      return Request.get(apikey, '/empSttus.json', options)
    },
    /** 이사,감사의 개인별 보수 현황 API */
    hmvAuditIndvdlBySttus(apikey, options = {}) {
      return Request.get(apikey, '/hmvAuditIndvdlBySttus.json', options)
    },
    /** 이사, 감사 전체의 보수 현황 API */
    hmvAuditAllSttus(apikey, options = {}) {
      return Request.get(apikey, '/hmvAuditAllSttus.json', options)
    },
    /** 개인별 보수금액(5억이상 상위5인) API */
    indvdlByPay(apikey, options = {}) {
      return Request.get(apikey, '/indvdlByPay.json', options)
    },
    /** 타법인 출자현황 API */
    otrCprInvstmntSttus(apikey, options = {}) {
      return Request.get(apikey, '/otrCprInvstmntSttus.json', options)
    }
  },
  statement: {
    /** 단일회사 주요계정 API */
    fnlttSinglAcnt(apikey, options = {}) {
      return Request.get(apikey, '/fnlttSinglAcnt.json', options)
    },
    /** 다중회사 주요계정 API */
    fnlttMultiAcnt(apikey, options = {}) {
      return Request.get(apikey, '/fnlttMultiAcnt.json', options)
    },
    /** 단일회사 전체 재무제표 API */
    fnlttSinglAcntAll(apikey, options = {}) {
      return Request.get(apikey, '/fnlttSinglAcntAll.json', options)
    },
    /** XBRL택사노미재무제표양식 API */
    xbrlTaxonomy(apikey, options = {}) {
      return Request.get(apikey, '/xbrlTaxonomy.json', options)
    },
    /** 재무제표 원본파일(XBRL) API */
    fnlttXbrl(apikey, options = {}) {
      return Request.get(apikey, '/fnlttXbrl.xml', options)
    }
  },
  equity: {
    /** 대량보유 상황보고 API */
    majorstock(apikey, options = {}) {
      return Request.get(apikey, '/majorstock.json', options)
    },
    /** 임원ㆍ주요주주 소유보고 API */
    elestock(apikey, options = {}) {
      return Request.get(apikey, '/elestock.json', options)
    }
  }
}
```


## License

[MIT](https://github.com/hkjang/sk11st/blob/master/LICENSE)

Copyright 2018-2020. [hkjang](https://github.com/hkjang). All rights reserved.
