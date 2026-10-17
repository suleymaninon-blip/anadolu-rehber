// Anadolu Rehberi — ortak içerik verisi.
// Mobil uygulama (index.html) ve web sitesi (web.html) bu dosyayı birlikte kullanır.
// Ören yeri eklerken/düzenlerken yalnız bu dosyayı değiştirin.

const YERLER = [
  // ── EGE ──
  {id:'1',isim:'Efes',sehir:'İzmir',bolge:'ege',baslangic:-1000,bitis:700,donem:'4',unesco:true,renk:'#C4956A',emoji:'🏛',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_library_of_Celsus_%281%29.jpg/1280px-The_library_of_Celsus_%281%29.jpg',medeniyetler:['Yunan','Roma','Bizans'],aciklama:'Antik dünyanın en büyük kentlerinden biri. Celsus Kütüphanesi ve devasa tiyatrosuyla Roma mimarisinin zirvesini temsil eder.',ucret:450,saatler:'08:00–19:00',park:true,audioGuideSlug:'efes'},
  {id:'2',isim:'Afrodisyas',sehir:'Aydın',bolge:'ege',baslangic:-200,bitis:600,donem:'4',unesco:true,renk:'#D4956A',emoji:'🏺',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Aphrodisias_Tetrapylon_2.jpg/1280px-Aphrodisias_Tetrapylon_2.jpg',medeniyetler:['Helenistik','Roma'],aciklama:'Afrodit\'e adanmış bu antik kent Roma heykel sanatının en önemli merkezlerinden biriydi.',ucret:300,saatler:'08:30–18:30',park:true},
  {id:'3',isim:'Bergama (Pergamon)',sehir:'İzmir',bolge:'ege',baslangic:-300,bitis:700,donem:'4',unesco:true,renk:'#7B9E8A',emoji:'🗿',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Pergamon_museum_Berlin_2007100.jpg/1280px-Pergamon_museum_Berlin_2007100.jpg',medeniyetler:['Helenistik','Roma'],aciklama:'Antik dünyanın en büyük kütüphanesine ev sahipliği yapan Helenistik dönem başkenti. Zeus sunağı ve Asklepion ile ünlüdür.',ucret:350,saatler:'08:00–19:00',park:true},
  {id:'4',isim:'Hierapolis - Pamukkale',sehir:'Denizli',bolge:'ege',baslangic:-190,bitis:1334,donem:'4',unesco:true,renk:'#A8C4D4',emoji:'💧',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pamukkale_2.jpg/1280px-Pamukkale_2.jpg',medeniyetler:['Helenistik','Roma','Bizans'],aciklama:'Beyaz travertenleri ve antik kentiyle eşsiz doğal-tarihi alan. Roma döneminin önemli termal spa merkezi.',ucret:450,saatler:'06:00–21:00',park:true},
  {id:'5',isim:'Milet',sehir:'Aydın',bolge:'ege',baslangic:-1000,bitis:600,donem:'4',unesco:false,renk:'#6B8E9A',emoji:'🌊',foto:null,medeniyetler:['İyon','Pers','Roma'],aciklama:'Thales ve Anaximandros gibi ilk filozofların yetiştiği İyon kenti. 15.000 kişilik tiyatrosu hâlâ ayaktadır.',ucret:120,saatler:'08:00–18:00',park:true},
  {id:'6',isim:'Didim (Didyma)',sehir:'Aydın',bolge:'ege',baslangic:-700,bitis:300,donem:'4',unesco:false,renk:'#C4B08A',emoji:'☀️',foto:null,medeniyetler:['İyon','Helenistik'],aciklama:'Apollon\'a adanmış dev tapınağıyla ünlü kehanet merkezi. Delphi\'den sonra antik dünyanın en önemli oracle merkezidir.',ucret:100,saatler:'08:00–18:00',park:true},
  {id:'7',isim:'Sardes',sehir:'Manisa',bolge:'ege',baslangic:-700,bitis:400,donem:'3',unesco:false,renk:'#C4A060',emoji:'👑',foto:null,medeniyetler:['Lidya','Pers','Roma'],aciklama:'Dünyada ilk madeni parayı basan Lidya Krallığı\'nın başkenti. Efsanevi Kral Kroisos\'un hazineleri bu topraklarda saklıdır.',ucret:80,saatler:'08:00–18:00',park:false},
  {id:'8',isim:'Priene',sehir:'Aydın',bolge:'ege',baslangic:-350,bitis:500,donem:'4',unesco:false,renk:'#8B9E7A',emoji:'⛩️',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'"Anadolu\'nun Pompeisi" olarak anılır. Izgaravari sokak düzeni modern şehirciliğin ilham kaynağıdır.',ucret:80,saatler:'08:30–17:30',park:false},
  {id:'9',isim:'Assos',sehir:'Çanakkale',bolge:'ege',baslangic:-600,bitis:500,donem:'4',unesco:false,renk:'#9A8A7A',emoji:'🏛',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Aristoteles\'in felsefe okulunu kurduğu antik liman kenti. Denize bakan Athena tapınağı kalıntıları nefes kesici bir manzara sunar.',ucret:80,saatler:'08:00–18:00',park:false},
  {id:'10',isim:'Aizanoi (Zeus Tapınağı)',sehir:'Kütahya',bolge:'ege',baslangic:-100,bitis:400,donem:'4',unesco:false,renk:'#B4A080',emoji:'⛩️',foto:null,medeniyetler:['Frig','Roma'],aciklama:'Anadolu\'nun en iyi korunmuş Zeus tapınağı. Stadyum ve tiyatro kalıntıları etkileyicidir.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'11',isim:'Laodikeia',sehir:'Denizli',bolge:'ege',baslangic:-250,bitis:700,donem:'4',unesco:false,renk:'#C4B090',emoji:'🏛',foto:null,medeniyetler:['Helenistik','Roma','Bizans'],aciklama:'Yeni Ahit\'te adı geçen yedi kiliseden biri. Büyük Tiyatrosu ve Bizans kiliseleri ziyaretçileri hayran bırakır.',ucret:80,saatler:'08:00–19:00',park:true},
  {id:'12',isim:'Stratonikeia',sehir:'Muğla',bolge:'ege',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A8070',emoji:'🏛',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Üzerine köy kurulmuş nadir antik kentlerden biri. Tiyatroyu ambar olarak kullanan köy halkıyla birlikte yaşayan antik kent.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'13',isim:'Knidos',sehir:'Muğla',bolge:'ege',baslangic:-400,bitis:500,donem:'4',unesco:false,renk:'#8A9E9A',emoji:'🏺',foto:null,medeniyetler:['Dor','Helenistik','Roma'],aciklama:'Praxiteles\'in ünlü Afrodit heykelini barındıran antik kent. İki limanıyla Ege ve Akdeniz\'i birbirine bağlayan önemli ticaret kenti.',ucret:80,saatler:'08:00–18:00',park:true},
  {id:'14',isim:'Teos',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:400,donem:'4',unesco:false,renk:'#9AB0A0',emoji:'🍇',foto:null,medeniyetler:['İyon','Roma'],aciklama:'Şarap tanrısı Dionysos\'a adanmış tapınağıyla ünlü İyon kenti. Şair Anakreon\'un doğduğu yer olarak bilinir.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'15',isim:'Kolophon',sehir:'İzmir',bolge:'ege',baslangic:-800,bitis:300,donem:'4',unesco:false,renk:'#8A9080',emoji:'🏛',foto:null,medeniyetler:['İyon'],aciklama:'12 İyon kentinden biri. Dünyanın ilk atlı askerlerini yetiştirdiği söylenir. Bugün çoğu kalıntısı zeytinlikler arasında gizlidir.',ucret:0,saatler:'Her zaman açık',park:false},
  // ── MARMARA ──
  {id:'16',isim:'Truva',sehir:'Çanakkale',bolge:'marmara',baslangic:-3000,bitis:400,donem:'2',unesco:true,renk:'#8B7355',emoji:'⚔️',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trojan_Horse_Canakkale.jpg/1280px-Trojan_Horse_Canakkale.jpg',medeniyetler:['Tunç Çağı','Hitit','Yunan'],aciklama:'Homeros\'un İlyada destanında ölümsüzleşen efsanevi şehir. Dokuz yerleşim katmanı binlerce yıllık tarihi barındırır.',ucret:200,saatler:'08:00–19:00',park:true},
  {id:'17',isim:'İstanbul Tarihi Yarımadası',sehir:'İstanbul',bolge:'marmara',baslangic:-660,bitis:1923,donem:'5',unesco:true,renk:'#6A7A9A',emoji:'🕌',foto:null,medeniyetler:['Yunan','Roma','Bizans','Osmanlı'],aciklama:'Bizans\'tan Osmanlı\'ya uzanan katmanlı tarih. Ayasofya, Topkapı Sarayı ve Kapalıçarşı bu alanda yer alır.',ucret:500,saatler:'09:00–19:00',park:false},
  {id:'18',isim:'Bursa Ulu Cami',sehir:'Bursa',bolge:'marmara',baslangic:1399,bitis:1399,donem:'7',unesco:true,renk:'#8A7A5A',emoji:'🕌',foto:null,medeniyetler:['Osmanlı'],aciklama:'Osmanlı mimarisinin ilk büyük camii. 20 kubbeyle örtülü iç mekânı ve 192 hat eseriyle şaheserdir.',ucret:0,saatler:'08:00–22:00',park:false},
  {id:'19',isim:'Kyzikos',sehir:'Balıkesir',bolge:'marmara',baslangic:-750,bitis:700,donem:'4',unesco:false,renk:'#7A8E9A',emoji:'⚓',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Marmara\'nın en güçlü antik liman kenti. Zeus\'a adanan tapınağı antik dünyanın yedi harikasından biri sayılırdı.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'20',isim:'Daskyleion',sehir:'Balıkesir',bolge:'marmara',baslangic:-600,bitis:-300,donem:'3',unesco:false,renk:'#8A9080',emoji:'🏛',foto:null,medeniyetler:['Pers'],aciklama:'Frigyalıların ardından Perslerin Anadolu\'daki en önemli idari merkezi. Pers satraplığının başkenti olarak zengin bir kültürel miras bırakmıştır.',ucret:40,saatler:'08:00–17:00',park:false},
  // ── AKDENİZ ──
  {id:'21',isim:'Aspendos',sehir:'Antalya',bolge:'akdeniz',baslangic:-500,bitis:700,donem:'4',unesco:false,renk:'#B8956A',emoji:'🎭',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Dünyanın en iyi korunmuş antik Roma tiyatrosu. 15.000 kişilik tiyatro bugün hâlâ opera ve bale için kullanılmaktadır.',ucret:200,saatler:'08:00–19:00',park:true},
  {id:'22',isim:'Patara',sehir:'Antalya',bolge:'akdeniz',baslangic:-400,bitis:700,donem:'4',unesco:false,renk:'#C4A87A',emoji:'🏖',foto:null,medeniyetler:['Likya','Roma'],aciklama:'Likya Birliği\'nin başkenti ve Noel Baba\'nın doğduğu yer. Uzun kumsal ve kum tepeleriyle eşsiz ortamda.',ucret:100,saatler:'08:00–19:00',park:true},
  {id:'23',isim:'Xanthos',sehir:'Antalya',bolge:'akdeniz',baslangic:-800,bitis:400,donem:'3',unesco:true,renk:'#9E8A6A',emoji:'🦅',foto:null,medeniyetler:['Likya','Pers','Roma'],aciklama:'Likya uygarlığının başkenti. Persler\'e karşı iki kez yakılıp yıkılmış; efsanevi Harpy Anıtı ile ünlüdür.',ucret:80,saatler:'08:00–18:00',park:false},
  {id:'24',isim:'Side',sehir:'Antalya',bolge:'akdeniz',baslangic:-700,bitis:1000,donem:'4',unesco:false,renk:'#D4A870',emoji:'🌅',foto:null,medeniyetler:['Yunan','Roma','Bizans'],aciklama:'Apollon ve Athena tapınaklarıyla deniz kenarındaki en romantik antik kent. Gün batımında tapınak silueti eşsiz görünür.',ucret:100,saatler:'08:00–20:00',park:true},
  {id:'25',isim:'Termessos',sehir:'Antalya',bolge:'akdeniz',baslangic:-400,bitis:500,donem:'4',unesco:false,renk:'#7A8A6A',emoji:'🦁',foto:null,medeniyetler:['Pisidya'],aciklama:'İskender\'in fethedemeyi başaramadığı dağ kenti. 1665 metre yükseklikte ormanla kaplı kalıntılarıyla en gizemli antik kentlerden biri.',ucret:60,saatler:'08:00–17:00',park:true},
  {id:'26',isim:'Perge',sehir:'Antalya',bolge:'akdeniz',baslangic:-1000,bitis:600,donem:'4',unesco:false,renk:'#C4A060',emoji:'🏟',foto:null,medeniyetler:['Hitit','Yunan','Roma'],aciklama:'İskender\'in Anadolu seferinde geçtiği kent. Stadyumu ve sütunlu caddesiyle etkileyici bir Roma şehridir.',ucret:150,saatler:'08:00–19:00',park:true},
  {id:'27',isim:'Myra - Demre',sehir:'Antalya',bolge:'akdeniz',baslangic:-400,bitis:1300,donem:'4',unesco:false,renk:'#C4906A',emoji:'🎅',foto:null,medeniyetler:['Likya','Roma','Bizans'],aciklama:'Noel Baba olarak bilinen Aziz Nikolaos\'un memleketi. Likya kaya mezarları ve azizin kilisesiyle önemli bir hac merkezi.',ucret:120,saatler:'08:30–19:00',park:true},
  {id:'28',isim:'Sagalassos',sehir:'Burdur',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A8A6A',emoji:'⛲',foto:null,medeniyetler:['Pisidya','Roma'],aciklama:'Antoninler Çeşmesi hâlâ su akıtıyor! Türkiye\'nin en iyi korunmuş antik kentlerinden biri. Roma dönemini yaşayan Pisidya\'nın incisi.',ucret:80,saatler:'08:30–17:30',park:true},
  {id:'29',isim:'Arykanda',sehir:'Antalya',bolge:'akdeniz',baslangic:-500,bitis:600,donem:'4',unesco:false,renk:'#8A9A6A',emoji:'🏔',foto:null,medeniyetler:['Likya','Roma'],aciklama:'Torosların yamaçlarında 1500 metre yükseklikte Likya kenti. Bozulmamış doğasıyla en az keşfedilmiş antik kentlerden biri.',ucret:40,saatler:'08:00–17:00',park:false},
  {id:'30',isim:'Selge',sehir:'Antalya',bolge:'akdeniz',baslangic:-400,bitis:500,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'⛰',foto:null,medeniyetler:['Pisidya','Roma'],aciklama:'Köprülü Kanyon\'un tepesinde kurulu Pisidya kenti. 10.000 kişilik tiyatrosu ve Zeus tapınağıyla Pisidya\'nın en önemli şehirlerinden biri.',ucret:40,saatler:'08:00–17:00',park:false},
  {id:'31',isim:'Phaselis',sehir:'Antalya',bolge:'akdeniz',baslangic:-700,bitis:800,donem:'4',unesco:false,renk:'#7A9A8A',emoji:'⛵',foto:null,medeniyetler:['Yunan','Likya','Roma'],aciklama:'Üç limanıyla ticaretin merkezi olan antik kent. İskender\'in kışladığı yer; çam ormanları arasındaki konumuyla Türkiye\'nin en güzel antik kentlerinden.',ucret:80,saatler:'08:00–19:00',park:true},
  {id:'32',isim:'Anemurium',sehir:'Mersin',bolge:'akdeniz',baslangic:-300,bitis:700,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'🏛',foto:null,medeniyetler:['Roma','Bizans'],aciklama:'Anamur Burnu\'nda denizle iç içe antik kent. MS 260\'ta Pers saldırısına uğrayan ve terk edilen kent, bugün bozulmamış hâliyle büyüleyicidir.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'33',isim:'Anavarza',sehir:'Adana',bolge:'akdeniz',baslangic:-100,bitis:1000,donem:'4',unesco:false,renk:'#A08060',emoji:'🏯',foto:null,medeniyetler:['Roma','Bizans'],aciklama:'Kilikya ovasında yüksek bir kaya üzerinde kurulu antik kent. Muhteşem kaya üstü kalesi, 1500 metre uzunluğundaki sütunlu caddesi ve zafer takıyla Güney Türkiye\'nin en etkileyici antik kentlerinden.',ucret:40,saatler:'08:00–17:30',park:false},
  // ── İÇ ANADOLU ──
  {id:'34',isim:'Çatalhöyük',sehir:'Konya',bolge:'ic',baslangic:-7500,bitis:-5700,donem:'1',unesco:true,renk:'#A08060',emoji:'🪨',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Catalhoyuk_2.jpg/1280px-Catalhoyuk_2.jpg',medeniyetler:['Neolitik'],aciklama:'Dünyanın bilinen en eski şehir yerleşimlerinden biri. M.Ö. 7500\'den kalma neolitik kent insanlık tarihinin kilometre taşıdır.',ucret:150,saatler:'08:00–17:00',park:false},
  {id:'35',isim:'Hattuşa',sehir:'Çorum',bolge:'ic',baslangic:-2000,bitis:-1200,donem:'2',unesco:true,renk:'#B8956A',emoji:'🦁',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hattusa_Loewentor.jpg/1280px-Hattusa_Loewentor.jpg',medeniyetler:['Hitit'],aciklama:'Hitit İmparatorluğu\'nun başkenti. Aslan Kapısı ve Sfenks Kapısı ile Tunç Çağı\'nın en etkileyici kentlerinden biri.',ucret:180,saatler:'08:00–17:30',park:true},
  {id:'36',isim:'Kapadokya',sehir:'Nevşehir',bolge:'ic',baslangic:-3000,bitis:1300,donem:'5',unesco:true,renk:'#C4906A',emoji:'🎈',foto:null,medeniyetler:['Hitit','Roma','Bizans'],aciklama:'Peri bacaları ve yeraltı şehirleriyle dünyanın en özgün doğal-tarihi bölgesi. İlk Hristiyanların kaya kiliseler oyduğu kutsal topraklar.',ucret:250,saatler:'Her zaman açık',park:true},
  {id:'37',isim:'Derinkuyu Yeraltı Şehri',sehir:'Nevşehir',bolge:'ic',baslangic:-800,bitis:1200,donem:'3',unesco:false,renk:'#6A7A8A',emoji:'🕳',foto:null,medeniyetler:['Frig','Hristiyan'],aciklama:'18 katlı ve 20.000 kişi kapasiteli dünyanın en derin yeraltı şehri. Erken Hristiyanların Roma zulmünden sığındığı yapı.',ucret:200,saatler:'08:00–17:00',park:false},
  {id:'38',isim:'Gordion',sehir:'Ankara',bolge:'ic',baslangic:-900,bitis:-300,donem:'3',unesco:false,renk:'#8A7A6A',emoji:'🪢',foto:null,medeniyetler:['Frig'],aciklama:'Efsanevi Gordion düğümünü kesen İskender\'in ziyaret ettiği Frig Krallığı\'nın başkenti. Kral Midas\'ın ülkesi.',ucret:60,saatler:'08:00–17:00',park:false},
  {id:'39',isim:'Alacahöyük',sehir:'Çorum',bolge:'ic',baslangic:-4000,bitis:-1200,donem:'2',unesco:false,renk:'#B09070',emoji:'🗿',foto:null,medeniyetler:['Kalkolitik','Hitit'],aciklama:'Tunç Çağı\'na ait sfenksli kapısı ve Hitit kabartmalarıyla Anadolu medeniyetinin en erken izlerini barındırır.',ucret:50,saatler:'08:00–17:00',park:false},
  {id:'40',isim:'Divriği Ulu Cami',sehir:'Sivas',bolge:'ic',baslangic:1228,bitis:1228,donem:'6',unesco:true,renk:'#8A6A4A',emoji:'🕌',foto:null,medeniyetler:['Selçuklu'],aciklama:'Selçuklu taş işçiliğinin şaheseri. Kapı süslemeleri ve mihrabındaki bezemeler dünya mimarlık tarihinde eşsiz kabul edilir.',ucret:0,saatler:'09:00–17:00',park:false},
  {id:'41',isim:'Mevlana Müzesi',sehir:'Konya',bolge:'ic',baslangic:1274,bitis:1274,donem:'6',unesco:false,renk:'#4A8A7A',emoji:'🌀',foto:null,medeniyetler:['Selçuklu'],aciklama:'Mevlana Celaleddin Rumi\'nin türbesi ve dergâhı. Yeşil kubbesi ve semahane salonu ziyaretçileri büyüler.',ucret:0,saatler:'09:00–18:00',park:false},
  {id:'42',isim:'Karahantepe',sehir:'Şanlıurfa',bolge:'ic',baslangic:-9500,bitis:-8500,donem:'1',unesco:false,renk:'#C4A060',emoji:'🗿',foto:null,medeniyetler:['Neolitik Öncesi'],aciklama:'Göbeklitepe\'den daha eski olabileceği düşünülen yeni keşif. İnsan yüzlü heykelleri ve "T" sütunlarıyla neolitik dönemin sırlarını saklıyor.',ucret:0,saatler:'08:00–17:00',park:false},
  {id:'43',isim:'Kültepe (Kaniş)',sehir:'Kayseri',bolge:'ic',baslangic:-2500,bitis:-1700,donem:'2',unesco:false,renk:'#C4906A',emoji:'📜',foto:null,medeniyetler:['Asur','Hitit'],aciklama:'Anadolu\'nun bilinen en eski ticaret merkezi. Asurlu tüccarların kil tabletleri sayesinde Anadolu tarihine ışık tutan eşsiz bir arşiv kenti.',ucret:40,saatler:'08:00–17:00',park:false},
  {id:'44',isim:'Ankara Kalesi',sehir:'Ankara',bolge:'ic',baslangic:600,bitis:1900,donem:'5',unesco:false,renk:'#8A6A4A',emoji:'🏰',foto:null,medeniyetler:['Bizans','Selçuklu','Osmanlı'],aciklama:'Ankara\'nın merkezinde yükselen tarihi kale. Bizans döneminden kalma surları ve Osmanlı hanlarıyla şehrin hafızasını taşır.',ucret:0,saatler:'08:00–17:00',park:false},
  {id:'45',isim:'Hacıbektaş Külliyesi',sehir:'Nevşehir',bolge:'ic',baslangic:1300,bitis:1300,donem:'6',unesco:false,renk:'#7A8A6A',emoji:'☯',foto:null,medeniyetler:['Selçuklu','Osmanlı'],aciklama:'Hacı Bektaş Veli\'nin türbesi ve dergâhı. Aleviler ve Bektaşiler için önemli bir hac ve kültür merkezi.',ucret:0,saatler:'08:00–17:00',park:false},
  // ── GÜNEYDOĞU ──
  {id:'46',isim:'Göbeklitepe',sehir:'Şanlıurfa',bolge:'guneydogu',baslangic:-9600,bitis:-8000,donem:'1',unesco:true,renk:'#C4A882',emoji:'🗼',foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/G%C3%B6bekli_Tepe%2C_Urfa.jpg/1280px-G%C3%B6bekli_Tepe%2C_Urfa.jpg',medeniyetler:['Neolitik Öncesi'],aciklama:'Dünyanın bilinen en eski tapınak kompleksi. M.Ö. 9600\'e tarihlenen T şekilli sütunlarıyla insanlığın inşa ettiği ilk anıtsal yapı.',ucret:200,saatler:'08:00–18:00',park:true},
  {id:'47',isim:'Nemrut Dağı',sehir:'Adıyaman',bolge:'guneydogu',baslangic:-62,bitis:-62,donem:'4',unesco:true,renk:'#C4906A',emoji:'👑',foto:null,medeniyetler:['Kommagene'],aciklama:'2150 metre yükseklikte dev tanrı heykelleriyle çevrili Kommagene Krallığı\'nın tümülüsü. Gün doğumunda siluetleri eşsiz görünür.',ucret:100,saatler:'06:00–20:00',park:true},
  {id:'48',isim:'Harran',sehir:'Şanlıurfa',bolge:'guneydogu',baslangic:-3000,bitis:1200,donem:'2',unesco:false,renk:'#C4A060',emoji:'🏠',foto:null,medeniyetler:['Sümer','Asur','İslam'],aciklama:'Dünyanın sürekli iskân görmüş en eski kentlerinden biri. Hz. İbrahim\'in yaşadığı rivayet edilen konik damlı ev kenti.',ucret:40,saatler:'08:00–18:00',park:false},
  {id:'49',isim:'Zeugma Mozaik Müzesi',sehir:'Gaziantep',bolge:'guneydogu',baslangic:-300,bitis:400,donem:'4',unesco:false,renk:'#D4A860',emoji:'🎨',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Dünyanın en büyük mozaik müzesi. Fırat kıyısındaki antik Zeugma\'dan çıkarılan muhteşem Roma mozaikleri.',ucret:120,saatler:'09:00–19:00',park:true},
  {id:'50',isim:'Diyarbakır Surları',sehir:'Diyarbakır',bolge:'guneydogu',baslangic:300,bitis:1500,donem:'5',unesco:true,renk:'#4A4A4A',emoji:'🏯',foto:null,medeniyetler:['Roma','Bizans','Selçuklu'],aciklama:'Çin Seddi\'nden sonra dünyanın en uzun bazalt taş surları. 5.8 km\'lik sur üzerinde 82 kule bulunur.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'51',isim:'Mardin Eski Şehir',sehir:'Mardin',bolge:'guneydogu',baslangic:900,bitis:1900,donem:'6',unesco:false,renk:'#C4A060',emoji:'🌇',foto:null,medeniyetler:['Selçuklu','Artuklu','Osmanlı'],aciklama:'Mezopotamya ovasına bakan teraslar üzerine kurulu sarı taşlı şehir. Deyrulzafaran Manastırı ve Kasımiye Medresesi başlıca yapılarıdır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'52',isim:'Dara Antik Kenti',sehir:'Mardin',bolge:'guneydogu',baslangic:505,bitis:900,donem:'5',unesco:false,renk:'#9A8060',emoji:'🏯',foto:null,medeniyetler:['Bizans'],aciklama:'Mezopotamya sınırında Bizans\'ın önemli askeri üssü. Dev sarnıçları ve şehir surlarıyla etkileyici bir antik yapı.',ucret:40,saatler:'08:00–17:00',park:false},
  {id:'53',isim:'Samsat (Samosata)',sehir:'Adıyaman',bolge:'guneydogu',baslangic:-300,bitis:700,donem:'4',unesco:false,renk:'#9A7060',emoji:'🏛',foto:null,medeniyetler:['Kommagene','Roma'],aciklama:'Kommagene Krallığı\'nın önemli bir kenti. Fırat kıyısındaki konumuyla antik dönemin önemli geçiş noktalarından biriydi.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'54',isim:'Karakuş Tümülüsü',sehir:'Adıyaman',bolge:'guneydogu',baslangic:-50,bitis:-50,donem:'4',unesco:false,renk:'#8A6A5A',emoji:'🦅',foto:null,medeniyetler:['Kommagene'],aciklama:'Kommagene kraliyet ailesinin mezarı üzerine inşa edilmiş anıtsal tümülüs. Üzerindeki kartal heykeli km\'lerce uzaktan görülür.',ucret:40,saatler:'08:00–17:00',park:false},
  // ── DOĞU ANADOLU ──
  {id:'55',isim:'Ani Harabeleri',sehir:'Kars',bolge:'dogu',baslangic:900,bitis:1200,donem:'6',unesco:true,renk:'#A08060',emoji:'🕌',foto:null,medeniyetler:['Ermeni','Selçuklu'],aciklama:'Orta Çağ\'ın en büyük şehirlerinden biri olan Ermeni başkenti. Bozkırda yalnız duran katedralleri unutulmaz manzara sunar.',ucret:100,saatler:'08:00–17:00',park:true},
  {id:'56',isim:'Akdamar Kilisesi',sehir:'Van',bolge:'dogu',baslangic:915,bitis:915,donem:'5',unesco:false,renk:'#8A9AAA',emoji:'⛪',foto:null,medeniyetler:['Ermeni'],aciklama:'Van Gölü\'ndeki adacıkta yükselen 10. yüzyıl Ermeni kilisesi. Dış cephesindeki İncil sahneleri olağanüstü bir sanat eseridir.',ucret:80,saatler:'09:00–17:00',park:false},
  {id:'57',isim:'Çavuştepe Kalesi',sehir:'Van',bolge:'dogu',baslangic:-800,bitis:-600,donem:'3',unesco:false,renk:'#9A8A6A',emoji:'🏔',foto:null,medeniyetler:['Urartu'],aciklama:'M.Ö. 8. yüzyıldan kalma Urartu Krallığı kalesi. Van Gölü vadisine hakim konumuyla az bilinen fakat etkileyici antik yapılardan biri.',ucret:40,saatler:'08:00–17:00',park:false},
  {id:'58',isim:'İshak Paşa Sarayı',sehir:'Ağrı',bolge:'dogu',baslangic:1685,bitis:1784,donem:'7',unesco:false,renk:'#C4906A',emoji:'🏰',foto:null,medeniyetler:['Osmanlı'],aciklama:'Ağrı Dağı eteklerinde 2200 metre yükseklikte Osmanlı sarayı. Selçuklu, Osmanlı ve İran mimarisini harmanlayan özgün yapısıyla büyüleyicidir.',ucret:80,saatler:'08:00–17:00',park:true},
  {id:'59',isim:'Van Kalesi',sehir:'Van',bolge:'dogu',baslangic:-900,bitis:1900,donem:'3',unesco:false,renk:'#8A7A6A',emoji:'🏯',foto:null,medeniyetler:['Urartu','Pers','Osmanlı'],aciklama:'Gölün kıyısında yükselen Urartu kaya kalesi. Kaya mezarları ve Urartu yazıtlarıyla Doğu Anadolu\'nun en etkileyici antik yapısı.',ucret:40,saatler:'08:00–18:00',park:true},
  {id:'60',isim:'Ahlat Selçuklu Mezarlığı',sehir:'Bitlis',bolge:'dogu',baslangic:1000,bitis:1400,donem:'6',unesco:false,renk:'#8A7A5A',emoji:'🪦',foto:null,medeniyetler:['Selçuklu','Ahlatşahlar'],aciklama:'Dünyanın en büyük Selçuklu mezarlığı. Kümbetler ve taşlarıyla Türk-İslam sanatının en değerli örneklerini barındırır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'61',isim:'Doğubayazıt Eski Şehir',sehir:'Ağrı',bolge:'dogu',baslangic:1000,bitis:1900,donem:'6',unesco:false,renk:'#9A8A7A',emoji:'🏔',foto:null,medeniyetler:['Selçuklu','Osmanlı'],aciklama:'Ağrı Dağı\'nın eteklerinde tarihi şehir kalıntıları. İshak Paşa Sarayı\'na yakın konumuyla tarihi Doğu İpek Yolu üzerindeki önemli bir durak.',ucret:0,saatler:'Her zaman açık',park:false},
  // ── KARADENİZ ──
  {id:'62',isim:'Sümela Manastırı',sehir:'Trabzon',bolge:'karadeniz',baslangic:386,bitis:1923,donem:'5',unesco:false,renk:'#6A8A7A',emoji:'🏔',foto:null,medeniyetler:['Bizans'],aciklama:'Karadeniz dağlarının sarp kayalıklarına yapışmış efsanevi Bizans manastırı. 4. yüzyıldan kalma fresk ve ikonalarıyla dikkat çeker.',ucret:150,saatler:'09:00–17:00',park:true},
  {id:'63',isim:'Trabzon Ayasofyası',sehir:'Trabzon',bolge:'karadeniz',baslangic:1238,bitis:1238,donem:'5',unesco:false,renk:'#9A8A7A',emoji:'⛪',foto:null,medeniyetler:['Trabzon İmparatorluğu'],aciklama:'13. yüzyıldan kalma Bizans kilisesi. İç mekânındaki fresklerle Bizans sanatının incisi sayılır.',ucret:80,saatler:'09:00–17:00',park:false},
  {id:'64',isim:'Sinop Kalesi',sehir:'Sinop',bolge:'karadeniz',baslangic:-700,bitis:1800,donem:'4',unesco:false,renk:'#7A9A8A',emoji:'🏰',foto:null,medeniyetler:['Yunan','Roma','Osmanlı'],aciklama:'Karadeniz\'in en iyi doğal limanına sahip antik kent. Ünlü filozof Diyojen\'in doğduğu yer; Roma döneminden kalma surları bugün de ayaktadır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'65',isim:'Safranbolu',sehir:'Karabük',bolge:'karadeniz',baslangic:1200,bitis:1900,donem:'7',unesco:true,renk:'#C4A060',emoji:'🏘',foto:null,medeniyetler:['Osmanlı'],aciklama:'Osmanlı konut mimarisinin en iyi korunmuş örneği. Cumba çıkmalı ahşap evleri ve çarşısıyla zamanın durduğu hissini yaşatır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'66',isim:'Amasya Kalesi',sehir:'Amasya',bolge:'karadeniz',baslangic:-400,bitis:1900,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'🏯',foto:null,medeniyetler:['Pontus','Roma','Osmanlı'],aciklama:'Yeşilırmak vadisine hakim kaya kalesi. Pontus Krallığı\'nın başkenti; kaya mezarları ve ören yerleriyle dolu tarihi şehrin simgesi.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'67',isim:'Amisos (Samsun)',sehir:'Samsun',bolge:'karadeniz',baslangic:-600,bitis:300,donem:'4',unesco:false,renk:'#7A8E9A',emoji:'🏛',foto:null,medeniyetler:['Yunan','Pontus','Roma'],aciklama:'Karadeniz\'in en eski Yunan kolonilerinden biri. Pontus Krallığı\'nın önemli bir ticaret kenti olarak Karadeniz ticaretinde merkezi rol oynamıştır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'68',isim:'Kastamonu Kalesi',sehir:'Kastamonu',bolge:'karadeniz',baslangic:600,bitis:1900,donem:'5',unesco:false,renk:'#8A8A7A',emoji:'🏰',foto:null,medeniyetler:['Bizans','Selçuklu','Osmanlı'],aciklama:'Kasabanın üzerinde yükselen tarihi kale. Karadeniz\'in iç kesimleriyle Anadolu\'nun bağlantısını kontrol eden stratejik bir nokta.',ucret:0,saatler:'08:00–17:00',park:false},
  // ── YENİ ÖREN YERLERİ ──
  // EGE
  {id:'69',isim:'Letoon',sehir:'Muğla',bolge:'akdeniz',baslangic:-400,bitis:300,donem:'4',unesco:true,renk:'#8A9E7A',emoji:'🏛',foto:null,medeniyetler:['Likya','Helenistik','Roma'],aciklama:'Lykia\'nın kutsal merkezi ve Apollon ile Artemis\'in annesine adanmış tapınak kompleksi. Likya Birliği\'nin dini başkenti olan bu UNESCO alanı üç tapınak ve bir nimfaiondan oluşur.',ucret:60,saatler:'08:00–19:00',park:false},
  {id:'70',isim:'Olympos',sehir:'Antalya',bolge:'akdeniz',baslangic:-300,bitis:1000,donem:'4',unesco:false,renk:'#7A9A7A',emoji:'🌿',foto:null,medeniyetler:['Likya','Roma','Bizans'],aciklama:'Likya\'nın en büyük antik kentlerinden biri. Ormanlar içinde nehir kıyısında gizlenmiş kalıntılarıyla ve yakınındaki Yanartaş\'ın doğal alevi ile eşsiz bir deneyim sunar.',ucret:60,saatler:'08:00–19:00',park:true},
  {id:'71',isim:'Elaiussa Sebaste',sehir:'Mersin',bolge:'akdeniz',baslangic:-200,bitis:700,donem:'4',unesco:false,renk:'#9A8A6A',emoji:'🏛',foto:null,medeniyetler:['Roma','Bizans'],aciklama:'Kilikya kıyısında yarımada üzerinde kurulu Roma ve Bizans kenti. Denize bakan tiyatrosu ve köprüsüyle etkileyici bir antik kentdir.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'72',isim:'Nysa',sehir:'Aydın',bolge:'ege',baslangic:-200,bitis:500,donem:'4',unesco:false,renk:'#B09070',emoji:'🎭',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Maiandros vadisinde kurulu Helenistik kent. Kütüphanesi, tünelli caddeleri ve 12.000 kişilik tiyatrosuyla dönemin en gelişmiş kentlerinden biri.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'73',isim:'Tralles',sehir:'Aydın',bolge:'ege',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#A09080',emoji:'🏛',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Güçlü surları ve "Üç Gözler" adıyla bilinen Roma kemerleriyle ünlü antik kent. Ayasofya\'nın mimarlarından matematikçi Trallesli Anthemios\'un doğduğu yer.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'74',isim:'Magnesia (Menderes)',sehir:'Aydın',bolge:'ege',baslangic:-300,bitis:500,donem:'4',unesco:false,renk:'#C4A870',emoji:'⛩️',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Maiandros kıyısında Artemis Leukophryene tapınağıyla ünlü Helenistik kent. İon mimarisinin en güzel örneklerinden birini barındırır.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'75',isim:'Alabanda',sehir:'Aydın',bolge:'ege',baslangic:-300,bitis:400,donem:'4',unesco:false,renk:'#9A8070',emoji:'🏛',foto:null,medeniyetler:['Karya','Roma'],aciklama:'Karya bölgesinin önemli antik kenti. Apollon tapınağı ve agora kalıntılarıyla Batı Anadolu tarihine ışık tutar.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'76',isim:'Alinda',sehir:'Aydın',bolge:'ege',baslangic:-400,bitis:300,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'🏯',foto:null,medeniyetler:['Karya','Helenistik'],aciklama:'Karia bölgesinin dağlık yamacına kurulu antik kent. Büyük İskender\'i karşılayan Karya Kraliçesi Ada\'nın kenti olarak tarihe geçmiştir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'77',isim:'Euromos',sehir:'Muğla',bolge:'ege',baslangic:-300,bitis:300,donem:'4',unesco:false,renk:'#C4A060',emoji:'⛩️',foto:null,medeniyetler:['Karya','Roma'],aciklama:'Türkiye\'nin en iyi korunmuş Zeus tapınaklarından birine ev sahipliği yapar. 16 sütununun hâlâ ayakta durduğu tapınak Roma İmparatoru Hadrian dönemine aittir.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'78',isim:'Labranda',sehir:'Muğla',bolge:'ege',baslangic:-600,bitis:200,donem:'3',unesco:false,renk:'#9A8A5A',emoji:'🏔',foto:null,medeniyetler:['Karya','Pers','Helenistik'],aciklama:'Muğla\'nın dağlarında Zeus Labraundos kutsal alanı. Hekatomnid hanedanının yaptırdığı tapınak ve basamaklı teraslarıyla benzersiz bir dini merkez.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'79',isim:'Herakleia (Latmos)',sehir:'Muğla',bolge:'ege',baslangic:-400,bitis:600,donem:'4',unesco:false,renk:'#7A8E8A',emoji:'🌊',foto:null,medeniyetler:['Karya','Helenistik','Roma'],aciklama:'Bafa Gölü kıyısında kayalık dağların eteklerinde kurulu antik kent. Endymion efsanesinin geçtiği yer; korunmuş surları ve tapınağıyla harika bir antik kent.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'80',isim:'Iassos',sehir:'Muğla',bolge:'ege',baslangic:-500,bitis:600,donem:'4',unesco:false,renk:'#8A9A8A',emoji:'⚓',foto:null,medeniyetler:['Karya','Helenistik','Roma'],aciklama:'Yarımada üzerine kurulu antik balıkçı ve ticaret kenti. Balık figürü olan sikkeleriyle ünlü; Roma dönemi kabristan ve agorası ziyaretçileri büyüler.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'81',isim:'Keramos',sehir:'Muğla',bolge:'ege',baslangic:-500,bitis:400,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'🏛',foto:null,medeniyetler:['Karya','Helenistik','Roma'],aciklama:'Adını çömlek üretimiyle ün kazanmış Karya kentidir. Antik kalıntıları bugün kısmen zeytin bahçeleri arasında gizlidir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'82',isim:'Kaunos',sehir:'Muğla',bolge:'ege',baslangic:-600,bitis:600,donem:'4',unesco:false,renk:'#9A8A6A',emoji:'⛵',foto:null,medeniyetler:['Karya','Likya','Roma'],aciklama:'Dalyan nehri kıyısında kayaya oyulmuş tapınak cepheli kaya mezarlarıyla ünlü antik liman kenti. Çamur banyolarıyla da meşhur olan bölgenin en görkemli antik kentlerinden biri.',ucret:80,saatler:'08:00–19:00',park:true},
  {id:'83',isim:'Kadyanda',sehir:'Muğla',bolge:'akdeniz',baslangic:-500,bitis:400,donem:'4',unesco:false,renk:'#7A8A6A',emoji:'🏔',foto:null,medeniyetler:['Likya','Roma'],aciklama:'Fethiye yakınlarındaki dağlık alanda kurulu Likya kenti. Stadyumu ve tiyatrosuyla az keşfedilmiş antik kentler arasında öne çıkar.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'84',isim:'Pinara',sehir:'Muğla',bolge:'akdeniz',baslangic:-500,bitis:600,donem:'4',unesco:true,renk:'#9A8060',emoji:'🗿',foto:null,medeniyetler:['Likya','Roma'],aciklama:'Ksanthos ve Letoon\'un yakınındaki önemli Likya kenti. Kayaya oyulmuş yüzlerce kaya mezarıyla Likya\'nın en büyük kentlerinden biri; korunaklı konumu sayesinde çok iyi korunmuştur.',ucret:60,saatler:'08:00–19:00',park:false},
  {id:'85',isim:'Tlos',sehir:'Muğla',bolge:'akdeniz',baslangic:-1000,bitis:1800,donem:'3',unesco:false,renk:'#B09070',emoji:'🦅',foto:null,medeniyetler:['Likya','Roma','Osmanlı'],aciklama:'Likya\'nın altı büyük kentinden biri ve en eski yerleşimlerden biri. Bellerophon\'un Pegasos\'u evcilleştirdiği efsanevi yer; kaya mezarları ve akropolis ziyaretçileri büyüler.',ucret:60,saatler:'08:00–19:00',park:false},
  {id:'86',isim:'Kibyra',sehir:'Burdur',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A8070',emoji:'🏟',foto:null,medeniyetler:['Pisidya','Roma'],aciklama:'Kibyratlar Birliği\'nin başkenti ve Pisidya\'nın en büyük kentlerinden biri. 8.000 kişilik stadyumu ve odeon kalıntılarıyla etkileyici bir Roma kentidir.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'87',isim:'Kremna',sehir:'Burdur',bolge:'akdeniz',baslangic:-100,bitis:500,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'⛰',foto:null,medeniyetler:['Pisidya','Roma'],aciklama:'Toros Dağları\'nın sarp kayalıklarında Roma askeri kolonisi. Agora, tapınak ve diğer yapılarıyla Pisidya bölgesinin önemli antik kentlerinden biridir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'88',isim:'Adada',sehir:'Isparta',bolge:'akdeniz',baslangic:-200,bitis:400,donem:'4',unesco:false,renk:'#9A8A70',emoji:'🏛',foto:null,medeniyetler:['Pisidya','Roma'],aciklama:'Yüksek dağlarda konumlanan Pisidya kenti. İki tapınağı ve iyi korunmuş agora yapısıyla araştırmacıların ilgi odağıdır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'89',isim:'Antiocheia Pisidya',sehir:'Isparta',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#B09060',emoji:'⛪',foto:null,medeniyetler:['Helenistik','Roma','Hristiyan'],aciklama:'Aziz Pavlus\'un ilk vaaz verdiği Hristiyan topluluklarından birinin bulunduğu yer. Men Askaenos tapınağı ve Augustus tapınağı kalıntılarıyla önemli bir arkeolojik alan.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'90',isim:'Olba',sehir:'Mersin',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#8A9070',emoji:'🏛',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Zeus Olbios\'a adanmış tapınağı ve helenistik kulesiyle ünlü Dağlık Kilikya kenti. Rahip-kral hanedanının merkezi olarak dini önemi büyüktür.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'91',isim:'Uzuncaburç',sehir:'Mersin',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A9060',emoji:'🗼',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Dağlık Kilikya\'nın en iyi korunmuş antik kentlerinden Diocaesarea. Beş sütunlu Zeus tapınağı ve yüksek Hellenistik kulesiyle ziyaretçileri büyüler.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'92',isim:'Soli-Pompeiopolis',sehir:'Mersin',bolge:'akdeniz',baslangic:-700,bitis:600,donem:'4',unesco:false,renk:'#9A8A60',emoji:'🏛',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Dilbozukluk anlamına gelen "solecism" kelimesinin doğduğu antik liman kenti. Pompeius tarafından yeniden kurulan kentin sütunlu caddesinin büyük bölümü hâlâ ayaktadır.',ucret:60,saatler:'08:00–17:30',park:false},
  {id:'93',isim:'Aigeai',sehir:'Adana',bolge:'akdeniz',baslangic:-400,bitis:600,donem:'4',unesco:false,renk:'#8A8060',emoji:'🏛',foto:null,medeniyetler:['Yunan','Roma'],aciklama:'Kilikya\'nın önemli antik liman kenti. Tiyatrosu ve tapınak kalıntılarıyla bölgenin az bilinen ama etkileyici antik kentlerinden biridir.',ucret:0,saatler:'Her zaman açık',park:false},
  // EGE DEVAMI
  {id:'94',isim:'Pessinus',sehir:'Eskişehir',bolge:'ic',baslangic:-600,bitis:400,donem:'3',unesco:false,renk:'#B09070',emoji:'🏛',foto:null,medeniyetler:['Frig','Roma'],aciklama:'Kibele kültünün doğduğu kutsal Frig kenti. Tanrıça Kibele\'nin kutsal taşının Roma\'ya götürüldüğü bu yer antik dünyanın önemli dini merkezlerinden biriydi.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'95',isim:'Metropolis',sehir:'İzmir',bolge:'ege',baslangic:-300,bitis:500,donem:'4',unesco:false,renk:'#9A8A70',emoji:'🏛',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'İzmir yakınlarında Helenistik dönem kenti. Tiyatrosu ve mermer döşeli caddeleriyle İyon bölgesinin az bilinen antik kentlerinden biri.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'96',isim:'Klaros',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:400,donem:'4',unesco:false,renk:'#C4A060',emoji:'🌿',foto:null,medeniyetler:['İyon','Helenistik','Roma'],aciklama:'Apollon\'a adanmış kutsal kehanet merkezi. Delphi\'nin rakibi olan bu orakulde kahinler yer altındaki odada kehanet verirdi. Büyük sütunlu Apollon tapınağı kalıntıları etkileyicidir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'97',isim:'Notion',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:300,donem:'4',unesco:false,renk:'#8A9070',emoji:'🏛',foto:null,medeniyetler:['İyon','Roma'],aciklama:'Kolophon\'un liman kenti olarak hizmet veren İyon yerleşimi. MÖ 406\'da Sparta\'nın Atinalıları yenilgiye uğrattığı tarihi Notion Deniz Savaşı\'na ev sahipliği yapmıştır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'98',isim:'Erythrai',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:400,donem:'4',unesco:false,renk:'#9A7A6A',emoji:'🏛',foto:null,medeniyetler:['İyon','Roma'],aciklama:'12 İyon kentinden biri. Athena tapınağı ve tiyatro kalıntılarıyla İyon medeniyetinin önemli merkezlerinden biri; Homerosçu geleneğin canlı tutulduğu kent.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'99',isim:'Phokaia',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:300,donem:'4',unesco:false,renk:'#7A9A8A',emoji:'⚓',foto:null,medeniyetler:['İyon','Roma'],aciklama:'Akdeniz\'i keşfeden Foçalı denizcilerin yurdu. Marseille\'i kuran göçmenler buradan yola çıktı. Antik limanı ve sur kalıntıları bugün İzmir\'in Foça ilçesinde görülebilir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'100',isim:'Klazomenai',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:300,donem:'4',unesco:false,renk:'#8A9080',emoji:'🏛',foto:null,medeniyetler:['İyon','Roma'],aciklama:'Filosof Anaksagoras\'ın doğduğu 12 İyon kentinden biri. Yarımada üzerinde kurulu olan kentten kıyıya köprüyle ulaşılırdı; lahit geleneğiyle de ünlüdür.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'101',isim:'Smyrna',sehir:'İzmir',bolge:'ege',baslangic:-1000,bitis:700,donem:'4',unesco:false,renk:'#6A7A9A',emoji:'🏛',foto:null,medeniyetler:['İyon','Helenistik','Roma'],aciklama:'Modern İzmir\'in altında yatan antik kent. Roma döneminden kalma agora kalıntıları bugün İzmir şehir merkezinde ziyarete açıktır; sütunlu galeriler ve taban mozaikleriyle etkileyicidir.',ucret:30,saatler:'08:00–17:30',park:false},
  {id:'102',isim:'Aigai',sehir:'Manisa',bolge:'ege',baslangic:-600,bitis:400,donem:'4',unesco:false,renk:'#9A8A70',emoji:'🏛',foto:null,medeniyetler:['Aiol','Roma'],aciklama:'Aiol bölgesinin antik kenti. Zeus tapınağı ve tiyatrosu bulunan kentte MS 17 depreminde hasar gören yapılar hâlâ incelenmektedir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'103',isim:'Thyateira',sehir:'Manisa',bolge:'ege',baslangic:-300,bitis:400,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'⚒',foto:null,medeniyetler:['Lidya','Makedon','Roma'],aciklama:'Yeni Ahit\'te adı geçen yedi kiliseden biri. Bronz işçiliği ve boyacılığıyla ünlü antik kentte keşfedilen kalıntılar Akhisar\'ın kalbinde yer almaktadır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'104',isim:'Philadelphia',sehir:'Manisa',bolge:'ege',baslangic:-200,bitis:700,donem:'4',unesco:false,renk:'#9A8060',emoji:'⛪',foto:null,medeniyetler:['Helenistik','Roma','Bizans'],aciklama:'Yeni Ahit\'in yedi kilisesinden biri. Bugünkü Alaşehir\'in altında yatan antik kentten kalan tek yapı, kısmen ayakta duran Aziz Yuhanna Kilisesi\'nin kemerleridir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'105',isim:'Kyme',sehir:'İzmir',bolge:'ege',baslangic:-700,bitis:300,donem:'4',unesco:false,renk:'#8A9A80',emoji:'🏛',foto:null,medeniyetler:['Aiol','Roma'],aciklama:'Aiol Birliği\'nin en büyük kenti ve Hesiodos\'un babasının doğduğu yer. Bugün kalıntıların büyük bölümü tarım arazileri altında.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'106',isim:'Myrina',sehir:'İzmir',bolge:'ege',baslangic:-600,bitis:300,donem:'4',unesco:false,renk:'#8A7A70',emoji:'🏺',foto:null,medeniyetler:['Aiol','Roma'],aciklama:'Pişmiş toprak heykelcikleriyle dünyaca ünlü Aiol kenti. Müzelerdeki Myrina figürinleri Helenistik dönem sanatının en değerli örnekleri arasındadır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'107',isim:'Pergamon Asklepion',sehir:'İzmir',bolge:'ege',baslangic:-400,bitis:400,donem:'4',unesco:true,renk:'#7B9E8A',emoji:'⚕️',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Antik dünyanın en ünlü sağlık merkezi. Galen gibi büyük hekimlerin yetiştiği bu tıp kompleksinde hasta tedavisi rüya yorumu, diyet ve egzersizle yapılırdı.',ucret:350,saatler:'08:00–19:00',park:true},
  {id:'108',isim:'Adramytteion',sehir:'Balıkesir',bolge:'marmara',baslangic:-600,bitis:600,donem:'4',unesco:false,renk:'#8A9080',emoji:'⚓',foto:null,medeniyetler:['Aiol','Pers','Roma'],aciklama:'Edremit Körfezi\'ndeki antik liman kenti. Aziz Pavlus Roma yolculuğunda Adramytteion\'dan gelen bir gemiye binmişti.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'109',isim:'Alexandreia Troas',sehir:'Çanakkale',bolge:'marmara',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A8A70',emoji:'🏛',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'İskender\'in generallerinden Antigonos tarafından kurulan liman kenti. Roma döneminde büyük bir nüfusa sahip olan kentten kalan devasa hamamlar ve surlar hâlâ etkileyicidir.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'110',isim:'Nikaia (İznik)',sehir:'Bursa',bolge:'marmara',baslangic:-300,bitis:1300,donem:'5',unesco:false,renk:'#6A7A9A',emoji:'⛪',foto:null,medeniyetler:['Helenistik','Roma','Bizans'],aciklama:'MS 325\'te İznik Konsili\'nin toplandığı tarihi kent. Hristiyanlığın temel inanç ilkelerinin belirlendiği bu şehirde İznik çinileri de dünyaca ünlüdür.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'111',isim:'Prusias ad Hypium',sehir:'Bolu',bolge:'karadeniz',baslangic:-300,bitis:500,donem:'4',unesco:false,renk:'#7A9A8A',emoji:'🏛',foto:null,medeniyetler:['Bitinya','Roma'],aciklama:'Batı Karadeniz\'in antik Bitinya kenti. Roma köprüsü ve tiyatrosu kalıntılarıyla bölgenin az bilinen antik yerleşimlerinden biri.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'112',isim:'Amastris',sehir:'Karabük',bolge:'karadeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#8A9A80',emoji:'🏰',foto:null,medeniyetler:['Helenistik','Roma','Bizans'],aciklama:'Pontus\'un önemli antik liman kenti. Bugünkü Amasra ilçesinde konumlanan kentten kalma Bizans kaleleri ve antik kalıntılar ziyaretçileri büyüler.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'113',isim:'Pompeiopolis',sehir:'Kastamonu',bolge:'karadeniz',baslangic:-100,bitis:500,donem:'4',unesco:false,renk:'#9A8870',emoji:'🏛',foto:null,medeniyetler:['Roma'],aciklama:'Pompeius tarafından kurulan ve Karadeniz\'in iç kesimlerini kontrol eden Roma kenti. Yakın zamanda ortaya çıkarılan sütunlu caddesiyle Kastamonu\'nun önemli arkeolojik alanlarından biri.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'114',isim:'Neokaisareia',sehir:'Tokat',bolge:'karadeniz',baslangic:50,bitis:600,donem:'4',unesco:false,renk:'#8A7A6A',emoji:'🏛',foto:null,medeniyetler:['Roma','Bizans'],aciklama:'Pontus bölgesinin önemli Roma kenti. 3. yüzyılın ünlü piskoposu Mucizeci Gregorios\'un (Gregorios Thaumaturgos) memleketi; kalıntıları Niksar\'da bulunmaktadır.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'116',isim:'Arsameia',sehir:'Adıyaman',bolge:'guneydogu',baslangic:-80,bitis:-80,donem:'4',unesco:false,renk:'#C4906A',emoji:'👑',foto:null,medeniyetler:['Kommagene'],aciklama:'Kommagene Krallığı\'nın yazlık başkenti. Kaya üzerine işlenmiş dev el sıkışma rölyefi ve Mithridates Kallinikos\'un anıt mezarıyla Nemrut Dağı ile birlikte ziyaret edilir.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'117',isim:'Perre',sehir:'Adıyaman',bolge:'guneydogu',baslangic:100,bitis:600,donem:'4',unesco:false,renk:'#9A7060',emoji:'🏛',foto:null,medeniyetler:['Roma','Bizans'],aciklama:'Kaya mezarları ve kaya kilisesiyle ünlü Kommagene bölgesi kenti. Kaya oyma mezar kompleksi ve mağara kiliseleriyle bölgenin özgün antik alanlarından biri.',ucret:0,saatler:'Her zaman açık',park:false},
  {id:'118',isim:'Kelenderis',sehir:'Mersin',bolge:'akdeniz',baslangic:-700,bitis:600,donem:'4',unesco:false,renk:'#7A9A8A',emoji:'⚓',foto:null,medeniyetler:['Yunan','Roma','Bizans'],aciklama:'Kilikya kıyısındaki antik liman kenti. Bugünkü Aydıncık\'ta yer alan kentten kalma mozaikler ve yapı kalıntıları bölgenin zengin tarihine tanıklık eder.',ucret:40,saatler:'08:00–17:30',park:false},
  {id:'120',isim:'Kastabala',sehir:'Osmaniye',bolge:'akdeniz',baslangic:-300,bitis:600,donem:'4',unesco:false,renk:'#9A8060',emoji:'🏰',foto:null,medeniyetler:['Helenistik','Roma'],aciklama:'Ceyhan Nehri kıyısında kurulu Hierapolis Kastabala olarak da bilinen antik kent. Artemis tapınağı ve kaya üstü kalesiyle Kilikya bölgesinin dikkat çekici antik alanlarından biri.',ucret:40,saatler:'08:00–17:30',park:false},
  // BATI KARADENİZ
];

// İngilizce ören yeri açıklamaları
const ACIKLAMALAR_EN = {
  '1': 'One of the largest cities of the ancient world. The Library of Celsus and its massive theatre represent the pinnacle of Roman architecture.',
  '2': 'This ancient city dedicated to Aphrodite was one of the most important centers of Roman sculpture art. The Tetrapylon gate still stands in its splendor.',
  '3': 'The Hellenistic capital that housed one of the greatest libraries of the ancient world. Famous for the Zeus Altar and Asklepion.',
  '4': 'A unique natural-historical site with white travertines and an ancient city. An important thermal spa and pilgrimage center of the Roman era.',
  '5': 'The Ionian city where first philosophers like Thales and Anaximander were born. Its 15,000-seat theatre still stands today.',
  '6': 'A famous oracle center with a colossal temple dedicated to Apollo. The most important oracle center of the ancient world after Delphi.',
  '7': 'Capital of the Lydian Kingdom, the first civilization to mint coins. The legendary treasures of King Croesus are said to be hidden here.',
  '8': 'Known as the "Pompeii of Anatolia". Its grid street plan was the inspiration for modern urban planning.',
  '9': 'The ancient harbor city where Aristotle founded his philosophy school. The ruins of the Athena temple overlooking the sea offer breathtaking views.',
  '10': 'The best preserved Zeus temple in Anatolia. The 2nd century columns still stand in place, with stadium and theatre ruins.',
  '11': 'One of the seven churches mentioned in the New Testament. The Great Theatre and Byzantine churches leave visitors in awe.',
  '12': 'One of the rare ancient cities with a village built on top. Villagers used the ancient theatre as a barn and the temple courtyard as a market.',
  '13': 'Ancient city that housed the famous Aphrodite statue by Praxiteles. An important trade city connecting the Aegean and Mediterranean with its two harbors.',
  '14': 'Famous Ionian city with a temple dedicated to Dionysus, god of wine. Known as the birthplace of the poet Anacreon.',
  '15': 'One of the 12 Ionian cities. Said to have trained the world\'s first cavalry. Today most ruins are hidden among olive groves.',
  '16': 'The legendary city immortalized in Homer\'s Iliad. Nine settlement layers contain thousands of years of history.',
  '17': 'Layered history from Byzantine Constantinople to Ottoman Istanbul. Hagia Sophia, Topkapi Palace and the Grand Bazaar are all here.',
  '18': 'The first great mosque of Ottoman architecture. Its interior covered with 20 domes and 192 calligraphic works is a masterpiece.',
  '19': 'The strongest ancient harbor city of the Marmara region. Its temple dedicated to Zeus was considered one of the Seven Wonders of the ancient world.',
  '20': 'The most important administrative center of the Persians in Anatolia after the Phrygians. Left a rich cultural heritage as the capital of the Persian satrapy.',
  '21': 'The best preserved ancient Roman theatre in the world. The 15,000-seat theatre is still used today for opera and ballet.',
  '22': 'Capital of the Lycian League and birthplace of Santa Claus. Located in a unique setting with long beaches and sand dunes.',
  '23': 'Capital of the Lycian civilization. Burned and destroyed twice by the Persians; famous for the legendary Harpy Monument.',
  '24': 'The most romantic ancient city by the sea with the temples of Apollo and Athena. The temple silhouette at sunset is incomparable.',
  '25': 'A mountain city that even Alexander the Great could not conquer. One of the most mysterious ancient cities with ruins covered in forest at 1665 meters.',
  '26': 'The city where Alexander passed on his Anatolian campaign. An impressive Roman city with its stadium and colonnaded street.',
  '27': 'Hometown of Saint Nicholas, known as Santa Claus. An important pilgrimage center with Lycian rock tombs and the saint\'s church.',
  '28': 'The Antonine Fountain still flows! One of the best preserved ancient cities in Turkey. The jewel of Pisidia that lived through the Roman era.',
  '29': 'A Lycian city at 1500 meters on the slopes of the Taurus Mountains. One of the least explored ancient cities with its pristine nature.',
  '30': 'A Pisidian city built on top of Köprülü Canyon. One of the most important cities of Pisidia with its 10,000-seat theatre and Zeus temple.',
  '31': 'An ancient city with three harbors as the center of trade. Where Alexander wintered; one of the most beautiful ancient cities of Turkey among pine forests.',
  '32': 'An ancient city intertwined with the sea at Cape Anamur. Fascinating in its undisturbed state after being attacked and abandoned by Persian forces in 260 AD.',
  '33': 'An ancient city built on a high rock in the Cilician plain. With its spectacular hilltop fortress, 1,500-metre colonnaded street and triumphal arch, it is one of southern Türkiye\'s most impressive ancient cities.',
  '34': 'One of the oldest known urban settlements in the world. This Neolithic city dating back to 7500 BC is a milestone in human history.',
  '35': 'Capital of the Hittite Empire. One of the most impressive Bronze Age urban structures with the Lion Gate and Sphinx Gate.',
  '36': 'The most unique natural-historical region in the world with fairy chimneys and underground cities. Sacred lands where early Christians carved cave churches.',
  '37': 'The deepest underground city in the world with 18 floors and capacity for 20,000 people. The structure where early Christians took refuge from Roman persecution.',
  '38': 'Capital of the Phrygian Kingdom visited by Alexander who cut the legendary Gordian Knot. The land of King Midas.',
  '39': 'Contains the earliest traces of Anatolian civilization with its Sphinx Gate and Hittite reliefs from the Bronze Age.',
  '40': 'Masterpiece of Seljuk stonework. The door ornaments and carved decorations on the mihrab are considered unique in world architectural history.',
  '41': 'The tomb and lodge of Mevlana Celaleddin Rumi. Its green dome and semahane hall enchant visitors; people come on pilgrimage from all over the world.',
  '42': 'A new discovery thought to be older than Göbekli Tepe. Hiding the secrets of the Neolithic period with its human-faced statues and T-shaped pillars.',
  '43': 'The oldest known trading center of Anatolia. A unique archive city that shed light on Anatolian history thanks to Assyrian merchants\' clay tablets.',
  '44': 'The historic castle rising in the center of Ankara. Carries the memory of the city with its Byzantine-era walls and Ottoman inns.',
  '45': 'The tomb and lodge of Haji Bektash Veli. An important pilgrimage and cultural center for Alevis and Bektashis.',
  '46': 'The oldest known temple complex in the world. The first monumental structure built by humanity, with T-shaped pillars dating back to 9600 BC.',
  '47': 'The tumulus of the Commagene Kingdom surrounded by giant god statues at 2150 meters. Their silhouettes at sunrise are incomparable.',
  '48': 'One of the oldest continuously inhabited cities in the world. The city of beehive-shaped houses where the Prophet Abraham is said to have lived.',
  '49': 'The world\'s largest mosaic museum. Magnificent Roman mosaics excavated from the ancient city of Zeugma on the Euphrates are displayed here.',
  '50': 'The world\'s longest basalt stone walls after the Great Wall of China. 82 towers on 5.8 km of walls from the Roman era.',
  '51': 'A golden stone city built on terraces overlooking the Mesopotamian plain. Deyrulzafaran Monastery and Kasimiye Madrassa are the main structures.',
  '52': 'Important Byzantine military base on the Mesopotamian border. An impressive ancient structure with giant cisterns and city walls.',
  '53': 'An important city of the Commagene Kingdom. A significant crossing point of the ancient era with its location on the Euphrates.',
  '54': 'A monumental tumulus built over the tomb of the Commagene royal family. The eagle statue on top can be seen from kilometers away.',
  '55': 'The Armenian capital, one of the greatest cities of the Middle Ages. The cathedrals standing alone on the steppe offer an unforgettable view.',
  '56': 'A 10th century Armenian church rising on a small island in Lake Van. The Biblical scenes on its exterior facade are extraordinary works of art.',
  '57': 'A Urartu Kingdom fortress from the 8th century BC. One of the little-known but impressive ancient structures dominating the Lake Van valley.',
  '58': 'An Ottoman palace built at 2200 meters at the foot of Mount Ararat. Fascinating with its unique architecture combining Seljuk, Ottoman and Iranian styles.',
  '59': 'Urartu rock fortress rising by the lake. The most impressive ancient structure in Eastern Anatolia with rock tombs and Urartu inscriptions.',
  '60': 'The world\'s largest Seljuk cemetery. Contains the most valuable examples of Turkish-Islamic art with its kumbets and tombstones.',
  '61': 'Historical city ruins at the foot of Mount Ararat. An important stop on the historic Eastern Silk Road, close to Ishak Pasha Palace.',
  '62': 'The legendary Byzantine monastery clinging to the steep cliffs of the Black Sea mountains. Notable for its frescoes and icons from the 4th century.',
  '63': 'A Byzantine church from the 13th century. Considered the jewel of Byzantine art with its frescoes.',
  '64': 'Ancient city with the best natural harbor on the Black Sea. The birthplace of the famous philosopher Diogenes; Roman-era walls still stand today.',
  '65': 'The best preserved example of Ottoman residential architecture. Its bay-windowed wooden houses and bazaar give the feeling that time has stopped.',
  '66': 'A rock fortress dominating the Yeşilırmak valley. Symbol of the historic city, capital of the Pontus Kingdom, full of rock tombs and ancient sites.',
  '67': 'One of the oldest Greek colonies on the Black Sea. Played a central role in Black Sea trade as an important trading city of the Pontus Kingdom.',
  '68': 'The historic castle rising above the town. A strategic point controlling the connection between the Black Sea hinterland and Anatolia.',
  '69': 'The sacred heart of Lycia, a temple complex dedicated to Leto, mother of Apollo and Artemis. This UNESCO site, the religious capital of the Lycian League, comprises three temples and a nymphaeum.',
  '70': 'One of the major cities of Lycia. Its ruins, hidden in the forest along a riverbank, and the natural flames of nearby Yanartaş make for a unique experience.',
  '71': 'A Roman and Byzantine city built on a peninsula on the Cilician coast. Its sea-facing theatre and bridge make it an impressive ancient site.',
  '72': 'A Hellenistic city in the Maeander valley. With its library, tunnelled streets and 12,000-seat theatre, it was one of the most advanced cities of its time.',
  '73': 'An ancient city famed for its strong walls and the Roman arches known as the "Three Eyes". Birthplace of Anthemius of Tralles, mathematician and co-architect of Hagia Sophia.',
  '74': 'A Hellenistic city on the Maeander, famous for the Temple of Artemis Leukophryene, one of the finest examples of Ionic architecture.',
  '75': 'An important ancient city of Caria. The remains of its Temple of Apollo and agora shed light on the history of western Anatolia.',
  '76': 'An ancient city on a mountain slope in Caria. It went down in history as the seat of the Carian queen Ada, who welcomed Alexander the Great.',
  '77': 'Home to one of the best-preserved Temples of Zeus in Türkiye. Sixteen of its columns still stand; the temple dates to the reign of the Roman emperor Hadrian.',
  '78': 'The sanctuary of Zeus Labraundos in the mountains of Muğla. Its temple and stepped terraces, built by the Hecatomnid dynasty, form a unique religious centre.',
  '79': 'An ancient city at the foot of rocky mountains on the shore of Lake Bafa. Setting of the legend of Endymion, with well-preserved walls and a temple.',
  '80': 'An ancient fishing and trading town built on a peninsula. Famous for coins depicting a fish; its Roman necropolis and agora captivate visitors.',
  '81': 'A Carian city whose name comes from its renowned pottery production. Today its ruins lie partly hidden among olive groves.',
  '82': 'An ancient harbour city on the Dalyan river, famous for its rock-cut tombs with temple façades. One of the region\'s most magnificent ancient cities, also known for its mud baths.',
  '83': 'A Lycian city in the mountains near Fethiye. With its stadium and theatre, it stands out among the lesser-explored ancient sites.',
  '84': 'Part of the Xanthos–Letoon area. One of the largest cities of Lycia, with hundreds of rock-cut tombs, very well preserved thanks to its sheltered location.',
  '85': 'One of the six great cities of Lycia and one of its oldest settlements. The legendary place where Bellerophon tamed Pegasus; its rock tombs and acropolis captivate visitors.',
  '86': 'Capital of the Cibyratic League and one of the largest cities of the region. Its 8,000-seat stadium and odeon make it an impressive Roman city.',
  '87': 'A Roman military colony on the steep cliffs of the Taurus Mountains. With its agora, temple and other buildings, it is one of the key ancient cities of Pisidia.',
  '88': 'A Pisidian city set high in the mountains. Its two temples and well-preserved agora make it a focus of research.',
  '89': 'Site of one of the first Christian communities to which St Paul preached. An important archaeological site with the remains of the Sanctuary of Men Askaenos and the Temple of Augustus.',
  '90': 'A city of Rough Cilicia famed for its temple of Zeus Olbios and Hellenistic tower. As the seat of a dynasty of priest-kings, it was of great religious importance.',
  '91': 'Diocaesarea, one of the best-preserved ancient cities of Rough Cilicia. Its Temple of Zeus and tall Hellenistic tower captivate visitors.',
  '92': 'The ancient harbour city that gave us the word "solecism" (a grammatical error). Refounded by Pompey, much of its colonnaded street still stands.',
  '93': 'An important ancient harbour city of Cilicia. With its theatre and temple remains, it is a little-known but impressive site.',
  '94': 'The sacred Phrygian city where the cult of Cybele was born. The goddess\'s sacred stone was taken from here to Rome; it was one of the major religious centres of the ancient world.',
  '95': 'A Hellenistic city near İzmir. With its theatre and marble-paved streets, it is one of the lesser-known ancient cities of Ionia.',
  '96': 'A sacred oracle of Apollo and a rival of Delphi, where prophecies were given in an underground chamber. The remains of its great columned Temple of Apollo are impressive.',
  '97': 'An Ionian settlement that served as the harbour of Colophon. It gave its name to the Battle of Notium (406 BC), in which Sparta defeated the Athenian fleet.',
  '98': 'One of the twelve Ionian cities. With its Temple of Athena and theatre, it was a major centre of Ionian civilization.',
  '99': 'Home of the Phocaean sailors who explored the Mediterranean; the settlers who founded Marseille set out from here. Its ancient harbour and walls can be seen today in the town of Foça, İzmir.',
  '100': 'One of the twelve Ionian cities and birthplace of the philosopher Anaxagoras. Built on an island, it was linked to the shore by a causeway; it is also known for its painted sarcophagi.',
  '101': 'The ancient city lying beneath modern İzmir. Its Roman agora, open to visitors in the city centre, impresses with colonnaded galleries and floor mosaics.',
  '102': 'An ancient city of Aeolis with a temple of Zeus and a theatre. Buildings damaged in the earthquake of AD 17 are still being studied.',
  '103': 'One of the seven churches mentioned in the New Testament. Famous for bronze work and dyeing, its excavated remains lie in the heart of Akhisar.',
  '104': 'One of the seven churches of the New Testament. The only surviving structure of the ancient city beneath today\'s Alaşehir is the partly standing arches of the Church of St John.',
  '105': 'The largest city of the Aeolian League and the hometown of Hesiod\'s father. Today most of its remains lie beneath farmland.',
  '106': 'An Aeolian city world-famous for its terracotta figurines. The Myrina figurines in museums are among the finest works of Hellenistic art.',
  '107': 'The most famous healing centre of the ancient world, where great physicians such as Galen trained. Patients were treated with dream interpretation, diet and exercise.',
  '108': 'An ancient harbour city on the Gulf of Edremit. St Paul boarded a ship from Adramyttium on his voyage to Rome.',
  '109': 'A harbour city founded by Antigonus, one of Alexander\'s generals. It had a large population in Roman times; its huge baths and walls are still impressive.',
  '110': 'The historic city where the Council of Nicaea met in AD 325 and set out the core beliefs of Christianity. It is also world-famous for İznik tiles.',
  '111': 'An ancient Bithynian city in the western Black Sea region. With its Roman bridge and theatre, it is one of the lesser-known ancient settlements of the area.',
  '112': 'An important ancient harbour city on the Black Sea. Located in today\'s Amasra, its Byzantine fortifications and ancient remains captivate visitors.',
  '113': 'A Roman city founded by Pompey to control the Black Sea hinterland. With its recently excavated colonnaded street, it is one of Kastamonu\'s key archaeological sites.',
  '114': 'An important Roman city of Pontus and hometown of the 3rd-century bishop Gregory Thaumaturgus (the Wonderworker). Its remains lie in Niksar.',
  '116': 'The summer capital of the Kingdom of Commagene. With its giant handshake relief carved in the rock and the tomb monument of Mithridates Kallinikos, it is visited together with Mount Nemrut.',
  '117': 'A city of the Commagene region famous for its rock tombs. Its rock-cut necropolis and cave churches make it one of the area\'s most distinctive ancient sites.',
  '118': 'An ancient harbour city on the Cilician coast. Located in today\'s Aydıncık, its mosaics and building remains bear witness to the region\'s rich history.',
  '120': 'An ancient city on the Ceyhan river, also known as Hierapolis Kastabala. With its Temple of Artemis and hilltop castle, it is one of the remarkable ancient sites of Cilicia.',
};

// İngilizce isimler
const ISIMLER_EN = {
  '1':'Ephesus','2':'Aphrodisias','3':'Pergamon','4':'Hierapolis - Pamukkale',
  '5':'Miletus','6':'Didyma','7':'Sardis','8':'Priene','9':'Assos',
  '10':'Aizanoi','11':'Laodicea','12':'Stratonikeia','13':'Cnidus','14':'Teos',
  '15':'Colophon','16':'Troy','17':'Istanbul Historic Peninsula','18':'Bursa Grand Mosque',
  '19':'Cyzicus','20':'Dascylium','21':'Aspendos','22':'Patara','23':'Xanthos',
  '24':'Side','25':'Termessos','26':'Perge','27':'Myra - Demre','28':'Sagalassos',
  '29':'Arykanda','30':'Selge','31':'Phaselis','32':'Anemurion','33':'Anavarza',
  '34':'Çatalhöyük','35':'Hattusha','36':'Cappadocia','37':'Derinkuyu Underground City',
  '38':'Gordion','39':'Alacahöyük','40':'Divriği Great Mosque','41':'Mevlana Museum',
  '42':'Karahantepe','43':'Kültepe (Kanesh)','44':'Ankara Castle','45':'Hacibektash Complex',
  '46':'Göbekli Tepe','47':'Mount Nemrut','48':'Harran','49':'Zeugma Mosaic Museum',
  '50':'Diyarbakır Walls','51':'Mardin Old City','52':'Dara Ancient City',
  '53':'Samosata','54':'Karakuş Tumulus','55':'Ani Ruins','56':'Akdamar Church',
  '57':'Çavuştepe Castle','58':'İshak Pasha Palace','59':'Van Castle',
  '60':'Ahlat Seljuk Cemetery','61':'Doğubayazıt Old Town','62':'Sumela Monastery',
  '63':'Trabzon Hagia Sophia','64':'Sinop Castle','65':'Safranbolu',
  '66':'Amasya Castle','67':'Amisos (Samsun)','68':'Kastamonu Castle',
  '69':'Letoon','70':'Olympos','71':'Elaiussa Sebaste','72':'Nysa',
  '73':'Tralles','74':'Magnesia on the Maeander','75':'Alabanda','76':'Alinda',
  '77':'Euromos','78':'Labraunda','79':'Herakleia (Latmos)','80':'Iasos',
  '81':'Keramos','82':'Kaunos','83':'Kadyanda','84':'Pinara',
  '85':'Tlos','86':'Kibyra','87':'Kremna','88':'Adada',
  '89':'Pisidian Antioch','90':'Olba','91':'Uzuncaburç (Diocaesarea)','92':'Soli-Pompeiopolis',
  '93':'Aigeai','94':'Pessinus','95':'Metropolis','96':'Klaros',
  '97':'Notion','98':'Erythrai','99':'Phocaea','100':'Klazomenai',
  '101':'Smyrna','102':'Aigai','103':'Thyatira','104':'Philadelphia',
  '105':'Kyme','106':'Myrina','107':'Asclepieion of Pergamon','108':'Adramyttium',
  '109':'Alexandria Troas','110':'Nicaea (İznik)','111':'Prusias ad Hypium','112':'Amastris',
  '113':'Pompeiopolis','114':'Neocaesarea','116':'Arsameia',
  '117':'Perre','118':'Kelenderis','120':'Kastabala',
};

const MEDENIYETLER_EN = {
  'Yunan':'Greek','Roma':'Roman','Bizans':'Byzantine','Helenistik':'Hellenistic',
  'İyon':'Ionian','Pers':'Persian','Lidya':'Lydian','Hitit':'Hittite',
  'Neolitik':'Neolithic','Neolitik Öncesi':'Pre-Neolithic','Tunç Çağı':'Bronze Age',
  'Kalkolitik':'Chalcolithic','Frig':'Phrygian','Urartu':'Urartian','Ermeni':'Armenian',
  'Selçuklu':'Seljuk','Osmanlı':'Ottoman','Kommagene':'Commagene','Sümer':'Sumerian',
  'Asur':'Assyrian','İslam':'Islamic','Dor':'Dorian','Likya':'Lycian',
  'Pisidya':'Pisidian','Pontus':'Pontic','Artuklu':'Artuqid','Ahlatşahlar':'Shah-Armens',
  'Trabzon İmparatorluğu':'Empire of Trebizond','Hristiyan':'Christian',
  'Karya':'Carian','Aiol':'Aeolian','Makedon':'Macedonian','Bitinya':'Bithynian','Süryani':'Syriac',
};

const BOLGELER_EN = {
  'ege':'Aegean','marmara':'Marmara','akdeniz':'Mediterranean',
  'ic':'Central Anatolia','karadeniz':'Black Sea','dogu':'East Anatolia','guneydogu':'Southeast'
};

const ACIKLAMALAR_DE = {
  '1': 'Eine der größten Städte der Antike. Die Celsus-Bibliothek und das riesige Theater repräsentieren den Höhepunkt der römischen Architektur.',
  '2': 'Diese der Aphrodite geweihte antike Stadt war eines der wichtigsten Zentren der römischen Bildhauerkunst. Das Tetrapylon-Tor steht noch in seinem Glanz.',
  '3': 'Die hellenistische Hauptstadt, die eine der größten Bibliotheken der Antike beherbergte. Berühmt für den Zeus-Altar und das Asklepion.',
  '4': 'Ein einzigartiges Natur-Geschichts-Areal mit weißen Travertinen und einer antiken Stadt. Ein wichtiges Thermalbad- und Wallfahrtszentrum der Römerzeit.',
  '5': 'Die ionische Stadt, in der erste Philosophen wie Thales und Anaximandros geboren wurden. Sein Theater mit 15.000 Plätzen steht noch heute.',
  '6': 'Ein berühmtes Orakelzentrum mit einem riesigen Apollo-Tempel. Das wichtigste Orakelzentrum der Antike nach Delphi.',
  '7': 'Hauptstadt des Lydischen Königreichs, der ersten Zivilisation, die Münzen prägte. Die legendären Schätze von König Krösus sollen hier vergraben sein.',
  '8': 'Bekannt als das "Pompeji Anatoliens". Sein Rasterstraßenplan war die Inspiration für moderne Stadtplanung.',
  '9': 'Die antike Hafenstadt, in der Aristoteles seine Philosophieschule gründete. Die Ruinen des Athena-Tempels mit Blick auf das Meer bieten atemberaubende Ausblicke.',
  '10': 'Der am besten erhaltene Zeus-Tempel Anatoliens. Die Säulen aus dem 2. Jahrhundert stehen noch an ihrem Platz, mit Stadion- und Theaterruinen.',
  '11': 'Eine der sieben Gemeinden, die im Neuen Testament erwähnt werden. Das Große Theater und die byzantinischen Kirchen hinterlassen Besucher ehrfürchtig.',
  '12': 'Eine der seltenen antiken Städte mit einem darüber gebauten Dorf. Die Dorfbewohner nutzten das antike Theater als Scheune und den Tempelhof als Markt.',
  '13': 'Antike Stadt, die die berühmte Aphrodite-Statue von Praxiteles beherbergte. Eine wichtige Handelsstadt, die mit ihren zwei Häfen Ägäis und Mittelmeer verband.',
  '14': 'Berühmte ionische Stadt mit einem Dionysos-Tempel, dem Gott des Weins. Bekannt als Geburtsort des Dichters Anakreon.',
  '15': 'Eine der 12 ionischen Städte. Soll die ersten Kavallerie der Welt ausgebildet haben. Heute sind die meisten Ruinen zwischen Olivenhainen verborgen.',
  '16': 'Die legendäre Stadt, die in Homers Ilias verewigt wurde. Neun Siedlungsschichten enthalten tausende Jahre Geschichte.',
  '17': 'Geschichtete Geschichte vom byzantinischen Konstantinopel zum osmanischen Istanbul. Hagia Sophia, Topkapi-Palast und der Große Basar befinden sich hier.',
  '18': 'Die erste große Moschee der osmanischen Architektur. Ihr Inneres mit 20 Kuppeln und 192 Kalligraphie-Werken ist ein Meisterwerk.',
  '19': 'Die stärkste antike Hafenstadt der Marmararegion. Ihr Zeus geweihter Tempel galt als eines der Sieben Weltwunder der Antike.',
  '20': 'Das wichtigste Verwaltungszentrum der Perser in Anatolien nach den Phrygern. Hinterließ als Hauptstadt der persischen Satrapie ein reiches kulturelles Erbe.',
  '21': 'Das am besten erhaltene antike römische Theater der Welt. Das Theater mit 15.000 Plätzen wird heute noch für Oper und Ballett genutzt.',
  '22': 'Hauptstadt der Lykischen Liga und Geburtsort des Weihnachtsmanns. In einzigartiger Umgebung mit langen Stränden und Sanddünen.',
  '23': 'Hauptstadt der lykischen Zivilisation. Zweimal von den Persern niedergebrannt und zerstört; berühmt für das legendäre Harpyen-Monument.',
  '24': 'Die romantischste antike Stadt am Meer mit den Tempeln von Apollo und Athena. Die Tempelsilhouette bei Sonnenuntergang ist unvergleichlich.',
  '25': 'Eine Bergstadt, die selbst Alexander der Große nicht erobern konnte. Eine der geheimnisvollsten antiken Städte mit waldbedeckten Ruinen auf 1665 Metern.',
  '26': 'Die Stadt, durch die Alexander auf seinem anatolischen Feldzug zog. Eine beeindruckende römische Stadt mit Stadion und Säulenstraße.',
  '27': 'Heimatstadt des Heiligen Nikolaus, bekannt als Weihnachtsmann. Ein wichtiges Wallfahrtszentrum mit lykischen Felsgräbern und der Kirche des Heiligen.',
  '28': 'Der Antoninus-Brunnen fließt noch! Eine der am besten erhaltenen antiken Städte der Türkei. Die Perle Pisidiens aus der Römerzeit.',
  '29': 'Eine lykische Stadt auf 1500 Metern an den Hängen des Taurusgebirges. Eine der am wenigsten erkundeten antiken Städte mit unberührter Natur.',
  '30': 'Eine pisidische Stadt auf dem Köprülü-Canyon. Eine der wichtigsten Städte Pisidiens mit Theater für 10.000 und Zeus-Tempel.',
  '31': 'Eine antike Stadt mit drei Häfen als Handelszentrum. Wo Alexander überwinterte; eine der schönsten antiken Städte der Türkei zwischen Kiefernwäldern.',
  '32': 'Eine antike Stadt, die am Kap Anamur mit dem Meer verwoben ist. Faszinierend in seinem ungestörten Zustand nach dem Persischen Angriff 260 n. Chr.',
  '33': 'Eine antike Stadt auf einem hohen Felsen in der kilikischen Ebene. Mit ihrer spektakulären Felsburg, der 1.500 Meter langen Säulenstraße und dem Triumphbogen eine der eindrucksvollsten antiken Städte der Südtürkei.',
  '34': 'Eine der ältesten bekannten städtischen Siedlungen der Welt. Diese neolithische Stadt aus 7500 v. Chr. ist ein Meilenstein der Menschheitsgeschichte.',
  '35': 'Hauptstadt des Hethitischen Reiches. Eine der beeindruckendsten Stadtstrukturen der Bronzezeit mit dem Löwentor und Sphinxtor.',
  '36': 'Die einzigartigste Natur-Geschichts-Region der Welt mit Feenkaminen und unterirdischen Städten. Heiliges Land, wo frühe Christen Felsenkirchen gruben.',
  '37': 'Die tiefste unterirdische Stadt der Welt mit 18 Stockwerken und Kapazität für 20.000 Menschen. Wo frühe Christen vor römischer Verfolgung Zuflucht suchten.',
  '38': 'Hauptstadt des phrygischen Königreichs, besucht von Alexander, der den legendären gordischen Knoten durchhieb. Das Land von König Midas.',
  '39': 'Enthält die frühesten Spuren der anatolischen Zivilisation mit seinem Sphinxtor und hethitischen Reliefs aus der Bronzezeit.',
  '40': 'Meisterwerk seldschukischer Steinmetzkunst. Die Türverzierungen und Schnitzereien am Mihrab gelten als einzigartig in der Weltarchitekturgeschichte.',
  '41': 'Das Grab und die Loge von Mevlana Celaleddin Rumi. Seine grüne Kuppel und der Semahane-Saal verzaubern Besucher; Menschen pilgern aus aller Welt hierher.',
  '42': 'Eine neue Entdeckung, die älter als Göbekli Tepe sein soll. Birgt die Geheimnisse der Jungsteinzeit mit menschengesichtigen Statuen und T-förmigen Pfeilern.',
  '43': 'Das älteste bekannte Handelszentrum Anatoliens. Eine einzigartige Archivstadt, die dank assyrischer Kaufmanns-Tontafeln Licht auf die anatolische Geschichte wirft.',
  '44': 'Die historische Burg im Herzen Ankaras. Trägt das Gedächtnis der Stadt mit ihren byzantinischen Mauern und osmanischen Karawansereien.',
  '45': 'Das Grab und die Loge von Hadschi Bektasch Veli. Ein wichtiges Wallfahrts- und Kulturzentrum für Aleviten und Bektaschi.',
  '46': 'Der älteste bekannte Tempelkomplex der Welt. Das erste monumentale Bauwerk der Menschheit mit T-förmigen Pfeilern aus 9600 v. Chr.',
  '47': 'Das Tumulus des Kommagene-Königreichs umgeben von riesigen Götterfiguren auf 2150 Metern. Ihre Silhouetten beim Sonnenaufgang sind unvergleichlich.',
  '48': 'Eine der ältesten dauerhaft bewohnten Städte der Welt. Die Stadt der bienenkorb-förmigen Häuser, wo Prophet Abraham gelebt haben soll.',
  '49': 'Das weltgrößte Mosaik-Museum. Prächtige römische Mosaike, die aus der antiken Stadt Zeugma am Euphrat ausgegraben wurden, sind hier ausgestellt.',
  '50': 'Die längsten Basaltstein-Mauern der Welt nach der Großen Mauer Chinas. 82 Türme auf 5,8 km Mauern aus der Römerzeit.',
  '51': 'Eine goldsteinerne Stadt auf Terrassen mit Blick auf die mesopotamische Ebene. Das Deyrulzafaran-Kloster und die Kasimiye-Madrassa sind die Hauptbauwerke.',
  '52': 'Wichtiger byzantinischer Militärstützpunkt an der mesopotamischen Grenze. Ein beeindruckendes antikes Bauwerk mit riesigen Zisternen und Stadtmauern.',
  '53': 'Eine wichtige Stadt des Kommagene-Königreichs. Ein bedeutender Übergangspunkt der Antike an seiner Lage am Euphrat.',
  '54': 'Ein monumentales Tumulus über dem Grab der kommagenischen Königsfamilie. Die Adlerstatue kann kilometerweit gesehen werden.',
  '55': 'Die armenische Hauptstadt, eine der größten Städte des Mittelalters. Die allein in der Steppe stehenden Kathedralen bieten einen unvergesslichen Anblick.',
  '56': 'Eine armenische Kirche aus dem 10. Jahrhundert auf einer kleinen Insel im Van-See. Die biblischen Szenen an der Außenfassade sind außergewöhnliche Kunstwerke.',
  '57': 'Eine Urartu-Königsfestung aus dem 8. Jahrhundert v. Chr. Eine wenig bekannte, aber beeindruckende antike Struktur, die das Van-See-Tal dominiert.',
  '58': 'Ein osmanischer Palast auf 2200 Metern am Fuß des Ararat-Gebirges. Faszinierend mit seiner einzigartigen Architektur, die seldschukische, osmanische und iranische Stile vereint.',
  '59': 'Urartu-Felsenfestung am See. Die beeindruckendste antike Struktur Ostanatoliens mit Felsgräbern und Urartu-Inschriften.',
  '60': 'Der weltgrößte seldschukische Friedhof. Enthält die wertvollsten Beispiele türkisch-islamischer Kunst mit Kümbet-Türmen und Grabsteinen.',
  '61': 'Historische Stadtruinen am Fuß des Ararat. Ein wichtiger Stop an der historischen östlichen Seidenstraße, nahe dem Ishak-Pascha-Palast.',
  '62': 'Das legendäre byzantinische Kloster, das an den steilen Klippen der Schwarzmeerberge klebt. Bemerkenswert durch seine Fresken und Ikonen aus dem 4. Jahrhundert.',
  '63': 'Eine byzantinische Kirche aus dem 13. Jahrhundert. Als Juwel der byzantinischen Kunst mit seinen Fresken bekannt.',
  '64': 'Antike Stadt mit dem besten natürlichen Hafen am Schwarzen Meer. Geburtsort des berühmten Philosophen Diogenes; römische Mauern stehen noch heute.',
  '65': 'Das am besten erhaltene Beispiel osmanischer Wohnarchitektur. Seine Erkerhäuser aus Holz und der Basar vermitteln das Gefühl, die Zeit sei stehengeblieben.',
  '66': 'Eine Felsenfestung, die das Yeşilırmak-Tal dominiert. Symbol der historischen Stadt, Hauptstadt des Pontos-Königreichs, voller Felsgräber und antiker Stätten.',
  '67': 'Eine der ältesten griechischen Kolonien am Schwarzen Meer. Spielte als wichtige Handelsstadt des Pontos-Königreichs eine zentrale Rolle im Schwarzmeerhandel.',
  '68': 'Die historische Burg über der Stadt. Ein strategischer Punkt, der die Verbindung zwischen dem Schwarzmeer-Hinterland und Anatolien kontrollierte.',
  '69': 'Das heilige Zentrum Lykiens: ein Tempelbezirk, geweiht Leto, der Mutter von Apollon und Artemis. Diese UNESCO-Stätte, religiöse Hauptstadt des Lykischen Bundes, umfasst drei Tempel und ein Nymphäum.',
  '70': 'Eine der großen Städte Lykiens. Ihre im Wald an einem Flussufer verborgenen Ruinen und die natürlichen Flammen des nahen Yanartaş bieten ein einzigartiges Erlebnis.',
  '71': 'Eine römische und byzantinische Stadt auf einer Halbinsel an der kilikischen Küste. Ihr zum Meer blickendes Theater und ihre Brücke machen sie zu einer beeindruckenden antiken Stätte.',
  '72': 'Eine hellenistische Stadt im Mäandertal. Mit Bibliothek, untertunnelten Straßen und einem Theater für 12.000 Zuschauer war sie eine der fortschrittlichsten Städte ihrer Zeit.',
  '73': 'Eine antike Stadt, berühmt für ihre starken Mauern und die als „Drei Augen“ bekannten römischen Bögen. Geburtsort des Anthemios von Tralleis, Mathematiker und Mitbaumeister der Hagia Sophia.',
  '74': 'Eine hellenistische Stadt am Mäander, berühmt für den Tempel der Artemis Leukophryene, eines der schönsten Beispiele ionischer Architektur.',
  '75': 'Eine bedeutende antike Stadt Kariens. Die Reste ihres Apollontempels und ihrer Agora werfen Licht auf die Geschichte Westanatoliens.',
  '76': 'Eine antike Stadt an einem Berghang in Karien. Sie ging als Sitz der karischen Königin Ada in die Geschichte ein, die Alexander den Großen empfing.',
  '77': 'Hier steht einer der am besten erhaltenen Zeustempel der Türkei. Sechzehn seiner Säulen stehen noch; der Tempel stammt aus der Zeit des römischen Kaisers Hadrian.',
  '78': 'Das Heiligtum des Zeus Labraundos in den Bergen von Muğla. Sein von der Hekatomniden-Dynastie errichteter Tempel und die Terrassen bilden ein einzigartiges religiöses Zentrum.',
  '79': 'Eine antike Stadt am Fuß felsiger Berge am Ufer des Bafa-Sees. Schauplatz der Endymion-Sage, mit gut erhaltenen Mauern und einem Tempel.',
  '80': 'Eine antike Fischer- und Handelsstadt auf einer Halbinsel. Berühmt für Münzen mit Fischmotiv; ihre römische Nekropole und Agora faszinieren die Besucher.',
  '81': 'Eine karische Stadt, deren Name auf ihre berühmte Töpferei zurückgeht. Heute liegen ihre Ruinen teilweise zwischen Olivenhainen verborgen.',
  '82': 'Eine antike Hafenstadt am Dalyan-Fluss, berühmt für ihre in den Fels gehauenen Gräber mit Tempelfassaden. Eine der prächtigsten antiken Städte der Region, die auch für ihre Schlammbäder bekannt ist.',
  '83': 'Eine lykische Stadt in den Bergen bei Fethiye. Mit Stadion und Theater gehört sie zu den herausragenden, noch wenig erkundeten antiken Stätten.',
  '84': 'Teil des Gebiets Xanthos–Letoon. Eine der größten Städte Lykiens mit Hunderten von Felsgräbern, dank ihrer geschützten Lage sehr gut erhalten.',
  '85': 'Eine der sechs großen Städte Lykiens und eine ihrer ältesten Siedlungen. Der sagenhafte Ort, an dem Bellerophon den Pegasos zähmte; Felsgräber und Akropolis begeistern die Besucher.',
  '86': 'Hauptstadt des Kibyratischen Bundes und eine der größten Städte der Region. Mit einem Stadion für 8.000 Zuschauer und einem Odeon ist sie eine beeindruckende römische Stadt.',
  '87': 'Eine römische Militärkolonie auf den steilen Felsen des Taurusgebirges. Mit Agora, Tempel und weiteren Bauten ist sie eine der wichtigen antiken Städte Pisidiens.',
  '88': 'Eine pisidische Stadt hoch in den Bergen. Ihre zwei Tempel und die gut erhaltene Agora machen sie zu einem Schwerpunkt der Forschung.',
  '89': 'Ort einer der ersten christlichen Gemeinden, vor der der Apostel Paulus predigte. Eine bedeutende Ausgrabungsstätte mit den Resten des Heiligtums des Men Askaenos und des Augustustempels.',
  '90': 'Eine Stadt des Rauen Kilikien, berühmt für ihren Tempel des Zeus Olbios und ihren hellenistischen Turm. Als Sitz einer Dynastie von Priesterkönigen hatte sie große religiöse Bedeutung.',
  '91': 'Diokaisareia, eine der am besten erhaltenen antiken Städte des Rauen Kilikien. Ihr Zeustempel und der hohe hellenistische Turm faszinieren die Besucher.',
  '92': 'Die antike Hafenstadt, von der das Wort „Solözismus“ (grammatischer Fehler) stammt. Von Pompeius neu gegründet; ein großer Teil ihrer Säulenstraße steht noch.',
  '93': 'Eine bedeutende antike Hafenstadt Kilikiens. Mit Theater und Tempelresten ist sie eine wenig bekannte, aber beeindruckende Stätte.',
  '94': 'Die heilige phrygische Stadt, in der der Kult der Kybele entstand. Der heilige Stein der Göttin wurde von hier nach Rom gebracht; sie war eines der großen religiösen Zentren der Antike.',
  '95': 'Eine hellenistische Stadt bei İzmir. Mit ihrem Theater und den marmorgepflasterten Straßen ist sie eine der weniger bekannten antiken Städte Ioniens.',
  '96': 'Ein heiliges Orakel des Apollon und Rivale von Delphi, wo die Weissagungen in einer unterirdischen Kammer erteilt wurden. Die Reste des großen Apollontempels sind beeindruckend.',
  '97': 'Eine ionische Siedlung, die als Hafen von Kolophon diente. Sie gab der Seeschlacht von Notion (406 v. Chr.) ihren Namen, in der Sparta die athenische Flotte besiegte.',
  '98': 'Eine der zwölf ionischen Städte. Mit Athenatempel und Theater war sie ein wichtiges Zentrum der ionischen Kultur.',
  '99': 'Heimat der phokäischen Seefahrer, die das Mittelmeer erkundeten; von hier brachen die Gründer Marseilles auf. Ihr antiker Hafen und ihre Mauern sind heute im Ort Foça bei İzmir zu sehen.',
  '100': 'Eine der zwölf ionischen Städte und Geburtsort des Philosophen Anaxagoras. Auf einer Insel erbaut, war sie durch einen Damm mit dem Festland verbunden; berühmt auch für ihre bemalten Sarkophage.',
  '101': 'Die antike Stadt unter dem heutigen İzmir. Ihre römische Agora im Stadtzentrum ist zu besichtigen und beeindruckt mit Säulenhallen und Bodenmosaiken.',
  '102': 'Eine antike Stadt der Aiolis mit einem Zeustempel und einem Theater. Die beim Erdbeben von 17 n. Chr. beschädigten Bauten werden noch heute erforscht.',
  '103': 'Eine der sieben im Neuen Testament genannten Gemeinden. Die Reste der für Bronzearbeiten und Färberei berühmten Stadt liegen im Herzen von Akhisar.',
  '104': 'Eine der sieben Gemeinden des Neuen Testaments. Vom antiken Ort unter dem heutigen Alaşehir sind nur die teilweise stehenden Bögen der Johanneskirche erhalten.',
  '105': 'Die größte Stadt des Äolischen Bundes und Heimat des Vaters von Hesiod. Heute liegt der Großteil ihrer Reste unter Ackerland.',
  '106': 'Eine äolische Stadt, weltberühmt für ihre Terrakotta-Figuren. Die Myrina-Figurinen in den Museen zählen zu den kostbarsten Werken hellenistischer Kunst.',
  '107': 'Das berühmteste Heilzentrum der Antike, an dem große Ärzte wie Galen ausgebildet wurden. Kranke wurden mit Traumdeutung, Diät und Bewegung behandelt.',
  '108': 'Eine antike Hafenstadt am Golf von Edremit. Der Apostel Paulus bestieg auf seiner Reise nach Rom ein Schiff aus Adramyttion.',
  '109': 'Eine Hafenstadt, gegründet von Antigonos, einem der Generäle Alexanders. In römischer Zeit dicht besiedelt; ihre gewaltigen Thermen und Mauern beeindrucken noch heute.',
  '110': 'Die historische Stadt, in der 325 n. Chr. das Konzil von Nicäa tagte und die Grundsätze des christlichen Glaubens festlegte. Weltberühmt auch für die İznik-Fliesen.',
  '111': 'Eine antike bithynische Stadt in der westlichen Schwarzmeerregion. Mit römischer Brücke und Theater ist sie eine der weniger bekannten antiken Siedlungen der Gegend.',
  '112': 'Eine wichtige antike Hafenstadt am Schwarzen Meer. Im heutigen Amasra gelegen, begeistern ihre byzantinischen Befestigungen und antiken Reste die Besucher.',
  '113': 'Eine von Pompeius gegründete römische Stadt zur Kontrolle des Schwarzmeer-Hinterlands. Mit ihrer kürzlich freigelegten Säulenstraße eine der wichtigsten Ausgrabungsstätten Kastamonus.',
  '114': 'Eine bedeutende römische Stadt in Pontos und Heimat des Bischofs Gregor des Wundertäters aus dem 3. Jahrhundert. Ihre Reste liegen in Niksar.',
  '116': 'Die Sommerhauptstadt des Königreichs Kommagene. Mit dem riesigen in den Fels gehauenen Handschlag-Relief und dem Grabmal des Mithridates Kallinikos wird sie zusammen mit dem Nemrut Dağı besucht.',
  '117': 'Eine Stadt der Region Kommagene, berühmt für ihre Felsgräber. Ihre in den Fels gehauene Nekropole und die Höhlenkirchen machen sie zu einer der eigentümlichsten antiken Stätten der Gegend.',
  '118': 'Eine antike Hafenstadt an der kilikischen Küste. Im heutigen Aydıncık gelegen, zeugen ihre Mosaiken und Bauten von der reichen Geschichte der Region.',
  '120': 'Eine antike Stadt am Fluss Ceyhan, auch Hierapolis Kastabala genannt. Mit ihrem Artemistempel und der Felsburg eine der bemerkenswerten antiken Stätten Kilikiens.',
};

const ISIMLER_DE = {
  '1':'Ephesos','2':'Aphrodisias','3':'Pergamon','4':'Hierapolis - Pamukkale',
  '5':'Milet','6':'Didyma','7':'Sardes','8':'Priene','9':'Assos',
  '10':'Aizanoi','11':'Laodikeia','12':'Stratonikeia','13':'Knidos','14':'Teos',
  '15':'Kolophon','16':'Troja','17':'Historische Halbinsel Istanbul','18':'Bursa Große Moschee',
  '19':'Kyzikos','20':'Daskyleion','21':'Aspendos','22':'Patara','23':'Xanthos',
  '24':'Side','25':'Termessos','26':'Perge','27':'Myra - Demre','28':'Sagalassos',
  '29':'Arykanda','30':'Selge','31':'Phaselis','32':'Anemurion','33':'Anavarza',
  '34':'Çatalhöyük','35':'Hattuscha','36':'Kappadokien','37':'Unterstadt Derinkuyu',
  '38':'Gordion','39':'Alacahöyük','40':'Divriği Große Moschee','41':'Mevlana-Museum',
  '42':'Karahantepe','43':'Kültepe (Kanesch)','44':'Burg Ankara','45':'Hacibektasch-Komplex',
  '46':'Göbekli Tepe','47':'Nemrut Dağ','48':'Harran','49':'Zeugma-Mosaik-Museum',
  '50':'Diyarbakır-Mauern','51':'Mardin Altstadt','52':'Dara Antike Stadt',
  '53':'Samosata','54':'Karakuş-Tumulus','55':'Ani-Ruinen','56':'Akdamar-Kirche',
  '57':'Çavuştepe-Burg','58':'Ishak-Pascha-Palast','59':'Van-Burg',
  '60':'Ahlat Seldschuken-Friedhof','61':'Doğubayazıt Altstadt','62':'Sumela-Kloster',
  '63':'Trabzon Hagia Sophia','64':'Sinop-Burg','65':'Safranbolu',
  '66':'Amasya-Burg','67':'Amisos (Samsun)','68':'Kastamonu-Burg',
  '69':'Letoon','70':'Olympos','71':'Elaiussa Sebaste','72':'Nysa',
  '73':'Tralleis','74':'Magnesia am Mäander','75':'Alabanda','76':'Alinda',
  '77':'Euromos','78':'Labraunda','79':'Herakleia am Latmos','80':'Iasos',
  '81':'Keramos','82':'Kaunos','83':'Kadyanda','84':'Pinara',
  '85':'Tlos','86':'Kibyra','87':'Kremna','88':'Adada',
  '89':'Antiochia in Pisidien','90':'Olba','91':'Uzuncaburç (Diokaisareia)','92':'Soloi-Pompeiopolis',
  '93':'Aigeai','94':'Pessinus','95':'Metropolis','96':'Klaros',
  '97':'Notion','98':'Erythrai','99':'Phokaia','100':'Klazomenai',
  '101':'Smyrna','102':'Aigai','103':'Thyateira','104':'Philadelphia',
  '105':'Kyme','106':'Myrina','107':'Asklepieion von Pergamon','108':'Adramyttion',
  '109':'Alexandria Troas','110':'Nikaia (İznik)','111':'Prusias ad Hypium','112':'Amastris',
  '113':'Pompeiopolis','114':'Neokaisareia','116':'Arsameia',
  '117':'Perre','118':'Kelenderis','120':'Kastabala',
};

const ACIKLAMALAR_RU = {
  '1': 'Один из крупнейших городов античного мира. Библиотека Цельса и огромный театр представляют вершину римской архитектуры.',
  '2': 'Этот античный город, посвящённый Афродите, был одним из важнейших центров римского скульптурного искусства. Ворота Тетрапилон сохраняют своё великолепие.',
  '3': 'Эллинистическая столица, в которой находилась одна из крупнейших библиотек античного мира. Знаменита алтарём Зевса и Асклепионом.',
  '4': 'Уникальный природно-исторический объект с белыми травертинами и античным городом. Важный термальный и паломнический центр эпохи Рима.',
  '5': 'Ионийский город, где родились первые философы — Фалес и Анаксимандр. Его театр на 15 000 мест сохранился до наших дней.',
  '6': 'Знаменитый оракульный центр с огромным храмом Аполлона. Важнейший оракул античного мира после Дельф.',
  '7': 'Столица Лидийского царства — первой цивилизации, чеканившей монеты. Здесь, по преданию, хранятся сокровища легендарного царя Крёза.',
  '8': 'Известен как "Помпеи Анатолии". Его регулярная планировка улиц стала вдохновением для современного градостроительства.',
  '9': 'Античный портовый город, где Аристотель основал свою философскую школу. Руины храма Афины с видом на море открывают захватывающие дух пейзажи.',
  '10': 'Лучше всего сохранившийся храм Зевса в Анатолии. Колонны II века стоят на своих местах рядом с руинами стадиона и театра.',
  '11': 'Одна из семи церквей, упомянутых в Новом Завете. Большой театр и византийские церкви восхищают посетителей.',
  '12': 'Один из редких античных городов, поверх которого построена деревня. Жители использовали античный театр как амбар, а храмовый двор — как рынок.',
  '13': 'Античный город, хранивший знаменитую статую Афродиты работы Праксителя. Важный торговый город, связывавший Эгейское и Средиземное моря двумя гаванями.',
  '14': 'Знаменитый ионийский город с храмом Диониса, бога вина. Известен как родина поэта Анакреона.',
  '15': 'Один из 12 ионийских городов. По преданию, здесь обучалась первая в мире кавалерия. Сегодня большинство руин скрыто среди оливковых рощ.',
  '16': 'Легендарный город, увековеченный в "Илиаде" Гомера. Девять слоёв поселений хранят тысячелетнюю историю.',
  '17': 'Многослойная история от византийского Константинополя до османского Стамбула. Здесь находятся Айя-София, дворец Топкапы и Гранд-базар.',
  '18': 'Первая великая мечеть османской архитектуры. Интерьер под 20 куполами и 192 каллиграфических произведения — настоящий шедевр.',
  '19': 'Сильнейший античный портовый город Мраморного моря. Посвящённый Зевсу храм считался одним из семи чудес античного мира.',
  '20': 'Важнейший административный центр персов в Анатолии после фригийцев. Оставил богатое культурное наследие как столица персидской сатрапии.',
  '21': 'Лучше всего сохранившийся античный римский театр в мире. Театр на 15 000 мест используется сегодня для оперы и балета.',
  '22': 'Столица Ликийского союза и родина Деда Мороза. Расположена в уникальном месте с длинными пляжами и песчаными дюнами.',
  '23': 'Столица ликийской цивилизации. Дважды сожжена и разрушена персами; знаменита легендарным памятником Гарпий.',
  '24': 'Самый романтичный античный город у моря с храмами Аполлона и Афины. Силуэт храма на закате несравним.',
  '25': 'Горный город, который не смог завоевать даже Александр Македонский. Один из самых загадочных античных городов с руинами среди лесов на высоте 1665 метров.',
  '26': 'Город, через который прошёл Александр в своём анатолийском походе. Впечатляющий римский город со стадионом и колоннадой.',
  '27': 'Родина Святого Николая, известного как Дед Мороз. Важный паломнический центр с ликийскими гробницами в скалах и церковью святого.',
  '28': 'Фонтан Антонинов до сих пор течёт! Один из лучше всего сохранившихся античных городов Турции. Жемчужина Писидии эпохи Рима.',
  '29': 'Ликийский город на высоте 1500 метров на склонах гор Тавра. Один из наименее исследованных античных городов с нетронутой природой.',
  '30': 'Писидийский город на вершине каньона Кёпрюлю. Один из важнейших городов Писидии с театром на 10 000 мест и храмом Зевса.',
  '31': 'Античный город с тремя гаванями как центр торговли. Место зимовки Александра; один из красивейших античных городов Турции среди сосновых лесов.',
  '32': 'Античный город, вплетённый в море на мысе Анамур. Восхищает своим нетронутым состоянием после персидского нападения в 260 г. н.э.',
  '33': 'Античный город на высокой скале среди Киликийской равнины. Со скальной крепостью, колоннадной улицей длиной 1 500 метров и триумфальной аркой — один из самых впечатляющих городов юга Турции.',
  '34': 'Одно из старейших известных городских поселений в мире. Этот неолитический город 7500 г. до н.э. является вехой в истории человечества.',
  '35': 'Столица Хеттской империи. Одна из самых впечатляющих городских структур Бронзового века — Львиные и Сфинксовые ворота.',
  '36': 'Самый уникальный природно-исторический регион мира с каменными грибами и подземными городами. Священные земли, где первые христиане вырубали пещерные церкви.',
  '37': 'Самый глубокий подземный город мира: 18 этажей вместимостью 20 000 человек. Убежище первых христиан от римских преследований.',
  '38': 'Столица Фригийского царства, которую посетил Александр, разрубив легендарный Гордиев узел. Страна царя Мидаса.',
  '39': 'Содержит древнейшие следы анатолийской цивилизации: сфинксовые ворота и хеттские рельефы эпохи Бронзового века.',
  '40': 'Шедевр сельджукского каменного зодчества. Дверные украшения и резьба михраба считаются уникальными в мировой истории архитектуры.',
  '41': 'Гробница и обитель Мевляны Джалал ад-Дина Руми. Зелёный купол и зал сема-хане завораживают посетителей; сюда приезжают паломники со всего мира.',
  '42': 'Новая находка, предположительно старше Гёбекли-Тепе. Хранит тайны неолита со статуями с человеческими лицами и Т-образными столбами.',
  '43': 'Древнейший известный торговый центр Анатолии. Уникальный архивный город, пролившийся светом на историю Анатолии благодаря глиняным табличкам ассирийских купцов.',
  '44': 'Историческая крепость в центре Анкары. Хранит память города со своими византийскими стенами и османскими ханами.',
  '45': 'Гробница и обитель Хаджи Бекташа Вели. Важный паломнический и культурный центр для алевитов и бекташей.',
  '46': 'Древнейший известный храмовый комплекс в мире. Первое монументальное сооружение человечества с Т-образными столбами, датируемое 9600 г. до н.э.',
  '47': 'Тумулус Коммагенского царства, окружённый гигантскими статуями богов на высоте 2150 метров. Их силуэты на рассвете несравнимы.',
  '48': 'Один из старейших постоянно обитаемых городов мира. Город домов с коническими крышами, где, по преданию, жил пророк Авраам.',
  '49': 'Крупнейший мозаичный музей в мире. Здесь выставлены великолепные римские мозаики, обнаруженные в античном городе Зевгма на Евфрате.',
  '50': 'Самые длинные базальтовые стены в мире после Великой Китайской стены. 82 башни на 5,8 км стен эпохи Рима.',
  '51': 'Золотистый каменный город на террасах с видом на Месопотамскую равнину. Монастырь Дейрулзафаран и медресе Касимие — главные постройки.',
  '52': 'Важный византийский военный форпост на месопотамской границе. Впечатляющее античное сооружение с огромными цистернами и городскими стенами.',
  '53': 'Важный город Коммагенского царства. Значимый переправочный пункт античности благодаря своему положению на Евфрате.',
  '54': 'Монументальный тумулус над гробницей коммагенской королевской семьи. Статую орла видно за километры.',
  '55': 'Армянская столица — один из крупнейших городов Средневековья. Соборы, одиноко стоящие в степи, открывают незабываемый вид.',
  '56': 'Армянская церковь X века на маленьком острове в озере Ван. Библейские сцены на внешнем фасаде — исключительные произведения искусства.',
  '57': 'Крепость Урартского царства VIII века до н.э. Малоизвестное, но впечатляющее античное сооружение, господствующее над долиной озера Ван.',
  '58': 'Османский дворец на высоте 2200 метров у подножия горы Арарат. Восхищает своей уникальной архитектурой, сочетающей сельджукский, османский и иранский стили.',
  '59': 'Урартская скальная крепость у озера. Самое впечатляющее античное сооружение Восточной Анатолии со скальными гробницами и урартскими надписями.',
  '60': 'Крупнейшее в мире сельджукское кладбище. Содержит ценнейшие образцы тюркско-исламского искусства — башни-кюмбет и надгробия.',
  '61': 'Исторические руины города у подножия Арарата. Важная остановка на историческом Восточном шёлковом пути, вблизи дворца Исхак-Паши.',
  '62': 'Легендарный византийский монастырь, прилепившийся к крутым скалам Черноморских гор. Примечателен фресками и иконами IV века.',
  '63': 'Византийская церковь XIII века. Считается жемчужиной византийского искусства благодаря своим фрескам.',
  '64': 'Античный город с лучшей естественной гаванью на Чёрном море. Родина знаменитого философа Диогена; римские стены стоят по сей день.',
  '65': 'Лучший сохранившийся образец османской жилой архитектуры. Деревянные дома с эркерами и базар создают ощущение остановившегося времени.',
  '66': 'Скальная крепость, господствующая над долиной Ешилырмак. Символ исторического города — столицы Понтийского царства, полного скальных гробниц.',
  '67': 'Одна из старейших греческих колоний на Черном море. Играла центральную роль в черноморской торговле как важный торговый город Понтийского царства.',
  '68': 'Историческая крепость над городом. Стратегическая точка, контролировавшая связь черноморского побережья с Анатолией.',
  '69': 'Священный центр Ликии — храмовый комплекс, посвящённый Лето, матери Аполлона и Артемиды. Этот объект ЮНЕСКО, религиозная столица Ликийского союза, включает три храма и нимфей.',
  '70': 'Один из крупных городов Ликии. Руины, скрытые в лесу на берегу реки, и природное пламя соседнего Янарташа дарят неповторимые впечатления.',
  '71': 'Римский и византийский город на полуострове у побережья Киликии. Театр с видом на море и мост делают его впечатляющим античным памятником.',
  '72': 'Эллинистический город в долине Меандра. Библиотека, улицы над тоннелем и театр на 12 000 мест делали его одним из самых развитых городов своего времени.',
  '73': 'Античный город, знаменитый мощными стенами и римскими арками «Три глаза». Родина Анфимия Тралльского — математика и одного из архитекторов собора Святой Софии.',
  '74': 'Эллинистический город на Меандре, знаменитый храмом Артемиды Левкофриены — одним из прекраснейших образцов ионического ордера.',
  '75': 'Важный античный город Карии. Остатки храма Аполлона и агоры проливают свет на историю Западной Анатолии.',
  '76': 'Античный город на горном склоне в Карии. Вошёл в историю как резиденция карийской царицы Ады, принявшей Александра Македонского.',
  '77': 'Здесь стоит один из лучше всего сохранившихся храмов Зевса в Турции. Шестнадцать его колонн до сих пор стоят; храм относится ко времени императора Адриана.',
  '78': 'Святилище Зевса Лабрандского в горах Муглы. Храм и террасы, возведённые династией Гекатомнидов, образуют уникальный религиозный центр.',
  '79': 'Античный город у подножия скалистых гор на берегу озера Бафа. Место действия мифа об Эндимионе, с хорошо сохранившимися стенами и храмом.',
  '80': 'Античный рыбацкий и торговый город на полуострове. Знаменит монетами с изображением рыбы; римский некрополь и агора восхищают посетителей.',
  '81': 'Карийский город, название которого связано с его знаменитым гончарным производством. Сегодня руины частично скрыты среди оливковых рощ.',
  '82': 'Античный портовый город на реке Дальян, знаменитый скальными гробницами с храмовыми фасадами. Один из самых величественных городов региона, известного также грязевыми ваннами.',
  '83': 'Ликийский город в горах близ Фетхие. Со стадионом и театром он выделяется среди малоизученных античных памятников.',
  '84': 'Часть территории Ксантос–Летоон. Один из крупнейших городов Ликии с сотнями скальных гробниц, отлично сохранившихся благодаря укрытому расположению.',
  '85': 'Один из шести великих городов Ликии и одно из её древнейших поселений. Легендарное место, где Беллерофонт укротил Пегаса; скальные гробницы и акрополь восхищают посетителей.',
  '86': 'Столица Кибиратского союза и один из крупнейших городов региона. Стадион на 8 000 мест и одеон делают его впечатляющим римским городом.',
  '87': 'Римская военная колония на крутых скалах Таврских гор. С агорой, храмом и другими постройками — один из важных античных городов Писидии.',
  '88': 'Писидийский город высоко в горах. Два храма и хорошо сохранившаяся агора делают его объектом пристального внимания исследователей.',
  '89': 'Место одной из первых христианских общин, где проповедовал апостол Павел. Важный археологический памятник с остатками святилища Мена Аскаена и храма Августа.',
  '90': 'Город Горной Киликии, знаменитый храмом Зевса Ольбийского и эллинистической башней. Как резиденция династии царей-жрецов имел большое религиозное значение.',
  '91': 'Диокесария — один из лучше всего сохранившихся античных городов Горной Киликии. Храм Зевса и высокая эллинистическая башня восхищают посетителей.',
  '92': 'Античный портовый город, давший название слову «солецизм» (грамматическая ошибка). Восстановлен Помпеем; большая часть колоннадной улицы сохранилась до наших дней.',
  '93': 'Важный античный портовый город Киликии. С театром и остатками храмов — малоизвестный, но впечатляющий памятник.',
  '94': 'Священный фригийский город, где зародился культ Кибелы. Отсюда в Рим был увезён священный камень богини; это был один из главных религиозных центров античного мира.',
  '95': 'Эллинистический город близ Измира. С театром и мощёными мрамором улицами — один из малоизвестных античных городов Ионии.',
  '96': 'Священный оракул Аполлона и соперник Дельф, где пророчества давались в подземной камере. Руины большого храма Аполлона впечатляют.',
  '97': 'Ионийское поселение, служившее гаванью Колофона. Дало имя битве при Нотионе (406 г. до н. э.), в которой Спарта разбила афинский флот.',
  '98': 'Один из двенадцати ионийских городов. С храмом Афины и театром был важным центром ионийской культуры.',
  '99': 'Родина фокейских мореплавателей, исследовавших Средиземноморье; отсюда отправились основатели Марселя. Античную гавань и стены можно увидеть сегодня в городке Фоча под Измиром.',
  '100': 'Один из двенадцати ионийских городов и родина философа Анаксагора. Построенный на острове, он был связан с берегом дамбой; известен также расписными саркофагами.',
  '101': 'Античный город под современным Измиром. Римская агора в центре города открыта для посещения и впечатляет колоннадами и напольными мозаиками.',
  '102': 'Античный город Эолиды с храмом Зевса и театром. Постройки, пострадавшие при землетрясении 17 г. н. э., изучаются до сих пор.',
  '103': 'Одна из семи церквей, упомянутых в Новом Завете. Остатки города, славившегося бронзовыми изделиями и крашением тканей, находятся в самом центре Акхисара.',
  '104': 'Одна из семи церквей Нового Завета. От античного города под современным Алашехиром сохранились лишь частично стоящие арки церкви Святого Иоанна.',
  '105': 'Крупнейший город Эолийского союза и родина отца Гесиода. Сегодня большая часть руин скрыта под сельскохозяйственными угодьями.',
  '106': 'Эолийский город, всемирно известный терракотовыми статуэтками. Миринские фигурки в музеях — одни из ценнейших произведений эллинистического искусства.',
  '107': 'Самый знаменитый лечебный центр античного мира, где учились великие врачи, такие как Гален. Больных лечили толкованием снов, диетой и упражнениями.',
  '108': 'Античный портовый город в заливе Эдремит. Апостол Павел на пути в Рим сел на корабль из Адрамиттия.',
  '109': 'Портовый город, основанный Антигоном, одним из полководцев Александра. В римское время был густонаселён; его огромные термы и стены впечатляют и сегодня.',
  '110': 'Исторический город, где в 325 г. н. э. собрался Никейский собор и были сформулированы основы христианского вероучения. Всемирно известен также изникскими изразцами.',
  '111': 'Античный вифинский город в западном Причерноморье. С римским мостом и театром — одно из малоизвестных античных поселений региона.',
  '112': 'Важный античный портовый город на Чёрном море. Расположенный в современной Амасре, он восхищает византийскими укреплениями и античными руинами.',
  '113': 'Римский город, основанный Помпеем для контроля над внутренними районами Причерноморья. С недавно раскопанной колоннадной улицей — один из главных археологических памятников Кастамону.',
  '114': 'Важный римский город Понта и родина епископа III века Григория Чудотворца. Его остатки находятся в Никсаре.',
  '116': 'Летняя столица Коммагенского царства. С гигантским высеченным в скале рельефом рукопожатия и гробницей Митридата Каллиника её посещают вместе с горой Немрут.',
  '117': 'Город Коммагены, знаменитый скальными гробницами. Высеченный в скале некрополь и пещерные церкви делают его одним из самых самобытных античных памятников региона.',
  '118': 'Античный портовый город на побережье Киликии. Расположенный в современном Айдынджике, он хранит мозаики и остатки построек — свидетельства богатой истории региона.',
  '120': 'Античный город на реке Джейхан, известный также как Иераполь Кастабала. С храмом Артемиды и скальной крепостью — один из примечательных памятников Киликии.',
};

const ISIMLER_RU = {
  '1':'Эфес','2':'Афродисиас','3':'Пергам','4':'Иераполис - Памуккале',
  '5':'Милет','6':'Дидим','7':'Сарды','8':'Приена','9':'Ассос',
  '10':'Айзанои','11':'Лаодикея','12':'Стратоникея','13':'Книд','14':'Теос',
  '15':'Колофон','16':'Троя','17':'Исторический полуостров Стамбула','18':'Бурса Улу Джами',
  '19':'Кизик','20':'Даскилеон','21':'Аспендос','22':'Патара','23':'Ксантос',
  '24':'Сиде','25':'Термесс','26':'Перге','27':'Мира - Демре','28':'Сагалассос',
  '29':'Арыканда','30':'Селге','31':'Фаселис','32':'Анемурион','33':'Анаварза',
  '34':'Чатал-Хёюк','35':'Хаттуша','36':'Каппадокия','37':'Деринкуйу',
  '38':'Гордион','39':'Алачахёюк','40':'Мечеть Улу в Дивриги','41':'Музей Мевляны',
  '42':'Карахантепе','43':'Кюльтепе','44':'Анкарская крепость','45':'Комплекс Хаджибекташ',
  '46':'Гёбекли-Тепе','47':'Гора Немрут','48':'Харран','49':'Зеугма',
  '50':'Стены Диярбакыра','51':'Старый город Мардин','52':'Дара',
  '53':'Самосата','54':'Тумулус Каракуш','55':'Руины Ани','56':'Церковь Акдамар',
  '57':'Крепость Чавуштепе','58':'Дворец Исхак-Паши','59':'Ванская крепость',
  '60':'Сельджукское кладбище Ахлат','61':'Старый Догубаязит','62':'Монастырь Сумела',
  '63':'Трабзонская Айя-София','64':'Синопская крепость','65':'Сафранболу',
  '66':'Амасийская крепость','67':'Амисос (Самсун)','68':'Крепость Кастамону',
  '69':'Летоон','70':'Олимпос','71':'Элеуса Себасте','72':'Ниса',
  '73':'Траллы','74':'Магнесия-на-Меандре','75':'Алабанда','76':'Алинда',
  '77':'Эвромос','78':'Лабраунда','79':'Гераклея Латмосская','80':'Иасос',
  '81':'Керамос','82':'Кавн','83':'Кадианда','84':'Пинара',
  '85':'Тлос','86':'Кибира','87':'Кремна','88':'Адада',
  '89':'Антиохия Писидийская','90':'Ольба','91':'Узунджабурч (Диокесария)','92':'Солы-Помпейополь',
  '93':'Эги','94':'Пессинунт','95':'Метрополис','96':'Кларос',
  '97':'Нотион','98':'Эритры','99':'Фокея','100':'Клазомены',
  '101':'Смирна','102':'Эги (Эолида)','103':'Фиатира','104':'Филадельфия',
  '105':'Кима','106':'Мирина','107':'Асклепион Пергама','108':'Адрамиттий',
  '109':'Александрия Троадская','110':'Никея (Изник)','111':'Прусиас-ад-Гипиум','112':'Амастрида',
  '113':'Помпейополь','114':'Неокесария','116':'Арсамея',
  '117':'Перре','118':'Келендерис','120':'Кастабала',
};

const MEDENIYETLER_DE = {
  'Yunan':'Griechisch','Roma':'Römisch','Bizans':'Byzantinisch','Helenistik':'Hellenistisch',
  'İyon':'Ionisch','Pers':'Persisch','Lidya':'Lydisch','Hitit':'Hethitisch',
  'Neolitik':'Neolithisch','Neolitik Öncesi':'Vor-Neolithisch','Tunç Çağı':'Bronzezeit',
  'Kalkolitik':'Chalkolithisch','Frig':'Phrygisch','Urartu':'Urartäisch','Ermeni':'Armenisch',
  'Selçuklu':'Seldschukisch','Osmanlı':'Osmanisch','Kommagene':'Kommagenisch',
  'Sümer':'Sumerisch','Asur':'Assyrisch','İslam':'Islamisch','Dor':'Dorisch',
  'Likya':'Lykisch','Pisidya':'Pisidisch','Pontus':'Pontisch','Artuklu':'Artuqidisch',
  'Ahlatşahlar':'Schah-Armen','Trabzon İmparatorluğu':'Kaiserreich Trapezunt','Hristiyan':'Christlich',
  'Karya':'Karisch','Aiol':'Äolisch','Makedon':'Makedonisch','Bitinya':'Bithynisch','Süryani':'Syrisch-aramäisch',
};

const MEDENIYETLER_RU = {
  'Yunan':'Греческий','Roma':'Римский','Bizans':'Византийский','Helenistik':'Эллинистический',
  'İyon':'Ионийский','Pers':'Персидский','Lidya':'Лидийский','Hitit':'Хеттский',
  'Neolitik':'Неолитический','Neolitik Öncesi':'Докерамический неолит','Tunç Çağı':'Бронзовый век',
  'Kalkolitik':'Халколитический','Frig':'Фригийский','Urartu':'Урартский','Ermeni':'Армянский',
  'Selçuklu':'Сельджукский','Osmanlı':'Османский','Kommagene':'Коммагенский',
  'Sümer':'Шумерский','Asur':'Ассирийский','İslam':'Исламский','Dor':'Дорийский',
  'Likya':'Ликийский','Pisidya':'Писидийский','Pontus':'Понтийский','Artuklu':'Артукидский',
  'Ahlatşahlar':'Шах-Армены','Trabzon İmparatorluğu':'Трапезундская империя','Hristiyan':'Христианский',
  'Karya':'Карийский','Aiol':'Эолийский','Makedon':'Македонский','Bitinya':'Вифинский','Süryani':'Сирийский',
};

// Ören yeri ID → galeri fotoğraf listesi
const GALERI_MAP = {
  '1':  ['efes_1_or9sqi','efes_2_kfurhw','efes_3_vt9aq4'],
  '2':  ['Afrodisias_1_h0p6bn','Afrodisias_2_fprxhc','Afrodisias_3_en61q0'],
  '3':  ['bergama_1_xvrs7p','bergama_2_c93qsd','bergama_3_qtfsof'],
  '4':  ['Pamukkale_1_jlinlp','Pamukkale_2_jg10db','Pamukkale_3_uoibeq'],
  '5':  ['milet_1_tun56e','milet_2_zdqx3r','milet_3_hka4ic'],
  '6':  ['didim_1_eaxylq','didim_2_mzrroi','didim_3_lc4ml7'],
  '7':  ['sardes_1_u67ond','sardes_2_j0pa3y','sardes_3_g43paa'],
  '8':  ['priene_1_wkw5uc','priene_2_h1hyyy','priene_3_sjnkzk'],
  '9':  ['assos_1_r7wspo','assos_2_pcycdo','assos_3_tfnq7g'],
  '10': ['aizanoi_1_aeo6sx','aizanoi_2_aaashm','aizanoi_3_fnfekd'],
  '11': ['laodikeia_1_fz1vau','laodikeia_2_o7vjbm','laodikeia_3_scyvdg'],
  '12': ['stratonikeia_1_rmkvyn','stratonikeia__2_cumtlp','stratonikeia_3_jp6rad'],
  '13': ['knidos_1_gvbh4v','knidos_2_gyevwa','knidos_3_tzytsc'],
  '14': ['teos_1_fqdtsn','teos_2_xahsxy','teos_3_wtko1v'],
  '16': ['truva_1_u3z7gz','truva_2_sbksyk','truva_3_pxy1rf'],
  '19': ['kyzikos_1_tfrdqz','kyzikos_2_o9qri2','kyzikos_3_bgpdsg'],
  '22': ['patara_1_hklp4w','patara_2_ir7mbm','patara_3_q6in1y'],
  '23': ['xanthos_1_bq3uzk','xanthos_2_pxpc4w','xanthos_3_moklsq'],
  '24': ['side_1_prv45k','side_2_ybxr86','side_3_fqfb07'],
  '25': ['termessos_1_v2sbar','termessos_2_bfaahc','termessos_3_ysjfyw'],
  '26': ['perge_1_wq3t2h','perge_2_cfvmpv','perge_3_qduiys'],
  '27': ['myra__1_pye3kp','myra_2_asq0ix','myra_3_uujxsl'],
  '28': ['sagalassos_1_z5ih9t','sagalassos_2_mfh4i8','sagalassos_3_spompv'],
  '29': ['arykanda_1_s0oonj','arykanda_2_anqurn','arykanda_3_nbwwoy'],
  '30': ['selge_1_oyc0zs','selge_2_dgxtka','selge_3_t76wly'],
  '31': ['Phaselis_1_r5jxv0','Phaselis_2_pd8qye','Phaselis_3_vqn9dd'],
  '32': ['anemurion_1_awsozw','anemurion_2_eivstx','anemurion_3_cs84df'],
  '33': ['anavarza_1_e6jxss','anazarbos_1_d3yie8','anavarza_3_v2ccy6'],
  '34': ['Çatalhöyük_1_ttphf3','Çatalhöyük_2_fffege','Çatalhöyük_3_axvxiz'],
  '35': ['hattuşa_1_knvi9x','hattuşa_2_bab6xi','hattuşa_3_qbjvec'],
  '36': ['Kapadokya_1_h7czwy','Kapadokya_2_qdvkkv','Kapadokya_3_iiimny'],
  '37': ['derinkuyu_1_qavfzu','derinkuyu_2_xbubvn','derinkuyu_3_znhuou'],
  '38': ['gordion_1_xjncpl','gordion_2_zvknyb','gordion_3_wcn3ky'],
  '39': ['alacahoyuk_1_paom97','alacahoyuk_2_myt6do','alacahoyuk_3_hnyl6z'],
  '40': ['divrigi_1_gmrqus','divrigi_2_a081fi','divrigi_3_gzhnwy'],
  '41': ['mevlana_1_usj1gy','mevlana_2_kkal7w','mevlana_3_f1a3s1'],
  '42': ['karahantepe_1_rum97b','karahantepe_2_jqesfw','karahantepe_3_cgt1wo'],
  '43': ['kultepe_1_ff9avi','kultepe_2_o5nth4','kultepe_3_dxqxgj'],
  '44': ['ankara_kalesi_1_jvukye','ankara_kalesi_2_g87cgy','ankara_kalesi_3_h4c3um'],
  '45': ['hacibektash_1_lxcn1l','hacibektash_2_unavqo','hacibektash_3_pcotjn'],
  '46': ['göbeklitepe_1_e8ssz7','göbeklitepe_2_rwlyvw','göbeklitepe_3_noyych'],
  '47': ['Nemrut_1_guipjv','Nemrut_2_swjrvv','Nemrut_3_grfav5'],
  '48': ['harran_1_oxjc8q','harran_2_rzowfp','harran_3_aflevw'],
  '49': ['zeugma_1_fvojsu','zeugma_2_ribymx','zeugma_3_alclid'],
  '51': ['mardin_1_gfz32a','mardin_2_k8cjsb','mardin_3_tnjc1x'],
  '52': ['dara_1_wmwauw','dara_2_jtkkvn','dara_3_ps5c02'],
  '53': ['samsat_1_zlr1ip','samsat_2_vpa69h','samsat_3_pkzewy'],
  '54': ['karakus_1_jf8nyh','karakus_2_q9ojba','karakus_3_k3iwcb'],
  '55': ['ani_1_ty7bap','ani_2_powb6a','ani_3_yel4qh'],
  '56': ['akdamar_1_xynydj','akdamar_2_gt52lm','akdamar_3_e4k39x'],
  '57': ['cavustepe_1_b7leok','cavustepe_2_iudhiw','cavustepe_3_ylhqvb'],
  '58': ['ishak_pasa_1_n713kb','ishak_pasa_2_rh8oow','ishak_pasa_3_avsszl'],
  '59': ['van_kalesi_1_bhfb3a','van_kalesi_2_h0hz7h','van_kalesi_3_hhegqk'],
  '60': ['ahlat_1_zfky2a','ahlat_2_ughdcw','ahlat_3_fxnphr'],
  '61': ['dogubayazit_1_edi7wp','dogubayazit_2_vikvpa','dogubayazit_3_wkys0b'],
  '62': ['sumela_1_jl9ez1','sumela_2_i3hwql','sumela_3_qaxcyv'],
  '63': ['trabzon_1_o3l7rm','trabzon_2_nhnhbd','trabzon_3_ugsls7'],
  '64': ['sinop_1_c4wxii','sinop_2_xudz77','sinop_3_lzdvvm'],
  '65': ['safranbolu_1_knrsjq','safranbolu_2_a4avjp','safranbolu_3_e9yad8'],
  '66': ['amasya_1_qjucaa','amasya_2_j5dery','amasya_3_kl1gtv'],
  '67': ['amisos_1_pc7n3d','amisos_2_orhk28','amisos_3_lriswn'],
  '68': ['kastamonu_1_rwwnvy','kastamonu_2_mxeb9v','kastamonu_3_ulq1bd'],
  '15': ['kolophon_1_udfnhp','kolophon_2_ifhyl2','kolophon_3_esax31'],
  '18': ['bursa_1_mbpvnf','bursa_2_rnhuis','bursa_3_qoxwut'],
  // YENİ 51 ÖREN YERİ
  '69': ['letoon_2_li7ptf','letoon_3_mos4f2','letoon_1_jsc0tf'],
  '70': ['olympos_2_abv3ed','olympos_3_tuxxh0','olympos_1_g7gwza'],
  '71': ['elaiussa_3_dg9xlz','elaiussa_2_tf7xdk','elaiussa_1_eghkvc'],
  '72': ['nysa_3_rrwy3t','nysa_2_rctgaq','nysa_1_d4imyl'],
  '73': ['tralles_1_fiepnt','tralles_3_rzi1as','tralles_2_ijhnxw'],
  '74': ['magnesia_1_apfr7o','magnesia_3_f6wn7d','magnesia_2_ioupmq'],
  '75': ['alabanda_1_ubegnj','alabanda_2_biut0z','alabanda_3_fphp4f'],
  '76': ['alinda_3_xxcgrg','alinda_2_b7u4vl','alinda_1_lqnqic'],
  '77': ['euromos_1_u1kuzk','euromos_2_kfyujw','euromos_3_ylgwvt'],
  '78': ['labranda_1_jlvzvh','labranda_2_z26j10','labranda_3_nudtfc'],
  '79': ['herakleia_3_qufsru','herakleia_2_to9h8y','herakleia_1_bnoyml'],
  '80': ['iassos_2_dbpvpd','iassos_3_t0og3i','iassos_1_bv9q4n'],
  '81': ['keramos_2_p29zyu','keramos_3_ro7npt','keramos_1_h0fmtp'],
  '82': ['kaunos_3_n6ey0p','kaunos_2_wuexxt','kaunos_1_usvci0'],
  '83': ['kadyanda_1_lft6xz','Kadyanda_2_nymir1','kadyanda_3_emsgb7'],
  '84': ['pinara_3_uj8tkm','pinara_2_kxm9pm','pinara_1_a87ywa'],
  '85': ['tlos_1_jeutyb','tlos_2_ldenbc','tlos_3_cgovg1'],
  '86': ['kibyra_3_ar4wid','kibyra_2_ylumgx','kibyra_1_iywnx6'],
  '87': ['kremna_3_kpnz8s','kremna_2_pfkpk0','kremna_1_t1kfql'],
  '88': ['adada_1_ck6ro5','adada_3_tplzjh','adada_2_p59g88'],
  '89': ['antiocheia_2_nyfg51','antiocheia_3_bfws3o','antiocheia_1_yr5a6h'],
  '90': ['olba_1_d3vson','olba_2_a54xdu','olba_3_jhon8l'],
  '91': ['uzuncaburc_1_fdvkho','uzuncaburc_2_infzht','uzuncaburc_3_lwecoq'],
  '92': ['soli_1_huquxg','soli_3_do5v2l','soli_2_g4bwe3'],
  '93': ['aigeai_3_qjawiw','aigeai_2_lhjieo','aigeai_1_wxywie'],
  '94': ['pessinus_1_jzdc9o','pessinus_3_hjchxg','pessinus_2_zxs7do'],
  '95': ['metropolis_2_hrjalv','metropolis_3_fmblqu','metropolis_1_j5a0u3'],
  '96': ['klaros_2_dio4pe','klaros_3_vieagk','klaros_1_qa0t1z'],
  '97': ['notion_1_huzqq8','notion_3_dchp2d','notion_2_ynis6d'],
  '98': ['erythrai_1_orkw2t','erythrai_3_upnzax','erythrai_2_eujhfi'],
  '99': ['phokaia_1_ucr06a','Phocaea_3_welu3q','Phocaea_2_jnicwy'],
  '100': ['klazomenai_1_jzhppt','klazomenai_2_osuyxf','klazomenai_3_vku9mj'],
  '101': ['smyrna_2_faenbe','smyrna_3_jxlxdh','smyrna_1_rjfawo'],
  '102': ['aigai_1_liqkw3','aigai_2_newymq','aigai_3_wakvil'],
  '103': ['thyateira_3_q0cgel','thyateira_2_xdcvca','thyateira_1_lajolj'],
  '104': ['philadelphia_2_jmtlbi','philadelphia_3_pfdr4v','philadelphia_1_kzeafx'],
  '105': ['kyme_1_cqmmej','kyme_2_lnu8zp','kyme_3_gyrtu8'],
  '106': ['myrina_1_hlnful','myrina_3_dr0pyo','myrina_2_hbneb9'],
  '107': ['asklepion_2_gucx9q','asklepion_3_y6lyaq','asklepion_1_bvmfyz'],
  '108': ['adramytteion_3_cs4kkr','adramytteion_2_fimy4g','adramytteion_1_wqks9n'],
  '109': ['alexandreia_2_hna5oa','alexandreia_3_li8esn','alexandreia_1_b7qneg'],
  '110': ['nikaia_2_wt4iyl','nikaia_3_yrgvfa','nikaia_1_lfamh4'],
  '111': ['prusias_1_vulyhd','prusias_2_iwaqzl','prusias_3_ldjlul'],
  '112': ['amastris_1_ynpcau','amastris_2_ghd1xm','amastris_3_lmoq2q'],
  '114': ['neokaisareia_1_ciwmlb','neokaisareia_2_wjkbsq','neokaisareia_3_yvfqks'],
  '117': ['perre_1_le3o0f','perre_3_khxaox','perre_2_ggvntt'],
  '118': ['kelenderis_1_cpeqzl','kelenderis_2_dadwbt','kelenderis_3_dmbqu0'],
  '120': ['kastabala_3_gaxcy7','kastabala_2_syhjbl','kastabala_1_isyj3p'],
  '21': ['aspendos_1_dsvrqk','aspendos_2_gt6l1o','aspendos_3_i5mv2g'],
};

const DONEM_META = {
  '1': {
    isim: 'Taş Devri', tarih: 'M.Ö. 10.000 – 3.000', emoji: '🪨',
    medeniyetler: ['Neolitik', 'Kalkolitik', 'Çatalhöyük', 'Göbeklitepe'],
    imgPrompt: 'neolithic stone age Anatolia ancient stone temple prehistoric ritual pillars dramatic golden sunrise cinematic oil painting',
    aiPrompt: `Anadolu'nun Taş Devri (M.Ö. 10.000 – 3.000) için büyüleyici bir dönem portresi yaz. Bu dönemde insanlar nasıl yaşıyordu, neye inanıyordu? Göbeklitepe ve Çatalhöyük gibi yapıları kim inşa etti? Anadolu bu dönemde insanlık tarihine ne kattı? Sanki o çağa açılan bir pencereden bakıyormuş gibi, şiirsel ve etkileyici bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '2': {
    isim: 'Tunç Çağı', tarih: 'M.Ö. 3.000 – 1.200', emoji: '⚔️',
    medeniyetler: ['Hitit', 'Truva', 'Asur', 'Sümer'],
    imgPrompt: 'Bronze Age Anatolia Hittite empire ancient city gates stone walls dramatic epic landscape golden light cinematic',
    aiPrompt: `Anadolu'nun Tunç Çağı (M.Ö. 3.000 – 1.200) için büyüleyici bir dönem portresi yaz. Hitit İmparatorluğu nasıl bir güçtü? Truva savaşları gerçek miydi? Bu çağda Anadolu hangi medeniyetlerin beşiği oldu? O dönemin havasını, gücünü ve sırlarını hissettiren, şiirsel bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '3': {
    isim: 'Demir Çağı', tarih: 'M.Ö. 1.200 – 550', emoji: '👑',
    medeniyetler: ['Lidya', 'Frig', 'Urartu', 'İyon'],
    imgPrompt: 'Iron Age Anatolia Phrygian Lydian ancient kingdom rocky fortress dramatic moody landscape cinematic historical',
    aiPrompt: `Anadolu'nun Demir Çağı (M.Ö. 1.200 – 550) için büyüleyici bir dönem portresi yaz. Paranın icadından Gordion düğümüne, Kral Midas'ın altınlarından ilk filozoflara kadar bu çağın ruhu neydi? Anadolu bu dönemde nasıl değişti? Şiirsel ve etkileyici bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '4': {
    isim: 'Antik Çağ', tarih: 'M.Ö. 550 – M.S. 395', emoji: '🏛',
    medeniyetler: ['Yunan', 'Pers', 'Roma', 'Helenistik'],
    imgPrompt: 'ancient classical Greco-Roman Anatolia magnificent marble temple columns agora Mediterranean sea golden hour dramatic cinematic',
    aiPrompt: `Anadolu'nun Antik Çağı (M.Ö. 550 – M.S. 395) için büyüleyici bir dönem portresi yaz. Efes, Bergama, Afrodisyas gibi dev şehirlerde hayat nasıldı? İskender'in fırtınası, Roma'nın ihtişamı bu toprakları nasıl dönüştürdü? O çağın görkemini, felsefesini, sanatını hissettiren şiirsel bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '5': {
    isim: 'Bizans', tarih: 'M.S. 395 – 1453', emoji: '⛪',
    medeniyetler: ['Bizans', 'Hristiyan', 'Rum', 'Ermeni'],
    imgPrompt: 'Byzantine empire Anatolia grand cathedral golden mosaic dome dramatic candlelight atmospheric medieval cinematic painting',
    aiPrompt: `Anadolu'nun Bizans Dönemi (M.S. 395 – 1453) için büyüleyici bir dönem portresi yaz. Konstantinopolis'in ihtişamı, kaya kiliseler, manastırlar, imparatorluk sarayları… Bu bin yıllık çağda Anadolu nasıl bir dünya kurdu? O dönemin ruhani derinliğini, siyasi çalkantısını, sanatsal zenginliğini şiirsel bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '6': {
    isim: 'Selçuklu', tarih: 'M.S. 1071 – 1299', emoji: '🌙',
    medeniyetler: ['Selçuklu', 'İslam', 'Artuklu', 'Danişmend'],
    imgPrompt: 'Seljuk Sultanate Anatolia grand caravanserai mosque minaret medieval Islamic architecture dramatic desert light cinematic',
    aiPrompt: `Anadolu'nun Selçuklu Dönemi (1071 – 1299) için büyüleyici bir dönem portresi yaz. Malazgirt'ten Konya'ya uzanan bu büyük dönüşümde Anadolu nasıl bir İslam medeniyeti kurdu? Kervansaraylar, medreseler, Mevlana'nın Konya'sı, taş işçiliğinin şaheserleri… O çağın ruhunu hissettiren şiirsel bir dille anlat. Türkçe, maksimum 180 kelime.`
  },
  '7': {
    isim: 'Osmanlı', tarih: 'M.S. 1299 – 1922', emoji: '🕌',
    medeniyetler: ['Osmanlı', 'İslam', 'Türk', 'Çok uluslu'],
    imgPrompt: 'Ottoman empire Anatolia grand mosque palace Bosphorus golden age dramatic sunset cinematic historical painting',
    aiPrompt: `Anadolu'nun Osmanlı Dönemi (1299 – 1922) için büyüleyici bir dönem portresi yaz. Küçük bir beylikten üç kıtaya yayılan imparatorluğa uzanan bu yolculukta Anadolu nasıl bir merkeze dönüştü? Camileri, sarayları, çarşıları, çeşmeleriyle hangi dünya kuruldu? O dönemin ihtişamını ve insanının ruhunu şiirsel bir dille anlat. Türkçe, maksimum 180 kelime.`
  }
};

// Koordinatlar — her ören yeri için
const KOORDINATLAR = {
  '1':[37.9395,27.3416],'2':[37.7086,28.7228],'3':[39.1317,27.1840],
  '4':[37.9200,29.1233],'5':[37.5300,27.2700],'6':[37.3800,27.2500],
  '7':[38.4800,28.0500],'8':[37.6600,27.2900],'9':[39.4900,26.3400],
  '10':[39.0567,29.6458],'11':[37.8394,29.1072],'12':[37.3300,28.0600],
  '13':[36.6900,27.3700],'14':[38.1800,26.7900],'15':[38.9500,26.3700],
  '16':[39.9573,26.2388],'17':[41.0082,28.9784],'18':[40.1828,29.0614],
  '19':[40.3800,27.8900],'20':[40.1500,27.9500],
  '21':[36.9400,31.1700],'22':[36.2600,29.3200],'23':[36.3500,29.3200],
  '24':[36.7700,31.3900],'25':[37.0600,30.4700],'26':[36.9600,30.8500],
  '27':[36.2500,29.9800],'28':[37.6400,30.5200],'29':[36.6400,30.2200],
  '30':[37.0300,31.1800],'31':[36.5300,30.5500],'32':[36.0400,32.8300],
  '33':[37.2600,35.9000],
  '34':[37.6676,32.8267],'35':[40.0197,34.6154],'36':[38.6431,34.8289],
  '37':[38.3742,34.7350],'38':[39.6500,31.9900],'39':[40.2333,34.6833],
  '40':[39.3725,38.1150],'41':[37.8714,32.5047],'42':[37.2600,38.7400],
  '43':[38.8500,35.6300],'44':[39.9418,32.8639],'45':[38.9417,34.5567],
  '46':[37.2231,38.9225],'47':[37.9810,38.7411],'48':[36.8614,39.0267],
  '49':[37.0600,37.3800],'50':[37.9100,40.2300],'51':[37.3125,40.7339],
  '52':[37.2100,40.9200],'53':[37.7500,38.3000],'54':[37.8500,38.6500],
  '55':[40.5069,43.5731],'56':[38.3489,43.3497],'57':[38.2833,43.4000],
  '58':[39.7167,44.4833],'59':[38.5000,43.3700],'60':[38.7500,42.4900],
  '61':[39.5500,44.0500],
  '62':[40.6921,39.6583],'63':[41.0028,39.7197],'64':[42.0258,35.1536],
  '65':[41.2500,32.6939],'66':[40.6500,35.8300],'67':[41.2800,36.3300],
  '68':[41.3800,33.7800],
  // Yeni ören yerleri
  '69':[36.3300,29.2800],'70':[36.3900,30.4700],'71':[36.7100,34.2300],
  '72':[37.8700,28.1200],'73':[37.8500,27.8400],'74':[37.8600,27.5200],
  '75':[37.6300,28.1700],'76':[37.6100,27.9000],'77':[37.4100,27.7200],
  '78':[37.4200,27.8100],'79':[37.4900,27.5600],'80':[37.2800,27.6200],
  '81':[37.1900,28.0000],'82':[36.8400,28.5800],'83':[36.7000,29.1800],
  '84':[36.4500,29.2700],'85':[36.5500,29.4500],'86':[37.0900,29.5000],
  '87':[37.4500,30.6200],'88':[38.1100,30.5700],'89':[38.3100,31.1900],
  '90':[36.4700,33.5200],'91':[36.5000,33.5400],'92':[36.7200,34.5200],
  '93':[37.0500,35.9800],'94':[39.1800,31.0000],'95':[38.0500,27.0000],
  '96':[38.0000,27.0800],'97':[37.9800,27.0500],'98':[38.3800,26.7300],
  '99':[38.6700,26.7500],'100':[38.4500,26.8000],'101':[38.4192,27.1287],
  '102':[38.9500,27.3200],'103':[38.9200,27.8400],'104':[38.3600,28.5200],
  '105':[38.7600,26.9800],'106':[38.9200,26.9700],'107':[39.1317,27.1840],
  '108':[39.5800,27.0200],'109':[39.7500,26.1700],'110':[40.4272,29.7220],
  '111':[41.1500,31.3000],'112':[41.7500,32.3800],'113':[41.3800,33.7800],
  '114':[40.5200,36.9500],'116':[37.9500,38.7400],
  '117':[37.8000,38.3000],'118':[36.1300,33.3200],
  '120':[37.2300,36.2700],
};

const LEZZETLER = {
  'ege': {
    baslik: 'Ege Mutfağı', aciklama: 'Zeytinyağı, deniz ürünleri ve taze otların buluştuğu sağlıklı mutfak',
    lezzetler: [
      { isim: 'Zeytinyağlı Enginar', aciklama: 'Taze enginarın zeytinyağı, limon ve dereotu ile pişirildiği Ege\'nin vazgeçilmezi', emoji: '🫒' },
      { isim: 'Midye Dolma', aciklama: 'İzmir sokaklarının simgesi, baharatlı pirinçle doldurulmuş taze midye', emoji: '🦪' },
      { isim: 'Boyoz', aciklama: 'İzmir\'e özgü susam ezmeli hamur işi, sabah kahvaltısının yıldızı', emoji: '🥐' },
      { isim: 'Kumru', aciklama: 'İzmir\'in ünlü sandviçi — sucuk, sosis, kaşar ve domatesle', emoji: '🥪' },
      { isim: 'Gevrek', aciklama: 'İzmir simidinin özel adı — ince, çıtır, susam kaplamalı', emoji: '🥨' },
    ]
  },
  'akdeniz': {
    baslik: 'Akdeniz Mutfağı', aciklama: 'Narenciye, baharatlar ve deniz ürünlerinin buluştuğu zengin mutfak',
    lezzetler: [
      { isim: 'Antalya Piyazı', aciklama: 'Haşlanmış fasulye, yumurta, tahin ve zeytinyağıyla hazırlanan meşhur Antalya salatası', emoji: '🥗' },
      { isim: 'Şiş Köfte', aciklama: 'Antalya usulü baharatlı kuzu kıymasından şişte pişirilmiş köfte', emoji: '🍢' },
      { isim: 'Kabak Tatlısı', aciklama: 'Fırında pişirilmiş balkabağı üzerine ceviz ve kaymak', emoji: '🎃' },
      { isim: 'Hibes', aciklama: 'Susam ezmesi, limon ve sarımsakla hazırlanan Akdeniz mezesi', emoji: '🫙' },
      { isim: 'Tahinli Pide', aciklama: 'Mersin\'e özgü tahin ve pekmezle yapılan özel pide', emoji: '🫓' },
    ]
  },
  'guneydogu': {
    baslik: 'Güneydoğu Mutfağı', aciklama: 'Kebap, baklava ve fıstığın diyarı — Türkiye\'nin en zengin mutfağı',
    lezzetler: [
      { isim: 'Urfa Kebabı', aciklama: 'Acı biberiyle ünlü, közde pişirilmiş Şanlıurfa\'nın simge lezzeti', emoji: '🍖' },
      { isim: 'Antep Baklavası', aciklama: 'Taze Antep fıstığıyla yapılan, tüm dünyanın tanıdığı baklava', emoji: '🍮' },
      { isim: 'Lahmacun', aciklama: 'İnce hamur üzerine kıyma ve baharatlardan yapılan "Türk pizzası"', emoji: '🥙' },
      { isim: 'Çiğköfte', aciklama: 'Bulgur, biber salçası ve baharatlarla yoğrulan Urfa\'nın meşhur lezzeti', emoji: '🌶️' },
      { isim: 'Katmer', aciklama: 'Antep\'te kahvaltının yıldızı — fıstıklı, kaymakla servis edilen çıtır hamur', emoji: '🥞' },
    ]
  },
  'ic': {
    baslik: 'İç Anadolu Mutfağı', aciklama: 'Bozkırın bereketi — et yemekleri, hamur işleri ve tahıl ürünleri',
    lezzetler: [
      { isim: 'Konya Etliekmek', aciklama: 'Yarım metre uzunluğunda ince hamur üzerine kıymalı Konya\'nun simgesi', emoji: '🫓' },
      { isim: 'Tirit', aciklama: 'Kuzu eti suyuna batırılmış ekmek parçaları üzerine yoğurt ve tereyağıyla', emoji: '🍲' },
      { isim: 'Keşkek', aciklama: 'Düğün yemeği — buğday ve etle saatlerce pişirilen geleneksel lezzet', emoji: '🫕' },
      { isim: 'Nevşehir Güveci', aciklama: 'Kapadokya\'nın toprak güveçte pişirilen kuzu eti ve sebze yemeği', emoji: '🏺' },
      { isim: 'Simit Çorbası', aciklama: 'Ankara\'ya özgü, domates ve baharatlı simit parçalarıyla hazırlanan çorba', emoji: '🥣' },
    ]
  },
  'dogu': {
    baslik: 'Doğu Anadolu Mutfağı', aciklama: 'Soğuk iklimlerin güçlü mutfağı — yoğurt, et ve tahılın mükemmel uyumu',
    lezzetler: [
      { isim: 'Kars Gravyeri', aciklama: 'Alp otlarıyla beslenen ineklerin sütünden yapılan Türkiye\'nin en ünlü peyniri', emoji: '🧀' },
      { isim: 'Van Kahvaltısı', aciklama: '20\'den fazla çeşit peynir ve otlu peynirle Türkiye\'nin en zengin kahvaltısı', emoji: '🍳' },
      { isim: 'Otlu Peynir', aciklama: 'Van\'a özgü, taze dağ otlarıyla olgunlaştırılmış beyaz peynir', emoji: '🌿' },
      { isim: 'Kadayıf Dolması', aciklama: 'Erzincan\'ın özel tatlısı — ceviz ve fıstıkla doldurulmuş kadayıf', emoji: '🍯' },
      { isim: 'Piti', aciklama: 'Nohut ve kuzu etiyle yapılan toprak güveç yemeği', emoji: '🫕' },
    ]
  },
  'karadeniz': {
    baslik: 'Karadeniz Mutfağı', aciklama: 'Mısır, fındık ve hamsi — Karadeniz\'in üç büyük hazinesi',
    lezzetler: [
      { isim: 'Hamsi Tava', aciklama: 'Mısır ununa bulanıp tavada kızartılan Karadeniz\'in simge balığı', emoji: '🐟' },
      { isim: 'Kuymak', aciklama: 'Mısır unu ve Trabzon peyniriyle yapılan, tereyağıyla servis edilen kahvaltılık', emoji: '🧀' },
      { isim: 'Mısır Ekmeği', aciklama: 'Sarı mısır unuyla yapılan, Karadeniz sofralarının vazgeçilmezi', emoji: '🌽' },
      { isim: 'Hamsili Pilav', aciklama: 'Taze hamsiyle hazırlanan, üzeri hamsi dizili fırın pilavı', emoji: '🍚' },
      { isim: 'Fındık Ezmesi', aciklama: 'Giresun ve Ordu\'nun taze fındığından yapılan kremalı ezme', emoji: '🌰' },
    ]
  },
  'marmara': {
    baslik: 'Marmara Mutfağı', aciklama: 'Osmanlı mirasının en zengin sofrası — İstanbul\'un kozmopolit mutfağı',
    lezzetler: [
      { isim: 'İskender Kebabı', aciklama: 'Bursa\'nın dünyaca ünlü lezzeti — döner eti, yoğurt, domates sosu ve tereyağı', emoji: '🍖' },
      { isim: 'Balık Ekmek', aciklama: 'İstanbul Boğazı\'nın simgesi — ızgara balık, marul ve soğanla', emoji: '🐠' },
      { isim: 'Ezine Peyniri', aciklama: 'Çanakkale\'nin koyun sütünden olgunlaştırılan köklü beyaz peyniri', emoji: '🧀' },
      { isim: 'Troya Balı', aciklama: 'Çanakkale\'nin çam ve kekik balı — antik arazilerin aroması', emoji: '🍯' },
      { isim: 'Kestane Şekeri', aciklama: 'Bursa\'nın yüzyıllık geleneği — şekerli şurupla kaplanan kestane', emoji: '🌰' },
    ]
  },
};

const EFSANELER = {
'1': { baslik: 'Androklos\'un Kehaneti', icerik: `Atina Kralı Kodros'un oğlu Androklos, yeni bir yurt aramak için denize açıldı. Delphi'deki Apollon Tapınağı'nın kahinleri ona şöyle dedi: "Bir balık ve bir domuzun sana yol göstereceği yerde şehri kur."

Androklos ve arkadaşları Kaystros Nehri kıyısına çıktıklarında ateş yakıp balık pişirmeye başladılar. Tam o sırada çalıların arasından bir yaban domuzu fırlayıp balığı kaparak kaçtı. Androklos bunun kutsal işaret olduğunu anlayarak şehri bu noktada kurdu — böylece Efes doğdu.

Bir başka rivayete göre ise şehrin temellerini Amazon savaşçı kadınlar atmıştır. Bu yiğit kadınların kenti, ana tanrıça Artemis'e adandı. Efes'teki Artemis Tapınağı zamanla dünyanın yedi harikasından biri haline geldi.` },
'3': { baslik: 'Telephos ve Pergamon\'un Yükselişi', icerik: `Efsaneye göre Bergama'yı kuran, Herakles'in oğlu Telephos'tur. Annesi Auge bir tapınak rahibesiydi; yasak aşkın ürünü olan Telephos doğar doğmaz ormana terk edildi. Onu bir dişi geyik emzirdi ve büyüttü.

Telephos yıllar sonra babasını bulmak için Yunanistan'a gitti. Bir kehanet ona Mysialıların kralı olacağını söylemişti — bu kehanet Bergama topraklarında gerçekleşti.

Roma döneminde ise Bergama'nın asıl efsanesi tıpla yazıldı. Tanrı Asklepios'a adanan şifa merkezinde hastalar kutsal rüyalar görür, kutsal sularda yıkanır ve müzik dinleyerek iyileşirdi. Hekim Galenos bu topraklarda yetişti ve kaleme aldığı tıp eserleri 1400 yıl boyunca dünyaya yol gösterdi.` },
'16': { baslik: 'Troya\'nın Düşüşü', icerik: `On yıl süren kuşatma boyunca ne Akhalar Troya'yı geçebildi ne de Trojalılar onları geri çekebildi. Ta ki Odysseus'un aklına olmadık bir plan gelinceye dek: İçi askerle dolu devasa bir tahta at.

Trojalılar sabah uyandıklarında kıyıda kocaman bir tahta at gördüler. "Athena'ya adak" diye kandırıldılar ve atı surların içine çektiler. Gece yarısı atın karnından çıkan askerler kapıları açtı — Troya o gece yandı.

Ancak arkeologlar şunu buldu: Troya gerçekten var olmuştu. Homeros'un anlattığı efsane, gerçek bir savaşın yankısıydı. Dokuz farklı Troya kenti üst üste kurulmuştu — her biri bir öncekinin küllerinden doğmuştu.` },
'46': { baslik: 'Zamanın Başladığı Tepe', icerik: `Arkeologlar 1994'te bu tepeyi kazmaya başladığında tarihin yeniden yazılacağını bilmiyorlardı. M.Ö. 9600'e ait T biçimli devasa taşlar ortaya çıktı — insanlık tarihinin bilinen ilk tapınağı.

O güne kadar "Önce tarım geldi, sonra şehirler, sonra din" deniyordu. Göbekli Tepe her şeyi tersine çevirdi: Din önce gelmiş, tapınak önce inşa edilmişti. Henüz çiftçiliği bilmeyen avcı-toplayıcı insanlar, onlarca ton ağırlığındaki taşları taşımış ve ustalıkla işlemişlerdi.

Üstelik tapınak binlerce yıl sonra kasıtlı olarak toprağa gömülmüştü — sanki kutsal bir sır saklanır gibi. Kim gömmüştü, neden gömmüştü? Bu soru hâlâ yanıtsız.` },
'47': { baslik: 'Tanrıların Tahtı', icerik: `I. Antiokhos hem Yunan hem Pers kanı taşıyan bir kraldı. Kendini tanrıların torunu sayıyor, ölümünden sonra da tapılmasını istiyordu. Bu yüzden 2150 metre yüksekliğindeki Nemrut Dağı'nın tepesine dev bir tümülüs yaptırdı.

Tümülüsün etrafına Zeus, Apollon, Herakles ve kendisinin devasa taş heykellerini diktirdi. Her gün güneş doğarken ve batarken bu heykellerin silueti kana boyanıyordu.

Bugün o heykellerin başları yerinden düşmüş, yüzleri binlerce yıllık rüzgâra karşı durmuş olarak zeminde yatıyor. Ama her gün binlerce insan o muhteşem gün doğumunu görmek için dağa çıkıyor — Antiokhos'un hayali bir bakıma gerçek oldu.` },
'35': { baslik: 'Tarihin İlk Barış Antlaşması', icerik: `M.Ö. 1274'te Mısır Firavunu II. Ramses ile Hitit Kralı III. Hattusili, Kadeş'te karşı karşıya geldi. İki süper güç birbirini yok edemedi — savaş beraberliyle bitti.

Bunun üzerine iki kral tarihin bilinen ilk barış antlaşmasını imzaladı. Antlaşma hem hiyeroglif hem çivi yazısıyla yazıldı. Hattuşa'dan çıkan Hitit versiyonu bugün BM'nin New York merkezinde sergileniyor.

Şehir M.Ö. 1200'de gizemli bir şekilde terk edildi — yangın izleri var ama kim yaktığı hâlâ bilinmiyor.` },
'34': { baslik: 'İnsanlığın İlk Şehri', icerik: `M.Ö. 7500'de Konya ovasında bir topluluk çamurdan evler inşa etmeye başladı. Ama bu evlerin kapısı yoktu — insanlar çatıdaki delikten merdivenle girip çıkıyordu. Ölülerini de evin içine, yatakların altına gömdüler.

Çatalhöyük'te 8000 insan bir arada yaşıyordu. Ana tanrıça heykelcikleri, boğa kafataslı duvarlar, avlanma sahneleri... Arkeologlar kazı yaptıkça hayrete düştü.

İlginç olan şu: Çatalhöyük'te zengin-fakir farkı yoktu. Tüm evler aynı büyüklükte, tüm kemikler aynı beslenmeden iz taşıyordu. İnsanlığın ilk şehri aynı zamanda belki de en eşit şehriydi.` },
'4': { baslik: 'Gözyaşından Doğan Beyaz Cennet', icerik: `Efsaneye göre bir zamanlar Leukippos adında genç bir adam Apollon'un peşinden koşan Daphne'ye âşık oldu. Ama Apollon da aynı güzeli seviyordu. Tanrı kıskanç çıktı ve Leukippos'u öldürttü.

Daphne ağladı, gözyaşları yere düştü ve beyaz kayalara dönüştü. İşte Pamukkale'nin bembeyaz travertenleri bu gözyaşlarından oluşmuştu.

Roma döneminde Hierapolis kenti bu mucizevi suların üzerine kuruldu. Stoacı filozofu Epiktetos burada doğdu — köle olarak dünyaya gelmişti ama özgür düşüncenin en büyük temsilcisi oldu.` },
'6': { baslik: 'Apollon\'un Sesi', icerik: `Tanrı Apollon, genç Brankhos'u o kadar çok sevdi ki ona kehanet gücü bahşetti. Brankhos'un soyundan gelenler yüzyıllarca Didim'deki kutsal tapınağı yönetti.

Antik dünyanın en büyük ikinci kehanet merkezinde kahin kadınlar yer altındaki odaya inerek kutsal sudan içer ve transa geçerdi. O halden çıkan sözler Apollon'un kehaneti sayılırdı.

Büyük İskender sefere çıkmadan önce Didim'e danıştı. Aldığı yanıt onu cesaretlendirdi — gerçekten de Asya'yı fethetti.` },
'7': { baslik: 'Altına Dokunan Kral', icerik: `Kral Midas tanrı Dionysos'a iyilik yapmıştı. Tanrı teşekkür olarak ona bir dilek hakkı tanıdı. Midas düşünmeden "Dokunduğum her şey altına dönsün" dedi.

İlk başta harika görünüyordu. Ta ki yemek yemek isteyene kadar. Ekmek altına döndü, su altına döndü. Sevgili kızını sarmaladığında o da altına döndü. Midas ağlayarak Dionysos'a yalvardı.

Kral Midas'ın gerçek adının Mita olduğunu arkeologlar kanıtladı. Onun için yapılan tümülüs açıldığında içinde sarı boyalı ahşap kaplar bulundu — altın değil ama altın renkli. Belki efsane buradan doğmuştu.` },
'38': { baslik: 'Gordion Düğümü', icerik: `Gordion'da bir tapınağın direğine bağlanmış eski bir araba duruyordu. Düğüm o kadar girift sarılmıştı ki kimse çözemiyordu. Kehanet şöyleydi: "Bu düğümü kim çözerse bütün Asya'ya hükmedecek."

M.Ö. 333'te genç Büyük İskender şehre girdi. Kalabalık düğümün etrafında toplandı. İskender uzun uzun baktı, sonra kılıcını çekip tek hamlede kesti. "Düğümü çözdüm" dedi.

Bu cesur hareket bir efsane yarattı. "Gordion Düğümü" o günden bu yana çözülmesi zor görünen problemleri cesurca çözmenin simgesi oldu.` },
'41': { baslik: 'Aşkın ve Hoşgörünün Piri', icerik: `1207'de Belh'te doğan Celaleddin, henüz çocukken babasıyla birlikte Moğol istilasından kaçtı. Konya'ya yerleştiklerinde Celaleddin bir din âlimiydi — ta ki Şems-i Tebrizi'yle karşılaşana dek.

Gezgin derviş Şems ona gerçek aşkı öğretti. Şems'in ölümünden sonra Rumi acısını şiirle anlattı — Mesnevi doğdu.

"Gel, gel, ne olursan ol yine gel" dedi. Kâfir de olsan, günahkâr da olsan. Bu çağrı asırlar boyunca milyonlara ulaştı. Bugün yeşil kubbeli türbesine dünyanın dört bir yanından insanlar geliyor.` },
'36': { baslik: 'Peribacalarının Sırrı', icerik: `Halk arasında şöyle anlatılır: Bir zamanlar iki köy sürekli kavga ederdi. Tanrı onlara kızıp hepsini taşa çevirdi — işte peribacaları bunlardır.

İlk Hristiyanlar ise bu coğrafyayı farklı gördü. Roma zulmünden kaçan inananlar peribacalarını oyup kilise ve manastır yaptılar. Yeraltı şehirleri kazdılar — Derinkuyu'da 18 katlı, 20.000 kişilik bir şehir gizliydi toprakların altında.

Kapadokya onlar için sadece barınak değil, inançlarını yaşattıkları kutsal bir vatan oldu.` },
'25': { baslik: 'Kimsenin Fethedemediği Şehir', icerik: `M.Ö. 333'te Büyük İskender Anadolu'yu fethediyordu. Her şehir ya teslim oluyor ya da kısa sürede düşüyordu. Ta ki Termessos'a gelene dek.

Dağın tepesinde, 1665 metre yükseklikte kurulmuş bu Pisidya kenti surlarına güveniyordu. İskender ordusuyla dar geçide girdi — Termessoslular yukarıdan kaya ve ok yağdırdı. Kayıplar çok fazlaydı. İskender kuşatmayı kaldırıp gitti.

"Kartalların yuvası" diye anılan bu şehri hiçbir düşman alamadı. Bugün ormana gömülmüş kalıntılar arasında dolaşırken o gururlu dağ kentinin izlerini hissedebilirsiniz.` },
'23': { baslik: 'İki Kez Yanan Şehir', icerik: `Persler Xanthos'un kapısına dayandığında Likalılar teslim olmayı reddetti. Yenilmek yerine kendi şehirlerini yaktılar — kadınlarını, çocuklarını, hazinelerini ateşe verdiler. Sonra Perslere karşı son savaşa çıktılar ve hepsi öldü.

Yıllar sonra Xanthos yeniden kuruldu. M.Ö. 42'de Roma iç savaşı sırasında Brutus'un ordusu şehri kuşattı. Xanthos'lular yine aynı şeyi yaptı — şehri yakıp son savaşa çıktılar.

İki kez toplu direniş, iki kez külden diriliş. Bu trajik cesaret efsanesi antik kaynaklarda "Xanthos ruhu" olarak geçer.` },
'50': { baslik: 'Siyah Surların Efsanesi', icerik: `Diyarbakır'ın siyah bazalt surları için şöyle denir: "Bu taşlar Nemrut'un cehenneminden getirildi." Gerçekte ise bu volkanik taşlar milyonlarca yıl önce Karacadağ'dan aktı.

Evliya Çelebi 17. yüzyılda buraya geldiğinde "Cin ve devlerin inşa etmiş olmasından başka açıklaması yoktur" diye yazmış. Çünkü bazı taşlar o dönemin teknolojisiyle taşınamayacak kadar büyüktür.

Surlar boyunca dolaşırken dikkat edin — bazı taşlarda aslan, yılan ve kartal kabartmaları var. Bunlar kötü göze karşı konulmuş koruyuculardır.` },
'55': { baslik: 'Bozkırın Ortasındaki Kayıp Şehir', icerik: `Orta Çağ'da Ani, dünyanın en büyük şehirlerinden biriydi — 100.000 kişilik nüfusuyla Paris'le boy ölçüşüyordu. "Bin Bir Kilise Şehri" diye anılırdı.

Sonra her şey değişti. Depremler, Moğol istilası ve ticaret yollarının kayması... Ani yavaş yavaş terk edildi. Binalar çürüdü, surlar yıkıldı, katedraller boşaldı.

Bugün Ani bir hayalet şehir. Bozkırın ortasında dev surlar ve yarı yıkık kiliseler duruyor. Ses yok, insan yok — sadece tarihin ağır sessizliği.` },
'62': { baslik: 'Kayalara Asılan İman', icerik: `Efsaneye göre M.S. 4. yüzyılda iki Atinalı keşiş, yanlarında Meryem Ana'nın mucizevi ikonasını taşıyarak Karadeniz'e açıldı. Bir fırtınada gemileri parçalandı — ikonanın ışığı onlara yol gösterdi ve bu kayalığa sürüklendiler.

Kayanın üzerinde bir mağara vardı. Keşişler burayı manastıra dönüştürdü. Sonraki yüzyıllarda duvarlar kazındı, freskler yapıldı, hazineler birikti.

Bugün Sümela'ya tırmanan ziyaretçiler şunu hisseder: Bu kadar dik bir kayaya bu kadar büyük bir yapıyı inşa etmek nasıl mümkün olmuş?` },
'64': { baslik: 'Fıçıdaki Filozof', icerik: `Sinoplu Diyojen'in serveti yoktu, evi yoktu — ama umursamıyordu. Bir fıçıda yaşıyor, insanlarla alay ediyordu. Gündüz elinde fenerle dolaşıyor, "Dürüst bir insan arıyorum" diyordu.

Büyük İskender bir gün onu ziyarete gitti. "Diyojen, senden ne istersen yerine getireyim" dedi. Diyojen başını kaldırdı: "Güneşimin önünden çekil yeter."

İskender dönüp giderken "Ben İskender olmasaydım, Diyojen olmak isterdim" dedi. Diyojen'in mezarı Sinop'ta, doğduğu kenttedir.` },
'48': { baslik: 'İbrahim\'in Yurdu', icerik: `Üç büyük dinin kutsal kitabı da aynı şeyi söyler: İbrahim Harran'da yaşadı. Tevrat'a göre babası onu buraya götürdü, Kuran'a göre putperest düzene karşı çıktı ve buradan Kenan'a göç etti.

Harran'ın konik damlı evleri bugün hâlâ ayakta. Bu sivri kubbeler yazın serinletici, kışın ısı tutucu — binlerce yıllık bilgeliğin mimarisi.

Harran aynı zamanda dünyanın ilk üniversitesine ev sahipliği yaptı. 9. yüzyılda Harran Okulu'nda Yunan felsefesi Arapça'ya çevrildi — bu çeviriler olmasa Aristoteles Avrupa'ya ulaşamayacaktı.` },
'2': { baslik: 'Afrodit\'in Kenti', icerik: `Efsaneye göre güzellik tanrıçası Afrodit, tüm Anadolu'yu dolaştıktan sonra bu verimli ovayı gördü ve "İşte benim kentim bu olsun" dedi.

Antik dünyada Afrodisyas'ın en büyük hazinesi bir heykeldi: Praksiteles'in yonttuğu çıplak Afrodit. Bu heykel o kadar güzeldi ki uzak diyarlardan gemiler kalkıp onu görmeye gelirdi.

Afrodisyas'ın heykeltıraşları zamanla dünyanın en iyileri arasına girdi. Bir kentin tamamı sanata adanmıştı — taş yontmak burada ibadet kadar kutsaldı.` },
'5': { baslik: 'Felsefenin Doğduğu Kıyı', icerik: `M.Ö. 6. yüzyılda Milet'in limanında garip bir adam yaşıyordu. Thales adındaki bu zat günleri gökyüzüne bakarak geçiriyor, yıldızları hesaplıyordu. Bir gece yürürken yıldızlara dalmış çukura düşmüş.

Thales haksız çıkmadı: M.Ö. 585'teki güneş tutulmasını tam olarak önceden hesapladı. Savaşan iki ordu tutulmayla korkup silah bırakarak barış yaptı.

Milet okulu Batı felsefesinin ilk sorusunu sordu: "Her şeyin temel maddesi nedir?" Bu soru burada, bu kıyıda doğdu.` },
'8': { baslik: 'Anadolu\'nun Pompeisi', icerik: `Priene'nin kuruluş efsanesinde Amazon kraliçesi vardır. Bu yiğit savaşçı kadın, dağlara bakan bu korunaklı konumu seçip şehrin ilk taşını koydu.

Gerçekte Priene, M.Ö. 4. yüzyılda modern şehirciliğin ilk örneği oldu. Mimar Hippodamos'un ızgara planı, dik açılı sokaklar, merkezi agora — bugün hâlâ aynı plan kullanılıyor.

"Anadolu'nun Pompeisi" denir Priene'ye — terk edildikten sonra zamanın içinde dondu.` },
'9': { baslik: 'Aristoteles\'in Bahçesi', icerik: `Aristoteles Platon'un ölümünden sonra Assos'a geldi. Denize bakan Athena Tapınağı'nın gölgesinde okul kurdu. Öğrencileriyle sahil boyunca yürüyerek ders yaptı — bu yüzden okuluna "Yürüyenler" anlamında Peripatetik dendi.

Buradaki yıllarda biyolojiye âşık oldu. Ege'nin deniz canlılarını inceledi, sınıflandırdı. "Hayvanlar Tarihi" modern biyolojinin ilk büyük eseridir.

Denize bakan bu kaya kentin havası ona hem felsefe hem bilim ilhamı verdi.` },
'10': { baslik: 'Zeus\'un Son Kalesi', icerik: `Efsaneye göre Zeus burada doğmuştu. Annesi Rhea onu babası Kronos'tan korumak için bu dağlara saklamıştı. Zeus büyüyüp babasını tahttan indirince minnetle döndü ve kutsal tapınak yaptırdı.

Frig Krallığı yıkılmıştı, Lidyalılar gelip geçmişti, Persler hükmünü sürmüştü. Ama Aizanoi'deki Zeus Tapınağı ayaktaydı. Romalılar bile ona dokunmadı.

Bugün 2. yüzyıldan kalma sütunlar hâlâ ayakta — sanki Zeus'un gölgesi o taşları koruyordu.` },
'11': { baslik: 'Yedi Kilisenin Biri', icerik: `Aziz Yuhanna bu kente özel bir mektup yazdı. Vahiy kitabında Laodikeia'ya sert uyarı var: "Ne sıcak ne soğuksun, ılıksın — seni ağzımdan tüküreceğim."

Laodikeia o dönemde Anadolu'nun en zengin bankacılık merkeziydi. M.S. 60'taki büyük depremden sonra Roma'dan yardım istemedi: "Kendi paramızla kendi şehrimizi yaparız" dedi.

Gurur mu, özgüven mi? Her ikisi de bu antik kentin ruhuna işlemişti.` },
'13': { baslik: 'Güzelliğin Bedeli', icerik: `Knidos'un en büyük hazinesi antik dünyanın ilk çıplak kadın heykeli Afrodit'ti. Praksiteles'in eseri, banyoya girmek üzere olan tanrıçayı gösteriyordu.

Rivayete göre bu heykeli gece tapınağa giren biri öptü — dudak izi sabah görüldü. Bu dedikodu bütün antik dünyaya yayıldı ve Knidos daha da ünlendi.

Bir denizci heykele o kadar çok baktı ki sonunda denize atlayarak kendini öldürdü. Güzelliğin bedeli bu muydu?` },
'14': { baslik: 'Şarabın Tanrısına Adanmış Kent', icerik: `Dionysos şarap tanrısıydı, şairlerin hamisiydi. Teos ona o kadar bağlıydı ki şehrin sikkesinde hep üzüm salkımı vardı.

Şair Anakreon burada doğdu. "Yaşarken yaşa" diyordu. Onun adını taşıyan şiir formu "anakreontik" bugün hâlâ kullanılır.

Teos aynı zamanda en güçlü oyuncu ve müzisyen loncasının merkeziydi. Eğlencenin kutsal sayıldığı nadir kentlerden biriydi.` },
'15': { baslik: 'Zeytinliklere Gömülen Şehir', icerik: `Kolophon bir zamanlar 12 İyon kenti arasındaydı. Düşünür Xenophanes burada doğdu; "Tanrılar insanlar gibi değildir, onları biz hayal ediyoruz" dedi.

Sonra liman kenti Notion yükseldi, Kolophon geriledi. Zeytinlikler eski sokakların üzerine büyüdü.

Halk arasında şöyle denir: Her ilkbahar zeytinlikler çiçek açtığında toprak altından müzik sesi gelir — Kolophon'un unutulmuş şairleri hâlâ söylüyor.` },
'17': { baslik: 'Rüyada Kurulan Şehir', icerik: `İmparator Konstantinos bir rüya gördü: Yaşlı kadın kılığına girmiş bir şehir, sonra genç bir bakire oldu. Bu işareti "yeni başkent" olarak yorumladı.

Bizans 1000 yıl boyunca dünyanın en büyük şehriydi. Surları hiç düşmedi — ta ki 1453'e kadar. Fatih topla yıkmak zorunda kaldı.

Efsaneye göre Osmanlılar şehre girdiğinde Ayasofya'da dua eden rahipler duvara çekildi. Kıyamet günü duvar açılacak ve rahipler dua etmeye devam edecekler.` },
'18': { baslik: 'Osman\'ın Rüyası', icerik: `Osman Gazi bir gece uyurken rüya gördü: Göğsünden bir ağaç çıktı, büyüdü, gölgesi tüm dünyayı kapladı. Altından ırmaklar aktı.

Rüyayı yorumlayan âlim dedi ki: "Soyundan büyük bir devlet çıkacak."

Osman Gazi Bursa'yı alamadan öldü. Ama vasiyeti açıktı: "Bursa alındığında buraya gömün." Oğlu Orhan şehri fethetti ve babasını vasiyet ettiği yere gömdü.` },
'19': { baslik: 'Yedi Harikadan Biri', icerik: `Antik dünyada yedi harika vardı ve Kyzikos'taki Zeus Tapınağı bunlardan biriydi. Sütunları tek parça beyaz mermerden yonulmuştu. "Bir başka diyardan getirildi sanırsınız" diye yazılmış antik kaynaklarda.

Kyzikos yarımadası fırtınalarda adaya dönüşürdü. Sakinler buna alışmıştı — hem kara hem deniz insanıydılar.

Bugün tapınaktan yalnızca birkaç kaide kaldı. Dünyanın yedi harikasından biri bu kadar sessizce yok oldu.` },
'20': { baslik: 'Perslerin Gözü', icerik: `Daskyleion Perslerin Anadolu'ya baktığı pencereydi. Büyük Kral'ın gözü, kulağı, eli buradaydı.

Kazılarda bulunan Aramice yazılı mühürler bürokrasinin ne kadar gelişmiş olduğunu gösteriyor. Binlerce tablet, binlerce işlem kaydı.

En ilginç bulgu bir kapı tokmaklığı: İki hayvan figürü birbirini yiyor. Arkeologlar bunu "güçlünün zayıfı yuttuğu düzenin simgesi" olarak yorumluyor.` },
'21': { baslik: 'Hiçbir Zaman Susmayan Sahne', icerik: `Aspendos Tiyatrosu'nun akustiği bir efsanedir: Sahne ortasında fısıldasanız en üst sıradaki seyirci duyar. Mimar Zenon bu mucizevi akustiği nasıl yarattı? Kimse bilmiyor.

Rivayete göre Zenon bir yarışta ikinci geldi, yenilgiyi kabullenemedi ve kendini sahneye attı. Kral onun tiyatrosunu görünce pişman oldu — bu yapı ötekinden çok daha güzeldi.

2000 yıldır ayakta olan bu tiyatroda bugün hâlâ opera oynanıyor.` },
'22': { baslik: 'Noel Baba\'nın Yurdu', icerik: `Patara'nın en ünlü sakini Piskopos Nikolaos'tu. Zengin bir aileden gelmesine rağmen parasını fakirlere dağıtırdı.

Rivayete göre evlenemeyecek kadar fakir üç kız kardeş vardı. Nikolaos geceleri pencerelerinden altın torbalar attı. Bu gizli iyilik Noel Baba efsanesinin çekirdeği oldu.

Patara aynı zamanda Lykia'nın en önemli kehanet merkeziydi. İki mucize bir kentte: Kehanet ve iyilik.` },
'24': { baslik: 'Güneş Batarken Tanrılar Görünür', icerik: `Apollon tapınağı tam gün batımında denize bakan yere yapılmıştı. Güneş battığında tapınağın sütunları arasından ışık süzülür, sanki tanrı içeriden bakıyordu.

Bu manzara için uzak diyarlardan insanlar gelirdi. Şair, gezgin, tüccar — hepsi bu sahneyi görmek istedi.

Bugün bu sahneyi her gün turistler yaşıyor. Bazı güzellikler 2000 yıldır değişmemiş.` },
'26': { baslik: 'İskender\'in Anahtarı', icerik: `Perge, Büyük İskender'in Anadolu seferinde kapılarını gönüllü olarak açan ilk kentlerden biriydi. Kapı bekçileri şehrin anahtarlarını uzattılar.

İskender içeri girdi, şehri yağmalamadı, halkına dokunmadı. Bu jestin karşılığını ödedi Perge: Dev bir zafer anıtı yaptırdılar.

Bayram günleri tiyatroda 15.000 kişi toplanırdı — coşku, dua, müzik ve et kokusu karışırdı.` },
'27': { baslik: 'Yılbaşı Baba\'nın Mucizesi', icerik: `Nikolaos'un en ünlü mucizesi denizde yaşandı. Fırtınada batan gemiden "Nikolaos'u çağırın!" dediler. O an Nikolaos koşarak kıyıya indi — deniz sakinleşti, herkes kurtuldu.

Büyük kıtlıkta ise limana gelen buğday gemisinden şunu söyledi: "Verdiğim miktarı İskenderiye'ye varınca eksiksiz bulacaksın." Kaptan verdi — ve gerçekten eksiksiz buldu.

Nikolaos öldükten sonra aziz ilan edildi. Ruhu Myra'da kaldı.` },
'28': { baslik: 'Suyun Hiç Kesilmediği Çeşme', icerik: `Sagalassos'ta Antoninler Çeşmesi'nden hâlâ su akıyor. 2000 yıl önce inşa edilen bu çeşme depremlere, yağmalara rağmen suyu kesmedi.

Efsanelere göre bu su kutsal bir kaynaktan geliyor. Apollon'un dokunduğu yerden fışkırıyor.

Gerçek şu ki Roma mühendisliği o kadar mükemmeldi ki su kanalları hâlâ işliyor. Sagalassos'u Türkiye'nin en iyi korunmuş antik kentlerinden biri yapan da bu.` },
'29': { baslik: 'Kartalların Yuvası', icerik: `Arykanda dağın yamacına yapışmış gibiydi. Kurucuları buraya kaçmak için değil, görmek için çıkmışlardı — vadiye hâkim bu noktadan hem denizi hem dağı izliyorlardı.

Arykanda'nın en büyük sırrı borçlarıydı: Bu kent sürekli borçlanıyordu. Büyük festivaller, büyük yapılar, büyük harcamalar.

Bugün ormana gömülmüş kalıntılarını ziyaret edenler şunu fark ediyor: Tiyatro hâlâ mükemmel. Belki Arykanda borcunu taşlara ödedi.` },
'30': { baslik: 'Kanyon\'un Üzerindeki Şehir', icerik: `Selge'ye gitmek için önce Köprülü Kanyon'u geçmek gerekir. Bu derin vadinin üzerinden geçen antik taş köprü hâlâ ayaktadır — iki bin yıldır sular altında kalmamış.

Selgeliler o kadar savaşçıydı ki İskender bile onlardan çekinmişti. Kendi kanunlarını koymuş, kendi sikkelerini basmışlardı. Romalılar onları "özgür Selgeliler" diye çağırdı.

Zeus Tapınağı'nın sütunları bugün koyun sürülerinin arasında duruyor. Tarih ile günlük hayat bu kadar iç içe geçmiş başka yer az bulunur.` },
'31': { baslik: 'İskender\'in Kış Konaklığı', icerik: `M.Ö. 334, kış ayları. Büyük İskender Phaselis'e geldi. Şehrin kapıları açıldı, büyük hediyeler verildi. İskender kışı burada geçirmeye karar verdi.

Phaselis'in üç limanı vardı: Biri kuzeye, biri güneye, biri doğuya bakıyordu. Rüzgâra göre liman değiştirilirdi. Bu akıllıca tasarım kenti antik dünyanın en önemli ticaret noktalarından biri yaptı.

İskender bu sessiz kışta Asya seferini planladı. İlkbaharda yola çıktı ve tarihi değiştirdi.` },
'32': { baslik: 'Kıyıda Donmuş Zaman', icerik: `Anemurium'a son gelen kişi M.S. 7. yüzyılda Arap akınlarından kaçan bir Bizanslıydı. Kapısını kilitledi, gitmek zorunda kaldı — ve bir daha dönemedi.

Bugün o kişinin kilitlediği kapı hâlâ orada. Sokaklar, kilise, mezarlık hâlâ orada. Hiç yeniden inşa edilmedi.

Efsane şöyle anlatılır: Burada her gece mum ışığı görünür. Son sakinin yaktığı mumu söndürmeyi unutmuş.` },
'33': { baslik: 'Surların Sırrı', icerik: `Anavarza'nın surları o kadar uzundur ki "Bir insan sabah girip akşam çıkamaz" diye yazılmış antik kaynaklarda. 1500 metre süren bu surlar içinde yüz binlerce kişilik bir şehri saklıyordu.

Efsaneye göre bu şehri devler kurmuştu. Normalde insan elleriyle kaldırılamayacak kadar büyük taşlar var surların temelinde.

Haçlılar "Buradan geçemedik, etrafından dolaştık" diye yazmış. Taşlarının rengi kan kırmızısıdır.` },
'37': { baslik: 'Yeraltının Şehri', icerik: `Derinkuyu'da ilk tüneli kim kazdı, kimse bilmiyor. Bir efsaneye göre dev bir ahtapot yerden çıkmış, insanlara tüneller kazmasını öğretmiş, sonra kaybolmuş.

Bu şehir o kadar iyi planlanmış ki binlerce yıl sonra bile akıllıca görünüyor: Her katın kendi havalandırması var, kuyular bağımsız, bölümler kaya kapılarla ayrılabiliyor.

Arap akınlarında 20.000 insan bu şehre sığındı. Aylarca yeraltında yaşadılar. Çıktıklarında gökyüzü onlara mucize gibi göründü.` },
'39': { baslik: 'Sfenkslerin Kapısı', icerik: `Alacahöyük'ün sfenks kapısını yapanlar şunu düşünüyordu: Kötü ruhlar kapıya yaklaşınca sfenks gözleri onu donduracak.

Kazılarda bulunan "güneş kursu" bronz diskler bugün Türkiye'nin amblemi haline geldi.

En tuhaf bulgu: Kapının yanında at, inek ve insan kemikleri yan yana gömülmüş. Kurban mı, ritüel mi? Arkeologlar tartışmaya devam ediyor. Sfenksler ise susuyor.` },
'40': { baslik: 'Taşın İçinden Gelen Dua', icerik: `Divriği Ulu Camii'nin kapısını yapan usta Hurrem Şah'tı. Efsaneye göre elleri taşa dönüştü — ama ellerinden çıkan işler müthiş güzeldi.

Kapı süslemeleri o kadar karmaşıktır ki ikisi birbirinin aynı değildir. Her çiçek farklı, her desen tekrar etmez.

UNESCO "Selçuklu taş işçiliğinin doruk noktası" diyor. Halk ise: "Bu kadar güzel taş insan eli ile yontulmaz — ancak tanrı yardımıyla."` },
'42': { baslik: 'Göbekli Tepe\'nin Kardeşi', icerik: `Karahantepe 2019'da gündeme geldi. Belki Göbekli Tepe'den daha eskiydi.

En çarpıcı bulgu insan yüzlü heykellerdi. Göbekli Tepe'deki sütunlar semboliktir — ama Karahantepe'deki yüzler gerçektir. Gözler, burun, ağız var.

Bir arkeolog dedi ki: "Sanki bir şeyi anlatmak istiyorlar ama dillerini henüz çözemediniz." Karahantepe hâlâ konuşuyor.` },
'43': { baslik: 'Kil Tabletlerin Sesi', icerik: `Kültepe'de bulunan kil tabletler 4000 yıl önce yazılmıştı. Bir tüccarın karısı kocasına şikâyet mektubu yazıyordu: "Senden para istedim, aylardır yanıt yok. Seni mahkemeye vereceğim."

Bu dünyanın bilinen en eski şikâyet mektubuydu. Ve gülünç derecede günceldi.

Kültepe bize şunu gösterdi: İnsan 4000 yılda özünde değişmedi.` },
'44': { baslik: 'Dört Medeniyetin Kalesi', icerik: `Ankara Kalesi'nin taşları dört medeniyetin izini taşıyor: Roma, Bizans, Selçuklu, Osmanlı. Her kez yıkılan kale, bir sonraki medeniyetin taşlarıyla onarıldı.

Efsaneye göre kalenin en yüksek kulesinde Bizans definesi saklıdır. Selçuklular aramış, Osmanlılar kazıkla aramış — hiçbiri bulamamış.

Ama asıl define belki de taşların kendisidir. Bir kaleyi dört medeniyet paylaşmış.` },
'45': { baslik: 'Güvercin Olarak Gelen Veli', icerik: `Hacı Bektaş Veli Anadolu'ya geldiğinde önce bir güvercin olarak geldi. Horasan'dan uçtu, bu tepeye kondu ve insan oldu.

Bir başka rivayet: Gençliğinde kırk gün oruç tuttu. Bu kırk günde tüm sırlara erişti. Çıktığında yüzü parıl parıl parlıyordu.

Bugün her yıl ağustos ayında milyonlarca insan buraya gelir. "Eline, diline, beline sahip ol" öğüdü hâlâ kulaklarda yankılanır.` },
'49': { baslik: 'Mozaiklerin Altındaki Şehir', icerik: `MS 253'te Persler Zeugma'yı yakıp yıktı. Sakinler kaçarken mozaiklerin üzerini toprak ve enkazla örttüler.

1800 yıl sonra arkeologlar toprağı kaldırdığında mozaikler neredeyse bozulmamış çıktı. Çingene Kız'ın bakışları 1800 yıl sonra da insanı büyülüyordu.

Bugün müzede gördükleriniz sadece kurtarılabilenler. Zeugma'nın geri kalanı Fırat'ın altında uyuyor.` },
'51': { baslik: 'Altın Sarısı Şehir', icerik: `Mardin taşının rengi gün içinde değişir: Sabah pembe, öğlen altın sarısı, akşam kan kırmızısı.

Deyrulzafaran Manastırı'nda binlerce yıldır dua okunuyor. Hristiyanlar, Müslümanlar, Ezidiler — Mardin hepsine ev sahipliği yaptı. Efsaneye göre manastırın altında katman katman tapınaklar var.

Mardin'de bir deyiş var: "Buraya gelen gitmek istemez, giden geri dönmek ister."` },
'52': { baslik: 'Bizans\'ın Gözcüsü', icerik: `Dara kenti Pers topraklarıyla tam sınırdaydı. Her yıl savaş, her yıl antlaşma.

Şehrin dev sarnıçları büyük gizemdir. Yeraltında kilometrelerce uzanan su tünelleri.

Efsanelere göre bu tüneller Pers tarafına kadar uzanıyor. Bir Bizanslı asker geceleri tünelden geçer, Pers kampındaki bilgileri getirirmiş.` },
'54': { baslik: 'Kartalın Gözü', icerik: `Kral bir gün avdayken gökyüzünde bir kartal gördü. Kartal onu o kadar büyüledi ki durdu. "Efendim, düşman geliyor" dediler — kral kartalı izlemeye devam etti.

Kral hastalandı. Ölmeden önce şunu söyledi: "O kartal beni hayattan ayırdı. Mezarıma kartal koyun — beni karşılasın."

Karakuş, Kommagene kraliyet ailesinin kadınlarına adanmış bir anıttır. Kartal ölümü simgeliyor — ama aynı zamanda özgürlüğü de.` },
'56': { baslik: 'Suyun Ortasındaki Dua', icerik: `Akdamar Kilisesi için taşlar Van Gölü'nden geçirildi. İnşaat sırasında altınlar göle döküldü. O gece mimar rüya gördü: "Altınlar kayıp değil — kilisenin temelidir." Sabah işe devam ettiler.

Kilisenin dış cephesindeki İncil sahneleri hâlâ net görülüyor: Hz. Adem ve Havva, Hz. Yunus ve balina, Hz. Davut ve Golyat.

Su ve rüzgâr 1100 yıldır bu sahneleri silemedi.` },
'57': { baslik: 'Aslanın Yuvası', icerik: `Çavuştepe Kalesi'nde Urartu Kralı II. Sarduri kendi elleriyle yazmış: "Bu kaleyi ben yaptım. Düşmanı getiren cezalandırılsın. Suyu kesen lanetlensin."

Bu yazıtın yanında aslan heykeli varmış. Efsaneye göre gerçekten kükrediğini gören çobanlar varmış.

Kale bir gün düşmanın eline geçti. Aslan heykeli parçalandı. Ama Kral'ın yazıtı kaldı — 2700 yıllık bir kral sesi taşın içinde.` },
'58': { baslik: 'Bulutların Üzerindeki Saray', icerik: `İshak Paşa Sarayı'nın inşası 99 yıl sürdü. Başladığında çocuk olan ustalar tamamlandığında ihtiyardı. Her kuşak bir bölüm yaptı.

Sarayın altın kaplı kapıları Rus askerleri tarafından alındı — bugün Hermitage Müzesi'nde. Halk "kapılar gidince ruh da gitti" diyor.

Her kış tipi sarayı örter. Baharın ilk günlerinde kar erir, saray yeniden belirir. Bu yüzden halk onu "Kayıp Saray" der.` },
'59': { baslik: 'Göl Kıyısının Kalesi', icerik: `Van Kalesi'nin yazıtları 19. yüzyılda çözüldü: "Ben I. Sarduri, bu kaya üzerine şehri kurdum. Suyu ben getirdim. Kanalı ben açtım."

Efsaneye göre kalenin derinliklerinde Urartu hazinesi var. Her yıl birkaç hazine avcısı gece inerek kazıyor. Hiçbiri bulamamış.

Van Gölü'nün rengi mevsimlere göre değişir: Bahar türkuaz, yaz mavi, sonbahar yeşil, kış kurşun.` },
'60': { baslik: 'Ölülerin Şehri', icerik: `Ahlat Selçuklu Mezarlığı'ndaki bazı taşlarda isim değil sadece el izi var. El izi koyanlar kim?

Efsaneye göre her kümbet içinde bir ölümsüz bekçi uyuyor. O yüzden mezarlar o kadar güzel yapılmış — uyuma yeri güzel olsun diye.

Bir çoban anlatmış: Gece geç vakit mezarlıktan geçerken taşların üzerinde mum ışıkları görmüş. Sabah mum izi yok. Rüya mıydı, gerçek miydi?` },
'61': { baslik: 'Nuh\'un Dağı', icerik: `Neden bu dağa "Ağrı" dendi? Efsane şöyle: Hz. Nuh Tufan'dan sonra gemisini bu dağa yanaştırdı. Karaya çıkmak isterken ayağı kayaya takıldı, acı çekti.

Geminin parçalarını arayanlara göre dağın zirvesine yakın tahta parçaları var. Her on yılda bir biri çıkmaya çalışıyor.

Belki Nuh'un gemisi orada, belki değil. Ama Ağrı Dağı her sabah güneşle kızarır. Ve bu dağın altındaki insanlar hâlâ aynı efsaneyi anlatır.` },
'63': { baslik: 'Hüzünlü Freskler', icerik: `Trabzon Ayasofyası'nın fresklerini yapan ustanın adı bilinmiyor. Ama her yüzde ince bir hüzün var.

Bir efsane: Ustanın oğlu inşaat sırasında öldü. Baba acısını fresklere işledi — her figürün yüzüne oğlunun gözlerini koydu.

Trabzon İmparatorluğu düşünce freskler badana ile örtüldü. Yüzyıllar sonra badana sıyrılınca yüzler yeniden ortaya çıktı — sanki hiç gitmemişti.` },
'65': { baslik: 'Zamanın Durduğu Şehir', icerik: `Safranbolu'da eskiden kimse eski bir evi yıkıp yeni bina yapamazdı. "Atalarımızın ruhu bu duvarlarda" denirdi.

Osmanlı tüccarları zenginleşince İstanbul'a taşınmak istediler. Ama her gidişte bir şey bıraktılar — bir oda, bir pencere, bir cumba. Geri geleceklermiş gibi.

Bugün o odalar hâlâ duruyor. Her yıl milyonlarca insan zamanın durduğu bu şehre geliyor.` },
'66': { baslik: 'Dünyanın Haritasını Çizen Adam', icerik: `Strabon Amasya'da doğdu. Geographika adlı eseri 17 ciltti.

Efsaneye göre Strabon bir gün bir çiftçiyle konuşmuş. Çiftçi "Şehrin dışına hiç çıkmadım" demiş. Strabon şaşırmış. Çiftçi gülerek yanıtlamış: "Senin kitaplarından dünyayı öğrendim."

Strabon öldükten bin yıl sonra bile insanlara dünyanın nerede ne olduğunu anlatıyordu.` },
'67': { baslik: 'Demir Yürekli Kral', icerik: `Pontus Kralı VI. Mithridates zehire karşı bağışıklık kazanmak için her gün az miktarda zehir içermiş. Düşmanları onu zehirlemeye çalışınca hiç etkilenmemiş.

Sonunda yenik düştüğünde kendi canına kıymak istedi. Ama zehir tutmadı. Bir askere kılıcıyla öldürtmek zorunda kaldı.

Bu efsane "mithridatism" adıyla tıp literatürüne girdi. Bu yöntemi bilim bugün de kullanıyor — aşıların mantığı aynı.` },
'68': { baslik: 'Karadeniz\'in Kilit Noktası', icerik: `Kastamonu Kalesi için şöyle denir: "Bu kaleyi almak isteyen ya çıldırdı ya döndü." Bizans döneminde hiç alınamadı.

Efsaneye göre kalenin kuyusu denize bağlıydı. Tatlı su değildi ama içilebilirdi. Bu yüzden kuşatmalar sonuç vermezdi.

Kaleye çıkan yol bugün hâlâ dar ve sarptır. Bekçi uyumadıkça kimse yaklaşamazdı.` },
'69': { baslik: 'Tanrıların Annesi', icerik: `Leto, Zeus'un çocuklarını karnında taşıyordu. Hera kıskanıyordu ve ona yer vermeyen ülkelere emir gönderdi.

Leto Likya'ya geldi. Kuyu başındaki çobanlardan su istedi — çobanlar verdiler. Bunun üzerine Leto bu toprakları sonsuza dek kutsal kıldı. Apollon ve Artemis burada doğdu.

Binlerce yıl önce o kuyudan su içen çobanların jestiyle başlayan kutsiyet bugün hâlâ hissediliyor.` },
'70': { baslik: 'Yanmayan Ateş', icerik: `Olympos'un yakınında yer altından alevler çıkar. Binlerce yıldır yanıyor — hiç söndürülemiyor.

Efsaneye göre bu ateş, Bellerophon'un öldürdüğü Chimaera canavarının nefesinin kalıntısıdır. Canavar düştüğü yerde son nefesini verdi — ve o nefes söndürülemiyor.

Eski denizciler burada Zeus'a kurban keserdi. Ateş yanıyor — ne olursa olsun.` },
'107': { baslik: 'Şifa Tanrısının Evi', icerik: `Asklepios o kadar iyi iyileştiriyordu ki ölüleri bile diriltiyor du. Zeus buna kızdı ve onu yıldırımla öldürdü.

Pergamon'daki Asklepion'da hastalar tapınağa gelir, kutsal havuzda yıkanır ve rüya odasına girerdi. Rüyalarında tanrı onlara ne yapmaları gerektiğini söylerdi.

Hekim Galenos burada yetişti. Gladyatörlerin cerrahıydı önce. Pergamon'da öğrendikleri 1400 yıl boyunca tıp dünyasına yol gösterdi.` },
'110': { baslik: 'İmanın Şehri', icerik: `İznik Konsili'nde 318 piskopos dünyanın dört bir yanından gelmişti. Soru tek: İsa kimdir?

Günlerce tartışıldı. Sonunda "İsa hem insan hem tanrı" kararı çıktı. Bu karar Hristiyan inancının temelini attı.

Bugün o konsilin yapıldığı kiliseden çok az şey kaldı. Ama o binada alınan karar iki milyar insanı hâlâ etkiliyor.` },

'12': { baslik: 'Köy ile Tarihin Buluşması', icerik: `Stratonikeia'nın en tuhaf özelliği şu: Antik tiyatro ve tapınak üzerine bir Osmanlı köyü kurulmuş. Villalar antik sütunların arasında, tiyatro sahnesinde çocuklar oynuyor.

Kenti kuran Seleukos, adını üvey annesinden almıştı. Oğlu ona âşık olmuş, hastalıktan ölüme gidiyordu. Baba, oğlunun yaşaması için karısını ona verdi.

Bu yasak aşk antik kaynakların en çok anlattığı hikâyelerden biridir. Taşlar çürüdü, köy kuruldu — ama isim kaldı.` },
'53': { baslik: 'Fırat\'ın Geçidi', icerik: `Samosata, Fırat Nehri'nin en önemli geçit noktasıydı. Kim bu şehri tutarsa doğudan batıya geçen kervanları tutardı.

Kommagene Krallığı bu stratejik konumu sonuna kadar kullandı. Hem Romalılardan hem Partlardan vergi aldı — iki süper güç arasında ustalıkla denge kurdu.

Bugün Samosata baraj gölünün altında. Atatürk Barajı dolduğunda şehir suya gömüldü. Efsaneye göre sular çekilince kadim geçidin sesleri hâlâ duyulur.` },
'71': { baslik: 'Denize Bakan Yarımada', icerik: `Elaiussa Sebaste bir yarımada üzerine kurulmuştu — üç tarafı denizle çevriliydi. Bu konumu hem güvenli hem de ticarete açık yapıyordu.

Romalı dönemde buranın en ünlü sakini Kilikya korsanlarıyla mücadele eden Pompeius'un generalleri oldu. Deniz haydutları bu kıyılarda at koşturuyordu.

Bugün yarımada üzerindeki tiyatro ve köprü kalıntıları hâlâ ayakta. Deniz aşındırdıkça taşlar biraz daha kıyıya yaklaşıyor.` },
'72': { baslik: 'Maiandros\'un Şehri', icerik: `Nysa kıvrıla kıvrıla akan Maiandros Nehri'nin vadisinde kurulmuştu. "Kıvrımlar" anlamına gelen "meander" kelimesi bu nehirden gelir — bugün dünyanın her dilinde kullanılır.

Şehrin en büyük sırrı tünelleriydi. Şehrin ortasından bir dere geçiyordu — Nysalılar onu tünel içine aldılar, üstüne pazar yeri kurdular. Bu çözüm antik mühendisliğin parlak örneklerinden biri sayılır.

Coğrafyacı Strabon burayı "büyük ve güzel" diye tanımlamış. 15.000 kişilik tiyatrosu o günlerin en büyüklerinden biriydi.` },
'73': { baslik: 'Trallesli Deha', icerik: `Tralles'in en ünlü sakini bir matematikçiydi: Anthemios. Miletli İsidoros ile birlikte Ayasofya'yı tasarlayan iki mimardan biri. O dev kubbeyi hesaplayan beyin Tralles'te yetişmişti.

Kubbe, döneminin bütün sınırlarını zorluyordu. Gerçekten de bir depremden sonra çöktü; yeğeni Genç İsidoros onu daha yüksek ve sağlam biçimde yeniden kurdu. O kubbe 1400 yılı aşkın süredir İstanbul'un üzerinde duruyor.

"Üç Gözler" adıyla bilinen Roma kemerleri bugün hâlâ ayakta. Şehrin geri kalanı toprağın altında uyuyor — ama o kemerler Tralles'in gururunu taşımaya devam ediyor.` },
'74': { baslik: 'Artemis\'in Beyaz Kenti', icerik: `Magnesia'nın Artemis Tapınağı o kadar büyüktü ki antik kaynaklar onu "bölgenin en muhteşem yapısı" diye tanımlamış. Mimar Hermogenes bu tapınakla yeni bir stil icat etti.

Efsaneye göre şehrin kurucusu Magnetes, bir kahin rüyasında beyaz bir at gördü. Atın koştuğu yerde durdu ve orada şehri kurdu.

Tapınaktan geriye sadece birkaç temel taşı kaldı — ama Hermogenes'in stili tüm Roma mimarisini etkiledi.` },
'75': { baslik: 'Apollon\'un Kasabası', icerik: `Alabanda'nın adı bir efsaneden gelir: "Ala" Karya dilinde at, "banda" zafer anlamına gelir. Şehrin kurucusu bir savaşta atıyla o kadar cesurca savaştı ki tanrılar şehre bu adı verdi.

Alabanda aynı zamanda akrepleriyle ünlüydü. Antik yazarlar "Alabandalı bir ev gibi akrep dolu" deyimini kullanıyordu.

Bugün zeytinlikler ve buğday tarlaları arasında birkaç sütun kalıntısı duruyor.` },
'76': { baslik: 'Prenses Ada\'nın Kalesi', icerik: `M.Ö. 334'te Büyük İskender Alinda'ya geldiğinde garip bir konukla karşılaştı: Tahtan indirilmiş yaşlı bir prenses, Ada. Kardeşleri onu buraya sürmüştü.

Ada İskender'e dedi ki: "Bana Karya'yı geri ver, sana bu kaleyi vereyim — ve seni evlat edineyim." İskender kabul etti. Yaşlı prenses ona her gün yemek ve şekerlemeler gönderdi.

İskender Ada'yı seven bir oğul gibi davrandı. Bu garip anne-oğul ilişkisi antik kaynakların en çok anlattığı hikâyelerden biridir.` },
'77': { baslik: 'Hâlâ Ayakta Duran Tapınak', icerik: `Euromos'taki Zeus tapınağı için şöyle bir efsane anlatılır: Roma İmparatoru Hadrian burayı ziyaret ettiğinde tapınağı o kadar beğendi ki "Bu tapınak sonsuza kadar ayakta kalacak" diye dua etti.

İki bin yıl geçti. 16 sütun hâlâ ayakta. Depremler oldu, savaşlar oldu — tapınak yıkılmadı.

En tuhaf ayrıntı: Sütunların üzerinde bağışçıların adları yazılı. İki bin yıl sonra hâlâ okunuyor — belki en iyi reklam panosu bu.` },
'78': { baslik: 'Hekatomnidlerin Kutsal Dağı', icerik: `Labranda, Karya Krallığı'nın en kutsal yeriydi. Dağın tepesinde Zeus Labraundos'a adanmış tapınak duruyordu.

"Labrys" çift taraflı balta anlamına gelir. Efsaneye göre bu kutsal balta Labranda'da muhafaza ediliyordu. Kim bu baltayı görürse tanrıların gözünde meşru hükümdar sayılırdı.

Hekatomnid hanedanı her yıl burada büyük festivaller düzenledi. Bugün dağın yamacında yarı yıkık sütunlar duruyor — kutsal balta ise kayıp.` },
'79': { baslik: 'Endymion\'un Uykusu', icerik: `Efsaneye göre genç çoban Endymion o kadar güzeldi ki Ay tanrıçası Selene ona âşık oldu. Tanrıça ona sonsuz uyku armağan etti — böylece güzelliği hiç solmayacaktı.

Endymion bu dağların eteklerinde uyuyor. Her gece Selene gökyüzünden inerek onu ziyaret ediyor. Bafa Gölü'nün sakin yüzeyinde Selene'nin yansıması görünüyor.

Herakleia bu efsanenin gölgesinde kuruldu. Su üzerindeki yansımalar hâlâ büyülüyor.` },
'80': { baslik: 'Balıkçıların Kenti', icerik: `Iassos'un sikkelerinde her zaman balık vardı. Bu küçük yarımada kenti denizden geçimini sağlıyordu — ve parasına balık bastırdı.

Efsane şöyle: Bir gün agorада bir müzisyen konser veriyordu. Dinleyiciler büyülenmiş dinliyordu. Tam o sırada balık satıcıları "Balık!" diye bağırdı. Kalabalık anında dağıldı. Sadece bir sağır adam kaldı — müzisyen herkesi onu sandı, teşekkür etti.

Bu hikâye Iassos'luların para düşkünlüğünün simgesi oldu.` },
'81': { baslik: 'Çömleğin Evi', icerik: `Keramos'un adı Yunanca'da "pişmiş toprak, çömlek" anlamına gelir. Bu kentten gelen çömlekler o kadar tanınmıştı ki zamanla tüm pişmiş toprak ürünlerine "keramos" — yani "seramik" denmeye başlandı.

Efsaneye göre şehrin kurucusu tanrı Hephaestos'un oğluydu. Ateş tanrısının soyundan gelen bu insanlar fırın yakmayı tanrısal bir sanat olarak görüyordu.

Her zaman seramik dediğinizde, bu kelimenin Muğla'nın dağlarından geldiğini hatırlayın.` },
'82': { baslik: 'Nehrin Ağzındaki Şehir', icerik: `Kaunos, bataklıklara yakınlığı yüzünden kötü bir ün kazanmıştı. Antik çağda "Kaunoslular neden bu kadar solgun?" diye sorulurdu. Cevap belliydi: Sıtma.

Ama Kaunoslular bu zorluğa rağmen güzel şeyler yaptı. Kayaya oyulan tapınak cepheli mezarlar bugün Dalyan Kanalı'ndan tekneyle geçenleri büyülüyor.

Efsaneye göre bu mezarlarda gömülenler her gece nehirde yüzüyor. Gemiciler bazen sularda gölgeler gördüklerini anlatır.` },
'83': { baslik: 'Dağın Zirvesindeki Şehir', icerik: `Kadyanda dağın tepesine kurulmuştu — o kadar yüksek ki bulutlar bazen şehrin içinden geçerdi. Likalılar buraya "kartalların yuvası" diyordu.

Bu konumun avantajı belliydi: Hiçbir düşman yorulmadan çıkamazdı. Stadyumun kalıntıları bugün hâlâ görülebilir.

Dağın tepesinde spor yarışmaları yapan insanları düşünün — rüzgârın uğulduğu o yükseklikte koşmak, güreşmek. Belki de zorluğu aşmak onlar için ibadet gibiydi.` },
'84': { baslik: 'Yüzlerce Kaya Mezarın Şehri', icerik: `Pinara'nın kayalıklarına bakıldığında ilk gözüken yüzlerce delik: Kaya mezarları. Likalılar ölülerini dağın bağrına gömdü.

Efsaneye göre bu mezarlar içinde ölüler hâlâ yaşıyor. Karanlıkta oturuyor, konuşuyor. Her yıl Karanlık Ay gecesi onlar için kapı bırakılır.

UNESCO bu kenti koruma altına aldı. Ama asıl koruyan belki de o kayalara oyulan inançtı — ölüm burada son değildi, sadece farklı bir yaşamdı.` },
'85': { baslik: 'Bellerophon\'un Yurdu', icerik: `Efsaneler Tlos'u Bellerophon'a bağlar. Kanatlı at Pegasos'a binen bu kahraman, ateş püskürten Chimaera canavarını öldürdü. Sonra Olympos'a tırmanmaya kalktı — Zeus bir at sineği yollayıp Pegasos'u deli etti, Bellerophon düştü.

Yıllarca sakat ve kör dolaştı. Nihayetinde Likya'ya döndü ve burada öldü. Kaya mezarı hâlâ burada.

Tlos'un en güzel özelliği: Romalı hamam, Likalı mezarlar ve Osmanlı kalesi iç içe geçmiş. Tarih burada katmanlaşmayı bırakıp birleşti.` },
'86': { baslik: 'Kibyra Birliği\'nin Başkenti', icerik: `Kibyra dört kentin birliğinin başkentiydi. Bu birlik o kadar güçlüydü ki Roma bile başlangıçta antlaşmayı tercih etti.

Efsaneye göre Kibyra halkı Lidyalıların torunlarıydı. Kral Kroisos'un soyundan geliyorlardı. Bu yüzden altına ve zenginliğe tutkuları vardı.

Şehrin gladyatör arenası küçük ama iyi korunmuştu. Roma'ya ihraç edilecek savaşçılar burada yetişti.` },
'87': { baslik: 'Kayalığın Üzerindeki Roma', icerik: `Kremna, Torosların sarp kayalıkları üzerine kurulmuş bir Roma askeri kolonisiydi. Buraya yerleştirilen eski askerler Roma'yı dağların içine taşıdı: Forum, tapınak, agora.

M.S. 278'de bir eşkıya Kremna'yı ele geçirdi ve Roma'ya karşı isyan bayrağı açtı. Roma ordusu yıllarca kuşattı — sonunda şehir içinden ihanetle düştü.

Bugün kayalığın üzerinde Roma sütun başlıkları ve Torosların zirvesi aynı anda görünür.` },
'88': { baslik: 'Dağların Sakin Kenti', icerik: `Adada, Pisidya'nın gizli incisiydi. Büyük şehirlerin gürültüsünden uzak, dağların arasında sessizce var oldu.

Şehrin iki tapınağı vardı — biri doğuya, biri batıya bakıyordu. Sabah güneşi doğu tapınağını aydınlatırdı, akşam güneşi batıyı. Sanki günü iki kutsal alev çerçeveliyordu.

Adada size sadece tarihi değil, sessizliği de sunar. Ve bazen tarihi anlamak için sessizliğe ihtiyaç vardır.` },
'89': { baslik: 'Aziz Pavlus\'un İlk Vaazı', icerik: `M.S. 47'de Aziz Pavlus dağları aşarak Antiokheia Pisidya'ya ulaştı. Sinagoğa girdi, cemaate hitap etti: "Ey İsrailoğulları ve tanrıdan korkan siz ötekiler, dinleyin..."

Bu vaaz Hristiyan tarihinin en önemli anlarından biriydi. İlk kez bir Yahudi olmayan kitleye Hristiyanlık açıklanıyordu. Bazıları inanmadı, bazıları şehirden kovdu. Ama tohum ekilmişti.

Men Askaenos Tapınağı kalıntıları arasında dolaşırken o vaazın yankısını hissedebilirsiniz.` },
'90': { baslik: 'Rahip-Kralların Şehri', icerik: `Olba'da kral yoktu — rahip vardı. Şehri yüzyıllarca din adamları yönetti. Tapınak hem devlet binası hem ibadet yeri hem hazineydi.

Bu rahip-kral geleneği garip bir hanedan yarattı: Teukhros hanedanı. Kuşaktan kuşağa hem dini otorite hem siyasi güç aktarıldı.

Zeus Olbios tapınağı bugün hâlâ etkileyici. Rahiplerin bu manzaraya bakarak tanrıyla konuştuklarını düşünmek insanı büyülüyor.` },
'91': { baslik: 'Uzun Kulenin Şehri', icerik: `Uzuncaburç adını Hellenistik dönemden kalma yüksek kulenden alır. Bu kule binlerce yıldır gözetleme kulesi olarak kullanıldı.

Zeus Olbios tapınağının beş sütunu hâlâ ayakta. Her sütun tek parça taştır — bu kadar büyük taşları bu dağlara taşımak başlı başına bir mucize.

Efsaneye göre kulenin tepinde bir hazine saklanmış. Her nesil bir kez çıkıp aramış. Hiçbiri bulmamış. Ama kuleden görünen manzara, her defineyi unutturuyor.` },
'92': { baslik: 'Dilin Bozulduğu Şehir', icerik: `"Solecism" kelimesi yani "dil hatası" — bu kelime Soli'den gelir. Antik çağda Soli halkının Yunancasının o kadar bozuk olduğu söylenirdi ki yanlış konuşmak "Solili gibi konuşmak" deyimine dönüştü.

Sonra Pompeius şehri yeniden kurdu, adını Pompeiopolis koydu. Sütunlu cadde inşa ettirdi — bugün hâlâ 1. yüzyıldan kalma sütunların bir bölümü ayakta.

Şehrin ironisi: Dil hatalarıyla ünlü bu kentten "solecism" kelimesi tüm dillere yayıldı.` },
'93': { baslik: 'Kilikyalı Limanın Gizemi', icerik: `Aigeai, Kilikya ovasının denize açılan kapısıydı. Adana ovasından gelen tahıl, zeytinyağı ve pamuk buradan gemilere yüklenerek dünyaya yayılırdı.

Efsaneye göre şehrin tiyatrosunda söylenen her söz yıllar sonra gerçeğe dönüşürmüş. Ozanlar burada kelimelerini dikkatle seçerdi.

Bugün antik limanın kalıntıları Akdeniz'e bakıyor. Gemiler artık yok, ama ufuk hâlâ aynı.` },
'94': { baslik: 'Ana Tanrıça\'nın Doğduğu Yer', icerik: `Pessinus, Kibele'nin yeryüzündeki evidir. Ana tanrıça — doğanın, bereketin tanrıçası — burada tapınıyordu. Tapınağının en kutsal nesnesi gökten düşen bir meteoritti.

M.Ö. 204'te bir kehanet Romalılara şunu söyledi: "Hannibal'ı ancak Ana Tanrıça'nın yardımıyla yenebilirsiniz." Meteorit törenle Roma'ya taşındı. Ve Roma gerçekten Hannibal'ı yendi.

Bugün Pessinus'ta birkaç sütun kalıntısı var. Ama o meteoritin gücü hâlâ hissediliyor.` },
'95': { baslik: 'Saklı Antik Kent', icerik: `Metropolis'e gidenler çoğunlukla şaşırır: Bu kadar büyük bir kentin neden bu kadar az bilindiğini anlamak güçtür. İzmir'e sadece 40 kilometre, ama sanki başka bir zaman dilimine aittir.

Şehrin en güzel buluntularından biri bir dükkan tabelasıydı: "Burada en iyi şarap satılır." İki bin yıllık reklam panosu.

Efsaneye göre şehrin altında tünel sistemi var. Deprem olduğunda tüneller sesi yutar, şehri korur.` },
'96': { baslik: 'Apollon\'un Kutsal Korusu', icerik: `Klaros'ta Apollon konuşurdu — gerçekten. Kahin yeraltındaki odaya iner, kutsal sudan içer ve tanrının sesi onun ağzından çıkardı.

Efsaneye göre kutsal su Styx nehrinden, yani Ölüler Diyarı'ndan geliyordu. Bu suyu içen kahin bir ayağıyla ölüler dünyasına adım atıyordu.

İmparatorlar, generaller, şehir devletleri — hepsi kehanet için geldi.` },
'97': { baslik: 'Deniz Savaşının Tanığı', icerik: `M.Ö. 406'da Notion açıklarında Sparta Atina'yı bozguna uğrattı. Bu yenilginin sonucu devasa oldu: Atina'nın büyük komutanı Alkibiades görevden alındı. Peloponnessos Savaşları'nın dengesi değişti.

Atina'nın sonunun başlangıcı bu küçük kasabada yaşandı.

Notion bugün birkaç sütun kaidesi ve duvar kalıntısından ibaret. Ama o savaşın dalgaları belki hâlâ kıyıya vuruyor.` },
'98': { baslik: 'Homerosçuların Kenti', icerik: `Erythrai, Homeros'un doğum yeri olduğunu iddia eden kentlerden biriydi. Yedi şehir bu şeref için yarışıyordu.

Buradan bir Sibylla — kahin kadın — çıktı. Erythralı Sibylla kehanetlerini İtalya'ya götürdü. Roma'nın kaderine yön veren kehanetlerin bazıları bu İyon'lu kadından geldi.

Athena tapınağı bugün birkaç blok halinde tarla kenarında duruyor. Ama o kahin kadının sesi Akdeniz'in karşı kıyısına ulaşmıştı.` },
'99': { baslik: 'Denizcilerin Yurdu', icerik: `Foçalı denizciler antik dünyanın en cesur kaşifleriydi. M.Ö. 600'lerde Akdeniz'i aştılar, İspanya'ya ulaştılar, Marsilya'yı kurdular.

Pers işgalinde Foçalılar teslim olmak yerine şehri terk ettiler. "Gelin, başka yerde yeni bir Foça kuralım" dediler. Büyük kısmı gitti.

Geride kalanlar döndüler: "Burasız olmaz" dediler ve Perslere boyun eğdiler. Ama ruhları hep ufuklardaydı.` },
'100': { baslik: 'Aklın Doğduğu Şehir', icerik: `Anaksagoras, Klazomenai'de doğdu ve şunu söyledi: "Güneş ateşten bir kaya kütlesidir — tanrı değil."

Atina bu söz için onu mahkemeye çıkardı. Perikles arkadaşıydı — bu yüzden canını kurtardı. Ama sürgüne gitmek zorunda kaldı.

Ölürken öğrencileri sordular: "Memleketin Klazomenai'yi özlemiyor musun?" Güldü: "Hayır. Gökyüzüne giden yol her yerden geçer."` },
'101': { baslik: 'Bin Yıllık Şehir', icerik: `İzmir — antik Smyrna — Homeros'un doğum yeri olduğunu iddia eden şehirlerden biriydi. "Melez Nehri'nin kıyısında doğan adam" diye anlatılırdı Homeros. Melez hâlâ akıyor.

M.Ö. 600'lerde bir deprem şehri yerle bir etti. Yüzyıllarca boş kaldı.

Sonra İskender rüyasında iki tanrıça gördü — ona Kadifekale'ye Smyrna'yı yeniden kurmasını söylediler. Kurdu. Şehir yeniden doğdu. Ölüp dirilmeyi öğrenmişti.` },
'102': { baslik: 'Aiol\'un Unutulan Kenti', icerik: `Aigai, M.S. 17'deki büyük depremde hasar gördü. İmparator Tiberius kurtarma için büyük para gönderdi.

Pliny şöyle yazmış: "Aigai sakinleri felaketten sonra o kadar gururlanmak istediler ki depreme meydan okur gibi daha büyük binalar yaptılar."

Bugün tarla içinde birkaç sütun kalıntısı duruyor. Gurur ve doğa arasındaki o eski savaş hâlâ sürüyor — ve doğa yavaş da olsa kazanıyor.` },
'103': { baslik: 'Boyacıların Kenti', icerik: `Thyateira, mor boyayla ünlüydü. Bu boya son derece değerliydi — deniz salyangozundan elde ediliyordu. Bir tutam mor için yüzlerce hayvan gerekiyordu. Bu yüzden mor kraliyet rengi oldu.

Yeni Ahit'teki Thyateiralı Lydia, Pavlus'un Avrupa'daki ilk takipçisiydi. Mesleği mor kumaş satıcılığıydı. Bir boyacı kadın, Hristiyanlığın Avrupa'ya taşınmasında köprü oldu.

"Vahiy" kitabında Thyateira kilisesine uyarı var. İki bin yıllık bir mektup, hâlâ bu şehrin adını taşıyor.` },
'104': { baslik: 'Açık Kapının Kenti', icerik: `Vahiy kitabında Philadelphia'ya şöyle yazılmış: "Önüne açık bir kapı koydum, kimse kapatamaz." Bu söz şehrin sembolü oldu.

Philadelphia, kardeşine olan bağlılığıyla ünlü Bergama Kralı II. Attalos tarafından kuruldu. Kente "kardeş sevgisi" adını verdi.

Bugün Alaşehir'in merkezinde Aziz Yuhanna Kilisesi'nin kemerleri duruyor. O "açık kapı" imgesi hâlâ yaşıyor.` },
'105': { baslik: 'Hesiodos\'un Kökleri', icerik: `Kyme'nin en ünlü bağı bir şairin babasıylaydı: Hesiodos'un babası buradan göç etmişti. Hesiodos "Theogony" ve "İşler ve Günler"i yazdı — Yunan mitolojisinin en önemli kaynakları.

Kyme'nin en tuhaf efsanesi şu: Halkı o kadar yavaş hareket ederdi ki bir gün liman inşa etmeye karar verdiklerinde komşu kentler çoktan zenginleşmişti. "Geç kalan Kyme'li" deyimi antik çağda tembeli ifade ederdi.

Yavaş da olsa Kyme şairin babasını dünyaya verdi.` },
'106': { baslik: 'Heykelciklerin Ustası', icerik: `Myrina'nın pişmiş toprak heykelcikleri antik dünyanın en sevilen hediyelikleriydi. Her evde, her tapınakta bir Myrina figürini bulunurdu.

Bu heykelcikler sadece tanrıları değil, günlük hayatı da yansıtırdı: Tiyatroya giden kadın, top oynayan çocuk, konuşan iki arkadaş. İki bin yıl öncesinin fotoğrafları gibiydi bunlar.

Seri üretim miydi, sanat mıydı? İkisi arasındaki sınır Myrina'da silinmişti.` },
'108': { baslik: 'Pavlus\'un Gemisi', icerik: `Adramytteion limanı Yeni Ahit'te geçer. Aziz Pavlus Roma'ya gönderilirken bindiği gemi buradan kalkmıştı.

Aristoteles de bu kenti bilirdi — öğrencisi Hermias buranın yöneticisiydi. Aristoteles Hermias'ın kız kardeşiyle evlendi.

Bir liman kenti bazen iki büyük hikâyenin kesiştiği yerdir: Bir gemi kalkarken bir evlilik de başlamıştı.` },
'109': { baslik: 'İskender\'in Generalinin Şehri', icerik: `Alexandreia Troas, İskender'in generallerinden Antigonos tarafından M.Ö. 310'da kuruldu. Birçok küçük şehri bir araya getirdi — tarihin ilk büyük kentleşme projelerinden biri.

Roma döneminde İmparator Konstantinos burayı yeni başkent yapmayı düşündü. İstanbul'u seçmeseydi, bugün başka bir isim dünya tarihinin başkenti olacaktı.

"Neredeyse başkent olan kent" olarak tarihe geçti Troas.` },
'111': { baslik: 'Bithynia\'nın Unutulan Kenti', icerik: `Prusias ad Hypium'u kuran Bithynia Kralı Prusias, Hannibal'ı Romalılardan korumuştu. Sonunda teslim etmek zorunda kaldı.

Hannibal zehir içerek intihar etti — son sözleri: "Romalıların kaygısını giderelim, bir yaşlı adamı bekletmeyelim."

Bu kente gelenler Roma köprüsünü görüyor. Ama gözlerini kaparlarsa Hannibal'ın son gecesini hayal edebilirler.` },
'112': { baslik: 'Karadeniz\'in İncisi', icerik: `Amastris — bugünkü Amasra — antik dünyanın en güzel doğal limanlarından birine sahipti. İki yarımada arasına sıkışmış bu korunaklı koy, fırtınanın ortasında bile sakin kalırdı.

Şehri kuran Amastris bir kraliçeydi — Büyük Darius'un yeğeni. Pers kanı taşımasına rağmen Helenistik bir şehir kurdu. Hem doğunun hem batının kızıydı.

Bugün Bizans surları hâlâ ayakta. Katman katman tarih, mavi Karadeniz'e bakıyor.` },
'113': { baslik: 'Sütunlu Caddenin Sırrı', icerik: `Pompeiopolis yakın zamana kadar neredeyse bilinmiyordu. Sonra bir arkeolog tarlada garip bir şey fark etti: Toprak altından sütun başlıkları çıkıyordu.

Kazılar başlayınca 2000 yıllık sütunlu cadde neredeyse bozulmamış haldeydi. Toprağın altında uyuyordu.

Şehri Pompeius kurmuştu — Kilikya korsanlarını temizledikten sonra. Korsanlara yeni hayat verdi, onları topraklara yerleştirdi. Denizin haydutları toprakçı oldu.` },
'114': { baslik: 'Büyük Gregorios\'un Şehri', icerik: `Neokaisareia'da Büyük Gregorios piskopos oldu. Efsaneye göre şehre geldiğinde sadece 17 Hristiyan vardı. Öldüğünde ise sadece 17 putperest kalmıştı.

Gregorios'un en ünlü mucizesi: İki kardeş aynı göl için kavga ediyordu. Gregorios dua etti — gece göl kuruyuverdi. Kavga bitti.

Mucize mi, efsane mi? İkisi arasındaki çizgi Niksar'da çizilmemiş.` },
'116': { baslik: 'El Sıkışmanın Anıtı', icerik: `Arsameia'nın en ünlü eseri bir kaya kabartmasıdır: Dev bir el sıkışma sahnesi. Bir tarafta Kommagene Kralı, diğer tarafta tanrı Herakles. İkisi eşit güçte, eşit onurla tokalaşıyor.

Bu kabartma Kommagene ideolojisinin özüydü: Kral tanrıyla eşit. Ne tanrının kulu, ne de tanrıdan bağımsız.

Yazıt şöyle diyor: "Ben bu kutsal yeri kurdum. Oğlum Antiokhos buraya gelip dua etsin, ben de gökyüzünden onu izleyeyim."` },
'117': { baslik: 'Kaya İçindeki Kilise', icerik: `Perre, Roma döneminin önemli bir kentiydi. Ama Hristiyanlık yayılınca mağaralar kiliseye dönüştü. Kayaya oyulan odalar ibadet yerine, sığınak, mezarlık oldu.

Bu kaya kiliseleri sıradan değildi. Bazılarında freskler vardı — bugün silinmiş, ama izleri kalmış.

Kommagene'nin bu sessiz köşesinde tarih farklı bir boyut kazanıyor. Büyüklükle küçüklük, gösteri ile sessizlik, aynı toprakta yan yana.` },
'118': { baslik: 'Antik Liman\'ın Mozaikleri', icerik: `Kelenderis, Kilikya'nın en eski Yunan kolonilerinden biriydi. Rivayete göre Yunan kahraman Sandokos burayı kurdu — tanrısal kökenden geliyordu.

Kazılarda bulunan mozaikler şaşırtıcıydı: Balık, yunus, deniz canavarları. Deniz insanların hayal dünyasını ne kadar doldurmuştu.

Bugün Aydıncık plajının altında antik liman kalıntıları var. Yüzücüler bazen su altında taş duvarları görüyor. Antik kent hâlâ orada — sadece deniz onu sahiplendi.` },
'120': { baslik: 'Artemis\'in Dağ Evi', icerik: `Kastabala'nın diğer adı Hierapolis'ti — "kutsal şehir." Artemis Perasia tapınağı, tüm Kilikya'nın hac merkeziydi.

En garip ritüel: Tapınağın rahibeleri kor ateş üzerinde yalınayak yürüyordu. Yanmıyorlardı. Tanrıçanın koruyuculuğuyla mı? Antik kaynaklar hayretle anlatıyor.

Artemis Perasia'nın adı "uzaktan gelen" anlamında. Uzaktan geldi, binlerce yıl burada kaldı.` },

};

const UNLULER = {
  '1': [
    {isim:'Herakleitos',unvan:'Filozof',donem:'M.Ö. 535–475',ozet:'"Aynı nehre iki kez giremezsin" diyen karanlık filozof. Ateşin evrenin ana maddesi olduğunu savundu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_herakleitos_qqffgx'},
    {isim:'Aziz Yuhanna',unvan:'Havari',donem:'M.S. 6–100',ozet:'İncil yazarı ve İsa\'nın sevdiği havari. Efes\'te uzun yıllar yaşadı ve Meryem Ana\'ya burada baktı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_yuhanna_esrmtu'},
  ],
  '2': [
    {isim:'Aleksandros Afrodisyaslı',unvan:'Filozof',donem:'M.S. 200',ozet:'"Yorumcu" lakabıyla anılan Aristoteles felsefesinin en önemli yorumcusu. Eserleri Ortaçağ İslam ve Hristiyan düşüncesini etkiledi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_aleksandros_af_ccmzk0'},
  ],
  '3': [
    {isim:'Galenos',unvan:'Hekim',donem:'M.S. 129–216',ozet:'Antik çağın en büyük hekimi. Anatomi eserleri 1400 yıl boyunca tıbbı yönlendirdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_galenos_hs6p5q'},
  ],
  '5': [
    {isim:'Thales',unvan:'Filozof & Matematikçi',donem:'M.Ö. 624–546',ozet:'Batı felsefesinin kurucusu. Güneş tutulmasını öngördü; suyun her şeyin temeli olduğunu savundu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_thales_bperop'},
    {isim:'Anaximandros',unvan:'Filozof',donem:'M.Ö. 610–546',ozet:'İlk dünya haritasını çizen düşünür. Sonsuz madde (apeiron) kavramını geliştirdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_anaximandros_zbsvf0'},
    {isim:'Anaximenes',unvan:'Filozof',donem:'M.Ö. 585–528',ozet:'Havanın evrenin temel maddesi olduğunu savunan Miletli düşünür.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_anaximenes_mfbibe'},
  ],
  '7': [
    {isim:'Kral Kroisos',unvan:'Kral',donem:'M.Ö. 595–547',ozet:'Tarihin ilk madeni parasını basan Lidya Kralı. Zenginliğiyle efsaneleşti.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_kroisos_kdjtdr'},
  ],
  '8': [
    {isim:'Bias',unvan:'Bilge',donem:'M.Ö. 625–540',ozet:'Antik Yunan\'ın yedi bilgesinden biri. Adil yargılamasıyla tanınmış devlet adamı ve düşünür.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_bias_on8npj'},
  ],
  '9': [
    {isim:'Aristoteles',unvan:'Filozof',donem:'M.Ö. 384–322',ozet:'Batı felsefesinin en büyük ismi. Platon\'un öğrencisi, İskender\'in öğretmeni. Assos\'ta okul kurdu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_aristoteles_sjqwdb'},
  ],
  '13': [
    {isim:'Praksiteles',unvan:'Heykeltıraş',donem:'M.Ö. 400–330',ozet:'Knidos Afroditi\'nin yaratıcısı. Tarihte ilk çıplak kadın heykeli sanat tarihinde devrim yarattı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_praksiteles_b1vwwh'},
    {isim:'Eudoksos',unvan:'Matematikçi',donem:'M.Ö. 408–355',ozet:'Gezegen hareketlerini küre modelleriyle açıklayan matematikçi. Entegral hesabının öncüsü.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_eudoksos_mqooex'},
  ],
  '14': [
    {isim:'Anakreon',unvan:'Şair',donem:'M.Ö. 582–485',ozet:'Aşk ve şarap şiirleriyle ünlü lirik şair. "Anakreontik" şiir türüne adını verdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_anakreon_jigp50'},
  ],
  '15': [
    {isim:'Xenophanes',unvan:'Filozof',donem:'M.Ö. 570–475',ozet:'Tek tanrı anlayışını savunan düşünür. İnsanların tanrıları kendi suretlerinde yarattığını öne sürdü.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_xenophanes_dzz30a'},
  ],
  '16': [
    {isim:'Homeros',unvan:'Ozan',donem:'M.Ö. 8. yüzyıl',ozet:'İlyada destanının yazarı. Truva Savaşı\'nı ölümsüzleştiren en büyük Yunan ozanı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_homeros_szjoed'},
  ],
  '17': [
    {isim:'Fatih Sultan Mehmed',unvan:'Osmanlı Padişahı',donem:'1432–1481',ozet:'İstanbul\'u 1453\'te fetheden padişah. Bizans\'a son verdi, kente yeni bir çağ açtı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_fatih_tvekr7'},
    {isim:'Mimar Sinan',unvan:'Mimar',donem:'1489–1588',ozet:'400\'den fazla eser inşa eden büyük mimar. Süleymaniye ve Selimiye camileri şaheserleridir.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_sinan_bsmnjv'},
  ],
  '26': [
    {isim:'Apollonios',unvan:'Matematikçi',donem:'M.Ö. 262–190',ozet:'"Büyük Geometrist" lakaplı Pergeli matematikçi. Konik kesitler teorisi Newton\'u etkiledi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_apollonios_igywia'},
  ],
  '27': [
    {isim:'Aziz Nikolaos',unvan:'Din Adamı',donem:'M.S. 270–343',ozet:'Noel Baba geleneğinin kaynağı. Çocuklara ve yoksullara yardımıyla efsaneleşen Myralı piskopos.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_nikolaos_etspex'},
  ],
  '41': [
    {isim:'Mevlana Celaleddin Rumi',unvan:'Şair & Sufi',donem:'1207–1273',ozet:'İslam mistisizminin en büyük şairi. Mesnevi ve hoşgörü felsefesiyle tüm insanlığa seslendi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_rumi_xq3iga'},
  ],
  '46': [
    {isim:'Klaus Schmidt',unvan:'Arkeolog',donem:'1953–2014',ozet:'Göbeklitepe\'yi dünyaya tanıtan Alman arkeolog. Hayatını bu alanda kazıya adadı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_schmidt_my7to5'},
  ],
  '47': [
    {isim:'I. Antiokhos',unvan:'Kral',donem:'M.Ö. 86–38',ozet:'Nemrut\'taki dev heykelleri yaptıran Kommagene Kralı. Yunan ve Pers kültürünü harmanlayan özgün bir uygarlık kurdu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_antiokhos_yj130y'},
  ],
  '55': [
    {isim:'I. Gagik',unvan:'Kral',donem:'990–1020',ozet:'Ani\'yi Ortaçağ\'ın en büyük şehirlerinden birine dönüştüren Bagratid Ermeni Kralı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_gagik_ani_uckcqq'},
  ],
  '58': [
    {isim:'İshak Paşa',unvan:'Osmanlı Veziri',donem:'18. yüzyıl',ozet:'Adını taşıyan muhteşem sarayı inşa ettiren Osmanlı veziri. Doğu Anadolu\'nun en görkemli yapısının mimarisi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_ishakpasa_nr8dbv'},
  ],
  '64': [
    {isim:'Diyojen',unvan:'Filozof',donem:'M.Ö. 412–323',ozet:'"Gölgemi geçme" diyerek İskender\'i şaşırtan Sinoplu filozof. Kinik felsefenin kurucusu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_diyojen_lxrjgn'},
  ],
  '89': [
    {isim:'Aziz Pavlus',unvan:'Havari',donem:'M.S. 5–67',ozet:'Hristiyanlığı Anadolu\'ya ve Avrupa\'ya yayan havari. İlk vaazını burada verdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_pavlus_tpndbm'},
  ],
  '92': [
    {isim:'Aratos',unvan:'Şair & Astronom',donem:'M.Ö. 315–240',ozet:'Yıldızlar üzerine yazdığı Phainomena şiiriyle ünlü Solili şair.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_aratos_nk0qbc'},
  ],
  '100': [
    {isim:'Anaksagoras',unvan:'Filozof',donem:'M.Ö. 500–428',ozet:'Güneşin ateşten kaya kütlesi olduğunu öne süren düşünür. Perikles\'in öğretmeni.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_anaksagoras_xugbep'},
  ],
  '101': [
    {isim:'Homeros',unvan:'Ozan',donem:'M.Ö. 8. yüzyıl',ozet:'İzmir de Homeros\'un doğum yeri olarak iddia edilir. Şehirde bugün hâlâ Homeros heykeli bulunur.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_homeros_szjoed'},

    {isim:'Marcus Aurelius',unvan:'Roma İmparatoru & Filozof',donem:'M.S. 121–180',ozet:'M.S. 178 depreminde yıkılan Smyrna\'nın yeniden kurulmasını destekleyen filozof imparator. Bugün görülen agora bu yeniden inşanın eseridir.'},
    {isim:'Polykarpos',unvan:'Smyrna Piskoposu',donem:'M.S. 69–155 civarı',ozet:'Smyrna\'nın piskoposu ve Aziz Yuhanna\'nın öğrencisi olduğu anlatılan din adamı. İnancından vazgeçmeyi reddettiği için kentte şehit edildi.'},
  ],
  '110': [
    {isim:'I. Konstantinos',unvan:'Roma İmparatoru',donem:'272–337',ozet:'İznik Konsili\'ni toplayarak Hristiyan inancının temel ilkelerini belirleyen imparator.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_konstantinos_hyxykm'},
  ],
  '4': [
    {isim:'Epiktetos',unvan:'Stoacı Filozof',donem:'M.S. 50–135',ozet:'Köle olarak doğan büyük Stoacı filozof. "İnsanları rahatsız eden olaylar değil, olaylara bakış açıları" der. Hierapolis\'te doğdu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_epiktetos_u6thdn'},
  ],
  '6': [
    {isim:'Brankhos',unvan:'Kâhin',donem:'M.Ö. 7. yüzyıl',ozet:'Apollon\'un sevgilisi ve Didim kehanet geleneğinin efsanevi kurucusu. Onun soyundan geldiği söylenen Brankhadlar yüzyıllarca tapınağı yönetti.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_brankhos_ago9v9'},
  ],
  '18': [
    {isim:'Osman Gazi',unvan:'Osmanlı Devleti Kurucusu',donem:'1258–1326',ozet:'Osmanlı Devleti\'nin kurucusu. Bursa\'yı fethedemeyen Osman Gazi, ölüm döşeğinde şehrin düşeceğini oğluna müjdeledi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_osmangazi_bdadwv'},
    {isim:'Orhan Gazi',unvan:'Osmanlı Padişahı',donem:'1281–1362',ozet:'Bursa\'yı fetheden ikinci Osmanlı hükümdarı. Ulu Cami\'nin temelini attı, ilk Osmanlı sikkesini kestirdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_orhangazi_ez8chf'},
  ],
  '22': [
    {isim:'Aziz Nikolaos',unvan:'Din Adamı',donem:'M.S. 270–343',ozet:'Noel Baba geleneğinin kaynağı olan piskoposun Patara\'da doğduğu rivayet edilir. Yoksullara altın dağıtmasıyla efsaneleşti.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_nikolaos_etspex'},
  ],
  '25': [
    {isim:'Alketas',unvan:'Makedon Generali',donem:'M.Ö. 4. yüzyıl',ozet:'İskender\'in generallerinden Perdikkas\'ın kardeşi. Termessos halkı ona o kadar saygı duydu ki onu ele vermedi; kaya mezarı hâlâ görülebilir.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_alketas_gzyslr'},
  ],
  '28': [
    {isim:'Büyük İskender',unvan:'Hükümdar & Komutan',donem:'M.Ö. 356–323',ozet:'Anadolu seferinde Sagalassos\'u fetheden Makedon hükümdarı. Persler\'den bu kenti alan İskender burada kışladı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_iskender_cvfsar'},
  ],
  '31': [
    {isim:'Büyük İskender',unvan:'Hükümdar & Komutan',donem:'M.Ö. 356–323',ozet:'Kışını Phaselis\'te geçiren ve kentin anahtarlarını alan İskender. Şehir onu karşılamak için kapılarını açtı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_iskender_phaselis_edxn48',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_iskender_cvfsar'},
  ],
  '34': [
    {isim:'James Mellaart',unvan:'Arkeolog',donem:'1925–2012',ozet:'Çatalhöyük\'ü 1958\'de keşfeden İngiliz arkeolog. Bulguları insanlık tarihinin yazılmasını değiştirdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_mellaart_qj55gs'},
  ],
  '35': [
    {isim:'III. Hattusili',unvan:'Hitit Kralı',donem:'M.Ö. 1267–1237',ozet:'Tarihin bilinen ilk barış antlaşması olan Kadeş Antlaşması\'nı imzalayan Hitit hükümdarı. Mısır Firavunu II. Ramses ile imzalanan bu belge BM\'de sergileniyor.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_hattusili_rsigit'},
  ],
  '36': [
    {isim:'Aziz Basileios',unvan:'Din Adamı',donem:'M.S. 330–379',ozet:'Kapadokya\'da doğan ve büyüyen Hristiyan teologu. "Büyük Basileios" olarak anılan aziz, Ortodoks manastır geleneğinin kurucusudur.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_basileios_zntudd'},
    {isim:'Gregorios Nazianzenos',unvan:'Din Adamı & Şair',donem:'M.S. 329–390',ozet:'Kapadokyalı büyük ilahiyatçı ve şair. Hristiyan Üçlü Birlik doktrininin temel mimarlarından biri.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_gregorios_lmxq8p'},
  ],
  '38': [
    {isim:'Kral Midas',unvan:'Frig Kralı',donem:'M.Ö. 740–696',ozet:'Efsanevi "altın dokunuşu" ile tarihe geçen Frig Kralı. Gordion\'da hüküm sürdü; Kimmer saldırısı karşısında intihar ettiği söylenir.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_midas_uf2bxs'},
    {isim:'Büyük İskender',unvan:'Hükümdar & Komutan',donem:'M.Ö. 356–323',ozet:'Gordion Düğümü\'nü kılıcıyla keserek çözen İskender. "Kim bu düğümü çözerse Asya\'ya hükmedecek" kehanetini yerine getirdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_iskender_gordion_seif0u',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_iskender_cvfsar'},
  ],
  '40': [
    {isim:'Ahmet Şah',unvan:'Mengücek Beyi',donem:'13. yüzyıl',ozet:'Divriği Ulu Camii\'ni 1228\'de inşa ettiren Mengücek beyi. Eşi Turan Melek Hatun ile birlikte yaptırdığı cami UNESCO Dünya Mirası listesine girdi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_ahmetshah_khckzq'},
  ],
  '48': [
    {isim:'Hz. İbrahim',unvan:'Peygamber',donem:'M.Ö. yaklaşık 2000',ozet:'Üç büyük semavi dinin ortak peygamberi. Harran\'da uzun süre yaşadığı ve buradan Kenan\'a göç ettiği İncil, Tevrat ve Kuran\'da anlatılır.',foto:null},
  ],
  '50': [
    {isim:'Evliya Çelebi',unvan:'Seyyah & Yazar',donem:'1611–1682',ozet:'Diyarbakır\'ı Seyahatname\'sinde anlatan Osmanlı gezgini. 40 yıllık seyahatinde 300.000 km yol katetti ve Türk coğrafyasının en önemli kaynağını yazdı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_evliya_yxcbpx'},
  ],
  '56': [
    {isim:'Gagik I Artsruni',unvan:'Vaspurakan Kralı',donem:'908–943',ozet:'Akdamar Kilisesi\'ni 915-921 yılları arasında inşa ettiren Ermeni Vaspurakan Kralı. Kilisedeki İncil kabartmaları onun döneminin şaheseridir.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_gagik_artsruni_cblbbm'},
  ],
  '57': [
    {isim:'II. Sarduri',unvan:'Urartu Kralı',donem:'M.Ö. 764–735',ozet:'Çavuştepe kalesini inşa ettiren güçlü Urartu hükümdarı. Asur ve diğer komşularıyla savaşarak Urartu\'nun en geniş sınırlarına ulaştı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_sarduri2_nvdwde'},
  ],
  '59': [
    {isim:'I. Sarduri',unvan:'Urartu Kralı',donem:'M.Ö. 840–825',ozet:'Van Kalesi\'ni inşa eden Urartu Krallığı\'nın kurucusu. Tushpa (Van) şehrini başkent yaparak Urartu uygarlığının temellerini attı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_sarduri1_c8yxge'},
  ],
  '60': [
    {isim:'Alparslan',unvan:'Selçuklu Sultanı',donem:'1029–1072',ozet:'1071 Malazgirt Savaşı\'nı kazanan büyük Selçuklu Sultanı. Bizans İmparatoru\'nu esir alan bu zafer Anadolu\'nun Türkleşmesinin başlangıcı sayılır.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_alparslan_ygk1ms'},
  ],
  '62': [
    {isim:'Aziz Sophronios',unvan:'Din Adamı',donem:'M.S. 560–638',ozet:'Sümela Manastırı\'nı ziyaret ettiği rivayet edilen Kudüs Patriği. Manastırın kutsallığını Hristiyan dünyasına taşıdı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_sophronios_stg4q7'},
  ],
  '65': [
    {isim:'Evliya Çelebi',unvan:'Seyyah & Yazar',donem:'1611–1682',ozet:'Safranbolu\'yu Seyahatname\'sinde anlatan Osmanlı gezgini. Şehrin tarihi dokusunu ve zenginliğini detaylarıyla aktardı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_evliya_yxcbpx'},
  ],
  '66': [
    {isim:'Strabon',unvan:'Coğrafyacı & Tarihçi',donem:'M.Ö. 64–M.S. 24',ozet:'Antik dünyanın en büyük coğrafyacısı. Amasya\'da doğan Strabon\'un Geographika adlı eseri antik dünyanın en kapsamlı coğrafya ansiklopedisidir.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_strabon_on92x8'},
    {isim:'I. Mithridates',unvan:'Pontus Kralı',donem:'M.Ö. 302–266',ozet:'Pontus Krallığı\'nı kuran hükümdar. Amasya\'yı başkent yaparak Karadeniz\'in en güçlü devletini kurdu.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_mithridates1_slzijm'},
  ],
  '67': [
    {isim:'VI. Mithridates',unvan:'Pontus Kralı',donem:'M.Ö. 134–63',ozet:'"Büyük" lakabıyla anılan Pontus Kralı. Roma\'ya karşı 26 yıl savaşan, zehire karşı bağışıklık geliştirdiği söylenen efsanevi hükümdar.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_mithridates6_eemkfy'},
  ],
  '107': [
    {isim:'Galenos',unvan:'Hekim',donem:'M.S. 129–216',ozet:'Pergamon Asklepion\'da yetişen ve ilk eğitimini burada alan büyük hekim. Gladyatörlerin cerrahı olarak görev yaptıktan sonra Roma\'ya gitti.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_galenos_hs6p5q'},
  ],
  '96': [
    {isim:'Apollon',unvan:'Tanrı (Mitoloji)',donem:'Antik dönem',ozet:'Güneş ve kehanet tanrısı. Klaros\'taki kutsal korusu ve tapınağı, Delphi\'den sonra antik dünyanın en önemli kehanet merkeziydi.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_apollon_vgzdrc'},
  ],
  '11': [
    {isim:'Antonius Polemon',unvan:'Hatip & Sofist',donem:'M.S. 90–144',ozet:'Laodikeia\'da doğan, çağının en ünlü hatiplerinden biri. İmparator Hadrianus\'un gözdesiydi; Atina\'daki Olympieion\'un açılış konuşmasını o yaptı.'},
  ],
  '12': [
    {isim:'Kraliçe Stratonike',unvan:'Seleukos Kraliçesi',donem:'M.Ö. 3. yüzyıl',ozet:'Kent, Seleukos Kralı I. Antiokhos\'un eşi Stratonike\'nin adını taşır. Önce I. Seleukos ile, sonra onun oğlu Antiokhos ile evlenmesi antik dünyanın en çok anlatılan saray hikâyelerinden biridir.'},
  ],
  '19': [
    {isim:'Eudoksos',unvan:'Matematikçi',donem:'M.Ö. 408–355',ozet:'Knidoslu matematikçi ve astronom Eudoksos, Kyzikos\'ta bir okul kurdu ve öğrencilerini burada yetiştirdi. Kenti antik bilimin merkezlerinden biri yaptı.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_eudoksos_mqooex'},
  ],
  '20': [
    {isim:'II. Pharnabazos',unvan:'Pers Satrabı',donem:'M.Ö. 5.–4. yüzyıl',ozet:'Daskyleion\'u merkez edinen Hellespontos Frigyası satrabı. Sparta ile Atina arasındaki savaşlarda Pers politikasını yönetti; Ksenophon onun sarayını ve av bahçelerini anlatır.'},
  ],
  '21': [
    {isim:'Mimar Zenon',unvan:'Mimar',donem:'M.S. 2. yüzyıl',ozet:'Aspendos tiyatrosunu tasarlayan mimar. Theodoros\'un oğlu Zenon\'un adı tiyatrodaki yazıtlarda geçer; eseri dünyanın en iyi korunmuş antik tiyatrosu olarak bugün hâlâ kullanılıyor.'},
  ],
  '23': [
    {isim:'Erbbina (Arbinas)',unvan:'Likya Hanedanı',donem:'M.Ö. 400 civarı',ozet:'Ksanthos\'u yöneten Likyalı hükümdar. Bugün British Museum\'da sergilenen ünlü Nereidler Anıtı\'nın onun mezarı olduğu düşünülüyor.'},
  ],
  '24': [
    {isim:'Hannibal',unvan:'Kartacalı Komutan',donem:'M.Ö. 247–183',ozet:'Roma\'nın en büyük düşmanı. Seleukos hizmetindeyken M.Ö. 190\'da Side açıklarındaki deniz savaşında Rodos donanmasına karşı savaştı.'},
  ],
  '33': [
    {isim:'Dioskorides',unvan:'Hekim & Botanikçi',donem:'M.S. 40–90 civarı',ozet:'Anazarbos\'ta (Anavarza) doğan Roma ordusu hekimi. Yüzlerce bitkiyi ve ilacı anlattığı De Materia Medica, 1500 yıl boyunca farmakolojinin temel kitabı oldu.'},
  ],
  '39': [
    {isim:'Hamit Zübeyr Koşay',unvan:'Arkeolog',donem:'1897–1984',ozet:'1935\'te Alacahöyük kazılarını başlatan Türk arkeolog. Burada bulunan altın kraliyet mezarları ve güneş kursları bugün Anadolu Medeniyetleri Müzesi\'nin en değerli eserleri arasında.'},
  ],
  '43': [
    {isim:'Anitta',unvan:'Kuşşara Kralı',donem:'M.Ö. 18. yüzyıl',ozet:'Kaniş\'i (Neşa) ele geçirip başkent yapan kral. Yazdırdığı Anitta Metni, Hititçe yazılmış bilinen en eski metinlerden biridir.'},
    {isim:'Tahsin Özgüç',unvan:'Arkeolog',donem:'1916–2005',ozet:'1948\'den ölümüne kadar Kültepe kazılarını yöneten arkeolog. Asurlu tüccarların on binlerce kil tabletini gün ışığına çıkardı; Anadolu\'nun yazılı tarihi bu tabletlerle başlar.'},
  ],
  '45': [
    {isim:'Hacı Bektaş-ı Veli',unvan:'Mutasavvıf',donem:'13. yüzyıl',ozet:'Horasan\'dan gelip bu kasabaya yerleşen Anadolu erenlerinden. Adını taşıyan Bektaşi geleneğinin piri; türbesi bugün külliyenin kalbidir.'},
  ],
  '49': [
    {isim:'I. Seleukos Nikator',unvan:'Kral',donem:'M.Ö. 358–281',ozet:'Büyük İskender\'in generali ve Seleukos İmparatorluğu\'nun kurucusu. Fırat üzerindeki geçit noktasında Zeugma\'nın ilk adı olan Seleukeia\'yı kurdu.'},
  ],
  '52': [
    {isim:'I. Anastasios',unvan:'Bizans İmparatoru',donem:'M.S. 430–518',ozet:'M.S. 505\'te Pers sınırında Dara\'yı bir garnizon kenti olarak kurdurdu. Kent, adını taşıyan Anastasiopolis olarak da anıldı.'},
  ],
  '53': [
    {isim:'Lukianos',unvan:'Hiciv Yazarı',donem:'M.S. 125–180 civarı',ozet:'Samosata\'da doğan, antik çağın en keskin dilli hiciv yazarı. Aya yolculuğu anlatan Gerçek Hikâye, bilimkurgunun ilk örneklerinden sayılır.'},
  ],
  '54': [
    {isim:'II. Mithridates',unvan:'Kommagene Kralı',donem:'M.Ö. 1. yüzyıl',ozet:'I. Antiokhos\'un oğlu. Karakuş Tümülüsü\'nü annesi Isias, kız kardeşi Antiokhis ve yeğeni Aka için yaptırdı.'},
  ],
  '61': [
    {isim:'Ahmed-i Hani',unvan:'Şair & Düşünür',donem:'1651–1707',ozet:'Doğubayazıt\'ta yaşayan ünlü şair. Mem û Zîn adlı aşk destanının yazarı; türbesi İshak Paşa Sarayı\'nın yakınındadır.'},
  ],
  '63': [
    {isim:'I. Manuel Komnenos',unvan:'Trabzon İmparatoru',donem:'Hd. 1238–1263',ozet:'Trabzon İmparatorluğu\'nun hükümdarı. Ayasofya Kilisesi onun döneminde yaptırıldı; kilisenin freskleri Bizans sanatının son parlak örneklerindendir.'},
  ],
  '68': [
    {isim:'Şeyh Şaban-ı Veli',unvan:'Mutasavvıf',donem:'1500–1569',ozet:'Kastamonu\'nun manevi önderi sayılan Halveti şeyhi. Kentin en çok ziyaret edilen türbesi onundur.'},
  ],
  '71': [
    {isim:'Arkhelaos',unvan:'Kapadokya Kralı',donem:'Hd. M.Ö. 36–M.S. 17',ozet:'Augustus\'un desteğiyle Kilikya kıyılarını da yöneten kral. Elaiussa\'yı sarayı yaptı ve imparator onuruna kente Sebaste adını verdi.'},
  ],
  '72': [
    {isim:'Strabon',unvan:'Coğrafyacı & Tarihçi',donem:'M.Ö. 64–M.S. 24',ozet:'Amasyalı coğrafyacı Strabon gençliğinde Nysa\'da öğrenim gördü. Geographika\'da kenti ve hocalarını anlatır.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_strabon_on92x8'},
  ],
  '73': [
    {isim:'Anthemios',unvan:'Matematikçi & Mimar',donem:'M.S. 474–534 civarı',ozet:'Tralles\'te doğan matematikçi. Miletli İsidoros ile birlikte Ayasofya\'yı tasarladı; dev kubbenin hesapları onlarındı.'},
    {isim:'Trallesli Aleksandros',unvan:'Hekim',donem:'M.S. 525–605 civarı',ozet:'Anthemios\'un kardeşi, Bizans\'ın en ünlü hekimlerinden. Hastalıkları ve tedavilerini anlattığı on iki ciltlik eseri yüzyıllarca okundu.'},
  ],
  '74': [
    {isim:'Hermogenes',unvan:'Mimar',donem:'M.Ö. 2. yüzyıl',ozet:'Magnesia\'daki Artemis Leukophryene Tapınağı\'nın mimarı. Mimarlık üzerine kitaplar yazdı; Romalı mimar Vitruvius onu övgüyle anar.'},
    {isim:'Themistokles',unvan:'Atinalı Komutan',donem:'M.Ö. 524–459',ozet:'Salamis\'te Pers donanmasını yenen Atinalı. Sürgüne gönderilince Pers kralına sığındı; kral ona Magnesia\'yı verdi ve hayatının son yıllarını burada geçirdi.'},
  ],
  '76': [
    {isim:'Kraliçe Ada',unvan:'Karya Kraliçesi',donem:'M.Ö. 4. yüzyıl',ozet:'Tahtından uzaklaştırılınca Alinda\'ya çekilen Karya kraliçesi. Büyük İskender\'i karşılayıp onu evlat edindi; İskender de ona Karya\'nın yönetimini geri verdi.'},
  ],
  '78': [
    {isim:'Mausolos',unvan:'Karya Satrabı',donem:'Hd. M.Ö. 377–353',ozet:'Labranda\'yı yeniden düzenleyen Hekatomnid hükümdarı. Adı, dünyanın yedi harikasından biri olan Halikarnassos Mozolesi ile \'mozole\' kelimesine dönüştü.'},
  ],
  '82': [
    {isim:'Protogenes',unvan:'Ressam',donem:'M.Ö. 4. yüzyıl',ozet:'Kaunos\'ta doğan, antik dünyanın en ünlü ressamlarından. Rakibi Apelles ile ince çizgi yarışması efsaneleşmiştir; tek bir tablosunu yıllarca çalıştığı anlatılır.'},
  ],
  '93': [
    {isim:'Tyanalı Apollonios',unvan:'Filozof',donem:'M.S. 1. yüzyıl',ozet:'Gençliğinde Aigeai\'deki Asklepios Tapınağı\'nda yaşayıp öğrenim gören Pythagorasçı filozof. Hayatı, mucizeleriyle ün kazanmış bir bilge olarak anlatılır.'},
  ],
  '97': [
    {isim:'Lysandros',unvan:'Spartalı Komutan',donem:'Ö. M.Ö. 395',ozet:'M.Ö. 406\'da Notion açıklarında Atina donanmasını yenen Spartalı amiral. Birkaç yıl sonra Atina\'yı teslim alarak Peloponnesos Savaşı\'nı bitirdi.'},
  ],
  '103': [
    {isim:'Thyateiralı Lydia',unvan:'Tüccar',donem:'M.S. 1. yüzyıl',ozet:'Thyateira\'dan gelen mor kumaş tüccarı. Elçilerin İşleri\'ne göre Avrupa\'da Aziz Pavlus\'un vaazıyla vaftiz edilen ilk kişidir.'},
  ],
  '104': [
    {isim:'II. Attalos Philadelphos',unvan:'Bergama Kralı',donem:'M.Ö. 220–138',ozet:'Kenti kuran Bergama kralı. Kardeşine olan bağlılığı yüzünden \'kardeşini seven\' anlamındaki Philadelphos lakabını aldı; kent de bu adı taşır.'},
  ],
  '105': [
    {isim:'Ephoros',unvan:'Tarihçi',donem:'M.Ö. 400–330 civarı',ozet:'Kyme\'de doğan tarihçi. Yazdığı otuz kitaplık tarih, yalnız tek bir savaşı değil dünyayı anlatmayı amaçlayan ilk evrensel tarih kitabı sayılır.'},
  ],
  '109': [
    {isim:'I. Antigonos',unvan:'Kral',donem:'M.Ö. 382–301',ozet:'Tek gözlü lakabıyla bilinen, Büyük İskender\'in generali. Kenti Antigoneia adıyla kurdu; sonra Lysimakhos ona İskender\'in adını verdi.'},
  ],
  '111': [
    {isim:'I. Prusias',unvan:'Bitinya Kralı',donem:'Hd. M.Ö. 228–182',ozet:'Kenti ele geçirip kendi adını veren Bitinya kralı. Roma\'dan kaçan Hannibal\'a sarayında sığınak verdi.'},
  ],
  '112': [
    {isim:'Kraliçe Amastris',unvan:'Herakleia Kraliçesi',donem:'Ö. M.Ö. 284',ozet:'Pers Kralı III. Dareios\'un yeğeni. Dört kasabayı birleştirerek kenti kurdu ve kente kendi adını verdi.'},
  ],
  '113': [
    {isim:'Büyük Pompeius',unvan:'Romalı Komutan',donem:'M.Ö. 106–48',ozet:'Pontus Kralı VI. Mithridates\'i yendikten sonra bölgeyi yeniden düzenleyen Romalı general. Kenti kendi adıyla kurdu.'},
  ],
  '114': [
    {isim:'Mucizeci Gregorios',unvan:'Piskopos',donem:'M.S. 213–270 civarı',ozet:'Neokaisareia\'da doğan ve kentin piskoposu olan din adamı. Thaumaturgos (Mucizeci) lakabıyla anıldı; bölgede Hristiyanlığın yayılmasında öncü oldu.'},
  ],
  '116': [
    {isim:'I. Mithridates Kallinikos',unvan:'Kommagene Kralı',donem:'Hd. M.Ö. 100–70 civarı',ozet:'I. Antiokhos\'un babası. Arsameia\'daki anıt mezarı ve Kommagene kralının Herakles ile el sıkışırken tasvir edildiği ünlü kabartma burada bulunur.'},
    {isim:'I. Antiokhos',unvan:'Kral',donem:'M.Ö. 86–38',ozet:'Babası Mithridates için Arsameia\'da anıtsal bir kutsal alan yaptıran Kommagene kralı. Dev el sıkışma kabartması bu alandadır.',foto:'https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_400/unlu_antiokhos_yj130y'},
  ],
};

const UNLULER_DETAY = {
  'Herakleitos': {
    sozler: ['Aynı nehre iki kez giremezsin.','Her şey akar, hiçbir şey durağan değildir.','Savaş her şeyin babasıdır.','Kendini bilmek en yüce bilgeliktir.'],
    eserler: ['Peri Physeos — Doğa Üzerine (fragmanlar)','Logos kavramının babası','Ateş felsefesi — evrenin döngüsel doğası','Karşıtların birliği teorisi'],
  },
  'Aziz Yuhanna': {
    sozler: ['Tanrı sevgidir.','Sizi sevdiğim gibi birbirinizi sevin.','Gerçek sizi özgür kılacaktır.'],
    eserler: ['Yuhanna İncili','1, 2, 3. Yuhanna Mektupları','Vahiy Kitabı','Efes\'te Meryem Ana\'ya ev sahipliği'],
  },
  'Galenos': {
    sozler: ['En iyi doktor hem doğanın hem de hastalığın dostudur.','İsteksiz öğrenci hiçbir zaman öğrenemez.'],
    eserler: ['De Usu Partium — Anatomi başyapıtı','500\'den fazla tıp kitabı','Deneysel tıbbın kurucusu','Nöroloji ve farmakolojide öncü'],
  },
  'Thales': {
    sozler: ['Her şeyin başı sudur.','Kendini bil.','En güç şey kendini tanımaktır.','En kolay şey başkasına öğüt vermektir.'],
    eserler: ['M.Ö. 585\'te güneş tutulmasını öngördü','Thales teoremi — yarım daire açısı 90°','İlk doğa felsefesi sistemi','Mısır piramitlerini gölgeyle ölçtü','Elektriğin ilk gözlemi (kehribar)'],
  },
  'Anaximandros': {
    sozler: ['Başlangıçta sonsuz ve belirsiz bir öz vardı.','Her şey apeiron\'dan gelir ve ona geri döner.'],
    eserler: ['Dünyanın ilk haritasını çizdi','Apeiron (sonsuz) kavramını geliştirdi','Canlıların balıktan evrildiğini öne sürdü','Güneş saatini Yunanistan\'a tanıttı','İlk evren modeli — Dünya askıda yüzer'],
  },
  'Aristoteles': {
    sozler: ['İnsan doğası gereği sosyal bir varlıktır.','Biz alışkanlıklarımızın ürünüyüz.','Bilginin kendisi güçtür.','Mutluluk en yüce iyi\'dir.','Eğitimin kökü acı, meyvesi tatlıdır.'],
    eserler: ['Organon — Mantık külliyatı','Metafizik','Nikomakhos Etiği','Politika','Poetika','540 hayvan türünü inceledi — Zoolojinin babası','Assos\'ta ve Atina\'da Lykeion okulunu kurdu'],
  },
  'Kral Kroisos': {
    sozler: ['Kimseyi yaşarken mutlu sayma.','Tanrı sana büyük bir felaket gösterecek, sonra onu geri alacak.'],
    eserler: ['Dünyanın ilk elektrum (altın-gümüş alaşım) madeni parasını bastırdı','Delphi Tapınağı\'na büyük bağışlar','Lidya-İyon ticaret ağını kurdu','Para ekonomisinin kurucusu'],
  },
  'Homeros': {
    sozler: ['Tahammül et, yüreğim; daha kötüsünü de tahammül ettin.','Güzel bir şeyin hiçbir zaman sonu gelmez.','En iyi şey, bir insanın konuşurken kendi anlayışıyla konuşmasıdır.'],
    eserler: ['İlyada — Truva Savaşı\'nın büyük destanı','Odysseia — Odysseus\'un efsanevi dönüş yolculuğu','2.800 yıldır kesintisiz okunan ilk Batı edebiyat eserleri','Yunan alfabesini edebi dile taşıdı'],
  },
  'Fatih Sultan Mehmed': {
    sozler: ['İstanbul mutlaka fethedilecektir. Onu fetheden komutan ne güzel komutan, o ordu ne güzel ordudur.','Ben yeryüzünün padişahıyım.'],
    eserler: ['İstanbul\'un Fethi (29 Mayıs 1453)','Topkapı Sarayı\'nın inşaatı','Fatih Külliyesi','7 dil öğrendi — Türkçe, Arapça, Farsça, Latince, Yunanca, Sırpça, İtalyanca','Osmanlı kanunnamelerini kodifiye etti'],
  },
  'Mimar Sinan': {
    sozler: ['Selimiye benim ustalık eserim, Şehzade çıraklık, Süleymaniye kalfalık.','Taşa ruh vermek sanatçının işidir.'],
    eserler: ['Selimiye Camii — Edirne (şaheser)','Süleymaniye Camii — İstanbul','Şehzade Camii','400\'den fazla yapı','Su kemerleri ve köprüler','Boğazkesen hamamı'],
  },
  'Mevlana Celaleddin Rumi': {
    sozler: ['Gel, gel, ne olursan ol yine gel.','Dün geçti, dün ile ilgili konuşma. Bugün yeni şeyler söyle.','İnsanı sevmek Tanrı\'yı sevmektir.','Aşk olmayınca hiçbir şey olmaz.'],
    eserler: ['Mesnevi — 6 cilt 25.000 beyit','Divan-ı Kebir','Fihi Ma Fih','Mektubat','Mevlevîlik tarikatının kurucusu','UNESCO "İnsanlığın Ortak Mirası" listesinde'],
  },
  'Diyojen': {
    sozler: ['Gölgemi geçme (İskender\'e).','İnsan arıyorum (fenerle).','İhtiyacım olmayan şey ne kadar çok.','Namusu olan adam için tüm dünya vatandır.'],
    eserler: ['Kinik felsefenin kurucusu','Özgürlük ve doğaya dönüş felsefesi','Sosyal normları sorgulayan ilk düşünür','Fıçıda yaşam — sadelik felsefesini bedenleştirdi'],
  },
  'Aziz Nikolaos': {
    sozler: ['Vermek, almaktan daha büyük bir mutluluktur.'],
    eserler: ['Noel Baba geleneğinin kaynağı','Myra piskoposluğu','Denizci, çocuk ve yoksulların koruyucusu','İznik Konsili\'ne katılım (M.S. 325)','Dünyanın en çok kilise inşa edilen azizi'],
  },
  'Aziz Pavlus': {
    sozler: ['Her şeye gücüm yeten Mesih aracılığıyla yapabilirim.','Sevgi sabırlıdır, sevgi şefkatlidir.','İnançla yürürüz, gözle değil.'],
    eserler: ['13 Pavlus Mektubu — Yeni Ahit\'in temeli','Hristiyanlığı Anadolu, Yunanistan ve Roma\'ya yaydı','Efes, Antakya, Korint ve Roma\'da topluluklar kurdu','Teolojik kavramları (lütuf, iman, kefaret) sistematize etti'],
  },
  'Praksiteles': {
    sozler: ['Güzellik tanrısaldır; onu taşa yansıtmak ilahi bir görevdir.'],
    eserler: ['Knidos Afroditi — tarihin ilk çıplak kadın heykeli','Hermes ve bebek Dionysos (Olimpia Müzesi)','Apollon Sauroktonos','Mermer işçiliğinde "etli" ve "yumuşak" tekniğin kurucusu'],
  },
  'Bias': {
    sozler: ['Çoğu insan kötüdür.','En büyük güç bilgeliktir.','Kazandığında büyüklenme, kaybettiğinde çökmek zorunda kalmayasın.'],
    eserler: ['Yedi Yunan Bilgesinden biri','Priene\'de adil yargılama sistemi kurdu','Sözlü felsefi öğretileri — derlenerek aktarıldı'],
  },
  'Aleksandros Afrodisyaslı': {
    sozler: ['Aristoteles\'i anlamak, felsefenin kapısını açmaktır.','Akıl, tüm insani yeteneklerin en yücesidir.'],
    eserler: ['"Yorumcu" lakabıyla anıldı','Aristoteles\'in tüm eserlerine şerhler yazdı','De Anima — ruh üzerine şerh','Ortaçağ İslam felsefesini (İbn Rüşd) derinden etkiledi','Hristiyan skolastiğinin temellerini attı'],
  },
  'Anaximenes': {
    sozler: ['Her şeyin özü havadır; yoğunlaşır ve seyrelir.','Ruh da hava gibidir; bedeni bir arada tutar.'],
    eserler: ['Havanın evrenin temel maddesi (arke) olduğunu savundu','Yoğunlaşma ve seyrelme teorisi — madde dönüşümünü açıkladı','Bulut ve yağmur oluşumunu doğal olarak açıkladı','Milet felsefe geleneğinin son temsilcisi'],
  },
  'Eudoksos': {
    sozler: ['Güneşin doğasını anlayabilmek için Prometheus gibi yanmayı göze alırım.','Geometri olmadan astronomi kör yürüyüştür.'],
    eserler: ['Gezegen hareketleri için 27 iç içe küre modeli geliştirdi','Entegral hesabının öncüsü — tükenme yöntemi','Oranlar teorisi — Öklid\'e kaynak oldu','Dünya\'nın çevresini ilk kez hesaplamaya çalıştı','Knidos\'ta gözlemevi kurdu'],
  },
  'Anakreon': {
    sozler: ['Şarap içelim, sevelim; çünkü ölüm yakındır.','Aşk acıdır, ama bu acı en tatlı acıdır.','Yaşlılık geldi, saçlarım ağardı; ne yapayım, şarkı söylerim.'],
    eserler: ['Anakreontik şiir türünün kurucusu','Aşk, şarap ve neşe üzerine lirik şiirler','Atina\'da Peisistratos sarayında yaşadı','Antik şiir geleneğini Roma ozanlarına aktardı'],
  },
  'Xenophanes': {
    sozler: ['İnsanlar tanrıları kendi suretlerinde yarattı.','Eğer atların tanrıları olsaydı, onlar da at şeklinde olurdu.','Tek bir tanrı var; o ne bedende ne de düşüncede insana benzer.','Tanrılar hakkında kesin bilgi yoktur; sadece görünüş vardır.'],
    eserler: ['Monoteizmin felsefi temellerini attı','Fosil araştırmaları — denizdeki taşlarda balık izleri buldu','Doğa felsefesi şiirleri (Silloı)','Homeros\'un çoktanrıcılığını eleştiren ilk düşünür'],
  },
  'Apollonios': {
    sozler: ['Geometri, zihnin en saf egzersizidir.','Eğriyi anlamak, evreni anlamaktır.'],
    eserler: ['Konikler — 8 ciltlik başyapıt (elips, parabol, hiperbol)','Newton\'un gezegen yörüngelerinin matematiksel temeli','Apollonius çemberi teoremi','İskenderiye Kütüphanesi\'nde baş kütüphaneci','Tanjant ve normal doğruların öncüsü'],
  },
  'Klaus Schmidt': {
    sozler: ['Tapınaktan önce tapınak geldi; mimari, tarımdan önce doğdu.','Göbeklitepe tarihi yeniden yazmak zorunda bırakıyor bizi.','Bu kazı, insanlığın kendini tanımlamasının başlangıcıdır.'],
    eserler: ['Göbeklitepe\'yi 1994\'te keşfetti ve kazıya başladı','M.Ö. 10.000\'e ait T-biçimli dikilitaşları ortaya çıkardı','Dini mimarinin tarımdan önce geldiğini kanıtladı','20 yıl aralıksız Göbeklitepe\'de çalıştı','Sie bauten die ersten Tempel — başyapıt kitabı'],
  },
  'I. Antiokhos': {
    sozler: ['Ölümümden sonra bile Tanrılar ve insanlar arasındaki köprü olmak istiyorum.','Atalarımın kanıyla hem Yunan hem Pers\'im.'],
    eserler: ['Nemrut Dağı\'ndaki dev heykel kompleksini yaptırdı (M.Ö. 69–34)','Yunan ve Pers kültürünü harmanlayan özgün Kommagene uygarlığı','Horoskopu taşa kazıtılan ilk hükümdar','Kommagene\'nin bağımsızlığını Roma\'ya karşı korudu'],
  },
  'I. Gagik': {
    sozler: ['Şehir, halkını yansıtır; halk, şehrini yaratır.'],
    eserler: ['Ani\'yi Ortaçağ\'ın en büyük şehirlerinden birine dönüştürdü','Ani Katedrali\'ni inşa ettirdi (1001–1010)','Bagratid Ermeni Krallığı\'nın en parlak dönemini yönetti','İpek Yolu üzerindeki ticaret gelirini Ani\'ye aktardı'],
  },
  'İshak Paşa': {
    sozler: ['Taş geçer, eser kalır.'],
    eserler: ['İshak Paşa Sarayı — 366 oda, Doğu Anadolu\'nun en görkemli yapısı','Selçuklu, Osmanlı, Ermeni ve İran mimarisini harmanlayan özgün üslup','Ağrı Dağı eteklerinde Doğubayazıt\'ta yaptırdı (1685–1784)','Selçuklu tarzı taç kapı ve haremleriyle ünlüdür'],
  },
  'Aratos': {
    sozler: ['Gökyüzüne bak; orada her şeyin başlangıcını görürsün.','Yıldızlar yalan söylemez; biz onları okumayı unuturuz.'],
    eserler: ['Phainomena — yıldız takımyıldızlarını anlatan didaktik şiir','Diosemeia — hava kehanetleri üzerine','Çiçero ve Ovidius tarafından Latinceye çevrildi','Yeni Ahit\'te Aziz Pavlus tarafından alıntılandı'],
  },
  'Anaksagoras': {
    sozler: ['Güneş sıradan bir taş parçasıdır, ateşten büyük bir kaya.','Her şeyde her şeyden bir parça vardır.','Akıl (Nous) her şeyi düzenleyen tek kuvvettir.','Yaşamak için doğmadım, düşünmek için doğdum.'],
    eserler: ['Güneşin bir ateş topu olduğunu ilk söyleyen düşünür','Nous (Akıl) kavramı — evrenin düzenleyici ilkesi','Tanrısızlık suçlamasıyla Atina\'dan sürgün edildi','Perikles\'in dostu ve öğretmeni','Meteoroloji ve astronomi üzerine öncü gözlemler'],
  },
  'I. Konstantinos': {
    sozler: ['Bu işaret altında fethedeceksin (In hoc signo vinces).','Roma\'nın geleceği Doğu\'dadır.'],
    eserler: ['İznik Konsili\'ni topladı (M.S. 325) — Hristiyan inancını kodifiye etti','Milano Fermanı (313) — din özgürlüğünü ilan etti','Konstantinopolis\'i (İstanbul) kurdu','Hristiyanlığı Roma İmparatorluğu\'nun resmi dini yaptı','Bizans uygarlığının temellerini attı'],
  },
  'Epiktetos': {
    sozler: ['İnsanları rahatsız eden olaylar değil, olaylara bakış açılarıdır.','Özgürlük, arzuladıklarına kavuşmak değil, istemediğin şeyleri istememektir.','Başkalarının seni nasıl gördüğünü değil, nasıl biri olduğunu önemse.','Her zorluğun içinde fırsat gizlidir.','Acını kabul et; çünkü kabul etmek seni güçlü kılar.'],
    eserler: ['Diatribai — öğrencisi Arrianos tarafından derlendi','Enchiridion (El Kitabı) — Stoacı yaşam rehberi','Kölekten filozofa: özgürlük felsefesinin yaşayan kanıtı','Marcus Aurelius\'u derinden etkiledi','Hristiyan ahlak felsefesine katkıları'],
  },
  'Brankhos': {
    sozler: ['Apollon\'un sesi bende; geleceği ben değil, tanrı söyler.'],
    eserler: ['Didim kehanet geleneğinin efsanevi kurucusu','Brankhadlar hanedanı — yüzyıllarca tapınağı yönetti','Apollon\'un kehanet geleneğini Anadolu\'da yaydı','Didim Tapınağı\'nın ilk büyük peygamberi'],
  },
  'Osman Gazi': {
    sozler: ['Adaleti gözetmeyenin devleti sürmez.','Kılıç ile kalem birlikte yürümeli.','Hak yolundan ayrılma; ayrıldığında devlet çöker.'],
    eserler: ['Osmanlı Devleti\'nin kurucusu (1299)','Söğüt ve çevresini fethetti','Osmanlı töre ve geleneklerini oluşturdu','40 yıllık mücadeleyle beyliği devlete dönüştürdü'],
  },
  'Orhan Gazi': {
    sozler: ['Adil ol; adalet tahtın temelidir.'],
    eserler: ['Bursa\'yı fethetti (1326) — ilk Osmanlı başkenti','İlk Osmanlı sikkesini kestirdi','İlk düzenli Osmanlı ordusunu (yaya ve müsellem) kurdu','Ulu Cami\'nin temellerini attı','İznik ve İzmit\'i fethetti'],
  },
  'Büyük İskender': {
    sozler: ['Başka dünyalar olsaydı onları da fethederdim.','Sonunda, önemli olan ne kadar yaşadığın değil, nasıl yaşadığındır.','Ben acıdan değil, fırsatı kaçırmaktan korkarım.','Yenilmez olduğuma inanıyorum; ama şans hâlâ benim yanımda.'],
    eserler: ['M.Ö. 334–323 arasında 5 milyon km² fethedildi','Gordion Düğümü\'nü kılıcıyla kesti','İskenderiye şehrini kurdu (ve 70+ şehre kendi adını verdi)','Doğu-Batı kültür sentezini (Helenizm) başlattı','Aristoteles\'in öğrencisi — felsefe, botanik ve zoolojiyle ilgilendi'],
  },
  'Kral Midas': {
    sozler: ['Dokunduğum her şey altına dönsün dedim; isteğime dikkat etmeliydim.','Zenginlik ne kadar değerliyse, bilgelik o kadar daha değerlidir.'],
    eserler: ['Altın dokunuşu efsanesinin kahramanı','Frig Krallığı\'nın en güçlü hükümdarı','Gordion\'da büyük bir saray ve kral tümülüsü yaptırdı','Yunan ve Doğu kültürü arasında köprü kurdu','Delphi\'ye değerli hediyeler gönderdi'],
  },
  'James Mellaart': {
    sozler: ['Çatalhöyük, uygarlığın nereden başladığını değil, ne kadar erken başladığını gösteriyor.','Tarih toprakta gizlidir; biz sadece onu dinlemeyi öğrenmeliyiz.'],
    eserler: ['Çatalhöyük\'ü 1958\'de keşfetti','Neolitik ana tanrıça kültünü belgeledi','Çatalhöyük — başyapıt kitabı','Çıkarılan bulgular insanlık tarihini 2.000 yıl geriye götürdü','UNESCO Dünya Mirası sürecini başlattı'],
  },
  'III. Hattusili': {
    sozler: ['Barış, savaştan güçlüdür; antlaşma, kılıçtan keskindir.','Kadeş\'te iki güç eşit güçtür; barış ikimiz için de erdemdir.'],
    eserler: ['Kadeş Antlaşması — tarihin bilinen ilk yazılı barış antlaşması (M.Ö. 1259)','BM Genel Merkezi\'nde orijinal kopyası sergileniyor','Mısır Firavunu II. Ramses ile diplomatik evlilik','Hititçe anılarını yazdı — tarihin ilk öz-biyografisi','Hatti imparatorluğunu stabilize etti'],
  },
  'Aziz Basileios': {
    sozler: ['Tanrı\'yı sevmek, insanı sevmekten başlamaz mı?','Zenginliğin gerçek kullanımı onu başkalarıyla paylaşmaktır.','Dua etmeden çalışma, çalışmadan dua etme.'],
    eserler: ['Büyük Basileios adıyla anılan manastır kuralları','Basileias — tarihin ilk hastane ve sosyal yardım kompleksi','İlahi Liturji — Ortodoks ayininde hâlâ kullanılıyor','Orthodoks teolojisinin temel taşlarından biri','Kapadokya Kilise Babaları\'nın önderi'],
  },
  'Gregorios Nazianzenos': {
    sozler: ['Söz, ruhun nefesidir.','Tanrı hakkında konuşmak, en yüce şiirdir.','İnsanı en iyi tanıtan, onun acısıdır.'],
    eserler: ['Hristiyan Üçlü Birlik (Teslis) doktrininin mimarı','Teolojik Şiirler — Hristiyan edebiyatının başyapıtları','Konstantinopolis\'te I. Ekümenik Konsil\'e başkanlık etti (381)','Konstantinopolis Patriği','Kilise Babası unvanı alan nadir isimlerden biri'],
  },
  'Ahmet Şah': {
    sozler: ['Taşa işlenen güzellik, zamana meydan okur.'],
    eserler: ['Divriği Ulu Camii ve Darüşşifası\'nı eşi Turan Melek ile yaptırdı (1228)','UNESCO Dünya Mirası listesindeki tek Mengücek eseri','Taç kapısındaki üç boyutlu kabartmalar — Anadolu taş işçiliğinin zirvesi','Selçuklu, Ermeni ve yerel mimari sentezi'],
  },
  'Hz. İbrahim': {
    sozler: ['Rabbim beni ve neslimi namaz kılanlardan eyle.','Tanrım, kalpleri bize yönelt ve onları meyvelerle rızıklandır.'],
    eserler: ['Harran\'da uzun yıllar yaşadı — üç büyük dinin ortak peygamberi','Tevhit (tek Tanrı) inancının öncüsü','Kabe\'yi (Mekke) İsmail ile yeniden inşa ettiği rivayet edilir','Yahudi, Hristiyan ve İslam geleneğinin ortak atası'],
  },
  'Evliya Çelebi': {
    sozler: ['Gezmek, bilmektir; bilmek, yaşamaktır.','Dünyayı görmek için Tanrı beni bu ülkeden çıkardı.','Her yeni şehir yeni bir sayfa; kâğıdım bitmedi.'],
    eserler: ['Seyahatname — 10 cilt, 40 yıllık seyahatin belgesi','300.000 km yol katedildi — Osmanlı coğrafyasının tamamı','Türk tarihi, dili ve folkloru için birinci kaynak','Ziyaret ettiği 300\'den fazla şehri detaylıca anlattı','İlk Osmanlı seyahat yazarı'],
  },
  'Gagik I Artsruni': {
    sozler: ['Taş kalıcıdır; iman onu ebedi kılar.'],
    eserler: ['Akdamar Kilisesi\'ni 915–921 yılları arasında inşa ettirdi','Kilise cephesindeki İncil kabartmaları — Ortaçağ Ermeni sanatının zirvesi','Van Gölü\'ndeki adaya kilise ve saray kompleksi yaptırdı','Vaspurakan Krallığı\'nı güçlendirdi'],
  },
  'II. Sarduri': {
    sozler: ['Savaşta güçlü olan değil, doğru olan kazanır.'],
    eserler: ['Çavuştepe Kalesi\'ni inşa ettirdi','Urartu\'nun en geniş sınırlarına ulaştı','Asur\'a karşı büyük savaşlar kazandı','Urartu çivi yazısı ve sanatını geliştirdi','Van Gölü çevresinde sulama kanalları yaptırdı'],
  },
  'I. Sarduri': {
    sozler: ['Taştan yükselen şehir, taştan güçlüdür.'],
    eserler: ['Van Kalesi\'nin (Tushpa) temellerini attı','Urartu Krallığı\'nın kurucusu','Van\'ı başkent yaparak Doğu Anadolu\'nun en güçlü devletini kurdu','Asurca yerine Urartuca yazıtları kullanan ilk Urartu hükümdarı'],
  },
  'Alparslan': {
    sozler: ['Zafer Allah\'tandır; komutan sadece bir araçtır.','Düşmanı küçümseme; büyük zaferler, küçük görünen düşmanlara karşı kazanılır.','Adalet olmadan devlet ayakta duramaz.'],
    eserler: ['Malazgirt Savaşı\'nı kazandı (26 Ağustos 1071)','Bizans İmparatoru IV. Romanos\'u esir aldı','Anadolu\'nun Türkleşmesinin ve İslamlaşmasının kapısını açtı','Büyük Selçuklu Devleti\'ni zirveye taşıdı','Nizamülmülk gibi büyük devlet adamlarını yetki verdi'],
  },
  'Aziz Sophronios': {
    sozler: ['İman, taşın içine işlenmiş, fırtınaya direnen kökler gibidir.'],
    eserler: ['Kudüs Patriği (634–638)','Arap fethine karşı Kudüs\'ü uzun süre savundu','Sümela Manastırı\'nı ziyaret ettiği rivayet edilir','Hristiyan ilahileri (Troparia) yazdı','Dogmatik ve hagiografik eserler'],
  },
  'Strabon': {
    sozler: ['Coğrafyayı bilmek, dünyayı bilmektir.','Tarih olmadan coğrafya anlamsız; coğrafya olmadan tarih kördür.','Amasya benim şehrimdir; oradan dünyayı öğrendim.'],
    eserler: ['Geographika — 17 cilt, antik dünyanın en kapsamlı coğrafya eseri','Tarihika Hypomnimata — tarihi notlar (kayıp)','Anadolu, Roma, Mısır ve İspanya\'yı bizzat dolaştı','Antik coğrafyanın babası','Ortaçağ İslam ve Avrupa haritacılığına temel sağladı'],
  },
  'I. Mithridates': {
    sozler: ['Kendi toprağında güçlü olmak, büyük imparatorluklardan üstündür.'],
    eserler: ['Pontus Krallığı\'nı kurdu (M.Ö. 302)','Amasya\'yı başkent yaptı','Karadeniz ticaretini kontrol altına aldı','Pers ve Yunan kültürünü harmanladı'],
  },
  'VI. Mithridates': {
    sozler: ['Roma\'dan korkma; Roma\'ya karşı dur.','Zehrin panzehiri, zehrin kendisidir.','Ölüm benden kaçmaz; ama ben ondan daha hızlıyım.'],
    eserler: ['"Büyük" lakabıyla anıldı','Roma\'ya karşı 26 yıl savaştı (M.Ö. 88–63)','Zehre karşı bağışıklık geliştirdi — Mithridatium (panzehir)','22 dil öğrendiği söylenir','Pontus\'u en güçlü dönemine taşıdı'],
  },
  'Apollon': {
    sozler: ['Kendini bil (Delphi kehaneti).','Her şeyde denge; aşırılıktan kaçın.','Müzik, evrenin sesidir.'],
    eserler: ['Güneş, kehanet, müzik ve sanatın Yunan tanrısı','Delphi ve Klaros kehanet merkezlerinin patronu','Apollon kültü — Anadolu\'dan tüm Akdeniz\'e yayıldı','Müzik yarışmalarının ve şiirin koruyucusu'],
  },
  'Alketas': {
    sozler: ['Onuru olanı teslim etmeyiz.'],
    eserler: ['İskender\'in generallerinden Perdikkas\'ın kardeşi','Termessos halkı tarafından korundu — teslim edilmedi','Kaya mezarı Termessos\'ta hâlâ görülebilir','Diadokhos savaşlarının trajik kahramanlarından biri'],
  },
  'Aziz Basileios': {
    sozler: ['Tanrı\'yı sevmek, insanı sevmekten başlamaz mı?','Zenginliğin gerçek kullanımı onu başkalarıyla paylaşmaktır.'],
    eserler: ['Manastır kuralları — Ortodoks manastır geleneğinin temeli','Basileias — tarihin ilk hastane ve sosyal yardım kompleksi','Ortodoks ilahisi'],
  },
  'Antonius Polemon': {
    eserler: ['Fizyonomi üzerine bir inceleme','Atina\'da Olympieion\'un açılış konuşması (M.S. 131)','Marathon savaşı üzerine iki söylev'],
  },
  'II. Pharnabazos': {
    eserler: ['Hellespontos Frigyası satraplığı','Spartalılara karşı Pers donanmasını destekledi','Knidos deniz savaşında (M.Ö. 394) Pers zaferine katkı'],
  },
  'Mimar Zenon': {
    eserler: ['Aspendos Tiyatrosu','Tiyatroya ait adak yazıtları'],
  },
  'Erbbina (Arbinas)': {
    eserler: ['Nereidler Anıtı (mezar anıtı olduğu düşünülür)','Ksanthos ve çevresindeki Likya kentlerini yönetti'],
  },
  'Hannibal': {
    sozler: ['Ya bir yol bulacağız ya da bir yol açacağız. (atfedilen)'],
    eserler: ['Alpleri fillerle aştı (M.Ö. 218)','Cannae Muharebesi (M.Ö. 216)','Side Deniz Savaşı (M.Ö. 190)'],
  },
  'Dioskorides': {
    eserler: ['De Materia Medica — 600\'e yakın bitkinin anlatıldığı ilaç kitabı','Farmakolojinin kurucularından','Eseri Arapçaya ve Latinceye çevrildi'],
  },
  'Hamit Zübeyr Koşay': {
    eserler: ['Alacahöyük kazıları (1935)','Kraliyet mezarları ve güneş kursları','Ankara Etnografya Müzesi müdürlüğü'],
  },
  'Anitta': {
    eserler: ['Anitta Metni — en eski Hititçe metinlerden','Neşa\'yı (Kaniş) başkent yaptı','Hattuşa\'yı fethetti'],
  },
  'Tahsin Özgüç': {
    eserler: ['Kültepe kazıları (1948–2005)','Asurlu tüccarların kil tabletleri','Türk arkeolojisinin öncülerinden'],
  },
  'Hacı Bektaş-ı Veli': {
    sozler: ['Eline, beline, diline sahip ol. (geleneksel)','İlim ile yürünmeyen yolun sonu karanlıktır. (geleneksel)'],
    eserler: ['Makâlât','Bektaşi geleneğinin piri','Hacıbektaş Külliyesi\'ndeki türbesi'],
  },
  'I. Seleukos Nikator': {
    eserler: ['Seleukos İmparatorluğu\'nu kurdu','Zeugma (Seleukeia) ve Antakya\'yı kurdu','İpsos Savaşı\'nda (M.Ö. 301) zafer'],
  },
  'I. Anastasios': {
    eserler: ['Dara kalesi (M.S. 505)','Anastasios Surları (İstanbul)','Bizans hazinesini güçlendiren para reformu'],
  },
  'Lukianos': {
    eserler: ['Gerçek Hikâye — aya yolculuk anlatısı','Ölüler Diyalogları','Tanrılar Diyalogları','Tarih Nasıl Yazılır?'],
  },
  'II. Mithridates': {
    eserler: ['Karakuş Tümülüsü','Kommagene Krallığı\'nın yönetimi'],
  },
  'Ahmed-i Hani': {
    eserler: ['Mem û Zîn','Nûbihara Biçûkan — çocuklar için sözlük','Doğubayazıt\'ta medrese ve öğretim'],
  },
  'I. Manuel Komnenos': {
    eserler: ['Trabzon Ayasofyası','Trabzon İmparatorluğu\'nun ticaret yollarını güçlendirdi'],
  },
  'Şeyh Şaban-ı Veli': {
    eserler: ['Kastamonu\'daki türbe ve külliye','Halveti tarikatının Şabaniye kolu'],
  },
  'Arkhelaos': {
    eserler: ['Elaiussa\'yı Sebaste adıyla saray kenti yaptı','Kapadokya Krallığı\'nı 50 yılı aşkın yönetti'],
  },
  'Anthemios': {
    eserler: ['Ayasofya (Miletli İsidoros ile, M.S. 532–537)','Konik kesitler ve aynalar üzerine geometri çalışmaları'],
  },
  'Trallesli Aleksandros': {
    eserler: ['On iki ciltlik tıp kitabı (Therapeutika)','Göz hastalıkları ve ateş üzerine incelemeler'],
  },
  'Hermogenes': {
    eserler: ['Magnesia Artemis Leukophryene Tapınağı','Teos Dionysos Tapınağı','Psödodipteros tapınak planının geliştiricisi'],
  },
  'Themistokles': {
    eserler: ['Salamis Deniz Zaferi (M.Ö. 480)','Atina donanmasını kurdu','Pire limanını tahkim etti'],
  },
  'Kraliçe Ada': {
    eserler: ['Büyük İskender\'i evlat edindi','Karya\'nın yönetimini yeniden üstlendi','Alinda\'yı kale kenti olarak korudu'],
  },
  'Mausolos': {
    eserler: ['Halikarnassos Mozolesi (dünyanın yedi harikasından)','Labranda\'daki andronlar ve tapınak düzenlemesi','Başkenti Mylasa\'dan Halikarnassos\'a taşıdı'],
  },
  'Protogenes': {
    eserler: ['Ialysos tablosu (Rodos)','Apelles ile çizgi yarışması','Satir tablosu'],
  },
  'Tyanalı Apollonios': {
    eserler: ['Aigeai Asklepieion\'unda öğrenim','Hindistan\'a kadar uzanan yolculuklar','Hayatı Philostratos tarafından yazıldı'],
  },
  'Lysandros': {
    sozler: ['Aslan postunun yetmediği yere tilki postunu yamamak gerekir. (Plutarkhos\'tan)'],
    eserler: ['Notion Deniz Savaşı (M.Ö. 406)','Aigospotamoi Zaferi (M.Ö. 405)','Atina\'nın teslim alınması (M.Ö. 404)'],
  },
  'Thyateiralı Lydia': {
    eserler: ['Avrupa\'da vaftiz edilen ilk kişi (Elçilerin İşleri 16)','Filipi\'de evini ilk kilise topluluğuna açtı'],
  },
  'II. Attalos Philadelphos': {
    eserler: ['Philadelphia (Alaşehir) ve Attaleia\'yı (Antalya) kurdu','Atina\'daki Attalos Stoası'],
  },
  'Ephoros': {
    eserler: ['Historiai — 30 kitaplık evrensel tarih','Diodoros\'un en önemli kaynaklarından'],
  },
  'I. Antigonos': {
    eserler: ['Antigoneia (Aleksandreia Troas) kentini kurdu','Antigonos hanedanının kurucusu','İpsos Savaşı\'nda (M.Ö. 301) öldü'],
  },
  'I. Prusias': {
    eserler: ['Prusias ad Hypium ve Bursa\'nın (Prusa) adının kaynağı','Hannibal\'a sığınak verdi'],
  },
  'Kraliçe Amastris': {
    eserler: ['Amastris (Amasra) kentini kurdu','Herakleia Pontike\'yi yönetti','Kendi adına sikke bastıran ilk kadın hükümdarlardan'],
  },
  'Büyük Pompeius': {
    eserler: ['Pompeiopolis\'i kurdu','Akdeniz\'i korsanlardan temizledi (M.Ö. 67)','VI. Mithridates\'e karşı zafer'],
  },
  'Mucizeci Gregorios': {
    eserler: ['Neokaisareia piskoposluğu','Origenes\'e Övgü','İnanç Açıklaması (Ekthesis)'],
  },
  'I. Mithridates Kallinikos': {
    eserler: ['Arsameia\'daki anıt mezar','Kommagene Krallığı\'nın güçlenmesi'],
  },
  'Marcus Aurelius': {
    sozler: ['Evren değişimdir; hayatımız düşüncelerimizin yaptığı şeydir.','Herkesin kaybedebileceği tek şey şu andır.'],
    eserler: ['Kendime Düşünceler (Meditasyonlar)','Smyrna\'nın deprem sonrası yeniden inşası','Stoa felsefesinin son büyük temsilcisi'],
  },
  'Polykarpos': {
    sozler: ['Seksen altı yıldır O\'na hizmet ediyorum ve bana hiçbir kötülük etmedi. (Polykarpos\'un Şehitliği)'],
    eserler: ['Filipililere Mektup','Smyrna piskoposluğu'],
  },
  'Kraliçe Stratonike': {
    eserler: ['Stratonikeia kentine adını verdi','Seleukos sarayında iki kralın eşi'],
  },
};
