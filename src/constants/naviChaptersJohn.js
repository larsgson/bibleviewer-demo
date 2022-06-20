import { getLocalMediaFName } from '../utils/obj-functions'

export const versesPerCh = [
  51,25,36,54,47,71,52,59,41,42,57,50,38,31,27,33,26,40,42,31,25
]

export const imgAlt = {
  1: ["1","16","30"],
  4: ["44","51","54"],
  5: ["4"],
  6: ["6","25","38"],
  9: ["7"],
  10: ["16","21"],
  12: ["12","13a","23","41"],
  13: ["1b"],
  14: ["27","31"],
  18: ["33","40"],
  19: ["2","17","32","33","35"],
  20: ["5","18a","20","21","24","26a","26b"],
  21: ["16c"]
}

export const imgVerseMuliple = {
  1: {5: 2, 38: 2, 39: 2, 42: 2, 43: 2, 48: 2},
  2: {6: 2, 8: 2, 11: 2, 15: 2},
  3: {4: 2},
  4: {17: 2, 25: 2, 46: 2, 50: 2, 52: 2, 53: 2},
  5: {9: 2},
  6: {10: 2, 11: 4, 17: 2, 19: 2, 21: 2},
  8: {2: 2, 6: 2, 7: 2, 9: 2, 11: 2, 12: 2, 19: 2, 25: 2},
  9: {6: 2, 11: 2, 15: 2, 16: 2, 17: 2},
  10: {18: 2, 24: 2},
  11: {20: 2, 32: 2, 34: 2, 38: 2, 39: 2, 44: 2},
  12: {2: 2, 3: 3, 9: 2, 13: 2, 19: 2, 28: 2, 35: 2, 36: 2},
  13: {1: 2, 4: 2, 5: 2, 8: 2, 10: 2, 12: 2, 27: 2, 33: 2, 36: 2},
  14: {9: 2, 10: 2, 12: 2},
  15: {4: 2, 6: 2, 15: 2, 16: 2},
  16: {7: 2, 17: 2, 19: 2, 21: 2},
  17: {24: 2},
  18: {5: 3, 7: 2, 10: 2, 13: 2, 15: 2, 16: 3, 17: 2, 18: 2, 25: 2, 27: 2, 31: 2, 37: 2, 38: 2},
  19: {6: 2, 12: 2, 15: 3, 16: 4, 19: 2, 24: 2, 26: 2, 29: 3, 30: 2, 31: 2, 34: 2, 38: 2},
  20: {2: 2, 13: 2, 15: 2, 17: 2, 18: 2, 19: 2, 25: 2, 26: 2, 27: 2, 29: 2},
  21: {3: 3, 5: 2, 6: 3, 7: 2, 8: 2, 15: 3, 16: 3, 17: 4}
}

export const imgVerseSpan = {
  1: {16: 2},
  2: {24: 2},
  3: {6: 2, 14: 2, 19: 2, 23: 2, 30: 2, 32: 2, 34: 2,},
  4: {1: 2, 3: 2, 7: 2, 28: 2, 43: 2, 46: 2, 53: 2},
  5: {26: 2, 28: 2, 32: 2, 37: 2, 41: 2, 46: 2},
  6: {4: 2, 8: 2, 37: 2, 39: 2, 41: 2, 43: 2, 56: 2, 65: 2},
  7: {3: 2, 6: 2, 10: 2, 12: 2, 23: 2, 33: 2, 48: 2, 50: 2},
  8: {15: 2, 17: 2, 25: 2, 31: 2, 34: 3, 37: 2, 42: 2, 45: 3, 49: 3, 54: 3},
  9: {3: 3, 18: 2, 20: 2, 22: 2, 28: 2, 30: 3},
  10: {7: 2, 14: 2, 22: 2, 25: 2, 27: 2, 35: 2},
  11: {5: 2, 9: 2, 21: 2, 38: 2, 47: 2},
  12: {44: 2},
  14: {15: 2, 18: 2},
  18: {13: 2, 31: 2}
}

export const chSelectedImgList = [
  "1v14",
  "2v3",
  "3v2",
  "4v37",
  "5v2",
  "6v36",
  "7v28",
  "8v2b",
  "9v11b",
  "10v2",
  "11v38b-39a",
  "12v2b",
  "13v18",
  "14v20",
  "15v15a",
  "16v25",
  "17v14",
  "18v24",
  "19v10",
  "20v17b",
  "21v15b"
]

export const chInBook = 21
export const getChNode = (inx,title) => {
  return (inx < chInBook)
   ? {title, image: getLocalMediaFName("../john-pics/VB-John" + chSelectedImgList[inx] + ".jpg")}
    : undefined
}

