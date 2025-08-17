'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfa5ba4098cb6592063da74bacc467f6",
"assets/AssetManifest.bin.json": "427779971d14481f3b6bc46429978374",
"assets/AssetManifest.json": "64a82b34da8338913d4dbee9b63355fb",
"assets/assets/geojson/adm0_ph.json": "d51024e3783f9856206894f537f18352",
"assets/assets/geojson/adm1_ph.json": "cbb87ca68a9783b947e7288f4f4360b8",
"assets/assets/geojson/adm2_ph.json": "50900657cf77d92ebb564205a6a24405",
"assets/assets/geojson/adm3_ph.json": "219c7e40a2376453085d0d099faf7aa4",
"assets/assets/images/desktop.ini": "eca2c824b1d2805bca193309f633e5fb",
"assets/assets/images/DOST.gif": "12917cbcf39419362f0d5331d417d91c",
"assets/assets/images/FPRDI.png": "7a8a50e6828fb2847214489878a28bf5",
"assets/assets/images/FPRDILOGO.png": "d9287d4ae6508b3c2de4b09381f675ef",
"assets/assets/images/PHmap.png": "33ef144dc92f07741080e9b209735078",
"assets/assets/images/ph_map.jpg": "abd893731416d41590783a50649d5cc8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1669daeeb503998824b682fee4ab76a2",
"assets/NOTICES": "58e675d3c11d338b351e6ccfff48a655",
"assets/packages/city_picker_from_map/assets/maps/afghanistan.svg": "d3118c7fd9f65bef4b4a1a8953de121c",
"assets/packages/city_picker_from_map/assets/maps/albania.svg": "fde3ed456749978a2d934c4c6389f0c5",
"assets/packages/city_picker_from_map/assets/maps/algeria.svg": "3b026c9db40a78dbf386186f3f4cebad",
"assets/packages/city_picker_from_map/assets/maps/andorra.svg": "d89f901fed2945146a1367e11dd21c1e",
"assets/packages/city_picker_from_map/assets/maps/angola.svg": "1037d006640e6f3c12b155fc5c4726ca",
"assets/packages/city_picker_from_map/assets/maps/argentina.svg": "6940e75f2b23340fd985291fa25c9660",
"assets/packages/city_picker_from_map/assets/maps/armenia.svg": "823be0259c09b596a4bbc0da92b8fdb3",
"assets/packages/city_picker_from_map/assets/maps/australia.svg": "acb535b87b09104080398a069d33b7d6",
"assets/packages/city_picker_from_map/assets/maps/austria.svg": "77c8a88e8363d20d61b46384191d0913",
"assets/packages/city_picker_from_map/assets/maps/azerbaijan.svg": "a9dbe1e1839f05ff10c07a67494629da",
"assets/packages/city_picker_from_map/assets/maps/bahamas.svg": "e70cf754249115e6ab78c972251644a5",
"assets/packages/city_picker_from_map/assets/maps/bahrain.svg": "e6261c280489a2631947906e19c4e4b1",
"assets/packages/city_picker_from_map/assets/maps/bangladesh.svg": "b0f587b26a69944e2a8beb7ea3e197f9",
"assets/packages/city_picker_from_map/assets/maps/belarus.svg": "6dc2fcc35ee4861ddff41bf54a5dfe6d",
"assets/packages/city_picker_from_map/assets/maps/belgium.svg": "0a0e70c9278f44ca8e0c50db6ef74f40",
"assets/packages/city_picker_from_map/assets/maps/bermuda.svg": "aa7f6ec2c4b51839835fb067137bbe36",
"assets/packages/city_picker_from_map/assets/maps/bolivia.svg": "9f34b1eddccdaba82bd6fb3ec4750e13",
"assets/packages/city_picker_from_map/assets/maps/brazil.svg": "341a0e26b715629a7e2c5da003387ad4",
"assets/packages/city_picker_from_map/assets/maps/bulgaria.svg": "ada542e8b8b3a7a947ea5fd32446b158",
"assets/packages/city_picker_from_map/assets/maps/cameroon.svg": "6a258bcaece369fb47c3858739fe431c",
"assets/packages/city_picker_from_map/assets/maps/canada.svg": "51979d90d6aa339fb3d52201b4cb6e98",
"assets/packages/city_picker_from_map/assets/maps/centralAfricanRepublic.svg": "0a30d08c86bdd9bf8d1b4b91276a6c9a",
"assets/packages/city_picker_from_map/assets/maps/chad.svg": "1383988d5a981496587e0e0d5df6380f",
"assets/packages/city_picker_from_map/assets/maps/chile.svg": "af0bf2d00983e2dba46a6eda509297ab",
"assets/packages/city_picker_from_map/assets/maps/china.svg": "917dccdfada08e3bd0640995e9957c93",
"assets/packages/city_picker_from_map/assets/maps/colombia.svg": "f036a7d7d6a9815abbe543b27fe3e920",
"assets/packages/city_picker_from_map/assets/maps/costaRica.svg": "21918ec1c6f4cfdd646c8dc816a6841b",
"assets/packages/city_picker_from_map/assets/maps/croatia.svg": "8cf557df017ded82cc548590b201af07",
"assets/packages/city_picker_from_map/assets/maps/cuba.svg": "cc265881435883a6de829f5b6b3a74c2",
"assets/packages/city_picker_from_map/assets/maps/cyprus.svg": "5529691124530962ad8ab623db15cf93",
"assets/packages/city_picker_from_map/assets/maps/cyprusNorthernCyprus.svg": "530c7ba6af09cab9751ebaeb4e91e13b",
"assets/packages/city_picker_from_map/assets/maps/denmark.svg": "6fd7d37535725f4583f36650f75ca92b",
"assets/packages/city_picker_from_map/assets/maps/djibouti.svg": "ed332a209d757e90d7952412f4cef380",
"assets/packages/city_picker_from_map/assets/maps/dominica.svg": "1b489ffcb03d2213099220ed2e6f38e4",
"assets/packages/city_picker_from_map/assets/maps/dominicanRepublic.svg": "1b93ed01aadf4a621179e1f5b64a3dff",
"assets/packages/city_picker_from_map/assets/maps/ecuador.svg": "9c043eaf5783ef36bbc108b9fc238e11",
"assets/packages/city_picker_from_map/assets/maps/egypt.svg": "224501ad9c8032223860c52834ac35f5",
"assets/packages/city_picker_from_map/assets/maps/elSalvador.svg": "44b90c468638b0566a6d5ca920a1a260",
"assets/packages/city_picker_from_map/assets/maps/equatorialGuinea.svg": "9503a3fba20f746f1e3df5d3563b38de",
"assets/packages/city_picker_from_map/assets/maps/estonia.svg": "5fb5823073d866dd1ff4721779f6e372",
"assets/packages/city_picker_from_map/assets/maps/ethiopia.svg": "3b093492661bd1213a73c2e7aafe36bf",
"assets/packages/city_picker_from_map/assets/maps/finland.svg": "b2aa8c150b38915f946e2cedfd5c1cac",
"assets/packages/city_picker_from_map/assets/maps/france.svg": "22fd2adb2f884f4508642dca8d963cc9",
"assets/packages/city_picker_from_map/assets/maps/gabon.svg": "29c163a21d81f29e7c2074e2a6ebc1c7",
"assets/packages/city_picker_from_map/assets/maps/georgia.svg": "475edf430b15f48ba76f9e5afe3ab963",
"assets/packages/city_picker_from_map/assets/maps/germany.svg": "81f9f1a039fa704d442a6fafb08a5ad9",
"assets/packages/city_picker_from_map/assets/maps/ghana.svg": "f57928085544455acea511ca7c5d8f71",
"assets/packages/city_picker_from_map/assets/maps/greece.svg": "9c6f28f726626af1d0f6733c35fae9ec",
"assets/packages/city_picker_from_map/assets/maps/greenland.svg": "d6579229a5e60bc22c9c5fda851505ec",
"assets/packages/city_picker_from_map/assets/maps/guinea.svg": "576ad99c3b0847944830a58ec983682e",
"assets/packages/city_picker_from_map/assets/maps/haiti.svg": "47cb5d9b18ca225f7e5db24dd0ad3fc8",
"assets/packages/city_picker_from_map/assets/maps/hongKong.svg": "c90c17c56db1e8f02210703e3a694333",
"assets/packages/city_picker_from_map/assets/maps/hungary.svg": "42c99b8ff27fc787e7b3c742e5f7da74",
"assets/packages/city_picker_from_map/assets/maps/iceland.svg": "33bad7eba42270f61aa89590657db6ec",
"assets/packages/city_picker_from_map/assets/maps/india.svg": "7d71900566ea68916b079b9268a22b5b",
"assets/packages/city_picker_from_map/assets/maps/indonesia.svg": "79da6e0163e07e6444fe8f38d6877f2a",
"assets/packages/city_picker_from_map/assets/maps/iran.svg": "9dbc86048f0921c3d5680d65364230d5",
"assets/packages/city_picker_from_map/assets/maps/iraq.svg": "1c907fdaaddb3df7de06f217c060d244",
"assets/packages/city_picker_from_map/assets/maps/ireland.svg": "9facbde4b7d47526fd79fd2268b2973a",
"assets/packages/city_picker_from_map/assets/maps/israel.svg": "e46ea3d9be1ac4a42bd07f50b08e84c1",
"assets/packages/city_picker_from_map/assets/maps/italy.svg": "da65aa9ee198cef15bdafc72c08ce2ff",
"assets/packages/city_picker_from_map/assets/maps/jamaica.svg": "309acb227df4d84eff8497932790576f",
"assets/packages/city_picker_from_map/assets/maps/japan.svg": "84b6d366ed7cb973da024072e8d87b85",
"assets/packages/city_picker_from_map/assets/maps/kazakhstan.svg": "c90a84a1cc07a06c37e44a634d1d99fa",
"assets/packages/city_picker_from_map/assets/maps/kenya.svg": "bafe867671d7adda43e10a3102914040",
"assets/packages/city_picker_from_map/assets/maps/kosovo.svg": "7b701029f9ee1b660eed852516fac117",
"assets/packages/city_picker_from_map/assets/maps/kuwait.svg": "4fe117192665307ea67cdef4b7203794",
"assets/packages/city_picker_from_map/assets/maps/kyrgyzstan.svg": "3bac953089fc6852e3fd5be7d5bef7ee",
"assets/packages/city_picker_from_map/assets/maps/laos.svg": "9e4775015e1e7c5c6109b0e87d9e1996",
"assets/packages/city_picker_from_map/assets/maps/latvia.svg": "979a13bb76c3e7d1490cf3f7db202568",
"assets/packages/city_picker_from_map/assets/maps/lebanon.svg": "d0d80c72c8126489ea9ab927ce032fec",
"assets/packages/city_picker_from_map/assets/maps/libya.svg": "d52b9cdf19c8d5fc376e9977bd645bf8",
"assets/packages/city_picker_from_map/assets/maps/liechtenstein.svg": "b6d8c00605830a99f5ca5142a94a8946",
"assets/packages/city_picker_from_map/assets/maps/lithuania.svg": "823cf25abb3493fdcc77864c827365cf",
"assets/packages/city_picker_from_map/assets/maps/luxembourg.svg": "9f35144ed76623e1d2453d010c57f626",
"assets/packages/city_picker_from_map/assets/maps/macao.svg": "8a7d2245d82f3a1abbf2825ecb3f7a4b",
"assets/packages/city_picker_from_map/assets/maps/macedonia.svg": "d32737d72e2e18736a8678793a3cdb97",
"assets/packages/city_picker_from_map/assets/maps/madagascar.svg": "756b7304cd18cb94b24f7f222ec0cca9",
"assets/packages/city_picker_from_map/assets/maps/malawi.svg": "28ecfdf83da5771c97b3c190b12a8639",
"assets/packages/city_picker_from_map/assets/maps/malaysia.svg": "9550aab82d22db58372c8edf074ab0a6",
"assets/packages/city_picker_from_map/assets/maps/maldives.svg": "8b0704619420a337925d408c2cacb1f7",
"assets/packages/city_picker_from_map/assets/maps/mali.svg": "8c4552f2849f7bdc781c635a5ac9189f",
"assets/packages/city_picker_from_map/assets/maps/malta.svg": "38081749539992f72cc18eaa3c7b5248",
"assets/packages/city_picker_from_map/assets/maps/mexico.svg": "7a6010c4daef4f36b54148632765c0ac",
"assets/packages/city_picker_from_map/assets/maps/moldova.svg": "179db81c4a3caea1a56fc742270e7aa8",
"assets/packages/city_picker_from_map/assets/maps/monaco.svg": "2dedf151e6e4d94cacdd233139ccc526",
"assets/packages/city_picker_from_map/assets/maps/mongolia.svg": "0775e211bfca38873e983ab6ceb084ff",
"assets/packages/city_picker_from_map/assets/maps/montenegro.svg": "6c9b301ddc9cc21b71604fea9ecdfe09",
"assets/packages/city_picker_from_map/assets/maps/montserrat.svg": "4bbad6eee6b71d897c6bee2962364460",
"assets/packages/city_picker_from_map/assets/maps/morocco.svg": "d239c74c7497f93cf9faec0b169a8e81",
"assets/packages/city_picker_from_map/assets/maps/mozambique.svg": "0e60a42ed9962802f24cf4401617b200",
"assets/packages/city_picker_from_map/assets/maps/myanmar.svg": "b738d276364fc091f94b81d5425c4ba1",
"assets/packages/city_picker_from_map/assets/maps/namibia.svg": "8de955967e04c240aef16cc24cae7fdd",
"assets/packages/city_picker_from_map/assets/maps/nepal.svg": "170f60c5233314826b803c764423ed09",
"assets/packages/city_picker_from_map/assets/maps/netherlands.svg": "b9a9bd930917a3023587ac11dd3e7fbd",
"assets/packages/city_picker_from_map/assets/maps/newCaledonia.svg": "3d692b6bad168b76b366e544f9b26ce4",
"assets/packages/city_picker_from_map/assets/maps/newZealand.svg": "44543c04393ef4907b332c03a022789c",
"assets/packages/city_picker_from_map/assets/maps/nicaragua.svg": "f3e1b1e636e4afdc9016180c5d0826a0",
"assets/packages/city_picker_from_map/assets/maps/niger.svg": "db9f6b3465f9a898f51416899c88c185",
"assets/packages/city_picker_from_map/assets/maps/nigeria.svg": "8b3a600db0a479bc16483fee8427ebb0",
"assets/packages/city_picker_from_map/assets/maps/northKorea.svg": "26ca646625f6944b485379ba6e37fbba",
"assets/packages/city_picker_from_map/assets/maps/norway.svg": "1d9dde570c73fc84003f68eb3f3ecbab",
"assets/packages/city_picker_from_map/assets/maps/oman.svg": "c1757f3079fcffd1c9fd7c768ac79c15",
"assets/packages/city_picker_from_map/assets/maps/pakistan.svg": "d2c6b143be842bde85b90dfdd61900eb",
"assets/packages/city_picker_from_map/assets/maps/palestine.svg": "67593e7a8600ae42b19e738ad3b3d463",
"assets/packages/city_picker_from_map/assets/maps/panama.svg": "ad75552dc60ee2a184dd6f77c22d5a6f",
"assets/packages/city_picker_from_map/assets/maps/paraguay.svg": "1aee88cb95f617026a32e84758c4640e",
"assets/packages/city_picker_from_map/assets/maps/peru.svg": "9ea05103742260ea92107e2720d3d0eb",
"assets/packages/city_picker_from_map/assets/maps/philippines.svg": "17925c2f30495e633d3e30b45287ec60",
"assets/packages/city_picker_from_map/assets/maps/poland.svg": "7cfabbb7646b3979fc1a795008a7108a",
"assets/packages/city_picker_from_map/assets/maps/portugal.svg": "6d3c70a1e286e3a3d83c482ac31e65ca",
"assets/packages/city_picker_from_map/assets/maps/qatar.svg": "a0828826899beacf868148124bf7b97a",
"assets/packages/city_picker_from_map/assets/maps/romania.svg": "bf8e965d7dfda7064e0d31e71761b9f8",
"assets/packages/city_picker_from_map/assets/maps/russia.svg": "d2d443345ad425017487488f3387f187",
"assets/packages/city_picker_from_map/assets/maps/rwanda.svg": "6afc40baf7850302cf1b385e3d27cda9",
"assets/packages/city_picker_from_map/assets/maps/saudiArabia.svg": "1e807196610b42374ed9cdc1b48c4005",
"assets/packages/city_picker_from_map/assets/maps/senegal.svg": "3ac22d698ed4492dfcb7ab36756c396b",
"assets/packages/city_picker_from_map/assets/maps/serbia.svg": "a4197620d768009494926472ed759505",
"assets/packages/city_picker_from_map/assets/maps/seychelles.svg": "3c972c1b23eb6918c4699625665c2d56",
"assets/packages/city_picker_from_map/assets/maps/sierraLeone.svg": "5bb4f82d29d5091bf537fbd1e427a8fa",
"assets/packages/city_picker_from_map/assets/maps/singapore.svg": "f46221f6496e8f075b8e6547944fc256",
"assets/packages/city_picker_from_map/assets/maps/slovakia.svg": "85d6ff6c71bbc32c0da632551234d837",
"assets/packages/city_picker_from_map/assets/maps/slovenia.svg": "0873df60ec865ff3763d6da29833efac",
"assets/packages/city_picker_from_map/assets/maps/somalia.svg": "d7bbbe204ca712cab0003eeedb56f805",
"assets/packages/city_picker_from_map/assets/maps/southAfrica.svg": "3e0d6875d46273e7f87c3feb0dc3a2ec",
"assets/packages/city_picker_from_map/assets/maps/southKorea.svg": "9c98575603d289ca12e86a0a9b8275e5",
"assets/packages/city_picker_from_map/assets/maps/southSudan.svg": "64ed535b139789b0c13ef2e4a2968441",
"assets/packages/city_picker_from_map/assets/maps/spain.svg": "3beeede5abdc0dcd92209b4010bf1f2a",
"assets/packages/city_picker_from_map/assets/maps/sriLanka.svg": "1bfed4962a1c0d34726b4c9626179c1d",
"assets/packages/city_picker_from_map/assets/maps/stHelena.svg": "b4016edbf49f7551d2af3196c0dbba75",
"assets/packages/city_picker_from_map/assets/maps/stKittsNevis.svg": "a3828edc5a75459f17475c55f77be966",
"assets/packages/city_picker_from_map/assets/maps/stLucia.svg": "ab961f7013450eda491d61a0a9c582e2",
"assets/packages/city_picker_from_map/assets/maps/stVincent.svg": "640cd516eabc9034c41f17801734733d",
"assets/packages/city_picker_from_map/assets/maps/sudan.svg": "fb6da87498755e701f35de21469e1ee9",
"assets/packages/city_picker_from_map/assets/maps/suriname.svg": "844c095c1bf6d2c76a64d6a8e6c7fceb",
"assets/packages/city_picker_from_map/assets/maps/sweden.svg": "496c53152f92a4ae78d9b4a7a4914da1",
"assets/packages/city_picker_from_map/assets/maps/switzerland.svg": "7352578d132303fd51460d567d416933",
"assets/packages/city_picker_from_map/assets/maps/syria.svg": "5ab89f6c17f6e835cbda4d3c69ae2797",
"assets/packages/city_picker_from_map/assets/maps/taiwan.svg": "5b4ec9e38642d860d0e85acba1725a1e",
"assets/packages/city_picker_from_map/assets/maps/tajikistan.svg": "f1c90a5fdfd49bae3d53dfa4b4c99690",
"assets/packages/city_picker_from_map/assets/maps/tanzania.svg": "f2dc871be79368c7dcf579e0ec7b4e89",
"assets/packages/city_picker_from_map/assets/maps/thailand.svg": "507f0949c1684c5fdb73195acd6b39b2",
"assets/packages/city_picker_from_map/assets/maps/tibet.svg": "eb8f9cc0b0d7088dc2ab51b1de135f19",
"assets/packages/city_picker_from_map/assets/maps/trinidadAndTobago.svg": "b9f1b23f233ea9151f66d4d6f942a716",
"assets/packages/city_picker_from_map/assets/maps/tunisia.svg": "85bd2572b59df52de0638758437236c2",
"assets/packages/city_picker_from_map/assets/maps/turkey.svg": "bbead46631bdf659a9596576a57b4479",
"assets/packages/city_picker_from_map/assets/maps/turkmenistan.svg": "d864ac8b9e0f2fdfe8db4426dcb8cddb",
"assets/packages/city_picker_from_map/assets/maps/uganda.svg": "169463b70e661d90ae063b75b9bec198",
"assets/packages/city_picker_from_map/assets/maps/ukraine.svg": "8c25df7b7fed944b94311757baa8d603",
"assets/packages/city_picker_from_map/assets/maps/unitedArabEmirates.svg": "174569972ecacd251298c9cd85d51fa8",
"assets/packages/city_picker_from_map/assets/maps/unitedKingdom.svg": "bd56a0904e8b59d81609e4433add7c63",
"assets/packages/city_picker_from_map/assets/maps/uruguay.svg": "7991dd1b4e09979ba23a518fc3199fac",
"assets/packages/city_picker_from_map/assets/maps/usa.svg": "fa3ba607a00d0de5c2aa60b65f52a48b",
"assets/packages/city_picker_from_map/assets/maps/uzbekistan.svg": "d425cba6040b7a3abe755dde1d1c3be0",
"assets/packages/city_picker_from_map/assets/maps/venezuela.svg": "8d83ad24b9dc8cfe41d6e33f9dabbe30",
"assets/packages/city_picker_from_map/assets/maps/vietnam.svg": "e23d28f1b3ed6dac9fe823a4d951e2ff",
"assets/packages/city_picker_from_map/assets/maps/yemen.svg": "1292f85ed951dabf206bebe9e41f42da",
"assets/packages/city_picker_from_map/assets/maps/zambia.svg": "465a65478df9754521f15fa6cfb914d8",
"assets/packages/city_picker_from_map/assets/maps/zimbabwe.svg": "e585883ce5d93765e7b1eeba6b69df76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "804e9588b0d5ff957f4ebbc80452729c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d7d532f814808c98c5c9912727d85e3",
"/": "7d7d532f814808c98c5c9912727d85e3",
"load_maps.js": "66e8d654c26f66823a33a51e2ad8cb91",
"main.dart.js": "869b9bdf3793403b33cf7f7272fb962f",
"manifest.json": "f316e25f49e85c9cbb5e7ca5b3630baf",
"version.json": "59cc4922b19f5751d966631db28a308a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
