// 2026 年底 京都・東京（12/17–12/23）
// 機票、京都與東京住宿、Haruka、teamLab、吉卜力、12/21 鳥かぜ已訂；新幹線已訂；交通時間為估算，請以實際查詢為準
const defaultTripData = {
  id: "trip-japan-2026-dec",
  // 資料有更新就把 dataVersion 加 1，手機會丟掉舊快取改載入新資料
  dataVersion: 8,
  title: "🍁 2026 日本行 京都・東京 7D6N",
  destination: "日本 京都・東京",
  startDate: "2026-12-17",
  endDate: "2026-12-23",
  currency: "TWD",
  currencySymbol: "NT$",
  homeCurrency: "TWD",
  homeCurrencySymbol: "NT$",
  exchangeRate: 1,
  members: ["Aimee", "Farl"],
  overviewNote: "12/17 抵達京都（3 晚）；12/18 任天堂博物館（10:00 入場）＋宇治＋伏見稻荷；12/19 嵐山・錦市場・清水寺；12/20 新幹線到東京，入住 Tokyu Stay 新橋（3 晚），下午 teamLab Planets；12/21 14:00 吉卜力美術館，傍晚澀谷，20:00 朋友聚餐；12/22 跟 Fangwei 一家一起行動，13:15 寶可夢咖啡（已訂）；12/23 羽田 14:15 返台北。",

  accommodations: [
    {
      id: "hotel-1",
      label: "京都 3 晚 (12/17–12/20) ✅ 已訂",
      name: "Kyohotel Kishotei Goshominami",
      enName: "京都御所南 / 河原町通附近",
      jpAddress: "Nakagyo-ku Kawaranochō 384, Kyoto 604-0837",
      address: "Nakagyo-ku Kawaranochō 384, Kyoto 604-0837, Japan",
      phone: "+81 50 1784 5822",
      checkIn: "2026-12-17 15:00",
      checkOut: "2026-12-20 11:00",
      bookingRef: "Booking.com 已訂・標準雙床房 1 間",
      notes: "住客：2 位成人，3 晚。\n費用：約 TWD 9,304（¥45,987），扣除優惠後以住宿幣別計約 ¥40,970（約 TWD 8,289）；住宿稅另付，付款細節請以 Booking.com 訂單為準。\n入住時間 15:00–22:00，晚於 22:00 請先通知飯店。\n不可免費取消或更改；不含早餐；無停車位；免費 WiFi。",
      mapQuery: "Kyohotel Kishotei Goshominami"
    },
    {
      id: "hotel-3",
      label: "東京 3 晚 (12/20–12/23) ✅ 已訂",
      name: "Tokyu Stay 新橋（東急ステイ新橋）",
      enName: "Tokyu Stay Shimbashi，新橋站烏森口步行約 3 分鐘",
      jpAddress: "東京都港区新橋4-23-1",
      address: "4-23-1 Shimbashi, Minato City, Tokyo",
      phone: "+81 3 3434 8109",
      checkIn: "2026-12-20 15:00",
      checkOut: "2026-12-23 11:00",
      bookingRef: "已訂（可免費取消方案）",
      notes: "入住、退房時間暫定 15:00／11:00，以訂房確認信為準。\n12/20 中午先寄放行李，搭百合海鷗號去 teamLab Planets。\n12/23 搭都營淺草線直通京急到羽田第三航廈，約 35 分鐘。\n官網有 2026 年 9 月客房整修公告，可打電話確認 12/20–12/23 不受影響。",
      mapQuery: "Tokyu Stay Shimbashi"
    }
  ],

  // 票券與交通預訂狀態（欄位沿用原格式）
  flights: [
    {
      type: "去程機票",
      date: "2026-12-17 (週四)",
      flightNo: "CI156",
      airline: "中華航空",
      departureAirport: "桃園 TPE 第二航廈",
      departureTime: "08:05",
      arrivalAirport: "關西 KIX 第一航廈",
      arrivalTime: "11:35",
      bookingRef: "✅ 已購票・經濟艙",
      notes: "抵達後入境、領行李約 1–1.5 小時，再搭 Haruka 到京都約 75–80 分鐘，預計 14:30–15:30 抵達飯店（15:00 起可入住）。\n兩人同班機。"
    },
    {
      type: "Haruka 關西機場 ➔ 京都",
      date: "2026-12-17 (週四)",
      flightNo: "電子票（QR Code 乘車）・指定席待劃位",
      airline: "JR 西日本",
      departureAirport: "關西機場站",
      departureTime: "約 12:35 後",
      arrivalAirport: "京都站（約 80 分）",
      arrivalTime: "待劃位",
      bookingRef: "✅ 已購票・成人 2 張",
      notes: "Klook 訂單 ERB944041，NT$1,168（NT$584 × 2）。兌換期至 2027/3/31，兌換前可免費取消。\n⚠️ 綁定後可能就算已兌換、不能再免費取消（未查證），12/17 前綁好即可。\n綁定：Klook 憑證 →「How to check in」→ 點 Adult-1 →「Link this ticket to your account」→ 註冊 WEST QR（Email 帳號、8–36 字元含大小寫與數字的密碼、5 分鐘內輸入 Email 驗證碼）→ Register。再點 Adult-2，用同一帳號登入綁定。綁定後不能換帳號。\n劃位：乘車前 30 天（11/17）起，在 WEST QR 選票 →「選座」→ 選日期、班次、座位 →「確定」，兩張要各劃一次。出發前可不限次數改位或取消。\n當天：每張票都要按「開始使用」才能進站；預訂班次發車前 3 分鐘還沒按，指定席會自動取消。QR Code 會更新，不能截圖。兩人用一支手機時，同行者先過閘門。"
    },
    {
      type: "任天堂博物館門票",
      date: "2026-12-18 (週五)",
      flightNo: "10:00–10:30 入場時段",
      airline: "Nintendo Museum",
      departureAirport: "京都站 ➔ JR 奈良線",
      departureTime: "約 8:45",
      arrivalAirport: "宇治小倉站，步行約 5 分鐘",
      arrivalTime: "約 9:30",
      bookingRef: "✅ 已付費・成人票 1 張",
      notes: "票面為薩爾達傳說 40 週年特別版。QR Code 於前一天 12/17 14:00 起才可發行，記得先截圖。\n⚠️ 目前只看到 1 張票，如果 Farl 也要入場，請確認另一張。"
    },
    {
      type: "新幹線 京都 ➔ 東京",
      date: "2026-12-20 (週日)",
      flightNo: "Nozomi 4・12 車 1D・1E",
      airline: "JR 東海",
      departureAirport: "京都站",
      departureTime: "09:21",
      arrivalAirport: "東京站（2 小時 12 分），再到新橋寄放行李",
      arrivalTime: "11:33",
      bookingRef: "✅ 已出票・成人 2 位",
      notes: "Klook 訂單 AAX299321，11/20 已確認出票。成人 2 位 NT$6,084＋偏好座位服務費 NT$182＝NT$6,266（酷幣折抵 NT$30）。\n座位：指定席普通車廂 12 號車 1D（成人 1）、1E（成人 2），Reservation number 2955。E 座（右側）看得到富士山。\n座位偏好為「特大行李放置處附帶席」。\n月台 11（可能更動，當天看站內顯示）。\n進出站都用同一個 QR Code 過閘門；先下載車票，並分享給同行者。\n抵達東京站後，轉 JR 到新橋（約 5 分鐘），再步行到 Tokyu Stay 新橋寄放行李。"
    },
    {
      type: "teamLab Planets 門票",
      date: "2026-12-20 (週日)",
      flightNo: "14:00–14:30 入場",
      airline: "teamLab Planets TOKYO",
      departureAirport: "新橋站 ➔ 百合海鷗號",
      departureTime: "約 13:10",
      arrivalAirport: "新豐洲站，步行約 5 分鐘",
      arrivalTime: "14:00",
      bookingRef: "✅ 已購票・成人 2 張",
      notes: "Klook 購買，NT$2,140。查詢號碼 PG6740710056355300，2 人一起入場。\n不能取消或退款。入場時段 14:00–14:30，館內停留不限時。\n赤腳入館，水深會到膝蓋，館內可免費借五分短褲；免費置物櫃 23×34×37 cm，放不下的行李另外上鎖保管。\n禁止閃光燈與 30 cm 以上的自拍棒、腳架。"
    },
    {
      type: "吉卜力美術館門票",
      date: "2026-12-21 (週一)",
      flightNo: "14:00 入場",
      airline: "三鷹之森吉卜力美術館",
      departureAirport: "吉祥寺站，步行約 15 分鐘",
      departureTime: "約 13:30",
      arrivalAirport: "美術館",
      arrivalTime: "14:00",
      bookingRef: "✅ 已購票・成人 2 張",
      notes: "l-tike 訂單 9144899557，¥2,000＋系統費 ¥220＝¥2,220。\n入場要出示團長 Guo Meng Jia 的護照，兩人一起入場。\n電子票（MOALA Ticket）在日本境外打不開，到日本才能顯示：先把票券連結存成書籤，入口可能沒有免費 Wi-Fi，進場前先打開。\n館內攝影限制請遵守規定。"
    },
    {
      type: "回程機票",
      date: "2026-12-23 (週三)",
      flightNo: "CI221",
      airline: "中華航空",
      departureAirport: "東京羽田 HND 第三航廈",
      departureTime: "14:15",
      arrivalAirport: "台北松山 TSA 第一航廈",
      arrivalTime: "17:15",
      bookingRef: "✅ 已購票・經濟艙",
      notes: "建議 12:00 前抵達羽田第三航廈。從新橋搭都營淺草線直通京急約 35 分鐘，10:45 左右退房出發。"
    }
  ],

  emergency: [
    { title: "京都 Kyohotel Kishotei Goshominami", number: "+81 50 1784 5822", note: "12/17–12/20 入住", icon: "hotel" },
    { title: "Booking.com 客服 (24 小時)", number: "02 8793 3062", note: "訂房問題 (台灣當地號碼)", icon: "phone" },
    { title: "日本報警", number: "110", note: "警察", icon: "shield-alert" },
    { title: "日本消防／救護", number: "119", note: "救護車與火警", icon: "ambulance" },
    { title: "外交部旅外國人急難救助", number: "+80008850885", note: "全球免付費專線，從日本撥打需加國際冠碼", icon: "phone" }
  ],

  days: [
    {
      "dayNumber": 1,
      "date": "2026-12-17",
      "weekday": "週四",
      "theme": "抵達京都・入住・河原町晚餐",
      "weather": "約 4–11°C",
      "spots": [
        {
          "id": "s1-1",
          "time": "08:05 - 11:35",
          "title": "CI156 桃園 T2 ➔ 關西 T1",
          "category": "transport",
          "location": "08:05 台灣時間起飛，11:35 日本時間抵達",
          "mapQuery": "08:05 台灣時間起飛，11:35 日本時間抵達",
          "note": "✅ 已訂\n08:05 台灣時間起飛，11:35 日本時間抵達\n兩人同班機",
          "completed": false
        },
        {
          "id": "s1-2",
          "time": "11:35 - 12:35",
          "title": "入境、領行李、啟用 Haruka 電子票",
          "category": "attraction",
          "location": "關西機場第一航廈",
          "mapQuery": "關西機場第一航廈",
          "note": "✅ Haruka 已購（指定席 11/17 起劃位）\n出發當天在 JR West 網站按「立即使用」，用 QR Code 進站",
          "completed": false,
          "transitToNext": "Haruka 特急 關西機場 ➔ 京都站・約 80 分（估）\n京都站 ➔ 飯店（地鐵烏丸線或計程車）・約 25 分（估）"
        },
        {
          "id": "s1-3",
          "time": "15:00 - 16:00",
          "title": "入住 Kyohotel Kishotei Goshominami",
          "category": "hotel",
          "location": "中京區河原町通",
          "mapQuery": "中京區河原町通",
          "note": "✅ 已訂\n15:00–22:00 入住",
          "completed": false,
          "transitToNext": "步行到河原町・約 10 分（估）"
        },
        {
          "id": "s1-4",
          "time": "18:00 - 20:30",
          "title": "河原町・錦市場・先斗町晚餐",
          "category": "food",
          "location": "京都河原町",
          "mapQuery": "京都河原町",
          "note": "",
          "completed": false,
          "transitToNext": "步行回飯店・約 15 分（估）"
        }
      ]
    },
    {
      "dayNumber": 2,
      "date": "2026-12-18",
      "weekday": "週五",
      "theme": "任天堂博物館 10:00・宇治・伏見稻荷",
      "weather": "約 4–11°C",
      "spots": [
        {
          "id": "s2-1",
          "time": "08:50 - 09:10",
          "title": "飯店 ➔ 京都站",
          "category": "transport",
          "location": "地鐵或計程車",
          "mapQuery": "地鐵或計程車",
          "note": "約 20 分（估）",
          "completed": false,
          "transitToNext": "JR 奈良線 京都 ➔ 小倉，步行到博物館・約 35 分（估）"
        },
        {
          "id": "s2-2",
          "time": "10:00 - 13:00",
          "title": "任天堂博物館",
          "category": "activity",
          "location": "宇治市小倉町",
          "mapQuery": "宇治市小倉町",
          "note": "✅ 已訂\n10:00–10:30 入場時段，已付款",
          "completed": false,
          "transitToNext": "JR 奈良線 小倉 ➔ 宇治・約 15 分（估）"
        },
        {
          "id": "s2-3",
          "time": "13:15 - 15:45",
          "title": "宇治：抹茶午餐・平等院・宇治橋",
          "category": "food",
          "location": "宇治站周邊",
          "mapQuery": "宇治站周邊",
          "note": "",
          "completed": false,
          "transitToNext": "JR 奈良線 宇治 ➔ 稻荷・約 20 分（估）"
        },
        {
          "id": "s2-4",
          "time": "16:05 - 17:35",
          "title": "伏見稻荷大社（傍晚千本鳥居）",
          "category": "attraction",
          "location": "稻荷站旁",
          "mapQuery": "稻荷站旁",
          "note": "日落約 16:45",
          "completed": false,
          "transitToNext": "京阪 伏見稻荷 ➔ 祇園四條・約 20 分（估）"
        },
        {
          "id": "s2-5",
          "time": "19:00 - 20:30",
          "title": "京都晚餐",
          "category": "food",
          "location": "河原町或祇園",
          "mapQuery": "河原町或祇園",
          "note": "",
          "completed": false
        }
      ]
    },
    {
      "dayNumber": 3,
      "date": "2026-12-19",
      "weekday": "週六",
      "theme": "嵐山・錦市場・東山祇園",
      "weather": "約 4–11°C",
      "spots": [
        {
          "id": "s3-1",
          "time": "08:00 - 08:35",
          "title": "阪急 京都河原町 ➔ 嵐山（桂站轉車）",
          "category": "transport",
          "location": "阪急",
          "mapQuery": "阪急",
          "note": "約 35 分（估）",
          "completed": false
        },
        {
          "id": "s3-2",
          "time": "08:35 - 11:35",
          "title": "嵐山：竹林小徑・天龍寺・渡月橋",
          "category": "attraction",
          "location": "嵐山",
          "mapQuery": "嵐山",
          "note": "早上人少",
          "completed": false,
          "transitToNext": "阪急 嵐山 ➔ 京都河原町，步行到錦市場・約 40 分（估）"
        },
        {
          "id": "s3-3",
          "time": "12:15 - 13:45",
          "title": "午餐：錦市場",
          "category": "food",
          "location": "錦市場",
          "mapQuery": "錦市場",
          "note": "",
          "completed": false,
          "transitToNext": "巴士或計程車 ➔ 清水寺・約 25 分（估）"
        },
        {
          "id": "s3-4",
          "time": "14:10 - 17:10",
          "title": "清水寺・二年坂三年坂・祇園",
          "category": "attraction",
          "location": "東山區",
          "mapQuery": "東山區",
          "note": "",
          "completed": false
        },
        {
          "id": "s3-5",
          "time": "18:30 - 20:00",
          "title": "祇園或先斗町晚餐",
          "category": "food",
          "location": "祇園／先斗町",
          "mapQuery": "祇園／先斗町",
          "note": "",
          "completed": false,
          "transitToNext": "步行回飯店，整理行李・約 20 分（估）"
        }
      ]
    },
    {
      "dayNumber": 4,
      "date": "2026-12-20",
      "weekday": "週日",
      "theme": "新幹線到東京・下午 teamLab Planets",
      "weather": "約 5–12°C",
      "spots": [
        {
          "id": "s4-1",
          "time": "08:35 - 09:00",
          "title": "退房，飯店 ➔ 京都站",
          "category": "transport",
          "location": "地鐵或計程車",
          "mapQuery": "地鐵或計程車",
          "note": "約 25 分（估），09:00 前到京都站",
          "completed": false,
          "transitToNext": "新幹線 Nozomi 4 京都 09:21 ➔ 東京 11:33（✅ 已出票，12 車 1D・1E，11 號月台）\nJR 東京 ➔ 新橋，步行到飯店・約 20 分（估）"
        },
        {
          "id": "s4-2",
          "time": "11:55 - 12:10",
          "title": "Tokyu Stay 新橋 寄放行李",
          "category": "hotel",
          "location": "新橋 4-23-1",
          "mapQuery": "新橋 4-23-1",
          "note": "✅ 已訂\n12/20–12/23 三晚，已訂",
          "completed": false
        },
        {
          "id": "s4-3",
          "time": "12:10 - 13:10",
          "title": "新橋午餐",
          "category": "food",
          "location": "新橋",
          "mapQuery": "新橋",
          "note": "",
          "completed": false,
          "transitToNext": "百合海鷗號 新橋 ➔ 新豐洲，步行到 teamLab・約 35 分（估）"
        },
        {
          "id": "s4-4",
          "time": "14:00 - 16:30",
          "title": "teamLab Planets",
          "category": "activity",
          "location": "江東區豐洲",
          "mapQuery": "江東區豐洲",
          "note": "✅ 已購票\n14:00–14:30 入場，2 人一起入場\n赤腳入館，水會到膝蓋",
          "completed": false,
          "transitToNext": "百合海鷗號 新豐洲 ➔ 有明テニスの森・約 15 分（估）"
        },
        {
          "id": "s4-5",
          "time": "16:45 - 18:15",
          "title": "SMALL WORLDS（選配）",
          "category": "activity",
          "location": "有明",
          "mapQuery": "有明",
          "note": "營業時間請先查",
          "completed": false,
          "transitToNext": "百合海鷗號 有明 ➔ 新橋・約 30 分（估）"
        },
        {
          "id": "s4-6",
          "time": "18:45 - 20:15",
          "title": "新橋烤雞肉串晚餐",
          "category": "food",
          "location": "新橋",
          "mapQuery": "新橋",
          "note": "",
          "completed": false
        },
        {
          "id": "s4-7",
          "time": "20:15 - 20:35",
          "title": "辦理入住",
          "category": "hotel",
          "location": "Tokyu Stay 新橋",
          "mapQuery": "Tokyu Stay 新橋",
          "note": "",
          "completed": false
        }
      ]
    },
    {
      "dayNumber": 5,
      "date": "2026-12-21",
      "weekday": "週一",
      "theme": "吉卜力 14:00・澀谷・20:00 跟朋友 晚餐",
      "weather": "約 5–12°C",
      "spots": [
        {
          "id": "s5-1",
          "time": "10:00 - 11:00",
          "title": "上午自由，睡晚一點",
          "category": "cafe",
          "location": "新橋",
          "mapQuery": "新橋",
          "note": "",
          "completed": false,
          "transitToNext": "JR 新橋 ➔ 神田，轉中央線快速到吉祥寺・約 45 分（估）"
        },
        {
          "id": "s5-2",
          "time": "11:45 - 13:00",
          "title": "吉祥寺午餐，逛商店街",
          "category": "food",
          "location": "吉祥寺",
          "mapQuery": "吉祥寺",
          "note": "",
          "completed": false,
          "transitToNext": "步行穿過井之頭公園到美術館・約 20 分（估）"
        },
        {
          "id": "s5-3",
          "time": "14:00 - 16:00",
          "title": "三鷹之森吉卜力美術館",
          "category": "activity",
          "location": "三鷹市下連雀",
          "mapQuery": "三鷹市下連雀",
          "note": "✅ 已購票\n成人 2 張，憑團長護照一起入場\n電子票到日本才能顯示，先存書籤",
          "completed": false,
          "transitToNext": "步行回吉祥寺站・約 20 分（估）\n京王井之頭線 吉祥寺 ➔ 澀谷・約 25 分（估）"
        },
        {
          "id": "s5-4",
          "time": "16:45 - 18:45",
          "title": "澀谷 PARCO：任天堂東京、寶可夢中心",
          "category": "shopping",
          "location": "澀谷 PARCO",
          "mapQuery": "澀谷 PARCO",
          "note": "晚上有套餐，只吃點心",
          "completed": false,
          "transitToNext": "東急東橫線 澀谷 ➔ 中目黑，步行到店・約 25 分（估）"
        },
        {
          "id": "s5-5",
          "time": "20:00 - 22:30",
          "title": "朋友聚餐：鳥かぜ 第二場",
          "category": "food",
          "location": "中目黑・青葉台",
          "mapQuery": "東京都目黒区青葉台1-15-3",
          "note": "✅ 已訂（予約 ID J9DKSUNG）\nBecky 已訂好 20:00 おまかせコース，カウンター 3 人\n目黑區青葉台 1-15-3 AK-4 ビル B1F\n訂位的過敏欄是空白，飲食限制記得另外跟店家說",
          "completed": false,
          "transitToNext": "日比谷線 中目黑 ➔ 銀座，步行回新橋・約 35 分（估）"
        }
      ]
    },
    {
      "dayNumber": 6,
      "date": "2026-12-22",
      "weekday": "週二",
      "theme": "跟 Fangwei 一家一起行動",
      "weather": "約 5–12°C",
      "spots": [
        {
          "id": "s6-1",
          "time": "10:00 - 12:30",
          "title": "跟 Fangwei 一家一起行動（上午，待討論）",
          "category": "activity",
          "location": "",
          "mapQuery": "跟 Fangwei 一家一起行動（待討論）",
          "note": "⚠️ 待確認\n沒有特別想去的地方，可以把 SMALL WORLDS 挪來這天",
          "completed": false,
          "transitToNext": "前往日本橋高島屋・約 25 分（估）"
        },
        {
          "id": "s6-pc",
          "time": "12:55 - 14:45",
          "title": "寶可夢咖啡 Tokyo（6 人）",
          "category": "cafe",
          "location": "日本橋高島屋 S.C. 東館 5F",
          "mapQuery": "Pokémon Café Tokyo 日本橋高島屋",
          "note": "✅ 已訂 13:15 入座，用餐 90 分鐘\n12:55–13:00 報到並出示確認信；超過 13:25 未到又沒聯絡會自動取消\n6 歲以上每人至少點一份",
          "completed": false
        },
        {
          "id": "s6-3",
          "time": "14:45 - 19:00",
          "title": "跟 Fangwei 一家一起行動（下午，待討論）",
          "category": "activity",
          "location": "",
          "mapQuery": "跟 Fangwei 一家一起行動（待討論）",
          "note": "⚠️ 待確認",
          "completed": false,
          "transitToNext": "回新橋・約 30 分（估）"
        },
        {
          "id": "s6-2",
          "time": "21:30 - 22:30",
          "title": "整理行李",
          "category": "hotel",
          "location": "Tokyu Stay 新橋",
          "mapQuery": "Tokyu Stay 新橋",
          "note": "隔天上午退房",
          "completed": false
        }
      ]
    },
    {
      "dayNumber": 7,
      "date": "2026-12-23",
      "weekday": "週三",
      "theme": "上午自由・羽田 14:15 回台北",
      "weather": "約 5–12°C",
      "spots": [
        {
          "id": "s7-1",
          "time": "09:00 - 10:30",
          "title": "退房前的早晨（自由安排）",
          "category": "hotel",
          "location": "新橋／銀座",
          "mapQuery": "新橋／銀座",
          "note": "",
          "completed": false
        },
        {
          "id": "s7-2",
          "time": "10:45 - 11:00",
          "title": "退房",
          "category": "hotel",
          "location": "Tokyu Stay 新橋",
          "mapQuery": "Tokyu Stay 新橋",
          "note": "",
          "completed": false,
          "transitToNext": "都營淺草線直通京急 新橋 ➔ 羽田第三航廈・約 35 分（估）"
        },
        {
          "id": "s7-3",
          "time": "11:35 - 13:35",
          "title": "報到、出境、免稅店",
          "category": "attraction",
          "location": "羽田第三航廈",
          "mapQuery": "羽田第三航廈",
          "note": "建議起飛前 2 小時到",
          "completed": false
        },
        {
          "id": "s7-4",
          "time": "14:15 - 17:15",
          "title": "CI221 羽田 T3 ➔ 松山 T1",
          "category": "transport",
          "location": "14:15 日本時間起飛，17:15 台灣時間抵達",
          "mapQuery": "14:15 日本時間起飛，17:15 台灣時間抵達",
          "note": "✅ 已訂\n14:15 日本時間起飛，17:15 台灣時間抵達",
          "completed": false
        }
      ]
    }
  ],

  packingCategories: [
    {
      "category": "出發前要辦的事（依截止日）",
      "items": [
        {
          "id": "t03",
          "name": "11/07 跟 Fangwei 一家確認 12/22 要去哪",
          "checked": false
        },
        {
          "id": "t04",
          "name": "11/07 請 朋友 留意鳥かぜ 11 月開放訂位的日期",
          "checked": true
        },
        {
          "id": "t05",
          "name": "11/10 搶吉卜力 12/21 14:00 門票（2 張）",
          "checked": true
        },
        {
          "id": "t06",
          "name": "11/10 訂 teamLab Planets 12/20 14:00 時段",
          "checked": true
        },
        {
          "id": "t20",
          "name": "11/17 起到 JR West 綁定 Haruka 電子票，劃 12/17 指定席（兩張綁同一帳號）",
          "checked": false
        },
        {
          "id": "t09",
          "name": "11/20 確認新幹線 Nozomi 4 京都 09:21 已出票（Klook AAX299321）",
          "checked": true
        },
        {
          "id": "t07",
          "name": "11/30 訂鳥かぜ 12/21 第二場（約 20:00），跟朋友 三人（Becky 已訂）",
          "checked": true
        },
        {
          "id": "t08",
          "name": "11/30 備案：訂不到鳥かぜ就訂 USHIGORO 表參道店 20:00（鳥かぜ已訂，不需要）",
          "checked": true
        },
        {
          "id": "t10",
          "name": "12/03 買日本上網 eSIM（或 Wi-Fi 機）",
          "checked": false
        },
        {
          "id": "t11",
          "name": "12/10 手機加入 Suica 或 ICOCA（Apple Pay / Google Pay）",
          "checked": false
        },
        {
          "id": "t12",
          "name": "12/10 買 Haruka 優惠票（關西機場 ➔ 京都）",
          "checked": true
        },
        {
          "id": "t13",
          "name": "12/10 填 Visit Japan Web（入境審查、海關）",
          "checked": false
        },
        {
          "id": "t14",
          "name": "12/14 保旅平險、不便險",
          "checked": false
        },
        {
          "id": "t15",
          "name": "12/14 下載 App：Google Maps 離線地圖、Navitime、GO（叫計程車）",
          "checked": false
        },
        {
          "id": "t16",
          "name": "12/14 準備日幣現金",
          "checked": false
        },
        {
          "id": "t17",
          "name": "12/16 CI156 線上報到",
          "checked": false
        },
        {
          "id": "t18",
          "name": "12/17 發行任天堂博物館入場 QR Code",
          "checked": false
        },
        {
          "id": "t19",
          "name": "12/22 CI221 線上報到",
          "checked": false
        },
        {
          "id": "d01",
          "name": "10/08 機票 CI156／CI221（兩人同班）",
          "checked": true
        },
        {
          "id": "t01",
          "name": "10/31 訂 Tokyu Stay 新橋 12/20–12/23 三晚",
          "checked": true
        },
        {
          "id": "t02",
          "name": "10/31 確認兩人護照效期",
          "checked": true
        },
        {
          "id": "d02",
          "name": "京都 Kyohotel 12/17–12/20 三晚",
          "checked": true
        },
        {
          "id": "d03",
          "name": "任天堂博物館 12/18 10:00 入場",
          "checked": true
        }
      ]
    },
    {
      category: "證件與票券",
      items: [
        { id: "p1", name: "護照（效期 6 個月以上）", checked: false },
        { id: "p2", name: "Visit Japan Web 入境 QR Code", checked: false },
        { id: "p3", name: "京都飯店訂房確認單", checked: true },
        { id: "p4", name: "任天堂博物館票券截圖", checked: true },
        { id: "p16", name: "吉卜力電子票連結存書籤＋團長護照", checked: false },
        { id: "p5", name: "信用卡、日圓現金（住宿稅與小店現金）", checked: false },
        { id: "p6", name: "旅遊平安險、海外網卡／eSIM", checked: false }
      ]
    },
    {
      category: "電子設備",
      items: [
        { id: "p7", name: "手機充電線、行動電源", checked: false },
        { id: "p8", name: "Suica / ICOCA 加入 Apple 錢包（或實體卡）", checked: false },
        { id: "p9", name: "相機、充電器（日本插座與台灣同為 A 型，不需轉接頭）", checked: false }
      ]
    },
    {
      category: "冬季衣物與雜物",
      items: [
        { id: "p10", name: "保暖外套、發熱衣、手套、圍巾（京都、東京約 0–12°C）", checked: false },
        { id: "p11", name: "好走的鞋（任天堂、嵐山、清水寺步行多）", checked: false },
        { id: "p12", name: "暖暖包、護唇膏、乳液", checked: false },
        { id: "p13", name: "短褲或易捲褲管的褲子（teamLab Planets 水中行走）", checked: false },
        { id: "p15", name: "個人藥品與暈車藥", checked: false }
      ]
    }
  ],

  expenses: [
    {
      id: "e1",
      title: "京都 Kyohotel 3 晚（¥40,970 約 TWD 8,289，匯率與實付以訂單為準）",
      amount: 8289,
      currency: "TWD",
      paidBy: "Aimee",
      category: "住宿",
      date: "2026-12-17"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.defaultTripData = defaultTripData;
}