export const johnOutline = [
  "1-1","1-19","1-29","1-35","1-43","2-1","2-13","3-1","3-22","4-1","4-27","4-39","4-43",
  "5-1","5-16","5-31","6-1","6-16","6-25","6-60","7-1","7-14","7-25","7-45",
  "8-12","8-21","8-31","8-48","9-1","9-13","9-35","10-1","10-22",
  "11-1","11-17","11-38","11-45","12-1","12-12","12-20","12-37","13-1","13-18","13-31",
  "14-1","14-5","14-15","15-1","15-18","15-26","16-16","17-1","17-6","17-20",
  "18-1","18-15","18-19","18-25","18-28","19-1","19-16","19-28","19-38",
  "20-1","20-11","20-19","20-24","20-30","21-1","21-15"
]

export const gospelOfJohnObj = {
  "fileList": [{
    "id": 0,
    "title": "John1",
    "descr": "John1Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John1ImgId"
    }
  }, {
    "id": 1,
    "title": "John2",
    "descr": "John2Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John2ImgId"
    }
  }, {
    "id": 2,
    "title": "John3",
    "descr": "John3Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John3ImgId"
    }
  }, {
    "id": 3,
    "title": "John4",
    "descr": "John4Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John4ImgId"
    }
  }, {
    "id": 4,
    "title": "John5",
    "descr": "John5Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John5ImgId"
    }
  }, {
    "id": 5,
    "title": "John6",
    "descr": "John6Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John6ImgId"
    }
  }, {
    "id": 6,
    "title": "John7",
    "descr": "John7Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John7ImgId"
    }
  }, {
    "id": 7,
    "title": "John8",
    "descr": "John8Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John8ImgId"
    }
  }, {
    "id": 8,
    "title": "John9",
    "descr": "John9Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John9ImgId"
    }
  }, {
    "id": 9,
    "title": "John10",
    "descr": "John10Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John10ImgId"
    }
  }, {
    "id": 10,
    "title": "John11",
    "descr": "John11Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John11ImgId"
    }
  }, {
    "id": 11,
    "title": "John12",
    "descr": "John12Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John12ImgId"
    }
  }, {
    "id": 12,
    "title": "John13",
    "descr": "John13Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John13ImgId"
    }
  }, {
    "id": 13,
    "title": "John14",
    "descr": "John14Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John14ImgId"
    }
  }, {
    "id": 14,
    "title": "John15",
    "descr": "John15Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John15ImgId"
    }
  }, {
    "id": 15,
    "title": "John16",
    "descr": "John16Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John16ImgId"
    }
  }, {
    "id": 16,
    "title": "John17",
    "descr": "John17Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John17ImgId"
    }
  }, {
    "id": 17,
    "title": "John18",
    "descr": "John18Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John18ImgId"
    }
  }, {
    "id": 18,
    "title": "John19",
    "descr": "John19Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John19ImgId"
    }
  }, {
    "id": 19,
    "title": "John20",
    "descr": "John20Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John20ImgId"
    }
  }, {
    "id": 20,
    "title": "John21",
    "descr": "John21Descr",
    "image": {
      "origin": "ImgId",
      "filename": "John21ImgId"
    }
  }],
  "title": "John",
  "description": "JohnDescr",
  "image": {
    "origin": "ImgId",
    "filename": "JohnImgId"
  },
  "language": "eng",
  "mediaType": "vid"
}

/*
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"
"1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18","1:19"

"John-1-1": "The Word became flesh",
"John-1-19": "John the Baptist denies being the Messiah",
"John-1-29": "John testifies about Jesus",
"John-1-35": "John’s disciples follow Jesus",
"John-1-43": "Jesus calls Philip and Nathanael",

*/
export const johnVerseList = [
  "1:1-18 The Word became flesh","1:1","1:2","1:3","1:4","1:5","1:6","1:7","1:8",
  "1:9","1:10","1:11","1:12","1:13","1:14","1:15","1:16","1:17","1:18",
  "1:19-28 John the Baptist denies being the Messiah",
  "1:29-34 John testifies about Jesus",
  "1:35-42 John’s disciples follow Jesus",
  "1:43-51 Jesus calls Philip and Nathanael","*2-1","*2-13","*3-1","*3-22","*4-1","*4-27","*4-39","*4-43",
  "5-1","*5-16","*5-31","*6-1","*6-16","*6-25","*6-60","*7-1","*7-14","*7-25","*7-45",
  "8-12","*8-21","*8-31","*8-48","*9-1","*9-13","*9-35","*10-1","*10-22",
  "11-1","*11-17","*11-38","*11-45","*12-1","*12-12","*12-20","*12-37","*13-1","*13-18","*13-31",
  "14-1","*14-5","*14-15","*15-1","*15-18","*15-26","*16-16","*17-1","*17-6","*17-20",
  "18-1","*18-15","*18-19","*18-25","*18-28","*19-1","*19-16","*19-28","*19-38",
  "20-1","*20-11","*20-19","*20-24","*20-30","*21-1","*21-15"
]

/*
const validVerseList = {
  let tempList = []
  versesPerCh.map((val,inx) => {
    tempList
  }
  return tempList
})
*/
