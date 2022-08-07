const shops = [
  { id: 1, name: 'Sharetea Belmar', region: 'West', address: '424 S Teller St, Lakewood, CO 80226', yelp: 'https://www.yelp.com/biz/sharetea-lakewood-lakewood', facebook: 'https://www.facebook.com/shareteabelmar', instagram: 'https://www.instagram.com/shareteabelmar/', website: 'https://www.1992sharetea.com/'},
  { id: 2, name: 'Sharetea Westminster', region: 'Northwest', address: '5684 W 88th Ave, Westminster, CO 80031', yelp: 'https://www.yelp.com/biz/sharetea-westminster', facebook: 'https://www.facebook.com/shareteawestminster/', instagram: 'https://www.instagram.com/shareteawestminster/?hl=en', website: 'https://www.1992sharetea.com/'},
  { id: 3, name: 'Sharetea Aurora', region: 'East', address: '2495 S Havana St Suite #D, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/sharetea-aurora-aurora-2', facebook: 'https://www.facebook.com/shareteaaurora/', instagram: 'https://www.instagram.com/shareteaaurora/?hl=en', website: 'https://www.1992sharetea.com/'},
  { id: 4, name: 'Sharetea Highlands Ranch', region: 'Southwest', address: '9579 S University Blvd #180, Highlands Ranch, CO 80126', yelp: 'https://www.yelp.com/biz/sharetea-highlands-ranch', facebook: 'https://www.facebook.com/shareteahighlandsranch/', instagram: 'https://www.instagram.com/shareteahighlandsranch/?hl=en', website: 'https://www.1992sharetea.com/'},
  { id: 5, name: 'Kung Fu Tea Littleton', region: 'Southwest', address: '8555 W Belleview Ave Ste G21, Littleton, CO 80123', yelp: 'https://www.yelp.com/biz/kung-fu-tea-denver-3?osq=kung+fu+tea', facebook: 'https://www.facebook.com/KFTLittleto/', instagram: '', website: 'https://www.kungfutea.com/'},
  { id: 6, name: 'Kung Fu Tea Denver', region: 'East', address: '6365 E Hampden Ave #102, Denver, CO 80222', yelp: 'https://www.yelp.com/biz/kung-fu-tea-denver-2', facebook: 'https://www.facebook.com/KungFuTeaDenverCO/', instagram: 'https://www.instagram.com/kftdenver/?hl=en', website: 'https://www.kungfutea.com/'},
  { id: 7, name: 'Kung Fu Tea Highlands Ranch', region: 'Southwest', address: '9559 S University Blvd Unit 107, Highlands Ranch, CO 80126', yelp: 'https://www.yelp.com/biz/kung-fu-tea-highlands-ranch', facebook: 'https://www.facebook.com/kungfuteaco/', instagram: 'https://www.instagram.com/kungfuteaco_highlandsranch/?hl=en', website: 'https://www.kungfutea.com/'},
  { id: 8, name: 'Kung Fu Tea Aurora', region: 'East', address: '12201 E Mississippi Ave #123A, Aurora, CO 80012', yelp: 'https://www.yelp.com/biz/kung-fu-tea-aurora', facebook: 'https://www.facebook.com/kftaurora/', instagram: 'https://www.instagram.com/kftaurora/?hl=en', website: 'https://www.kungfutea.com/'},
  { id: 9, name: 'Kung Fu Tea Northfield', region: 'East', address: '8302 E Northfield Blvd Unit 1580, Denver, CO 80238', yelp: 'https://www.yelp.com/biz/kung-fu-tea-denver-4', facebook: '', instagram: '', website: 'https://www.kungfutea.com/'},
  { id: 10, name: 'Kung Fu Tea Centennial', region: 'DTC', address: '20209 E Smoky Hill Road Suite A2, Centennial, CO 80015', yelp: 'https://www.yelp.com/biz/kung-fu-tea-centennial', facebook: '', instagram: 'https://www.instagram.com/kftaurora/?hl=en', website: 'https://www.kungfutea.com/'},
  { id: 11, name: 'Kung Fu Tea Thornton', region: 'North', address: '13571 Grant Street, Denver, CO 80241', yelp: 'https://www.yelp.com/biz/kung-fu-tea-thornton', facebook: '', instagram: '', website: 'https://www.kungfutea.com/'},
  { id: 12, name: 'KUTEA', region: 'West', address: '1147 S Federal Blvd, Denver, CO 80219', yelp: 'https://www.yelp.com/biz/kutea-denver', facebook: 'https://www.facebook.com/KuteaDenver/', instagram: 'https://www.instagram.com/kuteadenver/?hl=en', website: ''},
  { id: 13, name: 'Boba Chic', region: 'West', address: '655 S Federal Blvd, Denver, CO 80219', yelp: 'https://www.yelp.com/biz/boba-chic-denver', facebook: 'https://www.facebook.com/BobaChicDenver/', instagram: 'https://www.instagram.com/bobachicdenver/?hl=en', website: ''},
  { id: 14, name: 'Arden', region: 'Southwest', address: '3355 S Yarrow St Unit E-115, Lakewood, CO 80227', yelp: 'https://www.yelp.com/biz/arden-lakewood', facebook: '', instagram: 'https://www.instagram.com/ardentearoom/?hl=en', website: 'https://arden-tea-house.business.site/?utm_source=gmb&utm_medium=referral'},
  { id: 15, name: 'Lollicup', region: 'West', address: '1046 S Federal Blvd, Denver, CO 80219', yelp: 'https://www.yelp.com/biz/lollicup-denver', facebook: '', instagram: '', website: ''},
  { id: 16, name: 'Lollicup', region: 'Central', address: '1589 S Colorado Blvd, Glendale, CO 80246', yelp: 'https://www.yelp.com/biz/lollicup-denver-2', facebook: 'https://www.facebook.com/Lollicup-Denver-155562704460046/', instagram: '', website: ''},
  { id: 17, name: 'Colorado Boba Zone', region: 'Southwest', address: '5005 S Kipling Pkwy Unit A8, Littleton, CO 80127', yelp: 'https://www.yelp.com/biz/colorado-boba-zone-littleton', facebook: 'https://www.facebook.com/Cobobazone/', instagram: 'https://www.instagram.com/coloradobobazone/?hl=en', website: ''},
  { id: 18, name: 'Mo Mo Tea House', region: 'Southwest', address: '3602 River Point Pkwy Unit C, Englewood, CO 80110', yelp: 'https://www.yelp.com/biz/mo-mo-milk-tea-house-sheridan-3', facebook: 'https://www.facebook.com/profile.php?id=100063489637629', instagram: '', website: ''},
  { id: 19, name: 'Boba & Crepes', region: 'Central', address: '4085 E Mississippi Ave D2, Denver, CO 80246', yelp: 'https://www.yelp.com/biz/boba-and-crepes-denver-2', facebook: '', instagram: '', website: ''},
  { id: 20, name: 'Master Tea', region: 'Northwest', address: '6600 W 120th Ave Unit I, Brooomfield, CO 80020', yelp: 'https://www.yelp.com/biz/master-tea-broomfield-2?osq=master+tea', facebook: 'https://www.facebook.com/mastertea.usa/', instagram: '', website: ''},
  { id: 21, name: 'Master Tea', region: 'North', address: '2205 W 136th Ave Suite 100, Broomfield, CO 80023', yelp: 'https://www.yelp.com/biz/master-tea-broomfield-4?osq=master+tea', facebook: '', instagram: '', website: ''},
  { id: 22, name: 'Tea Street', region: 'Central', address: '4090 E Mississippi Ave, Denver, CO 80246', yelp: 'https://www.yelp.com/biz/tea-street-denver-2', facebook: 'https://www.facebook.com/teastreetdenver/', instagram: 'https://www.instagram.com/teastreetdenver/?hl=en', website: 'https://www.teastreetdenver.com/'},
  { id: 23, name: 'Colorado Tea Station', region: 'Central', address: '1700 Platte St #130, Denver, CO 80202', yelp: 'https://www.yelp.com/biz/colorado-tea-station-denver-2', facebook: 'https://www.facebook.com/coloradoteastation/', instagram: 'https://www.instagram.com/coloradoteastation/?hl=en', website: 'https://www.coloradoteastation.com/'},
  { id: 24, name: 'Milk Tea People', region: 'Central', address: '1641 Market St Suite 133, Denver, CO 80202', yelp: 'https://www.yelp.com/biz/milk-tea-people-denver', facebook: 'https://www.facebook.com/MilkTeaPeople/', instagram: 'https://www.instagram.com/milkteapeople/?hl=en', website: 'https://www.milkteapeople.com/'},
  { id: 25, name: 'Dingtea Denver', region: 'Central', address: '1699 S Colorado Blvd Unit E, Denver, CO 80222', yelp: 'https://www.yelp.com/biz/ding-tea-denver', facebook: 'https://www.facebook.com/DingteaDenver1/', instagram: '', website: ''},
  { id: 26, name: 'Hype Tea', region: 'Northwest', address: '6350 Sheridan Boulevard Unit #105A, Arvada, CO 80003', yelp: 'https://www.yelp.com/biz/hype-tea-boba-arvada', facebook: '', instagram: '', website: 'https://www.hypetea-boba.com/'},
  { id: 27, name: 'TBAAR', region: 'Central', address: '3970 Buchtel Blvd S Ste 105, Denver, CO 80210', yelp: 'https://www.yelp.com/biz/tbaar-denver-2', facebook: '', instagram: '', website: 'https://www.tbaar.com/'},
  { id: 28, name: 'Like Tea', region: 'Southeast', address: '8433 Park Meadows Center Dr Suite D144A, Lone Tree, CO 80124', yelp: 'https://www.yelp.com/biz/like-tea-lone-tree-3?start=40', facebook: 'https://www.facebook.com/Liketeausa', instagram: 'https://www.instagram.com/liketeausa/', website: 'https://liketeausa.com/'},
  { id: 29, name: 'Mini Moo\'s Tea Shop', region: 'Southeast', address: '7555 E Arapahoe Rd # 1, Centennial, CO 80112', yelp: 'https://www.yelp.com/biz/mini-moos-tea-shop-centennial-2', facebook: 'https://www.facebook.com/minimoosteashop/', instagram: 'https://www.instagram.com/minimoosteashop/?hl=en', website: 'https://www.minimoostea.com/'},
  { id: 30, name: 'Happy Lemon Edgewater', region: 'West', address: '1931 Sheridan Boulevard Unit Q, Edgewater, CO 80214', yelp: 'https://www.yelp.com/biz/happy-lemon-edgewater-edgewater-4', facebook: 'https://www.facebook.com/HappyLemonCO/', instagram: 'https://www.instagram.com/happylemonco/?hl=en', website: 'https://happylemoncolorado.com/'},
  { id: 31, name: 'Happy Lemon 120th', region: 'North', address: '1001 W 120th Ave Suite 105, Westminster, CO 80234', yelp: 'https://www.yelp.com/biz/happy-lemon-120th-westminister', facebook: 'https://www.facebook.com/HappyLemonCO/', instagram: 'https://www.instagram.com/happylemonco/?hl=en', website: 'https://happylemoncolorado.com/'},
  { id: 32, name: 'Happy Lemon Greenwood Village', region: 'Southeast', address: '9686 E Arapahoe Rd Unit B, Greenwood Village, CO 80112', yelp: 'https://www.yelp.com/biz/happy-lemon-greenwood-village-greenwood', facebook: 'https://www.facebook.com/HappyLemonCO/', instagram: 'https://www.instagram.com/happylemonco/?hl=en', website: 'https://happylemoncolorado.com/'},
  { id: 33, name: 'Zero Degrees Denver', region: 'Central', address: '1390 S Colorado Blvd Suite 140, Denver, CO 80222', yelp: 'https://www.yelp.com/biz/zero-degrees-denver', facebook: '', instagram: '', website: 'https://www.zerodegreescompany.com/'},
  { id: 34, name: 'Zero Degrees Thornton', region: 'North', address: '9760 Grant St Ste 70, Thornton, CO 80229', yelp: 'https://www.yelp.com/biz/zero-degrees-thornton-denver', facebook: 'https://www.facebook.com/Zero-Degrees-Thornton-718894738922509/', instagram: 'https://www.instagram.com/zerodegreesthornton/?hl=en', website: 'https://www.zerodegreescompany.com/'},
  { id: 35, name: 'Zero Degrees Aurora', region: 'East', address: '13600 E Colfax Ave, Aurora, CO 80011', yelp: 'https://www.yelp.com/biz/zero-degrees-aurora-2', facebook: '', instagram: '', website: 'https://www.zerodegreescompany.com/'},
  { id: 36, name: 'Spill the Tea', region: 'North', address: '1040 W 104th Ave, Northglenn, CO 80234', yelp: 'https://www.yelp.com/biz/spill-the-tea-northglenn-2', facebook: 'https://www.facebook.com/Spill-The-Tea-306852303180784/', instagram: 'https://www.instagram.com/spill.the.tea.boba/?hl=en', website: ''},
  { id: 37, name: 'Yomie\'s Rice x Yogurt', region: 'Central', address: '1350 S Colorado Blvd #121, Denver, CO 80222', yelp: 'https://www.yelp.com/biz/yomies-rice-x-yogurt-denver', facebook: 'https://www.facebook.com/YomieDenver', instagram: 'https://www.instagram.com/yomie_denver/', website: 'https://www.yomiesricexyogurt.us/'},
  { id: 38, name: 'Beau\'TEA\' Bubbles', region: 'Central', address: '723 Quebec St, Denver, CO 80220', yelp: 'https://www.yelp.com/biz/beautea-bubbles-denver', facebook: '', instagram: 'https://www.instagram.com/beauteabubbles/?hl=en', website: 'https://www.beauteabb.com/'},
  { id: 39, name: 'Devil & Angel Desserts', region: 'East', address: '2727 S Parker Rd, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/devil-and-angel-desserts-aurora-2', facebook: 'https://www.facebook.com/Devil-Angel-Desserts-112077031470735/', instagram: 'https://www.instagram.com/devilnangeldesserts/?hl=en', website: 'https://devilnangel.com/'},
  { id: 40, name: 'Volcano Tea House', region: 'East', address: '2781 S Parker Rd, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/volcano-tea-house-aurora-2', facebook: 'https://www.facebook.com/VolcanoteahouseAurora', instagram: 'https://www.instagram.com/volcanoteahouseaurora/?hl=en', website: 'https://www.volcanoteahouseaurora.com/'},
  { id: 41, name: 'Banned Boba', region: 'East', address: '2790 S Havana St Suite U, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/banned-boba-aurora-2', facebook: '', instagram: 'https://www.instagram.com/banned_boba_bar/?hl=en', website: 'https://www.bannedboba.com/'},
  { id: 42, name: 'Tiger Sugar', region: 'East', address: '3105 S Peoria St Unit C, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/tiger-sugar-aurora-2', facebook: '', instagram: '', website: 'https://tigersugarec.com/'},
  { id: 43, name: 'SNOWL', region: 'East', address: '1930 S Havana St #5-6, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/snowl-aurora-2', facebook: 'https://www.facebook.com/snowlcafe', instagram: 'https://www.instagram.com/snowl.cafe/?hl=en', website: 'https://www.snowlcafe.com/'},
  { id: 44, name: 'Boss Tea', region: 'East', address: '14101 E Exposition Ave, Aurora, CO 80012', yelp: 'https://www.yelp.com/biz/boss-tea-aurora-2', facebook: '', instagram: '', website: 'https://www.thebossteashop.com/'},
  { id: 45, name: 'Tea Cloud & Poke', region: 'Central', address: '1690 Champa St, Denver, CO 80202', yelp: 'https://www.yelp.com/biz/tea-cloud-denver', facebook: '', instagram: 'https://www.instagram.com/teaclouddenver/?hl=en', website: 'https://tea-cloud.business.site/'},
  { id: 46, name: 'SpeckleTea', region: 'Southwest', address: '9956 W Remington Pl Unit A4, Littleton, CO 80128', yelp: 'https://www.yelp.com/biz/speckletea-littleton', facebook: 'https://www.facebook.com/speckleteaco/', instagram: 'https://www.instagram.com/speckle_tea/', website: 'https://www.speckletea.com/'},
  { id: 47, name: 'Bambu Che, Coffee, and Teas', region: 'Central', address: '2215 S Broadway, Denver, CO 80210', yelp: 'https://www.yelp.com/biz/bambu-denver-3', facebook: 'https://www.facebook.com/bambudenverdrivethru/', instagram: 'https://www.instagram.com/bambu_denverdrivethru/', website: 'https://www.drinkbambu.com/'},
  { id: 48, name: 'WeeTea', region: 'Northwest', address: '8410 Wadsworth Boulevard Unit H-S, Arvada, CO 80003', yelp: 'https://www.yelp.com/biz/weetea-arvada-2', facebook: '', instagram: 'https://www.instagram.com/weeteatogether/', website: 'https://weeteatogether.com/'},
  { id: 49, name: '528Tea', region: 'Northwest', address: '7639 W 88th Ave, Westminster, CO 80005', yelp: 'https://www.yelp.com/biz/528tea-arvada', facebook: 'https://www.facebook.com/528Tea/', instagram: '', website: ''},
  { id: 50, name: 'Wonder Tea Cafe', region: 'East', address: '12303 E Mississippi Ave Unit 141, Aurora, CO 80012', yelp: 'https://www.yelp.com/biz/wonder-tea-aurora-5', facebook: 'https://www.facebook.com/wonderteaaurora/', instagram: 'https://www.instagram.com/wonderteaco/?hl=en', website: 'https://wonder-tea.business.site/'},
  { id: 51, name: 'Mochinut', region: 'East', address: '2222 S Havana St Unit A2, Aurora, CO 80014', yelp: 'https://www.yelp.com/biz/mochinut-aurora', facebook: 'https://www.facebook.com/mochinut.co/', instagram: 'https://www.instagram.com/mochinutco/?hl=en', website: 'https://www.mochinut.com/'},
  { id: 52, name: 'Boba Touch', region: 'Central', address: '3107 E Colfax Ave, Denver, CO 80206', yelp: 'https://www.yelp.com/biz/boba-touch-denver', facebook: 'https://www.facebook.com/BobaTouch', instagram: 'https://www.instagram.com/bobatouch/?hl=en', website: 'https://bobatouch.com/'},
  { id: 53, name: 'Milkit', region: 'Southeast', address: '9625 E Arapahoe Rd Unit G, Greenwood Village, CO 80112', yelp: 'https://www.yelp.com/biz/milkit-greenwood-village', facebook: 'https://www.facebook.com/milkitco/', instagram: 'https://www.instagram.com/milkit_co/?hl=en', website: 'https://www.milkitcolorado.com/'},
  { id: 54, name: 'Tsaocaa Wesminster', region: 'Northwest', address: '5092 W 92nd Ave, Westminster, CO 80031', yelp: '', facebook: '', instagram: 'https://www.instagram.com/tsaocaa_co/', website: 'https://www.tsaocaatea.com/'},
  { id: 55, name: 'The Alley at Southlands', region: 'Southeast', address: '24107 E Commons Ave Ste 102, Aurora, CO 80016', yelp: '', facebook: '', instagram: '', website: 'https://www.the-alley.us/'},
  { id: 56, name: 'Tea-hee Boba', region: 'North', address: '3894 E 120th Ave Unit B, Thornton, CO 80233', yelp: 'https://www.yelp.com/biz/tea-hee-boba-thornton', facebook: 'https://www.facebook.com/TeaHee-BOBA-109971141492939/', instagram: 'https://www.instagram.com/teaheeboba/', website: 'https://tea-hee-boba.business.site/'},
  { id: 57, name: 'Kung Fu Tea Wheat Ridge', region: 'West', address: '3400 Youngfield St, Wheat Ridge, CO 80033', yelp: '', facebook: '', instagram: '', website: 'https://www.kungfutea.com/'},
  { id: 58, name: 'Plentea', region: 'North', address: '1391 E 120th Ave D, Thornton, CO 80233', yelp: 'https://www.yelp.com/biz/plentea-thornton-2', facebook: 'https://www.facebook.com/plenteacolorado', instagram: 'https://www.instagram.com/plentea_colorado/?hl=en', website: 'https://loveplentea.com/'},
  { id: 59, name: 'Colorado Boba Blast', region: 'Central', address: '1559 S Broadway, Denver, CO 80223', yelp: 'https://www.yelp.com/biz/colorado-boba-blast-denver', facebook: 'https://www.facebook.com/coloradoboba/', instagram: 'https://www.instagram.com/coloradoboba/?hl=en', website: ''},
  { id: 60, name: 'PRESOTEA AURORA', region: 'Southeast', address: '18662 E Hampden Ave, Aurora, CO 80013', yelp: 'https://www.yelp.com/biz/presotea-aurora-aurora-2', facebook: 'https://www.facebook.com/PresoteaAurora720/', instagram: 'https://www.instagram.com/presoteaaurora/?hl=en', website: 'https://presoteaus.com/'},
  { id: 61, name: 'Milk T Boba House', region: 'West', address: '902 Federal Blvd, Denver, CO 80204', yelp: '', facebook: '', instagram: '', website: 'https://www.milktdenver.com/'}, 
  { id: 62, name: 'Boba Boba Arvada', region: 'Northwest', address: '6474 Ward Rd, Arvada, CO 80004', yelp: 'https://www.yelp.com/biz/boba-boba-arvada', facebook: '', instagram: 'https://www.instagram.com/bobabobaarvada/?hl=en', website: 'https://bobaboba.com/'},
  { id: 63, name: 'Tea \'N Mi', region: 'Central', address: '2058 S University Blvd, Denver, CO 80210', yelp: 'https://www.yelp.com/biz/tea-n-mi-denver', facebook: '', instagram: '', website: ''},
  { id: 64, name: 'Like Tea', region: 'Central', address: '2823 E Colfax Ave, Denver, CO 80206', yelp: '', facebook: 'https://www.facebook.com/Liketeausa', instagram: 'https://www.instagram.com/liketeausa/', website: 'https://liketeausa.com/'},
  { id: 65, name: 'SNOWL', region: 'Southeast', address: '5612 S Parker Rd, Aurora, CO 80015', yelp: 'https://www.yelp.com/biz/snowl-cafe-aurora-4', facebook: 'https://www.facebook.com/snowlcafe', instagram: 'https://www.instagram.com/snowl.cafe/?hl=en', website: 'https://www.snowlcafe.com/'},
  { id: 66, name: 'ThirsTea Tiger', region: 'West', address: '14500 W Colfax Dr, Lakewood, CO 80401', yelp: '', facebook: '', instagram: 'https://www.instagram.com/thirstea_tiger/?hl=en', website: ''},
  { id: 67, name: 'Bubblelicious', region: 'West', address: '14500 W Colfax Dr, Lakewood, CO 80401', yelp: 'https://www.yelp.com/biz/bubblelicous-milk-tea-and-fruit-tea-lakewood?osq=Boba+Tea', facebook: '', instagram: '', website: 'https://bubblelicious.com/'},
]

module.exports = shops; 