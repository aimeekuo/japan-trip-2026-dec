// 2026 年底 京都・日光鬼怒川・東京（12/17–12/23）
// ⚠️ 機票、日光住宿、東京住宿、新幹線、特急、吉卜力票皆尚未訂；交通時間為估算，請以實際查詢為準
const defaultTripData = {
  id: "trip-japan-2026-dec",
  title: "🍁 2026 年底 京都・日光・東京 7D6N",
  destination: "日本 京都・日光鬼怒川・東京",
  startDate: "2026-12-17",
  endDate: "2026-12-23",
  currency: "TWD",
  currencySymbol: "NT$",
  homeCurrency: "TWD",
  homeCurrencySymbol: "NT$",
  exchangeRate: 1,
  members: ["Aimee", "Farl"],
  overviewNote: "12/17 抵達京都（3 晚）；12/18 任天堂博物館（10:00 入場）＋宇治＋伏見稻荷；12/19 嵐山與東山；12/20 新幹線到東京後轉東武線住日光鬼怒川溫泉一晚；12/21 回東京、14:00 三鷹之森吉卜力美術館，住 Conrad Tokyo；12/22 teamLab Planets＋麻布台之丘；12/23 羽田返台北。",

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
      notes: "住客：2 位成人，3 晚。\n費用：約 TWD 9,304（¥45,987），扣除優惠後以住宿幣別計約 ¥40,970（約 TWD 8,289）；住宿稅另付，付款細節請以 Booking.com 訂單為準。\n入住時間 15:00–22:00，晚於 22:00 請先通知飯店。\n不可免費取消或更改；不含早餐；無停車位；免費 WiFi。\n12/19–12/20 可請櫃檯協助用宅急便把大件行李寄到 Conrad Tokyo（12/21 收件）。",
      mapQuery: "Kyohotel Kishotei Goshominami"
    },
    {
      id: "hotel-2",
      label: "日光／鬼怒川 1 晚 (12/20) ⚠️ 待訂",
      name: "鬼怒川或日光溫泉旅館（待選）",
      enName: "建議含晚餐會席＋大浴場",
      jpAddress: "",
      address: "尚未訂房（鬼怒川溫泉或日光站周邊）",
      phone: "",
      checkIn: "2026-12-20 15:00",
      checkOut: "2026-12-21 10:00",
      bookingRef: "尚未訂房",
      notes: "選址建議：12/21 早上不逛東照宮，只要快速回東京，所以選鬼怒川溫泉最省事（旅館多）。\n12/20 要在 17:00–17:30 前入館吃晚餐。\n⚠️ 吉卜力 12/21 的票要 11/10 才開賣，在拿到票以前建議選可免費取消的方案。",
      mapQuery: "鬼怒川溫泉"
    },
    {
      id: "hotel-3",
      label: "東京 2 晚 (12/21–12/23) ⚠️ 待訂",
      name: "Conrad Tokyo（預計）",
      enName: "汐留，近新橋站、汐留站",
      jpAddress: "東京都港区東新橋1-9-1",
      address: "1 Chome-9-1 Higashishinbashi, Minato City, Tokyo",
      phone: "",
      checkIn: "2026-12-21 15:00",
      checkOut: "2026-12-23 11:00",
      bookingRef: "尚未訂房",
      notes: "位置優勢：汐留站搭百合海鷗號直達 teamLab Planets（新豐洲）；12/23 去羽田可搭都營淺草線或單軌電車；步行可到銀座。\n12/21 吉卜力在吉祥寺，往返約 35–45 分鐘。\n房價年底較高，吉卜力票未確認前建議選可免費取消的方案。電話與確切地址請以訂房確認信為準。",
      mapQuery: "Conrad Tokyo"
    }
  ],

  // 票券與交通預訂狀態（欄位沿用原格式）
  flights: [
    {
      type: "去程機票",
      date: "2026-12-17 (週四)",
      flightNo: "⚠️ 尚未訂",
      airline: "",
      departureAirport: "台北 (桃園機場)",
      departureTime: "待定",
      arrivalAirport: "關西機場 KIX（預設）",
      arrivalTime: "待定",
      bookingRef: "尚未訂票",
      notes: "目標：12/17 下午前抵達，趕得及在京都入住（15:00–22:00）並發行任天堂 QR Code。關西機場搭 Haruka 到京都約 75 分鐘。"
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
      flightNo: "Nozomi（待選班次）",
      airline: "JR 東海",
      departureAirport: "京都站",
      departureTime: "約 9:00 前後",
      arrivalAirport: "東京站（約 2 小時 15 分）",
      arrivalTime: "待定",
      bookingRef: "⚠️ 尚未訂（約出發前 1 個月開放）",
      notes: "可用 SmartEX 或 EX 預約。到東京後轉搭 JR 中央線到新宿，再搭 JR・東武直通特急到鬼怒川／日光（約 2 小時）；也可由淺草搭東武 Spacia。"
    },
    {
      type: "吉卜力美術館門票",
      date: "2026-12-21 (週一)",
      flightNo: "14:00 入場（首選）",
      airline: "三鷹之森吉卜力美術館",
      departureAirport: "吉祥寺站，步行約 15 分鐘",
      departureTime: "約 13:30",
      arrivalAirport: "美術館",
      arrivalTime: "14:00",
      bookingRef: "⚠️ 未購票・11/10 10:00 (日本時間) 開賣",
      notes: "預約制、日期時段制，現場不售票。每人都要買，入場姓名需與護照一致。備選時段 12:00 或 16:00。\n台灣可透過代理商購買（價格較高）；請以官方公告為準。"
    },
    {
      type: "回程機票",
      date: "2026-12-23 (週三)",
      flightNo: "⚠️ 尚未訂",
      airline: "",
      departureAirport: "羽田機場 HND（預設）",
      departureTime: "待定",
      arrivalAirport: "台北",
      arrivalTime: "待定",
      bookingRef: "尚未訂票",
      notes: "若航班是早班機，12/22 不要排太晚。從汐留去羽田約 30 分鐘。"
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
      dayNumber: 1,
      date: "2026-12-17",
      weekday: "週四",
      theme: "抵達京都・入住・河原町晚餐",
      weather: "約 4–11°C",
      spots: [
        {
          id: "s1-1",
          time: "下午 (視航班)",
          title: "抵達關西機場，搭 Haruka 到京都",
          category: "transport",
          location: "關西機場 ➔ 京都站",
          mapQuery: "京都站",
          note: "機票尚未訂。Haruka 約 75 分鐘到京都站，再搭地下鐵或計程車到飯店。\n先不要把行程排太滿，視抵達時間彈性調整。",
          completed: false,
          transitToNext: "京都站到飯店約 15–20 分鐘"
        },
        {
          id: "s1-2",
          time: "15:00 - 22:00",
          title: "入住 Kyohotel Kishotei Goshominami",
          category: "hotel",
          location: "京都市中京區河原町通附近",
          mapQuery: "Kyohotel Kishotei Goshominami",
          note: "入住 15:00 起；晚於 22:00 請先聯絡飯店 +81 50 1784 5822。\n住宿稅現場另付。\n⚠️ 14:00 後記得發行並截圖任天堂 QR Code。",
          completed: false,
          transitToNext: "步行或搭地鐵到河原町"
        },
        {
          id: "s1-3",
          time: "18:00 - 20:30",
          title: "河原町・錦市場・先斗町晚餐",
          category: "food",
          location: "京都河原町",
          mapQuery: "河原町 京都",
          note: "輕鬆走，吃晚餐、逛商店街，早點休息，明天要 8:45 出門。錦市場多半傍晚就收攤，想逛要早一點。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 2,
      date: "2026-12-18",
      weekday: "週五",
      theme: "任天堂博物館 10:00・宇治・伏見稻荷",
      weather: "約 4–11°C",
      spots: [
        {
          id: "s2-1",
          time: "8:45 - 9:30",
          title: "京都站搭 JR 奈良線到小倉站",
          category: "transport",
          location: "京都站 ➔ 小倉站",
          mapQuery: "小倉駅 宇治",
          note: "京都站搭 JR 奈良線約 25–30 分鐘，出站步行約 5 分鐘到博物館。9:30 前到館，10:00 入場。",
          completed: false,
          transitToNext: "步行約 5 分鐘"
        },
        {
          id: "s2-2",
          time: "10:00 - 13:30",
          title: "任天堂博物館（10:00–10:30 入場時段）",
          category: "activity",
          location: "宇治市小倉町",
          mapQuery: "Nintendo Museum Uji",
          note: "成人票 1 張，薩爾達傳說 40 週年特別版票面。預留 3–4 小時。\n⚠️ 另一位同行者是否有票請確認。",
          cost: "已付費",
          completed: false,
          transitToNext: "JR 奈良線約 10 分鐘到宇治站"
        },
        {
          id: "s2-3",
          time: "13:30 - 15:30",
          title: "宇治：抹茶午餐・平等院・宇治橋",
          category: "food",
          location: "宇治站周邊",
          mapQuery: "平等院 宇治",
          note: "抹茶甜點與茶蕎麥麵是宇治名物，平等院表參道有許多店家。冬天傍晚很早天黑，景點建議在 16:30 前逛完。",
          completed: false,
          transitToNext: "搭 JR 奈良線回京都方向，在稻荷站下車"
        },
        {
          id: "s2-4",
          time: "16:00 - 18:00",
          title: "伏見稻荷大社（傍晚千本鳥居）",
          category: "attraction",
          location: "稻荷站旁",
          mapQuery: "伏見稻荷大社",
          note: "鳥居山路全程約 2–3 小時，體力有限可只走到四辻。傍晚人潮少，但山路天黑後照明有限，請注意安全。",
          completed: false,
          transitToNext: "搭 JR 回京都站，再回市區用餐"
        },
        {
          id: "s2-5",
          time: "19:00",
          title: "京都晚餐",
          category: "food",
          location: "京都站或河原町",
          mapQuery: "京都站 拉麵小路",
          note: "京都站十樓有拉麵小路，也可回河原町。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 3,
      date: "2026-12-19",
      weekday: "週六",
      theme: "嵐山・錦市場・東山祇園",
      weather: "約 4–11°C",
      spots: [
        {
          id: "s3-1",
          time: "8:00 - 11:30",
          title: "嵐山：竹林小徑・天龍寺・渡月橋",
          category: "attraction",
          location: "嵐山",
          mapQuery: "嵐山 竹林の小径",
          note: "週六人多，建議 8:00 前出發。竹林小徑與天龍寺越早越好拍。",
          completed: false,
          transitToNext: "搭嵐電或 JR 回市區"
        },
        {
          id: "s3-2",
          time: "12:00 - 14:00",
          title: "午餐：錦市場",
          category: "food",
          location: "錦市場",
          mapQuery: "錦市場",
          note: "邊走邊吃，也可買伴手禮。",
          completed: false,
          transitToNext: "步行或搭巴士到東山"
        },
        {
          id: "s3-3",
          time: "14:30 - 17:30",
          title: "清水寺・二年坂三年坂・祇園",
          category: "attraction",
          location: "東山區",
          mapQuery: "清水寺",
          note: "傍晚前往清水寺，天黑後點燈活動請查官網是否開放。建議走下坡路線，逛完到祇園、花見小路。",
          completed: false,
          transitToNext: "步行到先斗町或四條河原町"
        },
        {
          id: "s3-4",
          time: "18:30",
          title: "祇園或先斗町晚餐",
          category: "food",
          location: "祇園／先斗町",
          mapQuery: "先斗町",
          note: "週六晚上熱門餐廳要先預約。",
          completed: false
        },
        {
          id: "s3-5",
          time: "晚上",
          title: "整理行李，寄大件行李到 Conrad Tokyo",
          category: "hotel",
          location: "京都飯店櫃檯",
          mapQuery: "Kyohotel Kishotei Goshominami",
          note: "請櫃檯協助用宅急便把大件行李寄到東京飯店，指定 12/21 送達。去日光只帶小包。需填寫收件飯店名稱、地址與預計入住日。\n⚠️ 東京住宿尚未訂，要先訂好才能寄。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 4,
      date: "2026-12-20",
      weekday: "週日",
      theme: "京都 ➔ 東京 ➔ 日光鬼怒川溫泉",
      weather: "日光約 −3–5°C，可能下雪",
      spots: [
        {
          id: "s4-1",
          time: "約 9:00 前後",
          title: "退房，搭新幹線 Nozomi 京都 ➔ 東京",
          category: "transport",
          location: "京都站",
          mapQuery: "京都站",
          note: "新幹線尚未訂，約 2 小時 15 分抵達東京。把握旅館晚餐時間，早上不要拖。",
          completed: false,
          transitToNext: "東京站轉中央線到新宿約 15 分鐘"
        },
        {
          id: "s4-2",
          time: "約 11:30 - 15:30",
          title: "新宿 ➔ 東武特急 ➔ 鬼怒川溫泉",
          category: "transport",
          location: "新宿 ➔ 鬼怒川溫泉站",
          mapQuery: "鬼怒川温泉駅",
          note: "JR 與東武直通特急（新宿↔日光／鬼怒川）約 2 小時，請事先訂位。\n也可從淺草搭東武線。時間與班次請用 Navitime 或 Jorudan 確認。",
          completed: false,
          transitToNext: "旅館接駁車或步行"
        },
        {
          id: "s4-3",
          time: "約 15:30 - 17:30",
          title: "入住溫泉旅館，先泡湯",
          category: "hotel",
          location: "鬼怒川溫泉",
          mapQuery: "鬼怒川温泉",
          note: "⚠️ 旅館尚未訂。17:00–17:30 前要入館，晚餐為會席料理。",
          completed: false
        },
        {
          id: "s4-4",
          time: "18:00",
          title: "旅館會席晚餐，夜間泡湯",
          category: "food",
          location: "旅館",
          mapQuery: "鬼怒川温泉",
          note: "早點休息，隔天早上要趕回東京。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 5,
      date: "2026-12-21",
      weekday: "週一",
      theme: "回東京・14:00 吉卜力美術館・入住 Conrad Tokyo",
      weather: "東京約 4–12°C",
      spots: [
        {
          id: "s5-1",
          time: "約 9:00 - 11:30",
          title: "旅館早餐、退房，搭特急直達新宿",
          category: "transport",
          location: "鬼怒川 ➔ 新宿",
          mapQuery: "新宿駅",
          note: "約 2 小時。不逛東照宮，專心趕下午的吉卜力。",
          completed: false,
          transitToNext: "搭中央線到吉祥寺約 15–20 分鐘"
        },
        {
          id: "s5-2",
          time: "12:00 - 13:30",
          title: "吉祥寺午餐，逛商店街",
          category: "food",
          location: "吉祥寺",
          mapQuery: "吉祥寺",
          note: "行李已寄到飯店，身上只帶小包。",
          completed: false,
          transitToNext: "步行約 15 分鐘（經井之頭公園）"
        },
        {
          id: "s5-3",
          time: "14:00 - 16:00",
          title: "三鷹之森吉卜力美術館（14:00 入場）",
          category: "activity",
          location: "三鷹市下連雀",
          mapQuery: "三鷹の森ジブリ美術館",
          note: "⚠️ 票未購買：11/10 10:00 (日本時間) 開賣 12 月票。預約制，現場不售票，入場姓名需與護照一致。館內攝影限制請遵守規定。",
          completed: false,
          transitToNext: "逛井之頭公園與吉祥寺"
        },
        {
          id: "s5-4",
          time: "16:30 - 18:30",
          title: "井之頭公園、吉祥寺散步",
          category: "attraction",
          location: "井之頭公園",
          mapQuery: "井の頭恩賜公園",
          note: "冬天約 16:30 後就天黑，注意時間。",
          completed: false,
          transitToNext: "搭中央線到東京站，轉 JR 到新橋，約 40 分鐘"
        },
        {
          id: "s5-5",
          time: "19:00 後",
          title: "入住 Conrad Tokyo，新橋或銀座晚餐",
          category: "hotel",
          location: "汐留",
          mapQuery: "Conrad Tokyo",
          note: "⚠️ 飯店尚未訂。確認從京都寄來的行李已送達。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 6,
      date: "2026-12-22",
      weekday: "週二",
      theme: "teamLab Planets・麻布台之丘・最後採買",
      weather: "約 4–12°C",
      spots: [
        {
          id: "s6-1",
          time: "10:00 - 12:30",
          title: "teamLab Planets（豐洲）",
          category: "activity",
          location: "江東區豐洲",
          mapQuery: "teamLab Planets TOKYO",
          note: "汐留站搭百合海鷗號到新豐洲約 20 分鐘。建議早場。有水中行走區，要赤腳，穿短褲或好捲起的褲子。\n⚠️ 票尚未買，日期時段制，請提早訂。營業時間以官網為準。\n另一個選項：teamLab Borderless 在麻布台之丘，若想看它，請改成上午去麻布台之丘。",
          completed: false,
          transitToNext: "午餐後搭車往神谷町，約 40–50 分鐘"
        },
        {
          id: "s6-2",
          time: "12:30 - 14:00",
          title: "豐洲午餐",
          category: "food",
          location: "豐洲",
          mapQuery: "豊洲 千客万来",
          note: "豐洲市場周邊有餐廳，營業時間請現場確認。",
          completed: false
        },
        {
          id: "s6-3",
          time: "15:00 - 18:30",
          title: "麻布台之丘：逛街、咖啡、看燈飾",
          category: "shopping",
          location: "麻布台之丘 (Azabudai Hills)",
          mapQuery: "麻布台ヒルズ",
          note: "最近站為日比谷線神谷町，或六本木一丁目走過去。傍晚可看東京鐵塔夜景與燈飾（以現場為準）。",
          completed: false
        },
        {
          id: "s6-4",
          time: "晚上",
          title: "晚餐、最後伴手禮，打包行李",
          category: "food",
          location: "銀座／新橋",
          mapQuery: "銀座",
          note: "如果 12/23 是早班機，今晚早點回去。",
          completed: false
        }
      ]
    },
    {
      dayNumber: 7,
      date: "2026-12-23",
      weekday: "週三",
      theme: "退房・羽田機場・返回台北",
      weather: "約 4–12°C",
      spots: [
        {
          id: "s7-1",
          time: "依航班",
          title: "退房，前往羽田機場",
          category: "transport",
          location: "汐留 ➔ 羽田機場",
          mapQuery: "羽田空港",
          note: "新橋搭都營淺草線（部分班次直通京急）約 30 分鐘，或濱松町搭東京單軌電車。請在起飛前 2.5–3 小時抵達。\n⚠️ 回程機票尚未訂。",
          completed: false
        },
        {
          id: "s7-2",
          time: "依航班",
          title: "羽田起飛，返回台北",
          category: "transport",
          location: "羽田機場",
          mapQuery: "羽田空港 国際線ターミナル",
          note: "退稅與伴手禮先處理好。",
          completed: false
        }
      ]
    }
  ],

  packingCategories: [
    {
      category: "出發前要辦的事（訂位與預約）",
      items: [
        { id: "t1", name: "訂去程機票（12/17 抵達）與回程羽田（12/23）", checked: false },
        { id: "t2", name: "11/10 10:00 (日本時間) 搶吉卜力 12/21 14:00 場次，2 張", checked: false },
        { id: "t3", name: "訂東京 Conrad Tokyo 12/21–12/23（先選可免費取消）", checked: false },
        { id: "t4", name: "訂日光／鬼怒川溫泉旅館 12/20 一晚（含晚餐）", checked: false },
        { id: "t5", name: "訂新幹線京都→東京（12/20）", checked: false },
        { id: "t6", name: "訂 JR・東武直通特急座位（新宿→鬼怒川，12/20 去、12/21 回）", checked: false },
        { id: "t7", name: "買 teamLab Planets 門票 12/22 早場", checked: false },
        { id: "t8", name: "確認任天堂博物館第二張票（Farl）", checked: false },
        { id: "t9", name: "12/17 14:00 後發行任天堂 QR Code 並截圖", checked: false },
        { id: "t10", name: "請京都飯店用宅急便寄大件行李到 Conrad（12/21 送達）", checked: false }
      ]
    },
    {
      category: "證件與票券",
      items: [
        { id: "p1", name: "護照（效期 6 個月以上）", checked: false },
        { id: "p2", name: "Visit Japan Web 入境 QR Code", checked: false },
        { id: "p3", name: "京都飯店訂房確認單", checked: true },
        { id: "p4", name: "任天堂博物館票券截圖", checked: true },
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
        { id: "p10", name: "保暖外套、發熱衣、手套、圍巾（日光 0°C 左右）", checked: false },
        { id: "p11", name: "防滑好走的鞋（日光路面可能結冰）", checked: false },
        { id: "p12", name: "暖暖包、護唇膏、乳液", checked: false },
        { id: "p13", name: "短褲或易捲褲管的褲子（teamLab Planets 水中行走）", checked: false },
        { id: "p14", name: "小背包（去日光只帶 1 晚用品）", checked: false },
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
